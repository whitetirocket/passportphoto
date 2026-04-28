import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'how-to-take-passport-photo-with-iphone'
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: post.title,
  description: post.description,
  image: `https://idphotosnap.com${post.ogImage}`,
  totalTime: 'PT15M',
  supply: [
    { '@type': 'HowToSupply', name: 'iPhone (any model from the last 6 years)' },
    { '@type': 'HowToSupply', name: 'Plain white wall' },
    { '@type': 'HowToSupply', name: 'Tripod or phone stand (optional)' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Adjust iPhone camera settings', text: 'Turn off Live Photo, set HDR to Auto or Off, disable flash. Use Photo mode at 1x zoom only.' },
    { '@type': 'HowToStep', name: 'Set up the background', text: 'Stand 2-3 feet from a plain white or light grey wall to eliminate shadows.' },
    { '@type': 'HowToStep', name: 'Position the iPhone at eye level', text: 'Use a tripod or stack of books to place the iPhone at exact eye level, 6 feet away.' },
    { '@type': 'HowToStep', name: 'Set up lighting', text: 'Face a large window with daylight. Avoid light behind you and overhead light.' },
    { '@type': 'HowToStep', name: 'Pose correctly', text: 'Face the camera directly, neutral expression, mouth closed, eyes open, no glasses.' },
    { '@type': 'HowToStep', name: 'Take multiple shots', text: 'Take 5-10 photos and pick the best one with even lighting and clear features.' },
    { '@type': 'HowToStep', name: 'Crop to country specifications', text: 'Use a country-specific tool to apply the exact dimensions and face-coverage rules.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I use Portrait mode on iPhone for a passport photo?', acceptedAnswer: { '@type': 'Answer', text: 'No. Portrait mode applies a fake background blur which breaks biometric requirements. Use standard Photo mode at 1x zoom.' } },
    { '@type': 'Question', name: 'What about the iPhone front camera (selfie)?', acceptedAnswer: { '@type': 'Answer', text: 'Avoid it. The front camera has a wider lens that distorts facial features. Use the back camera with someone else taking the shot or with a timer.' } },
    { '@type': 'Question', name: 'Does file format matter?', acceptedAnswer: { '@type': 'Answer', text: 'Most authorities accept JPEG. HEIC (iPhone native) is sometimes rejected, so convert to JPEG: Settings → Camera → Formats → Most Compatible.' } },
    { '@type': 'Question', name: 'What resolution should I aim for?', acceptedAnswer: { '@type': 'Answer', text: 'At least 600x600 pixels for a 2x2 inch print at 300 DPI. iPhone photos are usually 4032x3024, far more than enough.' } },
    { '@type': 'Question', name: 'Can I edit the photo (brightness, color)?', acceptedAnswer: { '@type': 'Answer', text: 'Minor exposure or white-balance correction is generally allowed. Skin smoothing or anything that changes your appearance is not allowed and will cause rejection.' } },
  ],
}

