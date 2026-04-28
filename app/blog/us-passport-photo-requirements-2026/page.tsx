import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'us-passport-photo-requirements-2026'
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
    { '@type': 'Question', name: 'Can I use a passport photo from another country for a US application?', acceptedAnswer: { '@type': 'Answer', text: 'Only if the dimensions match exactly. UK photos (35x45mm) cannot be used for US (51x51mm) - the aspect ratios are different.' } },
    { '@type': 'Question', name: 'Can I wear glasses in a US passport photo?', acceptedAnswer: { '@type': 'Answer', text: 'No. The US State Department banned glasses in passport photos in November 2016. The only exception is a documented medical condition with a doctor letter.' } },
    { '@type': 'Question', name: 'What dimensions are required for a US passport photo?', acceptedAnswer: { '@type': 'Answer', text: '2 x 2 inches (51 x 51 mm). For digital submissions, between 600 x 600 and 1200 x 1200 pixels, JPEG format, between 54 KB and 10 MB.' } },
    { '@type': 'Question', name: 'How big should my face be in a US passport photo?', acceptedAnswer: { '@type': 'Answer', text: '1 to 1 3/8 inches (25-35 mm) from the bottom of the chin to the top of the head, which is 50-69% of the photo height.' } },
    { '@type': 'Question', name: 'Are infant passport photos different?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Infants and young children have separate, more lenient rules. A sleeping infant photo is sometimes accepted. The full face must still be visible and no other people in the frame.' } },
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
          The US State Department&apos;s photo requirements are the most thoroughly documented in the world - 
          and also the most strictly enforced. A photo that&apos;s even slightly off will delay your application
          by 2-3 weeks. This guide goes through every official requirement for 2026, in detail, with what each
          one actually means in practice.
        </p>

        <p className="text-sm text-gray-500 italic">
          All requirements below are sourced from the{' '}
          <a href="https://travel.state.gov/content/travel/en/passports/how-apply/photos.html" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">
            US Department of State&apos;s photo requirements
          </a>{' '}
          as of 2026.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">At-a-glance specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Specification</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Size', '2 × 2 inches (51 × 51 mm)'],
                  ['Resolution (digital)', '600 × 600 to 1200 × 1200 pixels'],
                  ['Color', 'Color photo, not black and white'],
                  ['Head size', '1 to 1⅜ inches (25-35 mm) from chin to top of head'],
                  ['Background', 'Plain white or off-white'],
                  ['Expression', 'Natural, neutral, mouth closed'],
                  ['Glasses', 'Not allowed (since November 2016)'],
                  ['Head covering', 'Not allowed except religious or medical'],
                  ['Recency', 'Within 6 months of application'],
                  ['Quality', 'Sharp, no shadows, no glare'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border border-gray-200 font-medium">{row[0]}</td>
                    <td className="py-3 px-4 border border-gray-200">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Size requirements explained</h2>
          <p><strong>2 × 2 inches.</strong> This is exactly 51 × 51 millimeters at 300 DPI. The photo must be square - not rectangular, not landscape. A photo that&apos;s slightly off-square (50 × 51 mm, for example) will be rejected by automated systems.</p>
          <p className="mt-3">If you&apos;re submitting digitally:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Minimum: 600 × 600 pixels</li>
            <li>Maximum: 1200 × 1200 pixels</li>
            <li>File size: between 54 KB and 10 MB</li>
            <li>File format: JPEG only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Head size requirements</h2>
          <p>The single most common rejection reason for US applications is incorrect head size.</p>
          <p className="mt-3"><strong>Required:</strong> the height from the bottom of the chin to the top of the head must be <strong>1 to 1⅜ inches</strong> (25-35 mm). In percentages of the frame, that&apos;s <strong>50-69%</strong> of the photo height.</p>
          <p className="mt-3"><strong>Common mistakes:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Photo zoomed too far in: head fills the entire frame (rejection)</li>
            <li>Photo zoomed too far out: head occupies less than 50% (rejection)</li>
            <li>Forehead cropped: top of head not visible (rejection)</li>
            <li>Chin cropped: bottom of chin not visible (rejection)</li>
          </ul>
          <p className="mt-3">The State Department&apos;s automated system measures head height in pixels and compares to expected ranges. A few millimeters off is enough for rejection.</p>
          <p className="mt-3"><strong>How to get this right:</strong> use a tool that auto-detects your face and applies the correct US-specific crop. <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> does this automatically. Manual cropping is possible but unforgiving - even a 5% error in the crop will fail.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Background requirements</h2>
          <p><strong>Plain white or off-white.</strong></p>
          <p className="mt-3">Specific clarifications from the State Department:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>No patterns, textures, or designs</li>
            <li>No shadows on the background</li>
            <li>No other people, pets, or objects visible</li>
            <li>No &quot;scenery&quot; - no walls with art, no curtains, no doors with knobs visible</li>
          </ul>
          <p className="mt-3">The most common background failure is a <strong>shadow on the wall behind you</strong>, caused by standing too close to it. The fix is to stand 2-3 feet away from any wall and use even lighting. Full diagnostic in <Link href="/blog/why-was-my-passport-photo-rejected" className="text-blue-600 hover:underline">Why Was My Passport Photo Rejected</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Expression and pose</h2>
          <p><strong>Required:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Natural, neutral expression</li>
            <li>Mouth closed</li>
            <li>Eyes open, looking directly at the camera</li>
            <li>Both ears visible (or at least clearly the same)</li>
            <li>Head straight, not tilted left or right</li>
            <li>Shoulders facing the camera, not turned</li>
          </ul>
          <p className="mt-3"><strong>Smiling is rejected.</strong> This trips many people. The State Department specifically rejects:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>A wide smile showing teeth (always)</li>
            <li>A closed-mouth smile that lifts the cheeks (usually)</li>
            <li>A &quot;natural smile&quot; - there&apos;s no such category in US rules</li>
          </ul>
          <p className="mt-3">If you genuinely cannot keep a neutral expression (some people can&apos;t), take 20 photos and pick the one where your default smile is least pronounced.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Glasses (banned since 2016)</h2>
          <p><strong>Glasses are not allowed</strong> in US passport photos as of November 2016. Even glasses without glare, even thin frames, even prescription glasses you wear daily - they must be removed for the photo.</p>
          <p className="mt-3">The only exception: a documented medical condition that prevents glasses removal. You must submit a signed letter from your doctor with the application.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Photo paper requirements (printed photos)</h2>
          <p>If you&apos;re submitting a printed photo with a Form DS-11 (in-person renewal), it must be:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Printed on <strong>photo paper</strong> (glossy or matte) - never plain printer paper</li>
            <li>Single photo, with <strong>no borders</strong></li>
            <li>Cut to exactly <strong>2 × 2 inches</strong></li>
            <li>Not folded, not creased, not damaged</li>
          </ul>
          <p className="mt-3">A photo printed on regular paper, even high-quality paper, will be rejected. The texture matters for biometric scanning. <Link href="/blog/print-passport-photo-at-home" className="text-blue-600 hover:underline">Full guide to printing at home or a lab for under $1</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to make a US passport photo at home</h2>
          <p>The process that works:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-3">
            <li><strong>Set up:</strong> plain white wall, stand 2-3 feet away, large window in front of you, good daylight</li>
            <li><strong>Camera:</strong> at eye level, 6 feet away (use a tripod or have someone hold it)</li>
            <li><strong>Pose:</strong> neutral expression, mouth closed, glasses off, looking straight ahead</li>
            <li><strong>Take 10 photos</strong> - variation gives you options</li>
            <li><strong>Pick one</strong> with eyes open, mouth closed, even lighting</li>
            <li><strong>Crop to US specs:</strong> <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> auto-detects your face and applies the exact 2×2 inch / 50-69% face-height crop the State Department requires</li>
            <li><strong>Verify dimensions:</strong> the file should be exactly 51 × 51 mm at 300 DPI (or 600 × 600 to 1200 × 1200 pixels for digital submission)</li>
            <li><strong>Save as JPEG</strong>, sRGB color profile, between 54 KB and 10 MB</li>
          </ol>
          <p className="mt-3">For phone-specific instructions, see <Link href="/blog/how-to-take-passport-photo-with-iphone" className="text-blue-600 hover:underline">How to take a passport photo with iPhone</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I use a passport photo from another country&apos;s application?</p>
              <p>Only if the dimensions match exactly. UK photos (35×45mm) cannot be used for US (51×51mm) - the aspect ratios are different.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What if I&apos;m renewing and look similar to my old photo?</p>
              <p>Even close to identical, you need a new photo within 6 months. The State Department rejects &quot;passport renewal&quot; submissions that reuse old photos.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Are infant passport photos different?</p>
              <p>Yes - infants and young children have separate, more lenient rules. The full face must be visible, eyes open if possible (a sleeping infant photo is sometimes accepted), and no other people in the frame.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I edit lighting in Photoshop?</p>
              <p>Minor exposure correction is fine. Skin smoothing, removing blemishes, eye-color changes, or anything that alters your appearance is <strong>not</strong> allowed and will result in rejection plus a possible fraud flag.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            The US State Department publishes the most detailed photo specs in the world. The trade-off: they&apos;re strictly enforced, with no human leniency for &quot;close enough.&quot; <Link href="/" className="text-blue-600 hover:underline">Use IDPhotoSnap</Link> to handle US-specific dimensions and face-coverage rules automatically - free, no signup, runs in your browser.
          </p>
        </div>

        <RelatedGuides slugs={[
          'how-to-take-passport-photo-with-iphone',
          'why-was-my-passport-photo-rejected',
          'passport-photo-size-guide',
          'best-free-passport-photo-apps-2026',
        ]} />
      </div>
    </article>
  )
}
