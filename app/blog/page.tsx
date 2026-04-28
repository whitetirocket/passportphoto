import type { Metadata } from 'next'
import Link from 'next/link'
import { visiblePosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Passport Photo Tips & Guides | IDPhotoSnap Blog',
  description:
    'Tips, guides, and requirements for passport and visa photos. Learn how to take a perfect passport photo at home.',
  alternates: { canonical: 'https://idphotosnap.com/blog' },
  openGraph: {
    title: 'Passport Photo Tips & Guides | IDPhotoSnap Blog',
    description:
      'Tips, guides, and requirements for passport and visa photos. Learn how to take a perfect passport photo at home.',
    type: 'website',
    url: 'https://idphotosnap.com/blog',
  },
}

// Re-render the index every 30 minutes so scheduled posts appear without a redeploy.
export const revalidate = 1800

export default function BlogPage() {
  const posts = visiblePosts()

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
