import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CountryPage from '@/components/CountryPage'
import { allDocuments, documentsBySlug, countriesById } from '@/lib/countries'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allDocuments.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const doc = documentsBySlug[slug]
  if (!doc) return {}
  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: doc.seoTitle,
      description: doc.seoDescription,
      type: 'website',
      url: `https://idphotosnap.com/${slug}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const doc = documentsBySlug[slug]
  if (!doc) notFound()

  const country = countriesById[doc.countryId]
  if (!country) notFound()

  return <CountryPage document={doc} country={country} />
}
