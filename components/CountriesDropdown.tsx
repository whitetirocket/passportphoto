'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { allCountries } from '@/lib/countries'

export default function CountriesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const sorted = [...allCountries].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
          open ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
        }`}
      >
        Countries
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-[720px]">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {allCountries.length} countries supported
          </p>
          <div className="grid grid-cols-4 gap-0.5">
            {sorted.map((c) => (
              <Link
                key={c.id}
                href={`/${c.documents[0].slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <span className="text-base leading-none">{c.flag}</span>
                <span className="truncate">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
