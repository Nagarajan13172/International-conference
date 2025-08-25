"use client"
import { ConferenceHeader } from "./pages/components/ConferenceHeader"
import { Navigation } from "./pages/components/Navigation"
import { HeroSection } from "./pages/components/HeroSection"
import { AboutSection } from "./pages/components/AboutSection"
import { ImportantDates } from "./pages/components/ImportantDates"
import { KeynoteSpeakers } from "./pages/components/Speaker"
import { CallForPapers } from "./pages/components/CallPaper"
import { CommitteeSection } from "./pages/components/CommitteSection"
import { RegistrationSection } from "./pages/components/Registration"
import { ContactSection } from "./pages/components/ContactSection"

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-background">
      <ConferenceHeader />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ImportantDates />
        <KeynoteSpeakers />
        <CallForPapers />
        <CommitteeSection />
        <RegistrationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 ICAITSC Conference. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
