import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function DownloadCVButton() {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row">
      <Button asChild className="gap-2">
        <a href="/john-doe-cv.pdf" download>
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </Button>
      <Link href="/cv" className="text-sm text-muted-foreground hover:underline">
        View CV online
      </Link>
    </div>
  )
}
