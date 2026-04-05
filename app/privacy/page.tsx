'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
     <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-gray-600">
          At Benies, your privacy matters. This page will contain our full privacy policy once we launch. In the meantime, here's what you should know:
        </p>
        <ul className="mt-6 space-y-3 text-gray-600">
          <li>• We never sell your personal data.</li>
          <li>• We use industry-standard encryption.</li>
          <li>• We collect only what's necessary to provide our service.</li>
          <li>• You can request deletion of your data at any time.</li>
        </ul>
        <p className="mt-8 text-sm text-gray-500">
          Questions? Email us at{' '}
          <a href="mailto:hello@yourbenies.com" className="text-blue-primary hover:underline">
            hello@yourbenies.com
          </a>
        </p>
        <Link href="/" className="mt-8 inline-block text-sm font-medium text-blue-primary hover:underline">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
