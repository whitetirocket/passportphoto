'use client'

import { allCountries } from '@/lib/countries'
import type { DocumentSpec } from '@/lib/countries'

interface Props {
  selectedDocument: DocumentSpec
  onChange: (doc: DocumentSpec) => void
}

export default function DocumentSelector({ selectedDocument, onChange }: Props) {
  const selectedCountry = allCountries.find((c) => c.id === selectedDocument.countryId)!

  const sorted = [...allCountries].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="space-y-3">
      <div className="flex justify-center">
        <div className="relative">
          <select
            value={selectedDocument.countryId}
            onChange={(e) => {
              const country = allCountries.find((c) => c.id === e.target.value)!
              onChange(country.documents[0])
            }}
            className="appearance-none bg-white border border-gray-300 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer shadow-sm min-w-56"
          >
            {sorted.map((c) => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {selectedCountry.documents.length > 1 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {selectedCountry.documents.map((d) => (
            <button
              key={d.id}
              onClick={() => onChange(d)}
              className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${
                selectedDocument.id === d.id
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500 hover:text-gray-800'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
