import type { PixelCrop } from 'react-image-crop'
import type { CountrySpec } from './countries'

export async function cropAndResize(
  image: HTMLImageElement,
  crop: PixelCrop,
  country: CountrySpec
): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = country.widthPx
  canvas.height = country.heightPx

  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    canvas.width,
    canvas.height
  )

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob)
        else reject(new Error('Canvas toBlob failed'))
      },
      'image/jpeg',
      0.95
    )
  })
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export async function generatePDF(blob: Blob, country: CountrySpec): Promise<void> {
  const { jsPDF } = await import('jspdf')

  // A4 in mm: 210 x 297
  const pageW = 210
  const pageH = 297
  const margin = 10
  const gap = 5

  const photoW = country.widthMm
  const photoH = country.heightMm

  const cols = Math.floor((pageW - 2 * margin + gap) / (photoW + gap))
  const rows = Math.floor((pageH - 2 * margin + gap) / (photoH + gap))
  const total = cols * rows

  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })

  const dataUrl = await blobToDataURL(blob)

  for (let i = 0; i < total; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = margin + col * (photoW + gap)
    const y = margin + row * (photoH + gap)
    pdf.addImage(dataUrl, 'JPEG', x, y, photoW, photoH)
  }

  pdf.save(`${country.id}-passport-photo-print.pdf`)
}

function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.readAsDataURL(blob)
  })
}

// Fills background using MediaPipe Selfie Segmentation ML model.
// Much better quality than flood-fill, especially on hair and complex edges.
export async function fillBackground(imageUrl: string, targetHex: string): Promise<string> {
  try {
    return await fillBackgroundMediaPipe(imageUrl, targetHex)
  } catch {
    return fillBackgroundFloodFill(imageUrl, targetHex)
  }
}

async function fillBackgroundMediaPipe(imageUrl: string, targetHex: string): Promise<string> {
  const { SelfieSegmentation } = await import('@mediapipe/selfie_segmentation')

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight

      const seg = new SelfieSegmentation({
        locateFile: (file: string) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation@0.1.1675465747/${file}`,
      })
      seg.setOptions({ modelSelection: 1 })

      seg.onResults((results: { segmentationMask: CanvasImageSource }) => {
        // Step 1: get raw mask pixel data
        const maskCanvas = document.createElement('canvas')
        maskCanvas.width = w
        maskCanvas.height = h
        const maskCtx = maskCanvas.getContext('2d')!
        maskCtx.drawImage(results.segmentationMask, 0, 0, w, h)
        const maskImageData = maskCtx.getImageData(0, 0, w, h)
        const md = maskImageData.data

        // Step 2: erode mask by 2px (2 passes of 4-neighbor erosion)
        // removes fringe pixels at person/background boundary
        const orig = new Uint8Array(w * h)
        for (let i = 0; i < w * h; i++) orig[i] = md[i * 4]

        for (let pass = 0; pass < 2; pass++) {
          const prev = orig.slice()
          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              const i = y * w + x
              if (prev[i] < 128) continue
              const edge =
                (x > 0     && prev[i - 1] < 128) ||
                (x < w - 1 && prev[i + 1] < 128) ||
                (y > 0     && prev[i - w] < 128) ||
                (y < h - 1 && prev[i + w] < 128)
              if (edge) orig[i] = 0
            }
          }
        }

        // Write eroded values back to all channels
        for (let i = 0; i < w * h; i++) {
          const v = orig[i] >= 128 ? 255 : 0
          md[i * 4] = md[i * 4 + 1] = md[i * 4 + 2] = md[i * 4 + 3] = v
        }
        maskCtx.putImageData(maskImageData, 0, 0)

        // Step 3: soft blur on mask edge (0.5px) to avoid hard pixel staircase
        const softCanvas = document.createElement('canvas')
        softCanvas.width = w
        softCanvas.height = h
        const softCtx = softCanvas.getContext('2d')!
        softCtx.filter = 'blur(0.5px)'
        softCtx.drawImage(maskCanvas, 0, 0)

        // Step 4: cut out person using blurred eroded mask
        const personCanvas = document.createElement('canvas')
        personCanvas.width = w
        personCanvas.height = h
        const personCtx = personCanvas.getContext('2d')!
        personCtx.drawImage(img, 0, 0)
        personCtx.globalCompositeOperation = 'destination-in'
        personCtx.drawImage(softCanvas, 0, 0)

        // Step 5: fill background color, draw person on top
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')!
        ctx.fillStyle = targetHex
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(personCanvas, 0, 0)

        seg.close()
        resolve(canvas.toDataURL('image/jpeg', 0.95))
      })

      seg.send({ image: img }).catch(reject)
    }
    img.onerror = reject
    img.src = imageUrl
  })
}

// Fallback: flood-fill from corners (works for uniform backgrounds only).
function fillBackgroundFloodFill(imageUrl: string, targetHex: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      const w = canvas.width
      const h = canvas.height

      // Parse target color
      const tr = parseInt(targetHex.slice(1, 3), 16)
      const tg = parseInt(targetHex.slice(3, 5), 16)
      const tb = parseInt(targetHex.slice(5, 7), 16)

      // Sample background color from the 4 corners (average)
      const samplePixel = (x: number, y: number) => {
        const i = (y * w + x) * 4
        return [data[i], data[i + 1], data[i + 2]]
      }
      const corners = [
        samplePixel(0, 0),
        samplePixel(w - 1, 0),
        samplePixel(0, h - 1),
        samplePixel(w - 1, h - 1),
        samplePixel(Math.floor(w / 2), 0),       // top center
        samplePixel(0, Math.floor(h / 2)),        // left center
        samplePixel(w - 1, Math.floor(h / 2)),    // right center
      ]
      const bgR = Math.round(corners.reduce((s, c) => s + c[0], 0) / corners.length)
      const bgG = Math.round(corners.reduce((s, c) => s + c[1], 0) / corners.length)
      const bgB = Math.round(corners.reduce((s, c) => s + c[2], 0) / corners.length)

      // Tolerance: how similar a pixel must be to background to be replaced
      const TOLERANCE = 55

      const colorDist = (r: number, g: number, b: number) =>
        Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2)

      // BFS flood-fill from all 4 corners
      const visited = new Uint8Array(w * h)
      const queue: number[] = []

      const enqueue = (x: number, y: number) => {
        if (x < 0 || x >= w || y < 0 || y >= h) return
        const idx = y * w + x
        if (visited[idx]) return
        const pi = idx * 4
        if (colorDist(data[pi], data[pi + 1], data[pi + 2]) <= TOLERANCE) {
          visited[idx] = 1
          queue.push(x, y)
        }
      }

      enqueue(0, 0)
      enqueue(w - 1, 0)
      enqueue(0, h - 1)
      enqueue(w - 1, h - 1)

      let qi = 0
      while (qi < queue.length) {
        const x = queue[qi++]
        const y = queue[qi++]
        const pi = (y * w + x) * 4
        data[pi] = tr
        data[pi + 1] = tg
        data[pi + 2] = tb
        enqueue(x + 1, y)
        enqueue(x - 1, y)
        enqueue(x, y + 1)
        enqueue(x, y - 1)
      }

      ctx.putImageData(imageData, 0, 0)
      resolve(canvas.toDataURL('image/jpeg', 0.95))
    }
    img.onerror = reject
    img.src = imageUrl
  })
}
