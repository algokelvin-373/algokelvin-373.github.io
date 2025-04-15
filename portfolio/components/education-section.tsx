import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with focus on web technologies and distributed systems.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Coursework included algorithms, data structures, and web development.",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <CardDescription>
                {edu.institution} | {edu.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
