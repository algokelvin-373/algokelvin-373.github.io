import { Github, Linkedin, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com/" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com/" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com/" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com/" },
  ]

  return (
    <footer className="border-t py-12">
      <div className="mb-8 flex justify-center space-x-4">
        {socialLinks.map((link, index) => (
          <Button key={index} variant="ghost" size="icon" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
    </footer>
  )
}
