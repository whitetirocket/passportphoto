import type { Metadata } from 'next'
import Link from 'next/link'
import { countries } from '@/lib/countries'

export const metadata: Metadata = {
  title: 'About | PassportPhotoSnap — Free Passport Photo Maker',
  description: 'Learn about PassportPhotoSnap — a free, private, browser-based passport photo tool. No registration, no watermarks, no uploads.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About PassportPhotoSnap</h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <p className="text-lg text-gray-600">
            PassportPhotoSnap is a free online tool that helps you create compliant passport and visa
            photos in seconds — without registration, without watermarks, and without uploading your
            photo to any server.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Why We Built This</h2>
          <p>
            Getting a passport photo shouldn&apos;t cost $10. Most online services charge for the final
            download, show watermarks, or require you to create an account just to crop a photo.
          </p>
          <p className="mt-3">
            We built PassportPhotoSnap to be the tool we always wanted: free, instant, and respectful
            of your privacy. Your photo never leaves your device — all processing happens in your
            browser using the Canvas API.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Select your country or document type</li>
            <li>Upload your photo (JPG, PNG, or WEBP)</li>
            <li>Crop and adjust using the interactive tool — aspect ratio is locked automatically</li>
            <li>Download as a JPG file or a print-ready PDF with multiple photos per page</li>
          </ol>
          <p className="mt-4">
            The downloaded photo meets the exact pixel dimensions and aspect ratio required for your
            country. Print it at home or at any photo lab.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Supported Countries</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {countries.map((c) => (
              <Link
                key={c.id}
                href={`/${c.documents[0].slug}`}
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">More countries coming soon.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Privacy</h2>
          <p>
            Your photos are processed entirely in your browser. We cannot see your photos, store
            them, or share them. When you close the tab, they are gone.
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="text-blue-600 hover:underline">Read our full Privacy Policy →</Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>
            Have a question, found a bug, or need a country added?{' '}
            <a href="mailto:hello@passportphotosnap.com" className="text-blue-600 hover:underline">
              hello@passportphotosnap.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