export default function Post() {
  if (!post || !isVisible(SLUG)) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogArticleHead post={post} />

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <p className="text-lg text-gray-600">
          Your iPhone has a better camera than the kiosk at any drugstore. The reason home passport photos
          get rejected is rarely the camera — it&apos;s the setup, the framing, and the crop. This guide
          walks through exactly how to make an iPhone passport photo that passes the first time.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Quick summary</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Camera:</strong> any iPhone from the last 6 years works (iPhone X or newer is ideal)</li>
            <li><strong>Mode:</strong> standard Photo mode at 1x zoom — never Portrait, never zoom in</li>
            <li><strong>Distance:</strong> 4-5 feet from a plain wall, photographer 6 feet from you</li>
            <li><strong>Lighting:</strong> large window in front of you, no light behind</li>
            <li><strong>Edit:</strong> crop and resize using a country-specific tool</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 1: Settings to change before you shoot</h2>
          <p>Open Settings → Camera and check these:</p>
          <p className="mt-3"><strong>Format: High Efficiency or Most Compatible.</strong> Either works. High Efficiency saves space (HEIC), Most Compatible gives standard JPEG. If your photo lab needs JPEG, pick Most Compatible.</p>
          <p className="mt-3"><strong>Preserve Settings → Live Photo: OFF.</strong> Turn off Live Photo before shooting — the motion frame can confuse passport tools.</p>
          <p className="mt-3">In the camera app itself: tap the up-arrow at the top, make sure flash is <strong>OFF</strong>, HDR is <strong>AUTO</strong> or <strong>OFF</strong>, set timer to <strong>3 or 10 seconds</strong> if you&apos;re alone.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 2: Set up the background</h2>
          <p>Find a plain wall — white or very light grey. A blank door also works. Do <strong>not</strong> stand against:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Wallpaper, even if subtle</li>
            <li>A painted wall with visible texture</li>
            <li>Any wall close to a colored object (it reflects)</li>
            <li>A window (the light through it will overexpose)</li>
          </ul>
          <p className="mt-3">Stand <strong>2-3 feet away from the wall</strong>, not pressed against it. This eliminates shadows on the background, which is the single most common reason home passport photos get rejected.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 3: Position the iPhone</h2>
          <p>The iPhone should be <strong>at your eye level</strong> — not below, not above. If it&apos;s below, the camera looks up your nose. If it&apos;s above, your forehead becomes the dominant feature.</p>
          <p className="mt-3">Three ways to hold the camera at eye level:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Tripod with phone mount.</strong> $15 on Amazon. Sets it at exact eye level, hands-free.</li>
            <li><strong>Stack of books on a table.</strong> Place your phone vertically against a stack of books at the right height. Use the timer.</li>
            <li><strong>Another person.</strong> Have someone hold the iPhone at their own eye level (not yours). Tell them to step <strong>6 feet away</strong> — closer than this introduces lens distortion that warps your face.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 4: Lighting</h2>
          <p>The hardest part of a home passport photo is lighting, and the trick is simple: <strong>face a window</strong>.</p>
          <div className="my-6 rounded-xl overflow-hidden border border-gray-200">
            <Image
              src="/blog-images/lighting-diagram.svg"
              alt="Lighting diagram: window in front of subject, plain wall behind, camera at eye level 6 feet away"
              width={800}
              height={450}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Stand 4-5 feet from a large window with daylight (no direct sun)</li>
            <li>The window should be <strong>in front of you</strong>, slightly to one side if you want it to look natural</li>
            <li>The wall behind you should be lit too, but indirectly</li>
          </ul>
          <p className="mt-3">What to avoid:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong>Light behind you:</strong> silhouettes your face, makes the background overexposed</li>
            <li><strong>Light directly above:</strong> creates shadows under the eyes, nose, and chin</li>
            <li><strong>Mixed light sources:</strong> daylight + warm indoor bulbs causes color casts that fail biometric checks</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 5: Pose</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Face directly at the camera (not turned)</li>
            <li>Shoulders level</li>
            <li>Eyes open, looking at the lens</li>
            <li><strong>Mouth closed.</strong> No smile. The US, Canada, EU, India, China, and most other countries reject smiling photos. <Link href="/blog/can-you-smile-in-passport-photo" className="text-blue-600 hover:underline">See the full country breakdown</Link>.</li>
            <li>Glasses <strong>off</strong> (the US has banned glasses in passport photos since 2016)</li>
            <li>Hair pulled away from the face if it covers eyebrows</li>
            <li>No hat, no headband (religious head coverings are usually allowed)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 6: Take multiple shots</h2>
          <p>Take 5-10 photos. Move your head a few millimeters between each. Why?</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Closed eyes show up surprisingly often</li>
            <li>Slight head tilts only become visible later</li>
            <li>One frame will have better lighting than another by accident</li>
            <li>You can pick the cleanest one</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 7: Crop and resize</h2>
          <p>This is where home passport photos most often go wrong, even with great photography. Each country has specific dimensions and face-coverage rules:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li><Link href="/us-passport-photo" className="text-blue-600 hover:underline">US</Link>: 51×51mm (2×2 inches), face takes 50-69% of the frame</li>
            <li><Link href="/uk-passport-photo" className="text-blue-600 hover:underline">UK</Link>: 35×45mm, face takes 50-75% of the frame</li>
            <li><Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Schengen</Link>: 35×45mm, face takes 70-80% of the frame</li>
            <li><Link href="/india-passport-photo" className="text-blue-600 hover:underline">India</Link>: 51×51mm, face takes 70-80% of the frame</li>
            <li><Link href="/canada-passport-photo" className="text-blue-600 hover:underline">Canada</Link>: 50×70mm, chin-to-crown 31-36mm</li>
          </ul>
          <p className="mt-3">Manually cropping in Photos to match these is tedious and error-prone. The free way: use a tool that auto-detects your face and applies the correct country-specific crop. <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> is one option built for this exact use case — runs in your browser (no upload), supports 85+ countries, and produces a print-ready file.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Step 8: Print or upload</h2>
          <p>If your application is online (UK, India, US for some forms), upload the digital file directly. Check the file size limit — many systems require under 240KB or 1MB.</p>
          <p className="mt-3">If you need a printed photo, see our <Link href="/blog/print-passport-photo-at-home" className="text-blue-600 hover:underline">guide to printing at home or at a lab for under $1</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common mistakes (and how to fix them)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Mistake</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Background too dark', 'Stand 2-3 feet from wall; add light from another angle'],
                  ['Shadows under chin', 'Add a second light source low and in front of you'],
                  ['Eyes closed in best shot', 'Take 10 photos, pick the one with eyes wide open'],
                  ['Face too small in frame', 'Move camera closer or crop tighter'],
                  ['Slight smile', 'Take more shots and use one with neutral expression'],
                  ['Glare on glasses', 'Remove glasses entirely (rules require it in many countries)'],
                  ['Background not white', <>Use a free <Link key="bg" href="/remove-background" className="text-blue-600 hover:underline">background removal tool</Link>, or stand against a different wall</>],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 border border-gray-200">{row[0]}</td>
                    <td className="py-3 px-4 border border-gray-200">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I use Portrait mode on iPhone for a passport photo?</p>
              <p>No. Portrait mode applies a fake background blur which breaks biometric requirements. Use standard Photo mode at 1x zoom.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What about the iPhone front camera (selfie)?</p>
              <p>Avoid it. The front camera has a wider lens that distorts facial features (this is why selfies look strange). Use the back camera with someone else taking the shot or with a timer.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Does file format matter?</p>
              <p>Most authorities accept JPEG. Some accept PNG. HEIC (iPhone&apos;s native format) is sometimes rejected, so convert to JPEG before submitting. iPhone can do this automatically — Settings → Camera → Formats → Most Compatible.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What resolution should I aim for?</p>
              <p>At least 600×600 pixels for a 2×2 inch print at 300 DPI. iPhone photos are usually 4032×3024 — far more than enough.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I edit the photo (brightness, color)?</p>
              <p>Minor exposure or white-balance correction is generally allowed. Skin smoothing, removing blemishes, or anything that changes your appearance is <strong>not</strong> allowed and will cause rejection.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            Once you have the file, <Link href="/" className="text-blue-600 hover:underline">crop and resize it for your country</Link> — that&apos;s the step where most home passport photos actually go wrong, even with perfect photography.
          </p>
        </div>

        <RelatedGuides slugs={[
          'why-was-my-passport-photo-rejected',
          'how-to-take-passport-photo-at-home',
          'print-passport-photo-at-home',
          'us-passport-photo-requirements-2026',
        ]} />
      </div>
    </article>
  )
}
