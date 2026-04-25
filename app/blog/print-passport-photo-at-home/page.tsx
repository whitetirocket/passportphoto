import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Print Passport Photo at Home — Step-by-Step 2026',
  description: 'Print your own passport photo at home or at a photo lab for under $1. Download our print-ready PDF with 6 photos per A4 sheet. No special software needed.',
}

export default function Post() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">← All guides</Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
        How to Print a Passport Photo at Home (or at a Lab for Under $1)
      </h1>
      <p className="text-sm text-gray-400 mb-8">April 2026 · 5 min read</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <p className="text-lg text-gray-600">
          Printing your own passport photo saves $10–20 compared to pharmacy kiosks.
          Here is exactly how to do it — at home with a photo printer, or at a local lab
          for cents using our print-ready PDF.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 1: Print at Home</h2>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">What you need</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>An inkjet or laser printer (any brand)</li>
            <li>Glossy or semi-glossy photo paper (4×6 inch or A4)</li>
            <li>Our free passport photo tool</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Steps</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Create your photo</strong> — use the tool below, select your country,
              upload and crop your photo, then click &quot;Download PDF&quot;. You will get a PDF
              with multiple copies of your photo arranged to fill an A4 sheet.
            </li>
            <li>
              <strong>Load photo paper</strong> — use glossy photo paper for the best result.
              Matte paper works but looks less professional.
            </li>
            <li>
              <strong>Print at actual size</strong> — in your PDF viewer, make sure scaling
              is set to &quot;Actual size&quot; or 100%, not &quot;Fit to page&quot;. This is critical —
              wrong scaling means wrong dimensions.
            </li>
            <li>
              <strong>Cut with scissors or a craft knife</strong> — use a ruler for straight edges.
              Most applications just need the photo to be within ±1mm of the required size.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Option 2: Print at a Photo Lab (Recommended)</h2>
          <p>
            Send the PDF to a local photo lab or online printing service. Cost is typically
            $0.20–$0.50 for a 4×6 print, which gives you 4–8 passport photos depending on the country.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Where to print</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>CVS, Walgreens, Walmart</strong> — photo printing kiosk, ~$0.29/4×6</li>
            <li><strong>Costco Photo Center</strong> — best quality, ~$0.17/4×6</li>
            <li><strong>Shutterfly, Snapfish</strong> — online, delivered in 2–3 days</li>
            <li><strong>Any local print shop</strong> — ask for a 4×6 photo print</li>
          </ul>

          <p className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
            Tell the lab to print at <strong>actual size (100%)</strong>, not &quot;fit to paper&quot;.
            This ensures the dimensions stay correct.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Paper Requirements</h2>
          <p>Most countries accept photos printed on glossy or matte photo paper. Requirements:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Paper must be photo-quality (not regular printer paper)</li>
            <li>No creases, tears, or marks on the photo</li>
            <li>Colors must be accurate — avoid faded or oversaturated prints</li>
            <li>US: USCIS specifically requires photo-quality paper</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How Many Photos Do I Need?</h2>
          <p>
            This varies by document and country. Typical requirements:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>US Passport (new): 1 photo</li>
            <li>US Passport (renewal by mail): 1 photo</li>
            <li>UK Passport: 2 photos</li>
            <li>Canada Passport: 2 photos</li>
            <li>Schengen Visa: 2 photos (some embassies require 3–4)</li>
            <li>India Passport: 3–5 photos depending on application type</li>
          </ul>
          <p className="mt-3">
            Our PDF sheet gives you 6–8 copies per print, so one print is enough for most applications.
          </p>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-2">Download Your Print-Ready PDF</p>
          <p className="text-sm text-blue-800 mb-4">
            Select your country, upload your photo, crop, and click &quot;Download PDF&quot;.
            You get a print-ready sheet with multiple photos. Free, no registration.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Create Print-Ready Passport Photo →
          </Link>
        </div>

      </div>
    </div>
  )
}
