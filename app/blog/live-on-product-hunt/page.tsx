import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "We're Live on Product Hunt Today | IDPhotoSnap",
  description: 'IDPhotoSnap is launching on Product Hunt — free passport photo maker for 85+ countries with no signup, no watermark, and complete browser-based privacy.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        We&apos;re Live on Product Hunt Today
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 28, 2026 · 3 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          After several months of building, IDPhotoSnap is officially on Product Hunt.
          If you&apos;ve ever overpaid for a passport photo at a drugstore, this one&apos;s for you.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-2">🚀 Live now</p>
          <p className="text-blue-800 text-sm mb-3">
            Vote, comment, or just take a look — every bit helps the launch reach more people.
          </p>
          <a
            href="https://www.producthunt.com/products/idphotosnap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View on Product Hunt →
          </a>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why we built this</h2>
          <p>
            A passport photo costs $15 at a drugstore. The online tools that exist either
            charge $7 to $15 per photo, force you to create an account, slap a watermark on the
            result, or upload your image to a server somewhere.
          </p>
          <p className="mt-3">
            None of that needs to be true. A passport photo is a crop, a resize, and a
            background check — operations a smartphone browser can do in seconds. So we built
            the tool we wished existed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What you can do today</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Take a passport, visa, or ID photo for any of 85+ countries</li>
            <li>Skip the signup — there is no account to create</li>
            <li>Skip the watermark — the result is a clean, print-ready image</li>
            <li>Keep your photo private — image processing happens entirely in your browser</li>
            <li>Print at any pharmacy for about $0.30, instead of paying $15+ at a studio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What&apos;s next</h2>
          <p>The roadmap for the next month:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Add the remaining countries to reach full ICAO coverage</li>
            <li>Print-ready PDF output (multiple photos arranged on a 4×6 sheet)</li>
            <li>Better baby and infant photo guidance — the rules differ significantly from adults</li>
            <li>Per-country guides walking through the specific requirements at the consulate level</li>
          </ul>
          <p className="mt-3">
            No subscription, no premium tier, no hidden upsell. The site stays free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">FAQ</h2>

          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Is IDPhotoSnap really free?</p>
              <p>
                Yes. No registration, no watermark, no upsell. The first photo is free, the
                hundredth is free.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">Where does my photo go?</p>
              <p>
                Nowhere. Image processing runs entirely in your browser — there is no server-side
                upload. You can verify this in your browser&apos;s DevTools by watching the
                Network tab while you use the tool.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">How does it support 85+ countries?</p>
              <p>
                Each country has its own dimensions, head-size rules, and background requirements.
                We&apos;ve encoded these specifications based on official consulate guidelines, and
                the tool auto-applies the correct preset when you choose a country.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-1">How can I help?</p>
              <p>
                Try the tool, share it if it works for you, and{' '}
                <a
                  href="https://www.producthunt.com/products/idphotosnap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  upvote on Product Hunt
                </a>
                {' '}to help others find it. Honest feedback is the most useful thing — if a
                country&apos;s output looked wrong, tell us so we can fix the spec.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Ready to try it?{' '}
            <Link href="/" className="text-blue-600 hover:underline">Use the free tool →</Link>
          </p>
        </div>

      </div>
    </div>
  )
}
