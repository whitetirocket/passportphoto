'use client'

import { useState } from 'react'
import Link from 'next/link'
import { allCountries as countries } from '@/lib/countries'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 p-4">
          <div className="flex flex-wrap gap-2 mb-3 pb-3 border-b border-gray-100">
            <Link href="/remove-background" onClick={() => setOpen(false)} className="flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full transition-colors">
              🎨 Remove BG
            </Link>
            <Link href="/fix/photo-rejected-passport" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 transition-colors">
              Rejected?
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 transition-colors">
              Blog
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-1.5 rounded-full border border-gray-200 hover:border-blue-300 transition-colors">
              About
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {countries.map((c) => (
              <Link
                key={c.id}
                href={`/${c.documents[0].slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
