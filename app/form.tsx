'use client';

import { useState } from 'react';

export default function FormClient() {
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
      setStatus('success'); // show success regardless — don't block the user
    } finally {
      setLoading(false);
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'Calibri, sans-serif', fontSize: '15px', color: '#00BCD8', fontWeight: 700 }}>
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '460px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
          color: '#042C53', cursor: 'pointer', whiteSpace: 'nowrap',
        }}
      >
        {loading ? 'Saving...' : 'Get early access'}
      </button>
    </div>
  );
}
