'use client'

interface Props {
  slot?: string
  format?: 'leaderboard' | 'rectangle' | 'responsive'
  className?: string
}

export default function AdUnit({ format = 'responsive', className = '' }: Props) {
  const dimensions: Record<string, string> = {
    leaderboard: 'h-[90px] w-full max-w-[728px]',
    rectangle: 'h-[250px] w-[300px]',
    responsive: 'h-[100px] w-full',
  }

  return (
    <div
      className={`flex items-center justify-center bg-gray-100 rounded border border-dashed border-gray-300 text-gray-400 text-xs ${dimensions[format]} ${className}`}
    >
      Advertisement
    </div>
  )
}
