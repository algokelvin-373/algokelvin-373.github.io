import { Header } from "@/components/header"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button asChild className="gap-2">
            <a href="/john-doe-cv.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <Header />

          <main className="py-8">
            <ExperienceSection />
            <EducationSection />
            <CertificatesSection />
          </main>

          <div className="mt-8 border-t pt-8">
            <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <p className="font-medium">Website:</p>
                <p className="text-muted-foreground">johndoe.dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
