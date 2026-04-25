import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { allCountries as countries } from '@/lib/countries'
import MobileNav from '@/components/MobileNav'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free Passport Photo Maker | Instant Download, No Registration',
  description:
    'Create compliant passport and visa photos online for free. Supports US, UK, Canada, Australia, India, Schengen, UAE and more. Processed in your browser — private and instant.',
  keywords: 'passport photo, free passport photo, online passport photo maker, visa photo',
  metadataBase: new URL('https://idphotosnap.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'IDPhotoSnap',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-1 flex-wrap">
              {countries.map((c) => (
                <Link
                  key={c.id}
                  href={`/${c.slug}`}
                  className="text-sm text-gray-600 hover:text-blue-600 px-3 py-1 rounded-full hover:bg-blue-50 transition-colors"
                >
                  {c.flag} {c.name}
                </Link>
              ))}
            </nav>
            <MobileNav />
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-gray-100 bg-gray-50 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Passport Photos</p>
                <ul className="space-y-1">
                  {countries.slice(0, 4).map((c) => (
                    <li key={c.id}>
                      <Link href={`/${c.slug}`} className="text-sm text-gray-500 hover:text-blue-600">
                        {c.flag} {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">More Countries</p>
                <ul className="space-y-1">
                  {countries.slice(4).map((c) => (
                    <li key={c.id}>
                      <Link href={`/${c.slug}`} className="text-sm text-gray-500 hover:text-blue-600">
                        {c.flag} {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">Legal</p>
                <ul className="space-y-1">
                  <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">Terms of Use</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-gray-800">IDPhotoSnap</p>
                <p className="text-sm text-gray-500">
                  Free passport photo tool. No registration. No watermark. Processed entirely in your browser.
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
