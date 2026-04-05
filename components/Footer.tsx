import Link from 'next/link'
import BeniesLogo from './BeniesLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <BeniesLogo size="sm" />

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <Link href="/privacy" className="transition hover:text-blue-primary">Privacy</Link>
          <Link href="/terms" className="transition hover:text-blue-primary">Terms</Link>
          <a
            href="mailto:hello@yourbenies.com?subject=Hello%20from%20yourbenies.com"
            className="transition hover:text-blue-primary"
          >
            Contact
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/yourbenies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition hover:text-blue-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/profile.php?id=61576390635987"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 transition hover:text-blue-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/benies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-blue-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/YourBenies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-gray-400 transition hover:text-blue-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-400">© Benies 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
