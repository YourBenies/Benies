'use client'

import { useEffect } from 'react'

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Auto-popup Kit form after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const toggle = document.querySelector('[data-formkit-toggle="b018e66bab"]') as HTMLElement
      if (toggle) toggle.click()
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 60% -10%, rgba(0,118,188,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left — copy + CTA */}
          <div className="max-w-xl">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
              style={{ background: '#EBF4FB', color: '#0076BC' }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#00BCD8' }} />
              Launching Q3 2026 — Open Enrollment Season
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-navy md:text-6xl">
              Benefits should{' '}
              <span style={{ color: '#0076BC' }}>work harder</span>{' '}
              for you.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              You work hard for your benefits. Benies makes sure they work just as hard
              for you — guiding you in real-time so you can make smarter decisions, save
              money, and feel truly confident about your care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                data-formkit-toggle="b018e66bab"
                href="https://benies.kit.com/b018e66bab"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95"
                style={{ background: '#0076BC' }}
              >
                Get Early Access
              </a>
              <p className="text-xs text-gray-400">No spam. No selling your data. Unsubscribe anytime.</p>
            </div>

            <button
              onClick={() => scrollTo('#how-it-works')}
              className="mt-5 text-sm font-medium transition hover:underline"
              style={{ color: '#0076BC' }}
            >
              See how it works ↓
            </button>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#0076BC', '#00BCD8', '#1F2D54', '#555A5B', '#0076BC'].map((c, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {['S', 'M', 'J', 'A', 'K'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <strong className="font-semibold text-navy">25+ professionals</strong> already validated Benies
              </p>
            </div>
          </div>

          {/* Right — App mockup image */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="/IMG_4680.jpg"
              alt="Benies app dashboard showing savings identified, billing errors caught, and benefits snapshot"
              className="w-full max-w-sm drop-shadow-2xl lg:max-w-md"
              style={{ borderRadius: 0 }}
            />
          </div>

        </div>
      </div>

      {/* Kit script */}
      
    </section>
  )
}
