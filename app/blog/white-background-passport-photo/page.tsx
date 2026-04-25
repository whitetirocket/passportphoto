import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why Passport Photos Need a White Background — Rules Explained',
  description: 'Why do passport photos require a white or off-white background? Official rules, exceptions by country (Finland grey, Indonesia red), and how to fix your background for free.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        Why Passport Photos Need a White Background
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 4 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          Most countries require a plain white or off-white background for passport photos —
          but not all. Here is why the rule exists, which countries are exceptions, and how
          to fix a photo that has the wrong background.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why White?</h2>
          <p>
            The white background requirement comes from biometric facial recognition systems used
            at border control. Automated systems compare your face against your passport photo.
            A plain, high-contrast background makes it easier for both humans and algorithms to
            isolate and analyze your facial features.
          </p>
          <p className="mt-3">
            A patterned, colored, or shadowed background can interfere with face detection,
            create false matches, or simply cause your application to be rejected at the
            initial review stage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Background Requirements by Country</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Country</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 border border-gray-200">Required Background</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: '🇺🇸 United States', bg: 'White or off-white' },
                  { country: '🇬🇧 United Kingdom', bg: 'Cream or light grey' },
                  { country: '🇨🇦 Canada', bg: 'White' },
                  { country: '🇦🇺 Australia', bg: 'White or light grey' },
                  { country: '🇮🇳 India', bg: 'White' },
                  { country: '🇪🇺 Schengen Visa', bg: 'White or off-white' },
                  { country: '🇦🇪 UAE', bg: 'White' },
                  { country: '🇩🇪 Germany', bg: 'Light grey or white' },
                  { country: '🇯🇵 Japan', bg: 'White or light grey' },
                  { country: '🇨🇳 China', bg: 'White' },
                  { country: '🇮🇩 Indonesia', bg: 'Red (yes, red — required)' },
                  { country: '🇫🇮 Finland', bg: 'Light grey' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-3 border border-gray-200">{row.country}</td>
                    <td className="py-3 px-3 border border-gray-200">{row.bg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Red Background Exception: Indonesia</h2>
          <p>
            Indonesia is a well-known exception — passport and ID photos officially require a
            <strong> red background</strong>. This is a deliberate national standard, not a mistake.
            If you submit a white-background photo for an Indonesian passport or KTP (national ID),
            it will be rejected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Counts as &quot;White Enough&quot;?</h2>
          <p>
            Pure white (#ffffff) is always safe. Off-white and very light grey are generally acceptable
            for most countries. Avoid:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Any shadows on the background</li>
            <li>Patterns, textures, or gradients</li>
            <li>Backgrounds that match your clothing or skin tone</li>
            <li>Any color other than white/light grey (except Indonesia)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Fix a Wrong Background</h2>
          <p>
            If your photo has a colored or cluttered background, you have a few options:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Retake the photo</strong> — stand in front of a plain white wall in good natural light</li>
            <li><strong>Use our background tool</strong> — upload your photo, click &quot;Fill Background&quot; and our AI
            will replace the background with the correct color for your country automatically</li>
          </ul>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-2">Fix Your Background for Free</p>
          <p className="text-sm text-blue-800 mb-4">
            Select your country — the tool automatically knows the correct background color and applies it.
            Works for white, grey (Finland), and red (Indonesia).
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Open Passport Photo Tool →
          </Link>
        </div>

      </div>
    </div>
  )
}
