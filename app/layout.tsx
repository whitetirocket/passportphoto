import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { allCountries } from '@/lib/countries'
import MobileNav from '@/components/MobileNav'
import Logo from '@/components/Logo'
import CountriesDropdown from '@/components/CountriesDropdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free Passport Photo Maker — No Registration, No Watermark | IDPhotoSnap',
  description:
    '100% free passport photo maker. No registration, no watermark, no upload. US, UK, Canada, Australia, India, Schengen, UAE + 7 more countries. Download JPG or print-ready PDF instantly.',
  keywords: 'free passport photo, passport photo maker free, no watermark passport photo, free passport photo online no registration',
  metadataBase: new URL('https://idphotosnap.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'IDPhotoSnap',
    url: 'https://idphotosnap.com',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IDPhotoSnap',
  alternateName: 'IDPhotoSnap.com',
  url: 'https://idphotosnap.com',
  logo: 'https://idphotosnap.com/IDPhotoSnap.png',
  description:
    'IDPhotoSnap is a free browser-based passport and visa photo tool. Crops photos to country-specific specifications for 85+ countries with no registration, no watermark, and no server upload — everything is processed locally in the user\'s browser.',
  foundingDate: '2026',
  sameAs: [
    'https://www.producthunt.com/products/idphotosnap',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IDPhotoSnap',
  alternateName: 'IDPhotoSnap.com',
  url: 'https://idphotosnap.com',
  publisher: {
    '@type': 'Organization',
    name: 'IDPhotoSnap',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5EB80XQFS3" strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5EB80XQFS3');
      `}</Script>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2">
            <Logo />
            <nav className="hidden md:flex items-center gap-1 flex-1 ml-4">
              <CountriesDropdown />
              <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                About
              </Link>
            </nav>
            <Link
              href="/remove-background"
              className="flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap flex-shrink-0 ml-auto"
            >
              🎨 <span className="hidden sm:inline">Remove BG</span><span className="sm:hidden">BG</span>
            </Link>
            <MobileNav />
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-gray-100 bg-gray-50 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Popular</p>
                <ul className="space-y-1">
                  {['us', 'uk', 'canada', 'australia', 'india', 'schengen', 'germany', 'france'].map((id) => {
                    const c = allCountries.find((x) => x.id === id)
                    return c ? (
                      <li key={c.id}>
                        <Link href={`/${c.documents[0].slug}`} className="text-sm text-gray-500 hover:text-blue-600">
                          {c.flag} {c.name}
                        </Link>
                      </li>
                    ) : null
                  })}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Asia & Middle East</p>
                <ul className="space-y-1">
                  {['japan', 'south-korea', 'china', 'india', 'singapore', 'malaysia', 'thailand', 'uae'].map((id) => {
                    const c = allCountries.find((x) => x.id === id)
                    return c ? (
                      <li key={c.id}>
                        <Link href={`/${c.documents[0].slug}`} className="text-sm text-gray-500 hover:text-blue-600">
                          {c.flag} {c.name}
                        </Link>
                      </li>
                    ) : null
                  })}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Tools</p>
                <ul className="space-y-1">
                  <li><Link href="/remove-background" className="text-sm text-gray-500 hover:text-blue-600">Remove Background</Link></li>
                  <li><Link href="/blog" className="text-sm text-gray-500 hover:text-blue-600">Guides & Tips</Link></li>
                  <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-600">About</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Legal</p>
                <ul className="space-y-1">
                  <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">Terms of Use</Link></li>
                </ul>
                <p className="font-semibold text-sm mt-4 mb-2 text-gray-800">IDPhotoSnap</p>
                <p className="text-sm text-gray-500">
                  Free. No registration. No watermark. Processed entirely in your browser.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} IDPhotoSnap. All photos are processed locally in your browser.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
