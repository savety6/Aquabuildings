"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Droplets } from "lucide-react"
import { Button } from "~/components/ui/button"
import { NavbarOptions, Title } from "~/consts/texts"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Droplets className="h-7 w-7 text-primary" />
          <span className="text-xl font-serif font-bold text-foreground tracking-tight">
            {Title}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href={NavbarOptions.offers.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {NavbarOptions.offers.label}
          </Link>
          <Link href={NavbarOptions.gallery.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {NavbarOptions.gallery.label}
          </Link>
          <Link href={NavbarOptions.contact.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {NavbarOptions.contact.label}
          </Link>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            {NavbarOptions.contactButton.label}
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href={NavbarOptions.offers.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {NavbarOptions.offers.label}
            </Link>
            <Link
              href={NavbarOptions.gallery.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {NavbarOptions.gallery.label}
            </Link>
            <Link
              href={NavbarOptions.contact.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {NavbarOptions.contact.label}
            </Link>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
              {NavbarOptions.contactButton.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
