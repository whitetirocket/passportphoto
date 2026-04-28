import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Passport Photo Tips & Guides | IDPhotoSnap Blog',
  description: 'Tips, guides, and requirements for passport and visa photos. Learn how to take a perfect passport photo at home.',
}

const posts = [
  {
    slug: 'live-on-product-hunt',
    title: "We're Live on Product Hunt Today",
    description: "After several months of building, IDPhotoSnap is officially on Product Hunt. Here's why we built it, what it does, and what's next on the roadmap.",
    date: 'April 28, 2026',
    readTime: '3 min read',
  },
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
  {
    slug: 'passport-photo-size-guide',
    title: 'Passport Photo Size Guide: mm, Inches & Pixels for Every Country',
    description: 'US: 2×2 inch (51×51mm), UK: 35×45mm, Canada: 50×70mm, China: 33×48mm. Complete size reference with pixel dimensions at 300 DPI for printing.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: 'white-background-passport-photo',
    title: 'Why Passport Photos Need a White Background — Rules Explained',
    description: 'Why white? Which countries are exceptions (Finland: grey, Indonesia: red)? And how to fix your background for free before your application.',
    date: 'April 2026',
    readTime: '4 min read',
  },
  {
    slug: 'print-passport-photo-at-home',
    title: 'How to Print a Passport Photo at Home (or at a Lab for Under $1)',
    description: 'Download a print-ready PDF with 6 photos per A4. Step-by-step guide for home printing and photo labs. Save $10–20 vs pharmacy kiosks.',
    date: 'April 2026',
    readTime: '5 min read',
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
