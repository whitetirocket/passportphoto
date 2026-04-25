import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Passport Photo Tips & Guides | PassportPhotoSnap Blog',
  description: 'Tips, guides, and requirements for passport and visa photos. Learn how to take a perfect passport photo at home.',
}

const posts = [
  {
    slug: 'how-to-take-passport-photo-at-home',
    title: 'How to Take a Passport Photo at Home (Step-by-Step Guide)',
    description: 'Save $15–20 by taking your own passport photo at home. Here is exactly how to do it right — background, lighting, pose, and common mistakes to avoid.',
    date: 'April 2026',
    readTime: '5 min read',
  },
  {
    slug: 'passport-photo-requirements-by-country',
    title: 'Passport Photo Requirements by Country: Complete Guide 2026',
    description: 'A comprehensive guide to passport photo size, background, and biometric requirements for the US, UK, Canada, Australia, India, EU, UAE, and more.',
    date: 'April 2026',
    readTime: '8 min read',
  },
  {
    slug: 'can-you-smile-in-passport-photo',
    title: 'Can You Smile in a Passport Photo?',
    description: 'The short answer is: it depends on the country. Here is a detailed breakdown of which countries allow smiling and which require a neutral expression.',
    date: 'April 2026',
    readTime: '3 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Passport Photo Guides</h1>
      <p className="text-gray-600 mb-10">Tips and requirements for passport and visa photos.</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
          >
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{post.description}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
