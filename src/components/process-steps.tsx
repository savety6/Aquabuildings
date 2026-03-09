import { homePage } from "~/consts/texts";
import { SectionHeading } from "~/components/section-heading";

export function ProcessSteps() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={homePage.process.eyebrow}
          title={homePage.process.title}
          description={homePage.process.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {homePage.process.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-serif font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
