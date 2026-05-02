import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Passport Photo Size Guide: mm, inches, pixels for Every Country',
  description: 'Complete passport photo size guide. US: 2x2 inch (51x51mm), UK: 35x45mm, Canada: 50x70mm, Schengen: 35x45mm. Pixel dimensions at 300dpi for printing.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        Passport Photo Size Guide: mm, Inches &amp; Pixels for Every Country
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 4 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          Passport photo size requirements vary significantly by country - and submitting the wrong size
          is one of the most common reasons applications get rejected. This guide covers exact dimensions
          for every major country in mm, inches, and pixels.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Size Requirements by Country</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Country</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Size (mm)</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Size (inches)</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Pixels (300dpi)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: '🇺🇸 United States', mm: '51×51', inches: '2×2', px: '600×600' },
                  { country: '🇬🇧 United Kingdom', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇨🇦 Canada', mm: '50×70', inches: '1.97×2.76', px: '591×827' },
                  { country: '🇦🇺 Australia', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇮🇳 India', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇪🇺 Schengen Visa', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇦🇪 UAE', mm: '40×60', inches: '1.57×2.36', px: '472×709' },
                  { country: '🇩🇪 Germany', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇯🇵 Japan', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇧🇷 Brazil', mm: '50×70', inches: '1.97×2.76', px: '591×827' },
                  { country: '🇲🇽 Mexico', mm: '35×45', inches: '1.38×1.77', px: '413×531' },
                  { country: '🇨🇳 China', mm: '33×48', inches: '1.30×1.89', px: '390×567' },
                  { country: '🇮🇩 Indonesia', mm: '51×51', inches: '2×2', px: '600×600' },
                  { country: '🇫🇮 Finland', mm: '36×47', inches: '1.42×1.85', px: '425×555' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-3 border border-gray-200">{row.country}</td>
                    <td className="py-3 px-3 border border-gray-200 font-mono text-sm">{row.mm}</td>
                    <td className="py-3 px-3 border border-gray-200 font-mono text-sm">{row.inches}</td>
                    <td className="py-3 px-3 border border-gray-200 font-mono text-sm">{row.px}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Do Sizes Differ?</h2>
          <p>
            Each country sets its own standards. The US uses the imperial system (2×2 inches), while
            most other countries follow metric dimensions. The ICAO standard recommends 35×45mm, which
            is why many countries share that size - but there is no single universal requirement.
          </p>
          <p className="mt-3">
            China is a notable exception at 33×48mm - a unique size that will not fit standard
            passport photo frames sold elsewhere.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Are DPI and Pixels?</h2>
          <p>
            When you print a passport photo, the lab needs a file with enough resolution. At 300 DPI
            (dots per inch), a 2×2 inch US photo needs to be 600×600 pixels. A 35×45mm UK photo at
            300 DPI needs 413×531 pixels.
          </p>
          <p className="mt-3">
            Online services and our tool automatically output the correct pixel dimensions - you just
            need to select your country.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Head Size Requirements</h2>
          <p>
            Size alone is not enough - most countries also specify how large your head should appear
            in the photo:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>US:</strong> Head height 1 to 1 3/8 inches (25 - 35mm) from chin to top of head</li>
            <li><strong>UK:</strong> Face should be 29 - 34mm from chin to crown</li>
            <li><strong>Canada:</strong> Face 31 - 36mm from chin to crown</li>
            <li><strong>Schengen:</strong> Head 32 - 36mm, face 70 - 80% of frame height</li>
          </ul>
          <p className="mt-3">
            Use the crop tool to position your head correctly - it locks the aspect ratio but you control
            how much of the frame your face fills.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-2">Get the Right Size Automatically</p>
          <p className="text-sm text-blue-800 mb-4">
            Select your country and our tool outputs the exact pixel dimensions required. No guessing.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Make Passport Photo →
          </Link>
        </div>

      </div>
    </div>
  )
}
