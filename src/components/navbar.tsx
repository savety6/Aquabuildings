"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Droplets } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Title, mainNavigation, phoneNumber, phoneHref } from "~/consts/texts"

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
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={phoneHref}>{phoneNumber}</Link>
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
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={phoneHref} onClick={() => setIsOpen(false)}>
                {phoneNumber}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
