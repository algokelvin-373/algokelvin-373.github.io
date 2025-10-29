import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CertificatesSection() {
  const certificates = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-123456",
    },
    {
      name: "Professional Frontend Developer",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-789012",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2020",
      credentialId: "GCP-345678",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Licenses & Certificates</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>
                {cert.issuer} | {cert.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Credential ID: {cert.credentialId}</p>
              <Badge>Verified</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
