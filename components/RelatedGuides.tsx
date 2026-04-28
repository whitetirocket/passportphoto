import Link from 'next/link'
import { findPost, isVisible } from '@/lib/blog-posts'

interface Props {
  slugs: string[]
}

/**
 * Renders a list of related blog posts. Hides any post whose publishAt is in the future
 * so we don't link to articles that are not yet live.
 */
export default function RelatedGuides({ slugs }: Props) {
  const related = slugs
    .map((s) => findPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p) && isVisible(p!.slug))

  if (related.length === 0) return null

  return (
    <section className="border-t border-gray-200 pt-8 mt-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Related guides</h2>
      <ul className="space-y-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="block group hover:bg-blue-50/40 rounded-lg p-3 -mx-3 transition-colors"
            >
              <p className="font-semibold text-gray-900 group-hover:text-blue-700">{p.title}</p>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
