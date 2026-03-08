import Image from "next/image"
import { Button } from "~/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-garden.jpg"
          alt="Lush automated garden with smart irrigation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 text-xs font-medium text-card">
              <Leaf className="h-3.5 w-3.5" />
              Smart Garden Automation
            </span>
          </div>

          <h1 className="text-4xl font-serif font-bold tracking-tight text-card sm:text-5xl lg:text-7xl text-balance leading-tight">
            Let Technology Nurture Your Garden
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-card/80 max-w-xl">
            Automated watering systems, curated gardening subscriptions, and intelligent garden features designed to keep your outdoor space thriving year-round.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
              Explore Our Systems
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card/30 text-card bg-card/10 hover:bg-card/20 hover:text-card backdrop-blur-sm text-base px-8 py-6"
            >
              View Subscriptions
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <p className="text-3xl font-serif font-bold text-card">500+</p>
              <p className="text-sm text-card/60 mt-1">Gardens Automated</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-card">40%</p>
              <p className="text-sm text-card/60 mt-1">Water Saved</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-card">24/7</p>
              <p className="text-sm text-card/60 mt-1">Smart Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
