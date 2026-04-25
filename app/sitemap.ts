import type { MetadataRoute } from 'next'
import { allCountries } from '@/lib/countries'

const BASE_URL = 'https://idphotosnap.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const countryPages = allCountries.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPosts = [
    'how-to-take-passport-photo-at-home',
    'passport-photo-requirements-by-country',
    'can-you-smile-in-passport-photo',
    'passport-photo-size-guide',
    'white-background-passport-photo',
    'print-passport-photo-at-home',
  ].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...countryPages,
    ...blogPosts,
  ]
}
