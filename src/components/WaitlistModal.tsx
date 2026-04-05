'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Close on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setErrorMsg('')

    try {
      // 1. Save to Supabase
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim(), name: name.trim() || null }])

      if (supabaseError && supabaseError.code !== '23505') {
        throw new Error(supabaseError.message)
      }

      // 2. Add to Kit
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.toLowerCase().trim(), name: name.trim() || null }),
      })

      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: 'white' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/IMG_4680.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            opacity: 0.15,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10 px-8 py-10">
          {status === 'success' ? (
            <div className="text-center">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: '#D0F0F8' }}
              >
                <svg width="24" height="24" fill="none" stroke="#00BCD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#1F2D54' }}>You're on the list!</h2>
              <p className="mt-2 text-gray-500">We'll be in touch before launch. Benefits are about to get a lot clearer.</p>
              <button
                onClick={onClose}
                className="mt-6 w-full rounded-xl py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: '#0076BC' }}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: '#EBF4FB', color: '#0076BC' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#00BCD8' }} />
                  Launching Q3 2026
                </div>
                <h2 className="text-3xl font-bold leading-tight" style={{ color: '#1F2D54' }}>
                  Your benefits.{' '}
                  <span style={{ color: '#0076BC' }}>Your money.</span>{' '}
                  Your health.
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Join the waitlist and get early access to the benefits advocate built entirely for you.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="h-12 w-full rounded-xl text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                  style={{ background: '#0076BC' }}
                >
                  {status === 'loading' ? 'Claiming your spot...' : 'Claim My Spot'}
                </button>
                {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
                <p className="text-center text-xs text-gray-400">
                  No spam. No selling your data. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
