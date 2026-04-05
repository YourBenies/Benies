'use client'
import { useState, useEffect } from 'react'
import BeniesLogo from './BeniesLogo'

interface Props {
  onOpenWaitlist?: () => void
}

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features',     href: '#features'     },
  { label: 'FAQ',          href: '#faq'           },
]

export default function Navbar({ onOpenWaitlist }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? 'border-gray-200 bg-white/95 backdrop-blur-md shadow-sm'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center">
          <BeniesLogo size="md" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-gray-500 transition hover:text-blue-primary"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onOpenWaitlist}
            className="rounded-xl px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#0076BC' }}
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-4 md:hidden">
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full py-3 text-left text-sm font-medium text-gray-600 hover:text-blue-primary"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onOpenWaitlist() }}
            className="mt-3 w-full rounded-xl py-3 text-sm font-bold text-white"
            style={{ backgroundColor: '#0076BC' }}
          >
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  )
}
