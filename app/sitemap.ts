import type { MetadataRoute } from 'next'
import { allDocuments } from '@/lib/countries'
import { visiblePosts } from '@/lib/blog-posts'

const BASE_URL = 'https://idphotosnap.com'

// Re-evaluate sitemap every 30 minutes so scheduled posts appear at the right time.
export const revalidate = 1800

export default function sitemap(): MetadataRoute.Sitemap {
  const documentPages = allDocuments.map((d) => ({
    url: `${BASE_URL}/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogEntries = visiblePosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/remove-background`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...documentPages,
    ...blogEntries,
  ]
}
