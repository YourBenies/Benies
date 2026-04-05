import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenWaitlist={() => {}} />
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-3xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-4 text-gray-600">
          These terms of service will be updated prior to our public launch. By joining our waitlist, you agree to receive occasional updates about Benies.
        </p>
        <p className="mt-4 text-gray-600">
          Benies is not an insurance provider. We help you understand and optimize the benefits you already have.
        </p>
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
