'use client'

import { allCountries as countries } from '@/lib/countries'
import type { CountrySpec } from '@/lib/countries'

interface Props {
  selected: CountrySpec
  onChange: (country: CountrySpec) => void
}

export default function CountrySelector({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {countries.map((c) => (
        <button
          key={c.id}
          onClick={() => onChange(c)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
            selected.id === c.id
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600'
          }`}
        >
          <span>{c.flag}</span>
          <span>{c.name}</span>
        </button>
      ))}
    </div>
  )
}
