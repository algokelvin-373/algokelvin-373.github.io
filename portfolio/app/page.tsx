import { Header } from "@/components/header"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { Footer } from "@/components/footer"
import { DownloadCVButton } from "@/components/download-cv-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="py-8">
          <div className="mb-8 flex justify-center">
            <DownloadCVButton />
          </div>

          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <CertificatesSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
