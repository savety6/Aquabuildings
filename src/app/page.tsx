import { Navbar } from "~/components/navbar"
import { Hero } from "~/components/hero"
import { Offers } from "~/components/offers"
import { CTA } from "~/components/cta"
import { Gallery } from "~/components/gallery"
import { Footer } from "~/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Offers />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  )
}