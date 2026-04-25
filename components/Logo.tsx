import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Camera frame corners - top left */}
        <path d="M2 10V4a2 2 0 0 1 2-2h6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* top right */}
        <path d="M34 10V4a2 2 0 0 0-2-2h-6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* bottom left */}
        <path d="M2 22v7a2 2 0 0 0 2 2h6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* bottom right - with chat bubble cutout */}
        <path d="M34 22v5a2 2 0 0 1-2 2h-3" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Chat bubble arrow */}
        <path d="M26 31l4 4v-4" fill="url(#grad2)"/>
        {/* Person - head */}
        <circle cx="18" cy="12" r="4.5" fill="#1e3a5f"/>
        {/* Person - body */}
        <path d="M9 27c0-4.97 4.03-9 9-9s9 4.03 9 9" fill="#1e3a5f"/>
        <defs>
          <linearGradient id="grad" x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8"/>
            <stop offset="1" stopColor="#2563eb"/>
          </linearGradient>
          <linearGradient id="grad2" x1="26" y1="31" x2="30" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8"/>
            <stop offset="1" stopColor="#2563eb"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <span className="flex items-baseline gap-0 leading-none select-none">
        <span className="font-black text-xl" style={{ color: '#2563eb' }}>ID</span>
        <span className="font-black text-xl" style={{ color: '#1e3a5f' }}>PhotoSnap</span>
      </span>
    </Link>
  )
}
