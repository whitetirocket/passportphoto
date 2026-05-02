import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'ees-passport-photo-requirements-2026'
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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  image: `https://idphotosnap.com${post.ogImage}`,
  datePublished: post.publishAt,
  dateModified: post.publishAt,
  author: { '@type': 'Organization', name: 'IDPhotoSnap' },
  publisher: {
    '@type': 'Organization',
    name: 'IDPhotoSnap',
    logo: { '@type': 'ImageObject', url: 'https://idphotosnap.com/IDPhotoSnap.png' },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a new passport photo because of EES?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EES does not require you to upload or bring a new photo. The facial image used by EES is captured at the border on your first entry by a passport officer or self-service kiosk. Your existing passport photo is unchanged by EES.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my Schengen visa application still need a photo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Schengen visa photo specification (35×45 mm, 70-80% face coverage, neutral background) is unchanged. EES is a separate border-control system that runs after the visa is already issued.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will ETIAS require a photo upload?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ETIAS, scheduled for Q4 2026, is a travel authorisation for visa-exempt nationals (US, UK, Canada, etc). Based on official guidance, the ETIAS online application does not require a photo upload - only passport details, travel info, and a small fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries use EES?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All 29 Schengen states: the EU members in the Schengen Area plus Iceland, Liechtenstein, Norway, and Switzerland. Ireland and Cyprus do not participate. Non-Schengen EU countries are also excluded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I lose weight, change my hair, or get older - will the EES photo still match me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EES re-verifies facial biometrics on every entry within the 3-year retention window. Minor changes are tolerated by the matching algorithm. After 3 years your record expires and a new photo is captured on next entry. There is no need to update anything proactively.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do children need a photo for EES?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Children under 12 are exempt from fingerprint capture but a facial image is taken. The photo is captured at the border by an officer, not uploaded in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are travel agents and embassies still asking for photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are asking for the standard visa application photo, not an EES photo. The visa photo is required to issue the visa sticker. EES happens at the border and is unrelated to the visa application packet.',
      },
    },
  ],
}

