import PhotoTool from '@/components/PhotoTool'
import AdUnit from '@/components/AdUnit'
import Link from 'next/link'
import { allCountries as countries } from '@/lib/countries'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">✓ 100% Free</span>
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">✓ No Registration</span>
          <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">✓ No Watermark</span>
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">✓ Instant Download</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Free Passport Photo Maker
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create passport and visa photos online in seconds — completely free.
          No registration, no watermark, no upload to any server.
        </p>
      </div>

      {/* Ad — leaderboard */}
      <div className="flex justify-center mb-8">
        <AdUnit format="leaderboard" />
      </div>

      {/* Main tool */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 mb-12">
        <PhotoTool initialCountryId="us" />
      </div>

      {/* Ad — responsive */}
      <div className="mb-12">
        <AdUnit format="responsive" />
      </div>

      {/* Country cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Supported Countries &amp; Documents
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {countries.map((c) => (
            <Link
              key={c.id}
              href={`/${c.slug}`}
              className="flex flex-col items-center gap-1 p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all text-center group"
            >
              <span className="text-3xl">{c.flag}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">{c.name}</span>
              <span className="text-xs text-gray-400">{c.widthMm}×{c.heightMm}mm</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', icon: '🌍', title: 'Select country', desc: 'Choose your country to get the correct photo dimensions.' },
            { step: '2', icon: '📤', title: 'Upload photo', desc: 'Drag & drop or click to upload. JPG, PNG, WEBP accepted.' },
            { step: '3', icon: '✂️', title: 'Crop & adjust', desc: 'Drag the crop handles. The aspect ratio is locked automatically.' },
            { step: '4', icon: '⬇️', title: 'Download', desc: 'Get a JPG file or a print-ready PDF with multiple photos on A4.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy callout */}
      <section className="mb-12 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">🔒</div>
        <h2 className="text-xl font-bold text-green-900 mb-2">100% Private — Processed in Your Browser</h2>
        <p className="text-green-800 max-w-xl mx-auto">
          Your photo is never uploaded to our servers. All cropping, resizing, and PDF generation happens
          locally using JavaScript Canvas API. We literally cannot see your photos.
        </p>
      </section>

      {/* Ad — rectangle */}
      <div className="flex justify-center">
        <AdUnit format="rectangle" />
      </div>
    </div>
  )
}
