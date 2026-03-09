type DetailSection = {
  title: string;
  description: string;
  bullets?: readonly string[];
};

type DetailSectionsProps = {
  sections: readonly DetailSection[];
};

export function DetailSections({ sections }: DetailSectionsProps) {
  return (
    <section className="bg-background py-18 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8"
          >
            <h2 className="text-2xl font-serif font-semibold text-card-foreground">
              {section.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {section.description}
            </p>

            {section.bullets && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-card-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