export default function Post() {
  if (!post || !isVisible(SLUG)) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogArticleHead post={post} />

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-gray-600">
          Since the EU&apos;s Entry/Exit System (EES) went live on 10 April 2026, the same question keeps
          showing up in travel forums: <em>do I need a new passport photo because of EES?</em> Short
          answer - no. Long answer - the rules around <Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Schengen visa photos</Link> have not changed at all, but the
          confusion is understandable. Here is exactly what changed, what didn&apos;t, and what you actually
          need to bring.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The short version</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>EES launched 10 April 2026</strong> at all Schengen border checkpoints.</li>
            <li><strong>You do not need to upload or bring a new photo for EES.</strong> The facial image is taken at the border on first entry.</li>
            <li><strong>Schengen visa photo specs (35×45 mm) are unchanged.</strong> If you are applying for a visa, the photo requirement is exactly what it was in 2025.</li>
            <li><strong>ETIAS is coming in Q4 2026</strong> - no photo upload required for that either, based on official guidance.</li>
            <li>The only thing that has changed at the border itself: an extra 30-90 seconds for biometric capture on first entry.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What is EES, exactly?</h2>
          <p>
            The Entry/Exit System is an automated IT system that registers non-EU travellers each time
            they cross the external Schengen border. It replaces the manual passport stamp with a
            digital record. The system stores:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Your name, date of birth, and travel-document data</li>
            <li>The date and place of entry and exit</li>
            <li>Four fingerprints</li>
            <li>A facial image for biometric matching</li>
          </ul>
          <p className="mt-3">
            EES applies to short-stay travellers (up to 90 days in any 180-day period) who do not hold
            an EU/EFTA passport, residence permit, or long-stay visa. So: most US, UK, Canadian,
            Australian, Indian, Brazilian, and other third-country nationals, whether visa-required or
            visa-exempt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Where the photo confusion comes from</h2>
          <p>
            Three things got mashed together in the public conversation around EES, and the result is a
            wave of "do I need a new photo" questions:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            <li>
              <strong>The Schengen visa photo</strong> - a 35×45 mm photograph submitted with a visa
              application. This has existed for years and the spec is unchanged.
            </li>
            <li>
              <strong>The EES facial image</strong> - captured at the border by an officer or kiosk on
              first entry. You do not provide this, the system takes it.
            </li>
            <li>
              <strong>The ETIAS authorisation</strong> - a separate online system launching in Q4 2026
              for travellers who don&apos;t need a Schengen visa. Based on official guidance, it does
              not require a photo upload.
            </li>
          </ol>
          <p className="mt-3">
            Travel agents, immigration consultants, and embassy front desks have not always been clear
            in distinguishing these three, and that&apos;s where the &quot;new EES photo&quot;
            misconception spread.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What still requires a photo (and the spec)</h2>
          <p>
            If you need a Schengen visa to enter - that is, you hold a passport that is not on the
            visa-free list (Indian, Pakistani, Egyptian, Nigerian, Chinese, Russian, and many others) - 
            your visa application still requires a printed or digital passport-style photograph. The
            specification:
          </p>

          <div className="my-6 rounded-xl border border-gray-200 p-5 bg-gray-50">
            <h3 className="font-semibold text-gray-900 mb-3">Schengen visa photo (unchanged in 2026)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Size: 35×45 mm</li>
              <li>Face occupies 70-80% of the frame (chin to crown 32-36 mm)</li>
              <li>Background: light grey or off-white, even and shadowless</li>
              <li>Expression: neutral, mouth closed</li>
              <li>Eyes: open, looking at the camera, no glasses</li>
              <li>Taken within the last 6 months</li>
              <li>Print on photo paper or upload as JPEG (depends on consulate)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              See the full <Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Schengen visa photo guide</Link> for size templates, common rejections, and a free tool that crops to the exact dimensions in your browser.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What happens at the EES border on first entry</h2>
          <p>
            On your first crossing into the Schengen Area after 10 April 2026, expect this sequence at
            the border:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            <li>An officer or self-service kiosk scans your passport.</li>
            <li>You place four fingers (typically right hand) on a fingerprint scanner.</li>
            <li>A camera takes a live facial image - looking straight at the lens, neutral expression. No need to remove your glasses for this; the algorithm handles it.</li>
            <li>The system creates your EES record with a 3-year retention period.</li>
            <li>You proceed through the border check.</li>
          </ol>
          <p className="mt-3">
            Total time: roughly 1-3 minutes per traveller for first registration. After that, repeat
            entries within 3 years use a self-service kiosk and take 30-60 seconds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Children, fingerprints, and exemptions</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Children under 12:</strong> facial image is taken, fingerprints are not.</li>
            <li><strong>EU/EFTA citizens:</strong> exempt entirely - no EES record, no biometric capture.</li>
            <li><strong>Long-stay visa or residence permit holders:</strong> exempt for the duration of the permit.</li>
            <li><strong>Diplomats with diplomatic visa:</strong> exempt under standard diplomatic rules.</li>
            <li><strong>People physically unable to provide fingerprints:</strong> facial image only.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Which countries use EES?</h2>
          <p>
            All 29 Schengen states - the EU members participating in Schengen plus the four associated
            countries:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li><strong>EU Schengen members:</strong> Austria, Belgium, Bulgaria, Croatia, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden.</li>
            <li><strong>Non-EU Schengen associates:</strong> Iceland, Liechtenstein, Norway, Switzerland.</li>
          </ul>
          <p className="mt-3">
            <strong>Ireland</strong> and <strong>Cyprus</strong> do not participate in EES. Crossing
            from Ireland to France, however, counts as a Schengen entry and triggers EES at the French
            border.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">EES vs ETIAS - what&apos;s the difference?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Aspect</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">EES</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">ETIAS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Status</td>
                  <td className="py-3 px-4 border border-gray-200">Live since 10 April 2026</td>
                  <td className="py-3 px-4 border border-gray-200">Launches Q4 2026</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">What it is</td>
                  <td className="py-3 px-4 border border-gray-200">Border biometric register</td>
                  <td className="py-3 px-4 border border-gray-200">Pre-travel authorisation</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Who needs it</td>
                  <td className="py-3 px-4 border border-gray-200">All non-EU short-stay travellers</td>
                  <td className="py-3 px-4 border border-gray-200">Visa-exempt nationals only (US, UK, Canada, etc)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Photo upload?</td>
                  <td className="py-3 px-4 border border-gray-200">No - taken at border</td>
                  <td className="py-3 px-4 border border-gray-200">No - passport details only</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Cost</td>
                  <td className="py-3 px-4 border border-gray-200">Free</td>
                  <td className="py-3 px-4 border border-gray-200">€7 (under-18 and over-70 free)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Where</td>
                  <td className="py-3 px-4 border border-gray-200">Border</td>
                  <td className="py-3 px-4 border border-gray-200">Online before travel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Practical advice for travel in 2026</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>If you need a Schengen visa:</strong> get the standard 35×45 mm photo. Nothing has
              changed about the spec. The free <Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Schengen visa photo tool</Link> crops any photo to the exact dimensions in your browser.
            </li>
            <li>
              <strong>If you&apos;re visa-exempt (US, UK, Canada, etc):</strong> wait for ETIAS to open
              in Q4 2026, then apply online. No photo needed.
            </li>
            <li>
              <strong>Arriving at a Schengen border in 2026:</strong> budget an extra 5-15 minutes at
              passport control during peak hours, especially during the rollout months. Bring kids&apos;
              passports and have them ready for face capture.
            </li>
            <li>
              <strong>Don&apos;t fall for &quot;EES photo packages&quot; from third-party services.</strong>
              There is no such thing. EES does not accept uploaded photos.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">FAQ</h2>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Do I need a new passport photo because of EES?</p>
              <p>No. EES does not require you to upload or bring a new photo. The facial image is captured at the border on first entry by an officer or self-service kiosk.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Does my Schengen visa application still need a photo?</p>
              <p>Yes. The visa photo specification (35×45 mm, 70-80% face coverage, neutral background) is unchanged. EES is a separate system that runs after the visa is already issued.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Will ETIAS require a photo upload?</p>
              <p>Based on official guidance for Q4 2026, the ETIAS online application does not require a photo upload - only passport details, travel info, and a €7 fee.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Which countries use EES?</p>
              <p>All 29 Schengen states. Ireland and Cyprus do not participate.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What if I lose weight, change my hair, or get older?</p>
              <p>The matching algorithm tolerates minor changes. EES records expire after 3 years and a new image is captured on next entry. No proactive update needed.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Do children need a photo for EES?</p>
              <p>Yes - a facial image is taken at the border. Children under 12 are exempt from fingerprints but not from face capture.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Why are travel agents still asking for photos?</p>
              <p>They are asking for the standard visa application photo, not an EES photo. The two are different. The visa photo is required to issue the visa sticker before travel.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Need a Schengen visa photo for an upcoming application? <Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Crop yours to the exact 35×45 mm spec for free</Link> - runs in your browser, no upload, no signup.
          </p>
        </div>

        <RelatedGuides slugs={[
          'why-was-my-passport-photo-rejected',
          'how-to-take-passport-photo-with-iphone',
          'passport-photo-requirements-by-country',
          'passport-photo-size-guide',
        ]} />
      </div>
    </article>
  )
}
