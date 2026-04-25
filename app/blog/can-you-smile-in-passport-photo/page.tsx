import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Can You Smile in a Passport Photo? — Rules by Country 2026',
  description: 'Can you smile in a passport photo? It depends on the country. Full breakdown: US, UK, Canada, Australia, India, EU, UAE — what expression is required.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        Can You Smile in a Passport Photo?
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 3 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          The short answer: most countries require a neutral expression with your mouth closed.
          A light, natural smile may be acceptable in a few places — but a wide or toothy smile
          will get your photo rejected almost everywhere.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Expression Rules by Country</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Country</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Expression Rule</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { country: '🇺🇸 United States', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇬🇧 United Kingdom', rule: 'Neutral expression, mouth closed. A slight natural smile may be acceptable.' },
                  { country: '🇨🇦 Canada', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇦🇺 Australia', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇮🇳 India', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇪🇺 EU / Schengen', rule: 'Neutral expression, mouth closed. No smile. ICAO standard.' },
                  { country: '🇦🇪 UAE', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇩🇪 Germany', rule: 'Neutral expression, mouth closed. No smile.' },
                  { country: '🇯🇵 Japan', rule: 'Neutral expression, mouth closed. No smile.' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border border-gray-200">{row.country}</td>
                    <td className="py-3 px-4 border border-gray-200">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why No Smiling?</h2>
          <p>
            Modern passports use biometric facial recognition. The algorithms work best when
            your face is in a neutral, relaxed position — the way it looks when you are not
            actively making an expression.
          </p>
          <p className="mt-3">
            A wide smile changes the shape of your cheeks, eyes, and mouth — making it harder
            for automated systems at border control to match your face to the photo.
            This is why the ICAO (the international aviation authority) standard requires a
            neutral expression.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Expression Should You Use?</h2>
          <p>
            Think &quot;relaxed and natural&quot; — not stiff, not smiling. Imagine your face the way
            it looks when you are reading or focused. Mouth closed, eyes open, jaw relaxed.
          </p>
          <p className="mt-3">
            Avoid frowning — a tense or unhappy expression is not required either. Just neutral.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Ready to make your passport photo?{' '}
            <Link href="/" className="text-blue-600 hover:underline">Use the free tool →</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
