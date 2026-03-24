import Image from "next/image";
import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";
import { ScrollReveal } from "~/components/scroll-reveal";

export function ProcessSteps() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow={homePage.process.eyebrow}
            title={homePage.process.title}
            description={homePage.process.description}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {homePage.process.steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-[0_20px_55px_rgba(8,15,12,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(8,15,12,0.26)]">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,11,0.14)_0%,rgba(7,14,11,0.58)_45%,rgba(7,14,11,0.92)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,219,157,0.18),transparent_34%)]" />

                <div className="relative z-10 flex h-full min-h-[260px] flex-col">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/14 text-sm font-semibold text-white backdrop-blur-sm">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-serif font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {step.description}
                </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
