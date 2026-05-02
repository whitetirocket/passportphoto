import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import AdUnit from '@/components/AdUnit'
import { allCountries } from '@/lib/countries'

export const metadata: Metadata = {
  title: 'Passport Photo Rejected? Free Fix in 30 Seconds | IDPhotoSnap',
  description:
    'Why portals reject your passport photo - file size, DPI, background, format. Fix every issue in your browser. Free, no signup, no upload.',
  alternates: { canonical: '/fix/photo-rejected-passport' },
  openGraph: {
    title: 'Passport Photo Rejected? Free Fix in 30 Seconds',
    description:
      'Why portals reject passport photos and how to fix every reason in your browser. Free, no signup.',
    type: 'article',
    url: 'https://idphotosnap.com/fix/photo-rejected-passport',
    images: [{ url: 'https://idphotosnap.com/hero-rejected.png', width: 1731, height: 909 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Passport Photo Rejected? Free Fix in 30 Seconds',
    description:
      'Why portals reject passport photos and how to fix every reason in your browser.',
    images: ['https://idphotosnap.com/hero-rejected.png'],
  },
}

const FEATURED_COUNTRY_IDS = [
  'us', 'uk', 'canada', 'australia',
  'india', 'schengen', 'germany', 'france',
]

const REASONS = [
  {
    n: 1,
    title: 'The file is too large',
    body: 'Most embassy portals cap uploads at 240 KB to 2 MB. Phone photos are 4 to 8 MB by default - they get rejected before the portal even checks the picture.',
  },
  {
    n: 2,
    title: 'The file is too small',
    body: 'A few systems reject anything under 60 KB. They assume the image is too compressed to verify identity.',
  },
  {
    n: 3,
    title: 'The dimensions are wrong',
    body: 'India wants 2×2 inches at 600×600 px. Schengen visa wants 35×45 mm. The US passport portal wants exactly 600×600 px. A photo that passes for one country will fail for another.',
  },
  {
    n: 4,
    title: 'DPI is below 300',
    body: 'Phones save photos at 72 DPI. Embassy print pipelines require 300. The pixel content can be identical - the metadata flag is what trips the validator.',
  },
  {
    n: 5,
    title: 'The file is not a JPG',
    body: 'iPhones shoot HEIC by default. Android sometimes saves WebP. Most government portals only accept JPG or JPEG. PNG is rejected by about half of them.',
  },
  {
    n: 6,
    title: 'The background is not pure white',
    body: 'Off-white walls, soft shadows behind you, gradients from window light - all of these trigger background validators. The required colour is RGB 255,255,255 with no variation.',
  },
  {
    n: 7,
    title: 'Shadow on your face',
    body: 'Side lighting puts shadow under one eye or under your nose. Strong overhead lighting creates dark eye sockets. Validators flag both.',
  },
  {
    n: 8,
    title: 'Expression, glasses, or hair',
    body: 'Smiles, open mouth, glasses (banned in most countries since 2016), hair covering eyebrows, head tilt above 5°. These are content rules, not file rules - you will need to retake the photo.',
  },
]

const FAQS = [
  {
    q: 'Why was my photo rejected if it looked fine to me?',
    a: 'The portal checks the file, not the picture. Size, DPI, format, and dimensions are all checked before any human sees the image. Most rejections are mechanical, not aesthetic.',
  },
  {
    q: 'Can I just retake the photo with my phone?',
    a: 'Yes, but the same file issues will come back. Phones save HEIC at 72 DPI in 4 to 6 MB - that fails three checks at once. You still need to convert and resize.',
  },
  {
    q: 'Is there one tool that fixes all of these?',
    a: 'Yes - upload your photo into the IDPhotoSnap tool. It detects every issue and fixes them in one pass for the country you select.',
  },
  {
    q: 'Do passport photos really need 300 DPI on the file?',
    a: 'For most online portals, yes. DPI is a metadata tag in the JPG. Changing it does not reduce quality - it just relabels the image as print-ready.',
  },
  {
    q: 'Will compressing the file lower the resolution?',
    a: 'Smart compression keeps pixel dimensions and lowers JPG quality. The image still meets pixel requirements. Resizing is what reduces resolution - those are different operations.',
  },
  {
    q: 'Can I use a screenshot of myself?',
    a: 'No. Screenshots strip metadata, lower DPI, and often have wrong dimensions. Embassy validators reject them.',
  },
  {
    q: 'The portal accepted the upload, but the embassy rejected the photo at the appointment. Why?',
    a: 'Online validators check files. Officers check content - shadows, expression, glasses, head tilt. A file can be perfect and still fail in person.',
  },
  {
    q: 'My photo was rejected without an error message. How do I know what is wrong?',
    a: 'Use the IDPhotoSnap tool below. It runs all 8 checks and tells you which ones the file fails.',
  },
]

export default function PhotoRejectedHub() {
  const featured = FEATURED_COUNTRY_IDS
    .map((id) => allCountries.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://idphotosnap.com/' },
      { '@type': 'ListItem', position: 2, name: 'Fix', item: 'https://idphotosnap.com/fix' },
      { '@type': 'ListItem', position: 3, name: 'Photo Rejected' },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://idphotosnap.com/fix/photo-rejected-passport',
    name: 'Passport Photo Rejected? Free Fix in 30 Seconds',
    description:
      'Why portals reject passport photos - file size, DPI, background, format. Fix every issue in your browser.',
    inLanguage: 'en',
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Script id="rejected-faq-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="rejected-breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="rejected-webpage-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(webPageSchema)}
      </Script>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center gap-2 flex-wrap">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li>Fix</li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">Photo Rejected</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="text-center mb-10">
        <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          ⚠ Photo rejected
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Passport photo rejected? Here is why - and how to fix it
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          You uploaded the photo to the official portal, and it threw an error.
          This page tells you which rule the file broke - and gives you a fix
          that takes 30 seconds in your browser.
        </p>
        <div className="flex justify-center">
          <Image
            src="/hero-rejected.png"
            alt="Passport photo marked as rejected with a red cross"
            width={520}
            height={273}
            priority
            className="rounded-2xl"
          />
        </div>
      </header>

      <div className="flex justify-center mb-10">
        <AdUnit format="leaderboard" />
      </div>

      {/* CTA card pointing to the tool */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
          Drop your rejected photo - we will fix every issue
        </h2>
        <p className="text-blue-800 mb-5 max-w-xl mx-auto">
          Resize, change DPI to 300, convert HEIC to JPG, replace background, compress
          to portal limits. All in your browser. Nothing is uploaded.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full transition-colors"
        >
          Fix my photo now →
        </Link>
      </section>

      {/* 8 reasons */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          The 8 most common rejection reasons
        </h2>
        <p className="text-gray-600 mb-8">
          About 90% of rejections come from file properties, not the picture itself.
          Here is the full list, in order of how often we see them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REASONS.map((r) => (
            <article
              key={r.n}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center text-sm font-bold">
                  {r.n}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mb-14">
        <AdUnit format="responsive" />
      </div>

      {/* By country */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Fix it for your country
        </h2>
        <p className="text-gray-600 mb-8">
          Different countries enforce different size, DPI, and background rules.
          Pick yours - we apply every requirement automatically.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((c) => (
            <Link
              key={c.id}
              href={`/${c.documents[0].slug}`}
              className="flex items-center gap-3 bg-white border border-gray-100 hover:border-blue-300 hover:shadow-md rounded-xl p-4 transition-all"
            >
              <span className="text-2xl">{c.flag}</span>
              <span className="font-medium text-gray-800">{c.name}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-5 text-center">
          Need another country?{' '}
          <Link href="/" className="text-blue-600 hover:underline">
            See all countries →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-5 open:shadow-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Still rejected?
        </h2>
        <p className="text-gray-600 mb-5 max-w-xl mx-auto">
          Drop the photo into IDPhotoSnap. It checks every requirement for your
          country and fixes the file in your browser - no signup, no upload.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full transition-colors"
        >
          Open the photo tool →
        </Link>
      </section>

      <div className="flex justify-center">
        <AdUnit format="rectangle" />
      </div>
    </div>
  )
}
