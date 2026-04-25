import CountryPage from '@/components/CountryPage'
import { countriesById } from '@/lib/countries'
import type { Metadata } from 'next'

const country = countriesById['canada']

export const metadata: Metadata = {
  title: country.seoTitle,
  description: country.seoDescription,
  openGraph: {
    title: country.seoTitle,
    description: country.seoDescription,
    type: 'website',
  },
}

export default function Page() {
  return <CountryPage country={country} />
}
