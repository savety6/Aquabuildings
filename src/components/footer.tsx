import Link from "next/link"
import { Droplets } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-lg font-serif font-bold text-background tracking-tight">
                GreenFlow
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Smart garden automation for modern homeowners. Let technology nurture your garden.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Watering Systems</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Subscriptions</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Smart Sensors</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Garden App</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-background mb-4 uppercase tracking-wider">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Installation Guide</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/40 text-center">
            {'© 2026 GreenFlow. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
