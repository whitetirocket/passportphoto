import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/lib/blog-posts'

const BASE_URL = 'https://idphotosnap.com'

interface Props {
  post: BlogPost
}

/**
 * Renders the breadcrumb, title, hero image, and Article JSON-LD schema
 * shared by every long-form blog article.
 */
export default function BlogArticleHead({ post }: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [
      {
        '@type': 'ImageObject',
        url: `${BASE_URL}${post.ogImage}`,
        width: 1200,
        height: 630,
        caption: post.imageAlt,
      },
    ],
    datePublished: post.publishAt,
    dateModified: post.publishAt,
    author: { '@type': 'Organization', name: 'IDPhotoSnap', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'IDPhotoSnap',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.png`,
        width: 240,
        height: 240,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-blue-600 hover:underline">
          ← All guides
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {post.date} · {post.readTime}
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-200 mb-8">
        <Image
          src={post.ogImage}
          alt={post.imageAlt}
          width={1200}
          height={630}
          priority
          className="w-full h-auto"
        />
      </div>
    </>
  )
}
