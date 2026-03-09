import Link from "next/link"
import { Droplets } from "lucide-react"
import { AllRightsReserved, Title, footerContent } from "~/consts/texts";

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-lg font-serif font-bold text-background tracking-tight">
                {Title}
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/40 text-center">
            {AllRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
