import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">📷</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        This page doesn&apos;t exist. Maybe you&apos;re looking for a passport photo tool?
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
