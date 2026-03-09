import { Button } from "~/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { CTA as CTATexts } from "~/consts/texts"

export function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              {CTATexts.heading}
            </span>
          </div>

          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            {CTATexts.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            {CTATexts.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-card text-card-foreground hover:bg-card/90 text-base px-8 py-6 font-medium"
            >
              {CTATexts.button1.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground text-base px-8 py-6"
            >
              {CTATexts.button2.label}
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            {CTATexts.subdescription}
          </p>
        </div>
      </div>
    </section>
  )
}
