import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building modern web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed responsive web applications using React and Redux. Collaborated with designers to implement pixel-perfect UIs and improved accessibility.",
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Built websites for clients using HTML, CSS, and JavaScript. Worked with WordPress and PHP to create custom themes and plugins.",
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
