import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'german-passport-photo-requirements-2026'
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
      name: 'Can I use the same photo for both Reisepass and Personalausweis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The format is identical (35x45 mm, biometric ICAO 9303). One photo set works for both applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How recent must the photo be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Within the last 6 months. The Bundesdruckerei rejects older photos because they may not match your current appearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are glasses allowed in German passport photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Germany banned glasses in passport photos in November 2017 with no medical exception. Even prescription glasses must be removed for the photo capture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are smiles allowed at all?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Even a slight smile is grounds for rejection. The mouth must be fully closed and the expression neutral.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I edit the photo (brightness, color)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minor exposure adjustment is allowed. Skin smoothing, beauty filters, or anything that changes your appearance is grounds for rejection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about a beard or visible piercings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are allowed and do not affect approval as long as the face is clearly visible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use the photo for a German visa application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The same 35x45 mm format applies for tourist visas, work visas, student visas, and Blue Card applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do online application portals accept the same format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The German residence permit online application (eAT-online) and visa portal use the same 35x45 mm digital format.',
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
          Germany has some of the strictest passport photo standards in Europe. The Bundesdruckerei
          (Federal Printing Office) and Auswaertiges Amt (Federal Foreign Office) follow ICAO 9303
          biometric standards plus a few additional German requirements that catch many applicants
          by surprise. This guide covers exactly what is required for a German passport (Reisepass),
          national ID card (Personalausweis), and visa application in 2026.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Quick summary</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Size:</strong> 35x45 mm (3.5x4.5 cm)</li>
            <li><strong>Background:</strong> plain light grey or white, no patterns, no shadows</li>
            <li><strong>Face height:</strong> 32-36 mm from chin to crown (70-80% of frame)</li>
            <li><strong>Expression:</strong> neutral, mouth closed, looking straight at camera</li>
            <li><strong>Glasses:</strong> banned since November 2017, no exceptions for cosmetic reasons</li>
            <li><strong>Age:</strong> photo must be taken within the last 6 months</li>
            <li><strong>Format:</strong> ICAO 9303 biometric compliant</li>
            <li>Same specifications apply to Reisepass, Personalausweis, and visa applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why German specs are stricter than other EU countries</h2>
          <p>
            While the underlying ICAO standard is shared across the EU, Germany applies it more rigidly.
            The Bundesdruckerei produces all German passports and runs automated biometric quality checks
            that reject photos other EU member states would accept. Common reasons:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>The face position must be exactly centered, with the face vertical axis perpendicular to the camera. Even a 5-degree tilt is flagged.</li>
            <li>The background must be uniformly lit. Diagonal shadows from window light cause rejection even if the gradient is barely visible.</li>
            <li>Skin tone must be naturally rendered. Heavy color filters or beauty mode on phones causes rejection.</li>
          </ul>
          <p className="mt-3">
            If you used a German passport photo at the Bundesdruckerei kiosk in 2024-2025 and it was
            rejected, the most likely reason is one of these three.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Detailed specifications</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Size and dimensions</h3>
          <p>
            The German passport photo size is 35 millimeters wide by 45 millimeters tall. In pixels at
            300 DPI, this is approximately 413 x 531 pixels. The face from chin to crown must occupy
            32 to 36 millimeters of the vertical frame.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Background color</h3>
          <p>
            Light grey is the official Bundesdruckerei recommendation. Plain white is also accepted but
            tends to wash out skin tones in some printing. If choosing white, make sure the background
            is brighter than the lightest part of your face, otherwise the automatic biometric
            verification can fail.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Lighting</h3>
          <p>Even, diffused light from the front. Window daylight at a 45-degree angle is ideal. Avoid:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Direct sunlight (creates harsh shadows)</li>
            <li>Overhead room light (shadows under chin and eyes)</li>
            <li>Mixed light sources (color cast on skin)</li>
            <li>Light from behind (silhouette effect, dark face)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Expression</h3>
          <p>
            Neutral expression, mouth fully closed. No smile, even slight. Both eyes open, both visible.
            Looking directly at the camera. Eyebrows visible (hair pulled back if needed).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The glasses ban (since November 2017)</h2>
          <p>
            This is the rule that catches most applicants. Germany banned glasses in passport photos in
            November 2017 with no medical exception. Even prescription glasses must be removed.
          </p>
          <p className="mt-3">
            The reasoning: glasses cause reflections that interfere with biometric facial recognition
            systems used at automated border gates and police checks. Even anti-reflective coated lenses
            can cause issues with the IR-based scanners.
          </p>
          <p className="mt-3">
            If you have severe vision problems and need glasses to navigate, you can wear them to the
            appointment but must remove them for the photo capture. Some Buergeramt offices provide a
            designated waiting area for this.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Religious head coverings</h2>
          <p>
            Religious head coverings are permitted as long as the face from chin to forehead is fully
            visible. The covering cannot cast shadows on the face. This applies to hijabs, turbans,
            kippahs, and similar religious garments. A signed statement of religious necessity may be
            requested.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Children and infant photos</h2>
          <p>
            <strong>Children under 6 years old:</strong> the same 35x45 mm format applies, but the
            requirement for neutral expression is relaxed. Eyes do not need to be fully open and the
            mouth can be slightly open. The face must still be centered and unobstructed.
          </p>
          <p className="mt-3">
            <strong>Newborns:</strong> photos can be taken with the infant lying on a plain light
            surface. The face must be straight up, not tilted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common rejection reasons (top 5 reported by German consulates)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Background not uniform</strong> - shadow on one side or color gradient. Solution: stand 2-3 feet from the wall, not pressed against it.</li>
            <li><strong>Glasses on.</strong> Solution: remove them for the photo, even if you wore them to the appointment.</li>
            <li><strong>Slight smile.</strong> Solution: take 8-10 photos, pick the most expressionless one.</li>
            <li><strong>Photo too dark or too bright.</strong> Solution: even diffused window light, no flash, no direct sun.</li>
            <li><strong>Wrong dimensions after cropping.</strong> Solution: use a tool that auto-crops to exact 35x45 mm at 300 DPI.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Photo studio vs DIY in Germany</h2>
          <p>
            A photo studio (Fotostudio) in Germany typically charges 12-18 euros for 6 passport photos.
            A Buergeramt kiosk machine charges 6-8 euros for 4 photos. Both options often produce
            rejected photos because they use generic settings without checking the specific
            Bundesdruckerei requirements.
          </p>
          <p className="mt-3">
            <strong>DIY at home:</strong> with any phone from the last 5 years and a free browser-based
            crop tool, you can produce a Bundesdruckerei-compliant photo in 5 minutes. Print at any DM,
            Rossmann, or dm-Drogeriemarkt photo service for under 2 euros total.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">EES and ETIAS context for German passports</h2>
          <p>
            If you hold a German passport, you are an EU citizen and EES does not apply to you. EES
            only affects non-EU travelers entering the Schengen Area.
          </p>
          <p className="mt-3">
            If you are a non-EU citizen applying for a German visa or residence permit, the photo
            requirement is the same 35x45 mm biometric format. EES will capture biometric data at the
            border on your first entry, separately from your visa photo. No new photo is required for
            EES.
          </p>
          <p className="mt-3">
            ETIAS launches in Q4 2026 and applies to visa-exempt non-EU travelers (US, UK, Canada, etc.)
            entering Germany. ETIAS does not require a photo upload, only passport details and a 7 euro
            fee. See the <Link href="/blog/ees-passport-photo-requirements-2026" className="text-blue-600 hover:underline">full EES explainer</Link> for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Cost comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Option</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Rejection risk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-3 px-4 border border-gray-200">Fotostudio</td>
                  <td className="py-3 px-4 border border-gray-200">12-18 euros</td>
                  <td className="py-3 px-4 border border-gray-200">15-30 min</td>
                  <td className="py-3 px-4 border border-gray-200">Medium (generic settings)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200">Buergeramt kiosk</td>
                  <td className="py-3 px-4 border border-gray-200">6-8 euros</td>
                  <td className="py-3 px-4 border border-gray-200">5 min</td>
                  <td className="py-3 px-4 border border-gray-200">High (no quality check)</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 border border-gray-200">DM/Rossmann self-service</td>
                  <td className="py-3 px-4 border border-gray-200">4-6 euros</td>
                  <td className="py-3 px-4 border border-gray-200">5 min</td>
                  <td className="py-3 px-4 border border-gray-200">High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200">DIY at home + print</td>
                  <td className="py-3 px-4 border border-gray-200">under 2 euros</td>
                  <td className="py-3 px-4 border border-gray-200">10 min</td>
                  <td className="py-3 px-4 border border-gray-200">Low (with quality tool)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            For DIY, our free <Link href="/germany-passport-photo" className="text-blue-600 hover:underline">German passport photo tool</Link> auto-crops to the exact 35x45 mm Bundesdruckerei specification in your browser. No upload, no signup, no watermark.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I use the same photo for both Reisepass and Personalausweis?</p>
              <p>Yes. The format is identical (35x45 mm, biometric ICAO 9303). One photo set works for both applications.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">How recent must the photo be?</p>
              <p>Within the last 6 months. The Bundesdruckerei rejects older photos because they may not match your current appearance.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What if I just got a new glasses prescription?</p>
              <p>You still cannot wear them in the photo. Take them off for the capture, put them back on after.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Are smiles allowed at all?</p>
              <p>No. Even a slight smile is grounds for rejection. The mouth must be fully closed.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I edit the photo (brightness, color)?</p>
              <p>Minor exposure adjustment is allowed. Skin smoothing, beauty filters, or anything that changes your appearance is grounds for rejection.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What about a beard or visible piercings?</p>
              <p>Both are allowed and do not affect approval as long as the face is clearly visible.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I use the photo for a German visa application?</p>
              <p>Yes. The same 35x45 mm format applies for tourist visas, work visas, student visas, and Blue Card applications.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Do online application portals accept the same format?</p>
              <p>Yes. The German residence permit online application (eAT-online) and visa portal use the same 35x45 mm digital format.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What if my photo is rejected at the Buergeramt?</p>
              <p>You typically get a polite but firm refusal at the counter. The clerk will tell you which specific issue caused the rejection. Take a new photo and return on a different day.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Need a Bundesdruckerei-compliant German passport photo? <Link href="/germany-passport-photo" className="text-blue-600 hover:underline">Crop yours to the exact 35x45 mm spec for free</Link> - runs in your browser, no upload, no signup.
          </p>
        </div>

        <RelatedGuides slugs={[
          'ees-passport-photo-requirements-2026',
          'why-was-my-passport-photo-rejected',
          'passport-photo-requirements-by-country',
          'passport-photo-size-guide',
        ]} />
      </div>
    </article>
  )
}
