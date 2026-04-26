import type { Metadata } from 'next'
import Link from 'next/link'
import { allCountries } from '@/lib/countries'

export const metadata: Metadata = {
  title: 'Passport Photo Requirements by Country: Complete Guide 2026',
  description: 'Passport photo size, background, and biometric requirements for the US, UK, Canada, Australia, India, EU, UAE, Germany, Japan, Brazil, Mexico, China — all in one place.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        Passport Photo Requirements by Country: Complete Guide 2026
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 8 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          Passport photo requirements vary by country. The size, background color, and biometric rules
          are different for the US, UK, Canada, EU, and others. This guide covers all the key requirements
          in one place.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Country</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Size (mm)</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Background</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Tool</th>
                </tr>
              </thead>
              <tbody>
                {allCountries.map((c, i) => {
                  const d = c.documents[0]
                  return (
                    <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-3 border border-gray-200">{c.flag} {c.name}</td>
                      <td className="py-3 px-3 border border-gray-200">{d.widthMm}×{d.heightMm}</td>
                      <td className="py-3 px-3 border border-gray-200">{d.background}</td>
                      <td className="py-3 px-3 border border-gray-200">
                        <Link href={`/${d.slug}`} className="text-blue-600 hover:underline text-xs">
                          Make photo →
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Country-by-Country Details</h2>
          <div className="space-y-6">
            {allCountries.map((c) => {
              const d = c.documents[0]
              return (
                <div key={c.id} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {c.flag} {c.name} — {d.widthMm}×{d.heightMm}mm
                  </h3>
                  <ul className="space-y-1">
                    {d.requirements.slice(0, 5).map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <Link href={`/${d.slug}`} className="text-sm text-blue-600 hover:underline">
                      Create {c.name} passport photo →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Universal Rules (All Countries)</h2>
          <p>Despite the differences in size and background, these rules apply everywhere:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Both eyes must be open and clearly visible</li>
            <li>No glasses (required by most countries since 2016–2018)</li>
            <li>Neutral expression, mouth closed</li>
            <li>No shadows on the face or background</li>
            <li>Photo taken within the last 6 months</li>
            <li>Head centered and facing directly at the camera</li>
          </ul>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-2">Make Your Passport Photo for Free</p>
          <p className="text-sm text-blue-800 mb-4">
            Select your country, upload your photo, crop, and download. No registration, no watermark.
            All processing happens in your browser.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Open Passport Photo Tool →
          </Link>
        </div>

      </div>
    </div>
  )
}
