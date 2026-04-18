'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setLoading(true);
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success');
    } catch {
      setStatus('success');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      backgroundColor: '#1F2D54',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      textAlign: 'center',
      fontFamily: 'Georgia, serif',
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '48px' }}>
        <div style={{
          width: '36px', height: '36px', backgroundColor: '#0076BC',
          borderRadius: '8px', display: 'flex', alignItems: 'center',
          justifyContent: 'center', position: 'relative',
        }}>
          <span style={{ fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: 'Calibri, sans-serif', lineHeight: 1 }}>b</span>
          <div style={{
            position: 'absolute', top: '4px', right: '4px',
            width: '9px', height: '6px', backgroundColor: '#00BCD8', borderRadius: '3px',
          }} />
        </div>
        <span style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'Calibri, sans-serif' }}>
          Ben<span style={{ color: '#00BCD8' }}>ies</span>
        </span>
      </div>

      {/* Badge */}
      <div style={{
        display: 'inline-block', backgroundColor: '#0A1628',
        border: '1px solid #00BCD8', color: '#00BCD8',
        fontFamily: 'Calibri, sans-serif', fontSize: '12px', fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase' as const,
        padding: '6px 16px', borderRadius: '40px', marginBottom: '28px',
      }}>
        Launching Fall 2026
      </div>

      {/* Eyebrow */}
      <p style={{
        fontFamily: 'Calibri, sans-serif', fontSize: '13px',
        color: '#8EAFD4', letterSpacing: '0.04em',
        marginBottom: '10px', fontStyle: 'italic',
      }}>
        You work hard for your benefits.
      </p>

      {/* Headline */}
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700,
        color: '#fff', lineHeight: 1.15, marginBottom: '28px', maxWidth: '620px',
      }}>
        Your benefits should work{' '}
        <span style={{ color: '#00BCD8' }}>hard for you.</span>
      </h1>

      {/* Subtext */}
      <p style={{
        fontFamily: 'Calibri, sans-serif', fontSize: '16px',
        color: '#8EAFD4', lineHeight: 1.6, marginBottom: '44px', maxWidth: '420px',
      }}>
        <strong style={{ color: '#fff', fontWeight: 700 }}>
          Your healthcare shouldn&apos;t be smoke &amp; mirrors.
        </strong>
        <br />
        Be the first to know when we launch.
      </p>

      {/* Form */}
      {status === 'success' ? (
        <p style={{ fontFamily: 'Calibri, sans-serif', fontSize: '15px', color: '#00BCD8', fontWeight: 700 }}>
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      ) : (
        <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '460px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Enter your email address"
            autoComplete="email"
            style={{
              flex: 1, minWidth: '220px', height: '48px',
              backgroundColor: '#0D1C38',
              border: `1px solid ${status === 'error' ? '#E24B4A' : '#2A3F6F'}`,
              borderRadius: '8px', padding: '0 16px',
              fontFamily: 'Calibri, sans-serif', fontSize: '15px', color: '#fff', outline: 'none',
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              height: '48px', padding: '0 28px',
              backgroundColor: loading ? '#0097B2' : '#00BCD8',
              border: 'none', borderRadius: '8px',
              fontFamily: 'Calibri, sans-serif', fontSize: '15px', fontWeight: 700,
              color: '#042C53', cursor: 'pointer', whiteSpace: 'nowrap' as const,
            }}
          >
            {loading ? 'Saving...' : 'Get early access'}
          </button>
        </div>
      )}

      {/* Privacy */}
      <p style={{
        fontFamily: 'Calibri, sans-serif', fontSize: '12px',
        color: '#4A6080', marginTop: '14px',
      }}>
        No spam, ever. Unsubscribe anytime.
      </p>

      {/* Footer */}
      <p style={{
        fontFamily: 'Calibri, sans-serif', fontSize: '12px',
        color: '#2A3F6F', marginTop: '60px',
      }}>
        yourbenies.com &nbsp;·&nbsp; © 2026 Benies LLC
      </p>

    </main>
  );
}
