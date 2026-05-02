'use client'

import { useState, useRef, useCallback } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop, type PixelCrop, type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import type { DocumentSpec } from '@/lib/countries'
import { cropAndResize, downloadBlob, generatePDF, fillBackground } from '@/lib/imageProcessing'
import DocumentSelector from './DocumentSelector'
import { allDocuments, allCountries } from '@/lib/countries'

interface Props {
  initialDocumentId?: string
}

export default function PhotoTool({ initialDocumentId = 'us-passport' }: Props) {
  const [doc, setDoc] = useState<DocumentSpec>(
    allDocuments.find((d) => d.id === initialDocumentId) ?? allDocuments[0]
  )
  const [imgSrc, setImgSrc] = useState<string>('')
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [processing, setProcessing] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [bgRemoving, setBgRemoving] = useState(false)
  const [bgDone, setBgDone] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const country = allCountries.find((c) => c.id === doc.countryId)!
  const aspect = doc.widthPx / doc.heightPx

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setPreviewUrl('')
      setCrop(undefined)
      setCompletedCrop(undefined)
      setBgDone(false)
    }
    reader.readAsDataURL(file)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setPreviewUrl('')
      setCrop(undefined)
      setBgDone(false)
    }
    reader.readAsDataURL(file)
  }

  const handleFillBackground = async () => {
    if (!imgSrc || bgRemoving) return
    setBgRemoving(true)
    try {
      const result = await fillBackground(imgSrc, doc.bgColor)
      setImgSrc(result)
      setCrop(undefined)
      setCompletedCrop(undefined)
      setBgDone(true)
    } catch (err) {
      console.error('Background fill failed:', err)
    } finally {
      setBgRemoving(false)
    }
  }

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget
      const initialCrop = centerCrop(
        makeAspectCrop({ unit: '%', width: 80 }, aspect, width, height),
        width,
        height
      )
      setCrop(initialCrop)
    },
    [aspect]
  )

  const handleDocumentChange = (d: DocumentSpec) => {
    setDoc(d)
    setPreviewUrl('')
    setCrop(undefined)
    setCompletedCrop(undefined)
  }

  const processImage = async (): Promise<Blob | null> => {
    if (!imgRef.current || !completedCrop) return null
    return await cropAndResize(imgRef.current, completedCrop, doc)
  }

  const handleDownloadJpg = async () => {
    setProcessing(true)
    try {
      const blob = await processImage()
      if (!blob) return
      const url = URL.createObjectURL(blob)
      setPreviewUrl(url)
      downloadBlob(blob, `${doc.countryId}-${doc.name.toLowerCase().replace(/\s+/g, '-')}-photo.jpg`)
    } finally {
      setProcessing(false)
    }
  }

  const handleDownloadPdf = async () => {
    setProcessing(true)
    try {
      const blob = await processImage()
      if (!blob) return
      const url = URL.createObjectURL(blob)
      setPreviewUrl(url)
      await generatePDF(blob, doc)
    } finally {
      setProcessing(false)
    }
  }

  const hasImage = !!imgSrc
  const canDownload = hasImage && !!completedCrop

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Document selector */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 text-center mb-3">Select your country and document type:</p>
        <DocumentSelector selectedDocument={doc} onChange={handleDocumentChange} />
      </div>

      {/* Specs badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm px-4 py-1.5 rounded-full border border-blue-200">
          {country.flag} {country.name} - {doc.name} - {doc.widthMm}×{doc.heightMm}mm ({doc.widthPx}×{doc.heightPx}px)
        </span>
      </div>

      {/* Upload zone */}
      {!hasImage && (
        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50"
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <div className="text-5xl mb-4">📷</div>
          <p className="text-lg font-medium text-gray-700 mb-1">Drop your photo here</p>
          <p className="text-sm text-gray-500 mb-4">or click to browse - JPG, PNG, WEBP accepted</p>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Choose Photo
          </button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
        </div>
      )}

      {/* Crop area */}
      {hasImage && (
        <div className="space-y-4">

          {/* Fill Background button */}
          <div className="flex justify-center">
            {bgDone ? (
              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 px-5 py-2 rounded-full">
                <span>✓</span>
                <span>{doc.bgColorLabel} background applied - now crop your photo</span>
                <button
                  onClick={() => setBgDone(false)}
                  className="text-xs text-gray-400 hover:text-gray-600 ml-1"
                >redo</button>
              </div>
            ) : (
              <button
                onClick={handleFillBackground}
                disabled={bgRemoving}
                className="flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-sm"
                style={{ backgroundColor: doc.bgColor === '#ffffff' ? '#6366f1' : doc.bgColor }}
              >
                {bgRemoving ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>🎨</span>
                    <span>Fill {doc.bgColorLabel} Background</span>
                    <span
                      className="inline-block w-4 h-4 rounded-full border border-white/40"
                      style={{ backgroundColor: doc.bgColor }}
                    />
                  </>
                )}
              </button>
            )}
          </div>

          <div className="bg-gray-900 rounded-xl p-4 flex justify-center">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              minWidth={50}
              ruleOfThirds
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={imgSrc}
                alt="Your photo"
                onLoad={onImageLoad}
                className="max-h-[480px] max-w-full object-contain"
              />
            </ReactCrop>
          </div>

          <p className="text-center text-sm text-gray-500">
            Drag the handles to adjust the crop area. The aspect ratio is locked to {doc.widthMm}×{doc.heightMm}mm.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleDownloadJpg}
              disabled={!canDownload || processing}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {processing ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <span>⬇️</span>
              )}
              Download Free JPG
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={!canDownload || processing}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {processing ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <span>🖨️</span>
              )}
              Download Free PDF
            </button>
            <button
              onClick={() => { setImgSrc(''); setPreviewUrl('') }}
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              ✕ New Photo
            </button>
          </div>

          {/* Preview */}
          {previewUrl && (
            <div className="flex justify-center mt-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Preview</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ width: doc.widthMm * 2, height: doc.heightMm * 2 }}
                  className="border border-gray-200 rounded shadow"
                />
                <p className="text-xs text-gray-400 mt-1">{doc.widthMm}×{doc.heightMm}mm</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Privacy badge */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
          <span>🔒</span>
          <span>Your photo is processed entirely in your browser - never uploaded to any server</span>
        </div>
      </div>
    </div>
  )
}
