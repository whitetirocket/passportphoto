import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPost, isVisible } from '@/lib/blog-posts'
import BlogArticleHead from '@/components/BlogArticleHead'
import RelatedGuides from '@/components/RelatedGuides'

const SLUG = 'why-was-my-passport-photo-rejected'
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
    { '@type': 'Question', name: 'What is the most common reason passport photos get rejected?', acceptedAnswer: { '@type': 'Answer', text: 'Shadows on the background, caused by standing too close to the wall. Stand 2-3 feet away and the issue disappears.' } },
    { '@type': 'Question', name: 'Can I wear glasses in a passport photo?', acceptedAnswer: { '@type': 'Answer', text: 'No in most countries. The US banned glasses in passport photos in November 2016. The UK, EU, India, and most Asian countries followed similar rules. Only a documented medical exemption allows them.' } },
    { '@type': 'Question', name: 'What if my photo was already rejected?', acceptedAnswer: { '@type': 'Answer', text: 'Read the rejection notice for the error code, then take a new photo at home using the diagnostic checklist. Avoid retaking at the same place that produced the rejection.' } },
    { '@type': 'Question', name: 'Why do drugstore kiosk photos get rejected?', acceptedAnswer: { '@type': 'Answer', text: 'Drugstore kiosks use older cameras under harsh fluorescent light, with no real photographer reviewing the result. The State Department flags these in its guidance.' } },
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
          A rejected passport photo is the most preventable delay in any application. Government rejection
          letters rarely tell you exactly what was wrong - just that it failed. This guide goes through the
          ten reasons that account for almost all rejections, in order of how often they happen.
        </p>

        <Reason
          n={1}
          title="Shadows on the background"
          intro="This is the #1 cause of rejection by a wide margin. When you stand close to a wall, your body casts a shadow on it. To a biometric system, that shadow looks like a non-uniform background, which is grounds for automatic rejection."
          fix="Stand 2-3 feet away from the wall. Use a side light source if needed. The background should be uniform white or off-white in every pixel."
          check="Open the photo, look at the four corners of the background. They should be the same color. If the side closest to you is darker, you have shadow."
        />

        <Reason
          n={2}
          title="Wrong dimensions or face size"
          intro="Each country has specific dimensions. Submitting a 2×2 inch US format photo for a UK application will fail - the UK requires 35×45mm, and the face must occupy a different percentage of the frame."
          fix="Crop to the exact specs of your destination country. Don't approximate. The image processing tools that handle this automatically are free and take 10 seconds."
        >
          <p className="mt-3"><strong>Quick reference:</strong></p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><Link href="/us-passport-photo" className="text-blue-600 hover:underline">US</Link>: 51×51mm, face 50-69%</li>
            <li><Link href="/uk-passport-photo" className="text-blue-600 hover:underline">UK</Link>: 35×45mm, face 50-75%</li>
            <li><Link href="/schengen-visa-photo" className="text-blue-600 hover:underline">Schengen / EU</Link>: 35×45mm, face 70-80%</li>
            <li><Link href="/canada-passport-photo" className="text-blue-600 hover:underline">Canada</Link>: 50×70mm, chin-to-crown 31-36mm</li>
            <li><Link href="/india-passport-photo" className="text-blue-600 hover:underline">India</Link>: 51×51mm, face 70-80%</li>
          </ul>
        </Reason>

        <Reason
          n={3}
          title="The face is not centered"
          intro="The face needs to be centered horizontally and at the correct vertical position. Most countries want the eyes at roughly 56-65% from the bottom of the photo. A photo where you're slightly off to one side, or where the chin is too close to the bottom edge, gets rejected even if everything else is perfect."
          fix="When shooting, place the camera at exact eye level (not above, not below). When cropping, use a tool that auto-centers based on detected eyes."
        />

        <Reason
          n={4}
          title="Smiling, frowning, or an open mouth"
          intro="Almost all countries require a neutral expression with mouth closed. The US, Canada, India, China, EU, Japan, Australia all reject smiling photos. The UK technically allows a slight natural smile - but a wide or toothy smile will still be rejected."
          fix={<>Take 5-10 shots. Pick the one where your mouth is closed and your face looks relaxed. <Link href="/blog/can-you-smile-in-passport-photo" className="text-blue-600 hover:underline">See the full country-by-country breakdown</Link>.</>}
        />

        <Reason
          n={5}
          title="Eyes not visible"
          intro="Eyes must be wide open (not blinking), looking directly at the camera, not covered by hair, eyelashes, or glasses frames, and not obscured by glare on glasses."
          fix="Glasses off. Hair pulled back from the face. Eyes deliberately wide open at the moment of the shot."
        />

        <Reason
          n={6}
          title="Glare on glasses (or glasses still on)"
          intro="The US banned glasses in passport photos in November 2016. The UK followed. Most of Europe and Asia have similar rules now. If you wore glasses anyway, glare on the lenses, frames blocking eyes, or any reflection in the lens will cause rejection."
          fix="Remove glasses for the photo. If you have a medical exemption, get a doctor's letter and submit it with the application."
        />

        <Reason
          n={7}
          title="Wrong background color"
          intro="Most countries require white or off-white. Even within white requirements, a slightly cream wall will sometimes get flagged. Pure white is safest. Notable exceptions include Finland (light grey) and historically Indonesia (red, currently moving to white)."
          fix={<>If your background is even slightly off, use a free <Link href="/remove-background" className="text-blue-600 hover:underline">background removal tool</Link> to replace it with pure white before submitting.</>}
        />

        <Reason
          n={8}
          title="Photo is too dark, too bright, or has color cast"
          intro="Biometric algorithms need clearly defined facial features. Both extremes prevent that. Common signs: facial features merge into shadow (too dark), skin looks washed out (too bright), or the photo has an orange tint (warm indoor lighting) or blue tint (mixed daylight)."
          fix="Shoot in even daylight (large window, soft natural light, no direct sun). Avoid mixing daylight with yellow indoor lamps."
        />

        <Reason
          n={9}
          title="Image quality is too low"
          intro="Modern submissions need at least 600×600 pixels (for a 2×2 inch print at 300 DPI), sharp focus, no motion blur, no visible noise or grain, and no JPEG compression artifacts. A photo from any iPhone or Android phone in the last 5 years easily meets the resolution requirement - the issue is usually motion blur."
          fix="Use a tripod or stable surface. Save the final file at high quality (JPEG quality 90+ if you have to compress)."
        />

        <Reason
          n={10}
          title="Wrong file format or size for upload"
          intro="If your application is online, the rejection might happen before a human ever sees the photo. Common issues: wrong file format (HEIC instead of JPEG), file too large (over 240KB or 1MB depending on system), file too small (under 50KB suggests low quality), or wrong color profile (CMYK instead of sRGB)."
          fix="Export the final photo as JPEG, sRGB, with quality high enough to meet the system's lower bound but compressed enough to fit the upper bound. Most online applications give a target file size - meet it exactly."
        />

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to verify your photo before submitting</h2>
          <p>Run this checklist before you submit anything:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li>Background is pure white (no shadow, no texture, no color tint)</li>
            <li>Face fills the correct percentage of the frame for your country</li>
            <li>Eyes open, looking at camera, not covered</li>
            <li>Mouth closed, neutral expression</li>
            <li>No glasses (or medical exemption letter ready)</li>
            <li>Shoulders square, head not tilted</li>
            <li>No hat, no headband (religious exceptions allowed)</li>
            <li>Hair not over face</li>
            <li>Image is sharp, not blurry</li>
            <li>Dimensions match country spec</li>
            <li>File format is JPEG, sRGB color profile</li>
            <li>File size within the system&apos;s range</li>
          </ul>
          <p className="mt-3">If all 12 boxes are checked, your rejection rate is below 5%.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What to do if your photo was already rejected</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Read the rejection notice carefully.</strong> Many notices include a numeric error code - match it to the issue above.</li>
            <li><strong>Don&apos;t retake the photo at the same place.</strong> If you used a CVS kiosk that produced a rejection, don&apos;t go back - try a different setup.</li>
            <li><strong>Take it at home with this guide:</strong> <Link href="/blog/how-to-take-passport-photo-with-iphone" className="text-blue-600 hover:underline">How to take a passport photo with iPhone</Link>.</li>
            <li><strong>Use a country-specific tool to crop.</strong> Don&apos;t manually estimate dimensions. <Link href="/" className="text-blue-600 hover:underline">IDPhotoSnap</Link> handles exact specs for 85+ countries.</li>
          </ol>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-sm text-gray-500">
            A rejected passport photo wastes 1-3 weeks. The setup that prevents it takes 10 minutes. The math is overwhelming in favor of doing it right the first time.
          </p>
        </div>

        <RelatedGuides slugs={[
          'how-to-take-passport-photo-with-iphone',
          'can-you-smile-in-passport-photo',
          'white-background-passport-photo',
          'us-passport-photo-requirements-2026',
        ]} />
      </div>
    </article>
  )
}

function Reason({
  n,
  title,
  intro,
  fix,
  check,
  children,
}: {
  n: number
  title: string
  intro: string
  fix: React.ReactNode
  check?: string
  children?: React.ReactNode
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        {n}. {title}
      </h2>
      <p>{intro}</p>
      <p className="mt-3"><strong>The fix:</strong> {fix}</p>
      {check && <p className="mt-3"><strong>How to check:</strong> {check}</p>}
      {children}
    </section>
  )
}
