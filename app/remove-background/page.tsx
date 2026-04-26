import type { Metadata } from 'next'
import PhotoTool from '@/components/PhotoTool'

export const metadata: Metadata = {
  title: 'Remove Passport Photo Background Free — Change to White, Grey or Red',
  description: 'Free AI tool to remove and replace passport photo background. Change to white (US/UK/EU), grey (Finland), or red (Indonesia) instantly. No registration, no watermark.',
  keywords: 'remove passport photo background free, change passport photo background white, passport photo background remover, replace background passport photo',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free Passport Photo Background Remover',
  url: 'https://idphotosnap.com/remove-background',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'AI-powered passport photo background remover. Replace background with white, grey, or red — free, no registration.',
}

export default function RemoveBackgroundPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">✓ 100% Free</span>
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">✓ AI-Powered</span>
          <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">✓ No Registration</span>
          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">✓ Processed in Browser</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Remove Passport Photo Background — Free
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          AI automatically detects your face and replaces the background with the correct color
          for your country — white, light grey, or red. No registration, no watermark.
        </p>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { step: '1', title: 'Upload your photo', desc: 'Any background — indoor, outdoor, colorful wall' },
          { step: '2', title: 'Select country & click Fill Background', desc: 'AI removes old background, fills with correct color' },
          { step: '3', title: 'Crop & download free', desc: 'JPG or print-ready PDF — no watermark' },
        ].map((s) => (
          <div key={s.step} className="flex gap-3 bg-gray-50 rounded-xl p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{s.step}</span>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tool */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 mb-12">
        <PhotoTool initialDocumentId="us-passport" />
      </div>

      {/* Background colors by country */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Correct Background Color by Country</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { color: '#ffffff', label: 'White', countries: 'US, UK, Canada, Australia, India, Schengen, UAE, Germany, Japan, Brazil, Mexico, China' },
            { color: '#d0d0d0', label: 'Light Grey', countries: 'Finland' },
            { color: '#cc0000', label: 'Red', countries: 'Indonesia' },
          ].map((bg) => (
            <div key={bg.color} className="border border-gray-200 rounded-xl p-4 flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 border border-gray-200"
                style={{ backgroundColor: bg.color }}
              />
              <div>
                <p className="font-semibold text-gray-900">{bg.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{bg.countries}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Select your country in the tool above — the correct background color is applied automatically.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the background removal work?',
              a: 'We use a MediaPipe AI model that runs entirely in your browser. It detects the person in the photo and replaces everything else with the required background color. No photo is ever uploaded to a server.',
            },
            {
              q: 'Is it really free? No watermark?',
              a: 'Yes, completely free. No watermark, no registration, no credit card. The downloaded file is a clean JPG at the correct passport photo dimensions.',
            },
            {
              q: 'What background color do I need?',
              a: 'Most countries require white or off-white. Finland requires light grey. Indonesia requires red. Select your country and the tool applies the right color automatically.',
            },
            {
              q: 'Will the photo be accepted by the government?',
              a: 'The tool produces technically correct photos (right size, right background). Acceptance depends on photo quality — good lighting, neutral expression, eyes open. The AI background replacement works best on photos taken with decent lighting.',
            },
            {
              q: 'What if my photo has a complex background?',
              a: 'The AI handles most common backgrounds well — plain walls, indoor lighting, simple outdoor shots. For very complex backgrounds (crowds, dense patterns), results may vary. In that case, retaking the photo in front of a plain wall gives the best result.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
              <p className="text-gray-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
