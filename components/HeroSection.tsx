'use client'

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

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

          {/* Left — copy + form */}
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

          {/* Right — iPhone 16 Pro mockup */}
          <div className="relative flex items-center justify-center lg:justify-end" style={{ minHeight: 560 }}>

            {/* Floating card top-left */}
            <div
              className="absolute z-20 rounded-2xl px-4 py-3 shadow-xl"
              style={{
                background: 'white',
                borderLeft: '3px solid #00BCD8',
                minWidth: 185,
                top: '50%',
                left: -16,
                transform: 'translateY(-140px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: '#D0F0F8' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00BCD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#1F2D54' }}>$528 tax savings found</p>
                  <p className="text-xs text-gray-400">Boost HSA contributions</p>
                </div>
              </div>
            </div>

            {/* Floating card bottom-right */}
            <div
              className="absolute z-20 rounded-2xl px-4 py-3 shadow-xl"
              style={{
                background: 'white',
                borderLeft: '3px solid #F59E0B',
                minWidth: 185,
                top: '50%',
                right: -8,
                transform: 'translateY(60px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: '#FEF3C7' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: '#1F2D54' }}>Billing error detected</p>
                  <p className="text-xs text-gray-400">Duplicate charge — $41</p>
                </div>
              </div>
            </div>

            {/* iPhone 16 Pro shell */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                width: 255,
                height: 520,
                borderRadius: 50,
                background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 60%, #0a0a0a 100%)',
                padding: 3,
                boxShadow: [
                  '0 0 0 0.5px rgba(255,255,255,0.18)',
                  '0 25px 70px rgba(0,0,0,0.38)',
                  '0 8px 24px rgba(0,0,0,0.22)',
                  'inset 0 0 0 0.5px rgba(255,255,255,0.06)',
                ].join(', '),
              }}
            >
              {/* Volume buttons */}
              {[72, 106, 140].map((top, i) => (
                <div key={i} style={{
                  position: 'absolute', left: -2.5, top,
                  width: 2.5, height: i === 0 ? 20 : 28,
                  borderRadius: '2px 0 0 2px',
                  background: 'linear-gradient(180deg, #48484a, #2c2c2e)',
                }} />
              ))}
              {/* Power button */}
              <div style={{
                position: 'absolute', right: -2.5, top: 108,
                width: 2.5, height: 52,
                borderRadius: '0 2px 2px 0',
                background: 'linear-gradient(180deg, #48484a, #2c2c2e)',
              }} />

              {/* Screen */}
              <div style={{
                width: '100%', height: '100%',
                borderRadius: 48,
                overflow: 'hidden',
                background: '#F4F6F9',
                position: 'relative',
              }}>
                {/* Dynamic Island */}
                <div style={{
                  position: 'absolute', top: 11, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 88, height: 26,
                  background: '#0a0a0a',
                  borderRadius: 20, zIndex: 10,
                }} />

                {/* Status bar */}
                <div style={{
                  height: 46, background: 'white',
                  display: 'flex', alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: '0 20px 6px',
                }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#1a1a1a', fontFamily: 'DM Sans, sans-serif' }}>9:41</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <svg width="11" height="8" viewBox="0 0 16 12">
                      <rect x="0" y="6" width="3" height="6" rx="1" fill="#1a1a1a"/>
                      <rect x="4.5" y="4" width="3" height="8" rx="1" fill="#1a1a1a"/>
                      <rect x="9" y="2" width="3" height="10" rx="1" fill="#1a1a1a"/>
                      <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#1a1a1a"/>
                    </svg>
                    <svg width="12" height="9" viewBox="0 0 18 14" fill="none">
                      <path d="M9 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#1a1a1a"/>
                      <path d="M4.5 7.5C5.9 6.1 7.4 5.4 9 5.4s3.1.7 4.5 2.1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M1.5 4.5C3.6 2.4 6.2 1.2 9 1.2s5.4 1.2 7.5 3.3" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <div style={{ width: 17, height: 8, borderRadius: 2, border: '1px solid #1a1a1a', padding: 1.5, display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '75%', height: '100%', background: '#1a1a1a', borderRadius: 1 }} />
                      </div>
                      <div style={{ width: 2, height: 4, background: '#1a1a1a', borderRadius: 1 }} />
                    </div>
                  </div>
                </div>

                {/* App bar */}
                <div style={{
                  background: 'white', padding: '5px 13px 5px',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '0.5px solid #EAECF0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{
                      width: 23, height: 23, background: '#0076BC',
                      borderRadius: 6.5, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', position: 'relative',
                    }}>
                      <span style={{ color: 'white', fontWeight: 700, fontSize: 14, fontFamily: 'DM Sans, sans-serif', lineHeight: 1 }}>b</span>
                      <div style={{ position: 'absolute', top: 3, right: 2, width: 6, height: 2, background: '#00BCD8', borderRadius: 1.5 }} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: -0.3 }}>
                      <span style={{ color: '#0076BC' }}>Ben</span>
                      <span style={{ color: '#00BCD8' }}>ies</span>
                    </span>
                  </div>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%', background: '#0076BC',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 8, fontWeight: 700, color: 'white', fontFamily: 'DM Sans, sans-serif',
                  }}>BR</div>
                </div>

                {/* Content */}
                <div style={{ padding: '10px 11px 65px', overflowY: 'hidden', height: 'calc(100% - 100px)' }}>

                  {/* Hero stat card */}
                  <div style={{ background: '#0076BC', borderRadius: 15, padding: '12px 13px', marginBottom: 9, color: 'white' }}>
                    <div style={{ fontSize: 9.5, opacity: 0.72, fontFamily: 'DM Sans, sans-serif' }}>Good morning,</div>
                    <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.4, marginBottom: 9, fontFamily: 'DM Sans, sans-serif' }}>Beck</div>
                    <div style={{ display: 'flex', gap: 7 }}>
                      {[['$1,842', 'Savings identified'], ['$4,800', 'Total possible']].map(([v, l]) => (
                        <div key={v} style={{ flex: 1, background: 'rgba(255,255,255,0.16)', borderRadius: 9, padding: '7px 9px' }}>
                          <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>{v}</div>
                          <div style={{ fontSize: 8.5, opacity: 0.7, fontFamily: 'DM Sans, sans-serif' }}>{l}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 9 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8.5, opacity: 0.62, marginBottom: 3, fontFamily: 'DM Sans, sans-serif' }}>
                        <span>$0 captured</span><span>38% of potential</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 3, height: 3.5 }}>
                        <div style={{ width: '38%', height: 3.5, background: '#00BCD8', borderRadius: 3 }} />
                      </div>
                    </div>
                  </div>

                  {/* Alert */}
                  <div style={{
                    background: 'white', borderRadius: 9, padding: '7px 9px',
                    marginBottom: 9, borderLeft: '2.5px solid #F59E0B',
                    display: 'flex', gap: 6, alignItems: 'flex-start',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <div style={{ fontSize: 9, color: '#78350F', lineHeight: 1.4, fontFamily: 'DM Sans, sans-serif' }}>
                      <strong>Coding risk:</strong> Colonoscopy may bill diagnostic — $480 more.
                    </div>
                  </div>

                  {/* Section label */}
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: '#AAB4C0', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '8px 0 5px', fontFamily: 'DM Sans, sans-serif' }}>
                    Benefits snapshot
                  </div>

                  {/* Benefit rows */}
                  <div style={{ background: 'white', borderRadius: 13, padding: '2px 11px', marginBottom: 9 }}>
                    {[
                      { bg: '#EBF4FB', label: 'Aetna HDHP', sub: '$350 of $2,000 used', val: '17%', valC: '#0076BC', pct: 17, pctC: '#0076BC' },
                      { bg: '#D1FAE5', label: 'Inspira HSA', sub: '$2,140 balance', val: '$2,140', valC: '#059669', pct: 55, pctC: '#059669' },
                      { bg: '#FEF3C7', label: 'MetLife Dental', sub: '1 of 2 cleanings used', badge: 'Book now' },
                      { bg: '#EEF2FF', label: 'Aetna Vision', sub: '$130 frame · exam unused', badge: 'Unused' },
                    ].map((r, i, arr) => (
                      <div key={r.label} style={{
                        display: 'flex', alignItems: 'center', gap: 7,
                        padding: '7px 0',
                        borderBottom: i < arr.length - 1 ? '0.5px solid #F2F4F7' : 'none',
                      }}>
                        <div style={{ width: 26, height: 26, borderRadius: 7, background: r.bg, flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 600, color: '#1A2332', fontFamily: 'DM Sans, sans-serif' }}>{r.label}</div>
                          <div style={{ fontSize: 8.5, color: '#9AA5B4', fontFamily: 'DM Sans, sans-serif' }}>{r.sub}</div>
                          {r.pct && (
                            <div style={{ background: '#EEF1F5', borderRadius: 2, height: 2.5, marginTop: 3 }}>
                              <div style={{ width: `${r.pct}%`, height: 2.5, borderRadius: 2, background: r.pctC }} />
                            </div>
                          )}
                        </div>
                        {r.val && <div style={{ fontSize: 10.5, fontWeight: 700, color: r.valC, fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>{r.val}</div>}
                        {r.badge && (
                          <div style={{ fontSize: 8.5, fontWeight: 700, padding: '2px 6px', borderRadius: 20, background: '#FEF3C7', color: '#92400E', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>
                            {r.badge}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'white', borderTop: '0.5px solid #EAECF0',
                  height: 54, display: 'flex', alignItems: 'center', padding: '0 4px',
                }}>
                  {[
                    { d: 'M3 9.5L12 3l9 6.5V21H15v-6H9v6H3V9.5z', active: true },
                    { d: 'M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z', active: false },
                    { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M8 13h8 M8 17h5', active: false },
                    { d: 'M12 2a10 10 0 110 20 10 10 0 010-20zm1 6h-2v5l4 2.5-.8-1.4L13 13V8z', active: false },
                  ].map((item, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100%' }}>
                      {item.active && (
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 18, height: 2, background: '#0076BC', borderRadius: '0 0 2px 2px' }} />
                      )}
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={item.active ? '#0076BC' : '#C4CDD8'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.d} />
                      </svg>
                    </div>
                  ))}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#C4CDD8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700, color: 'white', fontFamily: 'DM Sans, sans-serif' }}>BR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Kit script */}
      <script src="https://f.kit.com/b018e66bab/index.js" async />
    </section>
  )
}
