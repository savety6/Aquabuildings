import Image from "next/image"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { ArrowRight, Droplets, CalendarDays, Cpu } from "lucide-react"

const offers = [
  {
    icon: Droplets,
    title: "Automated Watering",
    description:
      "Smart irrigation systems that adapt to weather conditions, soil moisture, and plant needs. Save water while keeping your garden lush and healthy.",
    image: "/images/smart-watering.jpg",
    features: ["Weather-adaptive scheduling", "Soil moisture sensors", "Zone-based control"],
  },
  {
    icon: CalendarDays,
    title: "Garden Subscriptions",
    description:
      "Monthly curated boxes with seasonal plants, premium seeds, organic fertilizers, and expert growing guides delivered to your doorstep.",
    image: "/images/garden-subscription.jpg",
    features: ["Seasonal plant selections", "Organic supplies included", "Expert growing guides"],
  },
  {
    icon: Cpu,
    title: "Smart Garden Features",
    description:
      "From soil sensors to growth tracking, our smart features let you monitor and manage your garden from anywhere using our intuitive app.",
    image: "/images/garden-features.jpg",
    features: ["Real-time monitoring", "Growth analytics", "Remote app control"],
  },
]

export function Offers() {
  return (
    <section id="offers" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Everything Your Garden Needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From automated irrigation to curated subscriptions, we provide complete smart gardening solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.title}
              className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 py-0"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-300" />
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <offer.icon className="h-5 w-5" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>

                <ul className="flex flex-col gap-2 mb-6">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0 h-auto font-medium">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
