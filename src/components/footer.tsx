import Link from "next/link"
import { Droplets } from "lucide-react"
import { AllRightsReserved, Title, Footer as FooterTexts } from "~/consts/texts";

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-lg font-serif font-bold text-background tracking-tight">
                {Title}
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              {FooterTexts.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">{FooterTexts.column1.title}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column1.items[0]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column1.items[1]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column1.items[2]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column1.items[3]?.label}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">{FooterTexts.column2.title}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column2.items[0]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column2.items[1]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column2.items[2]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column2.items[3]?.label}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">{FooterTexts.column3.title}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column3.items[0]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column3.items[1]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column3.items[2]?.label}</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">{FooterTexts.column3.items[3]?.label}</Link></li>
            </ul>
          </div>
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
