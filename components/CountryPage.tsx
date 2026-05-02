import PhotoTool from '@/components/PhotoTool'
import AdUnit from '@/components/AdUnit'
import Link from 'next/link'
import type { DocumentSpec, CountrySpec } from '@/lib/countries'
import { allCountries } from '@/lib/countries'

const BASE_URL = 'https://idphotosnap.com'

interface Props {
  document: DocumentSpec
  country: CountrySpec
}

export default function CountryPage({ document: doc, country }: Props) {
  const otherCountries = allCountries.filter((c) => c.id !== country.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: doc.h1,
    url: `${BASE_URL}/${doc.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: doc.seoDescription,
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">{country.flag}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{doc.h1}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Free online tool - correct {doc.widthMm}×{doc.heightMm}mm size, {doc.bgColorLabel.toLowerCase()} background.
          No registration, no watermark. Download JPG or print-ready PDF instantly.
        </p>
      </div>

      {/* Other document types for this country */}
      {country.documents.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {country.documents.map((d) => (
            <Link
              key={d.id}
              href={`/${d.slug}`}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors ${
                d.id === doc.id
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500 hover:text-gray-800'
              }`}
            >
              {d.name}
            </Link>
          ))}
        </div>
      )}

      {/* Ad leaderboard */}
      <div className="flex justify-center mb-8">
        <AdUnit format="leaderboard" />
      </div>

      {/* Tool */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 mb-10">
        <PhotoTool initialDocumentId={doc.id} />
      </div>

      {/* Requirements + Ad sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {country.name} {doc.name} Photo Requirements
          </h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-200">
                <tr><td className="py-2 text-gray-500 w-1/3">Size</td><td className="py-2 font-medium">{doc.widthMm}×{doc.heightMm} mm</td></tr>
                <tr><td className="py-2 text-gray-500">Pixels (300 DPI)</td><td className="py-2 font-medium">{doc.widthPx}×{doc.heightPx} px</td></tr>
                <tr><td className="py-2 text-gray-500">Background</td><td className="py-2 font-medium">{doc.background}</td></tr>
                <tr><td className="py-2 text-gray-500">Glasses</td><td className="py-2 font-medium">Not allowed</td></tr>
                <tr><td className="py-2 text-gray-500">Expression</td><td className="py-2 font-medium">Neutral, mouth closed</td></tr>
                <tr><td className="py-2 text-gray-500">Eyes</td><td className="py-2 font-medium">Open and clearly visible</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-semibold text-gray-800 mb-3">Full Requirements Checklist</h3>
          <ul className="space-y-2">
            {doc.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <AdUnit format="rectangle" />
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-sm">
            <div className="text-2xl mb-2">🔒</div>
            <p className="font-semibold text-green-900 mb-1">100% Private</p>
            <p className="text-green-800">Your photo never leaves your device. All processing happens in your browser.</p>
          </div>
        </div>
      </div>

      {/* Ad responsive */}
      <div className="mb-10">
        <AdUnit format="responsive" />
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {doc.faq.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-5 py-4">
                <p className="font-semibold text-gray-900">{item.q}</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other countries */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Other Countries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {otherCountries.map((c) => (
            <Link
              key={c.id}
              href={`/${c.documents[0].slug}`}
              className="flex flex-col items-center gap-1 p-3 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all text-center group"
            >
              <span className="text-2xl">{c.flag}</span>
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
