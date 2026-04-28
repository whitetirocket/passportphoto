/**
 * Central registry of blog posts.
 *
 * `publishAt` is an ISO timestamp; the post is hidden from sitemap, blog index,
 * and direct access until the current time passes it. Vercel revalidation
 * (set on each blog page) makes scheduled posts appear without a redeploy.
 */

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string // human-readable, e.g. 'April 29, 2026'
  readTime: string
  publishAt: string // ISO timestamp
  ogImage: string // path under /public, e.g. '/blog-images/iphone-hero.png'
  imageAlt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'live-on-product-hunt',
    title: "We're Live on Product Hunt Today",
    description:
      "After several months of building, IDPhotoSnap is officially on Product Hunt. Here's why we built it, what it does, and what's next on the roadmap.",
    date: 'April 28, 2026',
    readTime: '3 min read',
    publishAt: '2026-04-28T10:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'IDPhotoSnap on Product Hunt — free passport photo maker for 85+ countries',
  },
  {
    slug: 'how-to-take-passport-photo-with-iphone',
    title: 'How to Take a Passport Photo with iPhone (2026 Step-by-Step)',
    description:
      'Use your iPhone to take a passport photo that meets official requirements. Step-by-step setup, camera settings, common mistakes, and how to crop for free.',
    date: 'April 29, 2026',
    readTime: '6 min read',
    publishAt: '2026-04-29T13:42:00Z',
    ogImage: '/blog-images/iphone-hero.png',
    imageAlt:
      'iPhone passport photo setup — phone on tripod, person facing window with natural light, plain wall behind',
  },
  {
    slug: 'why-was-my-passport-photo-rejected',
    title: 'Why Was My Passport Photo Rejected? Top 10 Reasons (2026)',
    description:
      "Most passport photo rejections come down to 10 specific issues. Each one is fixable in 2 minutes. Here's the full diagnostic checklist with examples.",
    date: 'May 1, 2026',
    readTime: '7 min read',
    publishAt: '2026-05-01T19:08:00Z',
    ogImage: '/blog-images/rejected-hero.png',
    imageAlt:
      'Rejected passport photo example with red REJECTED stamp and the most common reasons listed: shadow on background, glasses on, slight smile, wrong dimensions',
  },
  {
    slug: 'us-passport-photo-requirements-2026',
    title: 'US Passport Photo Requirements 2026 (Complete Guide)',
    description:
      'Every official US passport photo requirement for 2026. Size, background color, head size, expression rules, glasses, and exact specifications from the State Department.',
    date: 'May 3, 2026',
    readTime: '8 min read',
    publishAt: '2026-05-03T10:24:00Z',
    ogImage: '/blog-images/us-hero.png',
    imageAlt:
      'US passport photo specifications: 51 by 51 mm (2 by 2 inches), face occupies 50 to 69 percent of frame, pure white background, neutral expression, no glasses',
  },
  {
    slug: 'best-free-passport-photo-apps-2026',
    title: 'Best Free Passport Photo Apps 2026 (Honest Comparison)',
    description:
      'We compared the major free and paid passport photo tools for 2026. Real prices, privacy practices, country coverage, and the actual catch with each "free" option.',
    date: 'May 5, 2026',
    readTime: '9 min read',
    publishAt: '2026-05-05T17:53:00Z',
    ogImage: '/blog-images/comparison-hero.png',
    imageAlt:
      'Comparison of passport photo apps: IDPhotoSnap (free, browser-based), Passport Photo Online ($10-15), PhotoAiD ($5-10), drugstore kiosks ($15-17), free apps with ads',
  },
  {
    slug: 'how-to-take-passport-photo-at-home',
    title: 'How to Take a Passport Photo at Home (Step-by-Step Guide)',
    description:
      'Save $15–20 by taking your own passport photo at home. Here is exactly how to do it right — background, lighting, pose, and common mistakes to avoid.',
    date: 'April 2026',
    readTime: '5 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'How to take a passport photo at home',
  },
  {
    slug: 'passport-photo-requirements-by-country',
    title: 'Passport Photo Requirements by Country: Complete Guide 2026',
    description:
      'A comprehensive guide to passport photo size, background, and biometric requirements for the US, UK, Canada, Australia, India, EU, UAE, and more.',
    date: 'April 2026',
    readTime: '8 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'Passport photo requirements by country',
  },
  {
    slug: 'can-you-smile-in-passport-photo',
    title: 'Can You Smile in a Passport Photo?',
    description:
      'The short answer is: it depends on the country. Here is a detailed breakdown of which countries allow smiling and which require a neutral expression.',
    date: 'April 2026',
    readTime: '3 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'Can you smile in a passport photo',
  },
  {
    slug: 'passport-photo-size-guide',
    title: 'Passport Photo Size Guide: mm, Inches & Pixels for Every Country',
    description:
      'US: 2×2 inch (51×51mm), UK: 35×45mm, Canada: 50×70mm, China: 33×48mm. Complete size reference with pixel dimensions at 300 DPI for printing.',
    date: 'April 2026',
    readTime: '4 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'Passport photo size guide for all countries',
  },
  {
    slug: 'white-background-passport-photo',
    title: 'Why Passport Photos Need a White Background — Rules Explained',
    description:
      'Why white? Which countries are exceptions (Finland: grey, Indonesia: red)? And how to fix your background for free before your application.',
    date: 'April 2026',
    readTime: '4 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'Why passport photos need a white background',
  },
  {
    slug: 'print-passport-photo-at-home',
    title: 'How to Print a Passport Photo at Home (or at a Lab for Under $1)',
    description:
      'Download a print-ready PDF with 6 photos per A4. Step-by-step guide for home printing and photo labs. Save $10–20 vs pharmacy kiosks.',
    date: 'April 2026',
    readTime: '5 min read',
    publishAt: '2026-04-01T00:00:00Z',
    ogImage: '/IDPhotoSnap.png',
    imageAlt: 'How to print a passport photo at home',
  },
]

/**
 * Returns posts visible at the given moment (default: now).
 * Sorted newest-first by publishAt.
 */
export function visiblePosts(now: Date = new Date()): BlogPost[] {
  return blogPosts
    .filter((p) => new Date(p.publishAt).getTime() <= now.getTime())
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
}

export function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function isVisible(slug: string, now: Date = new Date()): boolean {
  const p = findPost(slug)
  if (!p) return false
  return new Date(p.publishAt).getTime() <= now.getTime()
}
