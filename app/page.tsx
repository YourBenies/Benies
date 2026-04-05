'use client'

import { useState } from 'react'
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import CredibilityStrip from "@/components/CredibilityStrip"
import ProblemSection from "@/components/ProblemSection"
import HowItWorks from "@/components/HowItWorks"
import FeaturesSection from "@/components/FeaturesSection"
import OutcomesSection from "@/components/OutcomesSection"
import PrivacySection from "@/components/PrivacySection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import WaitlistModal from "@/components/WaitlistModal"

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onOpenWaitlist={() => setModalOpen(true)} />
      <main>
        <HeroSection />
        <CredibilityStrip />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <OutcomesSection />
        <PrivacySection />
        <FAQSection />
        <CTASection onOpenWaitlist={() => setModalOpen(true)} />
      </main>
      <Footer />
    </div>
  )
}
