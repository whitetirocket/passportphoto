import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'best-free-passport-photo-apps-2026'
const post = findPost(SLUG)!

export const revalidate = 1800

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `https://idphotosnap.com/blog/${SLUG}` },
  openGraph: {
    title: post.title,
    description: post.description,
    type: 'article',
    url: `https://idphotosnap.com/blog/${SLUG}`,
    publishedTime: post.publishAt,
    images: [{ url: post.ogImage, width: 1200, height: 630, alt: post.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.description,
    images: [post.ogImage],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why are paid passport photo tools so common if free ones exist?', acceptedAnswer: { '@type': 'Answer', text: 'Free ones either have a hidden cost (privacy, ads) or use a different cost model (client-side processing has no server cost). Most VC-backed companies default to a free preview, paid download model.' } },
    { '@type': 'Question', name: 'Is it safe to upload my passport photo to a third-party site?', acceptedAnswer: { '@type': 'Answer', text: 'Technically risky. You are trusting their security and data retention policies. A passport photo is biometric data harder to rotate than a password. Browser-based tools that do not upload at all sidestep the question entirely.' } },
    { '@type': 'Question', name: 'Can I just use my phone photo and crop manually?', acceptedAnswer: { '@type': 'Answer', text: 'You can but most countries have specific face-coverage percentages that are hard to estimate by eye. Even small deviations from the spec get photos rejected.' } },
    { '@type': 'Question', name: 'What if my country is not supported?', acceptedAnswer: { '@type': 'Answer', text: 'Check the consulate website for your destination country specifications, and use a generic image-cropping tool to match those dimensions exactly.' } },
  ],
}

export default function Post() {
  if (!post || !isVisible(SLUG)) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogArticleHead post={post} />

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-gray-600">
          The phrase &quot;free passport photo app&quot; hides a lot of variation. Some are genuinely free with
          zero strings. Some are free to use but charge to download. Some are free but ad-supported. Some are
          free but upload your photo to a third-party server. Here&apos;s an honest comparison of the major
          options for 2026, with links to each service so you can verify the claims yourself.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900">
            <strong>Disclosure:</strong> I built one of the tools listed below (IDPhotoSnap). I&apos;ve tried to be objective about strengths and weaknesses across all options. If you spot anything wrong with how a competitor is described, please leave a comment and I&apos;ll correct it.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What &quot;free&quot; should actually mean</h2>
          <p>Before the comparison, here&apos;s the standard I&apos;m using:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Truly free:</strong> you can use the tool, get a print-ready file, and apply for your passport without paying anything</li>
            <li><strong>Free to use, paid to download:</strong> you can preview the result but the final file requires payment ($5-15 typical)</li>
            <li><strong>Free with ads:</strong> the tool is free but the experience is interrupted by ads or upsells</li>
            <li><strong>Free but you pay with data:</strong> the photo is uploaded to a server and used for the company&apos;s ML training</li>
          </ul>
          <p className="mt-3">A passport photo tool that uses any of the last three has a hidden cost. They&apos;re listed below with that cost made explicit.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">IDPhotoSnap — truly free, browser-based</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cost:</strong> free</li>
            <li><strong>Privacy:</strong> photo never leaves your device (image processing runs entirely in your browser)</li>
            <li><strong>Countries supported:</strong> 85+</li>
            <li><strong>Watermark:</strong> none</li>
            <li><strong>Account required:</strong> no</li>
            <li><strong>Catch:</strong> no print delivery — you get a digital file you have to print yourself ($0.30 at any pharmacy)</li>
          </ul>
          <p className="mt-3">Built specifically to remove the artificial paywalls common in this category. Image processing uses the browser&apos;s canvas API and on-device face detection, so there&apos;s no server cost to run, which is why it can stay free without ads or subscriptions.</p>
          <p className="mt-3">You can verify the privacy claim directly: open your browser&apos;s DevTools, go to the Network tab, and watch what gets sent during use. There&apos;s no image upload because all processing happens in the browser.</p>
          <p className="mt-3">Best for: anyone with a phone or laptop who can print at a pharmacy or has a home photo printer. <Link href="/" className="text-blue-600 hover:underline">Try it →</Link></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Passport Photo Online —{' '}
            <a href="https://passportphoto.online" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">
              passportphoto.online
            </a>
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cost:</strong> &quot;free&quot; to preview, <strong>$10-15</strong> to download the print-ready file</li>
            <li><strong>Privacy:</strong> photos uploaded to their server</li>
            <li><strong>Countries supported:</strong> 100+</li>
            <li><strong>Watermark:</strong> on free preview, removed when you pay</li>
            <li><strong>Account required:</strong> no, but you must enter email to download</li>
            <li><strong>Catch:</strong> the price comes only at the final download step</li>
          </ul>
          <p className="mt-3">Probably the largest competitor by traffic. The product itself works well, but the &quot;free&quot; label is misleading — there&apos;s no way to actually get a usable photo without paying. They also have an aggressive upsell flow (&quot;AI background change for $5&quot;, &quot;express delivery for $8&quot;) that adds to the base price.</p>
          <p className="mt-3">If you&apos;re going to pay $10-15 for the convenience of skipping print yourself, this is one of the cleanest paid options. Best for: people who don&apos;t mind paying $10-15 for convenience and don&apos;t want to deal with cropping themselves.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            PhotoAiD —{' '}
            <a href="https://photoaid.com" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">
              photoaid.com
            </a>
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cost:</strong> $5-10 per photo</li>
            <li><strong>Privacy:</strong> photos uploaded to their servers</li>
            <li><strong>Countries supported:</strong> 80+</li>
            <li><strong>Watermark:</strong> on the preview, removed after purchase</li>
            <li><strong>Account required:</strong> email required for purchase</li>
            <li><strong>Catch:</strong> not free at all, despite the brand positioning</li>
          </ul>
          <p className="mt-3">PhotoAiD is straightforward: it&apos;s a paid service. They occasionally offer &quot;first photo free&quot; promotions but the regular price is $5-10. Quality of output is generally high, with reliable AI background removal. They also offer print delivery (mailed to your address) for an additional fee.</p>
          <p className="mt-3">Best for: people who already have an account, want a polished result with minimal effort, or specifically want a printed photo mailed to them.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Drugstore kiosks (CVS, Walgreens, Walmart)</h2>
          <p className="text-sm text-gray-500 mb-3">
            <a href="https://www.cvs.com/photo/passport-photos" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">CVS passport photos</a>
            {' · '}
            <a href="https://photo.walgreens.com/store/category/cf2_passportphotos.jsp" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">Walgreens passport photos</a>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cost:</strong> $15-17 for two prints</li>
            <li><strong>Privacy:</strong> their kiosk camera takes the photo, stored on their system briefly</li>
            <li><strong>Countries supported:</strong> mostly US-format only</li>
            <li><strong>Account required:</strong> no</li>
            <li><strong>Catch:</strong> if the photo is rejected, you pay again to redo it</li>
          </ul>
          <p className="mt-3">Worth mentioning because it&apos;s the default many people fall into. Quality is genuinely mediocre — the kiosk cameras are old, lighting in the store is harsh fluorescent, and the operators are not trained photographers. <Link href="/blog/why-was-my-passport-photo-rejected" className="text-blue-600 hover:underline">Rejection rates from drugstore kiosks</Link> are high enough that the State Department flags them in its guidance.</p>
          <p className="mt-3">Best for: people who specifically want printed photos handed to them in 5 minutes and are willing to pay for that convenience. The quality-to-cost ratio is the worst of any option, but the speed is unmatched.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Free apps in app stores (iOS/Android)</h2>
          <p>There are 50+ &quot;passport photo&quot; apps in the App Store and Google Play. Quality varies enormously:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Scams:</strong> free to use, then charge $20 in-app to &quot;unlock HD&quot; — which means watermark removal</li>
            <li><strong>Legitimate free apps with ads:</strong> acceptable but the ad experience is distracting</li>
            <li><strong>Companion apps to paid services:</strong> the app is free but the actual photo download costs money</li>
          </ul>
          <p className="mt-3">I&apos;m not naming specific apps because ownership and quality change frequently in this category. If you want to use a phone app specifically, check recent reviews carefully — apps that were good in 2023 may not be in 2026.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How each one handles country specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Tool</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Countries</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Auto-applies specs</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Known weak countries</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IDPhotoSnap', '85+', 'Yes', 'Some smaller African nations'],
                  ['Passport Photo Online', '100+', 'Yes', 'Generally accurate'],
                  ['PhotoAiD', '80+', 'Yes', 'Generally accurate'],
                  ['Drugstore kiosks', '~5', 'Manual selection only', 'Mainly US-only'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 border border-gray-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">If you&apos;re applying for a major country (US, UK, Canada, EU, India, China, Japan, Australia), any tool above handles it correctly. The differences appear for less common destinations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How each one handles privacy</h2>
          <p>This is the dimension that gets the least attention but matters most for some users. A passport photo is biometric data — losing control of where it goes is a real privacy cost.</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Tool</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Photo upload</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Photo retention</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Used for ML training</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IDPhotoSnap', 'Never (browser-only)', 'None', 'No'],
                  ['Passport Photo Online', 'Yes', 'Up to 30 days', 'Likely'],
                  ['PhotoAiD', 'Yes', 'Up to 90 days', 'Likely'],
                  ['Drugstore kiosks', 'Local system', 'Variable', 'Unlikely'],
                  ['Free apps', 'Varies', 'Varies', 'Often unclear'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 border border-gray-200">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">If privacy matters, the only option without server upload is a browser-based tool that processes the image client-side. <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> is built that way (you can verify by watching DevTools Network tab during use).</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What I&apos;d actually pick</h2>
          <p>If I were a user with no preference for any specific tool:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>For the US, UK, Canada, EU, or any major country:</strong> IDPhotoSnap if I want it free with privacy, Passport Photo Online if I&apos;d rather pay $10-15 for the convenience of skipping the print step</li>
            <li><strong>For a less common country:</strong> check that the tool actually has the spec for your destination</li>
            <li><strong>Avoid drugstore kiosks</strong> unless it&apos;s the only option you have access to — quality is too inconsistent for the price</li>
            <li><strong>Avoid app store apps with &quot;free&quot; in the name</strong> unless you&apos;ve verified they&apos;re not paywalled at the download step</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Why are paid tools so common if free ones exist?</p>
              <p>Free ones either have a hidden cost (privacy, ads) or use a different cost model entirely (client-side processing has no server cost). Most companies that build these tools are venture-backed and need revenue, so they default to a &quot;free preview, paid download&quot; model.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Is it safe to upload my passport photo to a third-party site?</p>
              <p>Technically risky — you&apos;re trusting their security and their data retention policies. Most established services have reasonable security, but a passport photo is biometric data that&apos;s harder to &quot;rotate&quot; than a password. Browser-based tools that don&apos;t upload at all sidestep the question.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I just use my phone&apos;s photo and crop it manually?</p>
              <p>You can, but most countries have specific rules about face-coverage percentage that are very hard to estimate by eye. Even a small deviation from the spec gets your photo rejected.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What if my country isn&apos;t supported by any tool?</p>
              <p>Check the consulate website for your destination country&apos;s specifications, and use a generic image-cropping tool to match those dimensions exactly.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            The &quot;best&quot; passport photo app depends on how you weigh privacy, cost, and convenience. There&apos;s no single answer, but at least the tradeoffs are now explicit. If you want to try the tool I built, <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> is at idphotosnap.com — free, no signup, runs in your browser, no upload.
          </p>
        </div>

        <RelatedGuides slugs={[
          'why-was-my-passport-photo-rejected',
          'how-to-take-passport-photo-with-iphone',
          'us-passport-photo-requirements-2026',
          'how-to-take-passport-photo-at-home',
        ]} />
      </div>
    </article>
  )
}
