import type { MetadataRoute } from 'next'
import { countries } from '@/lib/countries'

const BASE_URL = 'https://idphotosnap.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const countryPages = countries.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...countryPages,
  ]
}
