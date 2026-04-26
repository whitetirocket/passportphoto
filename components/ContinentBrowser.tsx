'use client'

import { useState } from 'react'
import Link from 'next/link'
import { allCountries } from '@/lib/countries'

const REGIONS = [
  {
    id: 'americas',
    label: 'Americas',
    sublabel: 'North & South',
    emoji: '🌎',
    cardGrad: 'from-sky-500 to-blue-600',
    cardShadow: 'shadow-sky-400/40',
    panelBg: 'from-sky-50 via-blue-50 to-indigo-50',
    panelBorder: 'border-blue-100',
    dot: 'bg-blue-500',
    badge: 'bg-blue-100 text-blue-700',
    ids: ['us', 'canada', 'brazil', 'mexico', 'argentina'],
  },
  {
    id: 'europe',
    label: 'Europe',
    sublabel: 'EU & beyond',
    emoji: '🏛️',
    cardGrad: 'from-violet-500 to-purple-700',
    cardShadow: 'shadow-violet-400/40',
    panelBg: 'from-violet-50 via-purple-50 to-fuchsia-50',
    panelBorder: 'border-violet-100',
    dot: 'bg-violet-500',
    badge: 'bg-violet-100 text-violet-700',
    ids: [
      'uk', 'schengen', 'france', 'germany', 'spain', 'italy', 'poland',
      'sweden', 'norway', 'denmark', 'switzerland', 'austria', 'belgium',
      'portugal', 'netherlands', 'greece', 'hungary', 'romania', 'ukraine',
      'finland', 'russia',
    ],
  },
  {
    id: 'middle-east-africa',
    label: 'Middle East & Africa',
    sublabel: 'MENA & Sub-Saharan',
    emoji: '🕌',
    cardGrad: 'from-amber-400 to-orange-600',
    cardShadow: 'shadow-amber-400/40',
    panelBg: 'from-amber-50 via-orange-50 to-yellow-50',
    panelBorder: 'border-amber-100',
    dot: 'bg-amber-500',
    badge: 'bg-amber-100 text-amber-700',
    ids: ['uae', 'saudi-arabia', 'egypt', 'qatar', 'kuwait', 'israel', 'turkey', 'south-africa', 'nigeria'],
  },
  {
    id: 'asia',
    label: 'Asia',
    sublabel: 'East, South & SE',
    emoji: '🌏',
    cardGrad: 'from-emerald-500 to-teal-700',
    cardShadow: 'shadow-emerald-400/40',
    panelBg: 'from-emerald-50 via-teal-50 to-cyan-50',
    panelBorder: 'border-emerald-100',
    dot: 'bg-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
    ids: [
      'india', 'japan', 'china', 'south-korea', 'thailand', 'vietnam',
      'malaysia', 'philippines', 'singapore', 'hong-kong', 'taiwan',
      'pakistan', 'bangladesh', 'indonesia',
    ],
  },
  {
    id: 'oceania',
    label: 'Oceania',
    sublabel: 'Pacific',
    emoji: '🌊',
    cardGrad: 'from-cyan-500 to-blue-500',
    cardShadow: 'shadow-cyan-400/40',
    panelBg: 'from-cyan-50 via-sky-50 to-blue-50',
    panelBorder: 'border-cyan-100',
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-100 text-cyan-700',
    ids: ['australia', 'new-zealand'],
  },
]

export default function ContinentBrowser() {
  const [active, setActive] = useState<string | null>('europe')

  const totalDocs = allCountries.reduce((s, c) => s + c.documents.length, 0)

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {allCountries.length} countries · {totalDocs} document formats
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Region</h2>
        <p className="text-gray-500 text-sm">Select a region to explore passport and visa photo requirements</p>
      </div>

      {/* Continent cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {REGIONS.map((region) => {
          const regionCountries = allCountries.filter((c) => region.ids.includes(c.id))
          const docCount = regionCountries.reduce((s, c) => s + c.documents.length, 0)
          const isActive = active === region.id

          return (
            <button
              key={region.id}
              onClick={() => setActive(isActive ? null : region.id)}
              className={`relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer group
                ${isActive
                  ? `bg-gradient-to-br ${region.cardGrad} text-white shadow-2xl ${region.cardShadow} scale-[1.04]`
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-[1.02] text-gray-800'
                }`}
            >
              {/* Decorative circles */}
              <div className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full transition-colors duration-300 ${isActive ? 'bg-white/10' : 'bg-gray-50 group-hover:bg-gray-100'}`} />
              <div className={`absolute -right-3 -bottom-3 w-14 h-14 rounded-full transition-colors duration-300 ${isActive ? 'bg-white/10' : 'bg-gray-100 group-hover:bg-gray-200'}`} />

              <div className={`relative z-10 text-4xl mb-3 leading-none transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                {region.emoji}
              </div>

              <div className="relative z-10">
                <div className="font-bold text-sm leading-tight">{region.label}</div>
                <div className={`text-xs mt-0.5 transition-colors ${isActive ? 'text-white/65' : 'text-gray-400'}`}>
                  {region.sublabel}
                </div>
              </div>

              <div className="relative z-10 mt-3 flex flex-col gap-1">
                <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full w-fit transition-colors
                  ${isActive ? 'bg-white/20 text-white' : region.badge}`}>
                  {regionCountries.length} countries
                </span>
                <span className={`text-[10px] ${isActive ? 'text-white/50' : 'text-gray-400'}`}>
                  {docCount} doc formats
                </span>
              </div>

              {/* Active indicator */}
              {isActive && (
                <div className="absolute top-3 right-3 w-5 h-5 bg-white/25 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Animated panels */}
      {REGIONS.map((region) => {
        const regionCountries = allCountries.filter((c) => region.ids.includes(c.id))
        const docCount = regionCountries.reduce((s, c) => s + c.documents.length, 0)
        const isActive = active === region.id

        return (
          <div
            key={region.id}
            style={{
              display: 'grid',
              gridTemplateRows: isActive ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div className="overflow-hidden">
              <div className={`bg-gradient-to-br ${region.panelBg} border ${region.panelBorder} rounded-2xl p-6 mt-2 mb-2`}>
                {/* Panel header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{region.emoji}</span>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{region.label}</div>
                      <div className="text-xs text-gray-500">{region.sublabel}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <div className="text-xl font-bold text-gray-800">{regionCountries.length}</div>
                      <div className="text-xs text-gray-400">countries</div>
                    </div>
                    <div className={`w-px h-8 bg-gray-200`} />
                    <div>
                      <div className="text-xl font-bold text-gray-800">{docCount}</div>
                      <div className="text-xs text-gray-400">formats</div>
                    </div>
                  </div>
                </div>

                {/* Country grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {[...regionCountries]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((country) => (
                      <Link
                        key={country.id}
                        href={`/${country.documents[0].slug}`}
                        className="group flex items-center gap-2.5 bg-white/70 hover:bg-white rounded-xl px-3 py-2.5 border border-white/60 hover:border-gray-200 hover:shadow-sm transition-all backdrop-blur-sm"
                      >
                        <span className="text-xl flex-shrink-0 leading-none">{country.flag}</span>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-gray-800 group-hover:text-gray-900 truncate leading-tight">
                            {country.name}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${region.dot}`} />
                            <span className="text-[10px] text-gray-400 whitespace-nowrap">
                              {country.documents.length} format{country.documents.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
