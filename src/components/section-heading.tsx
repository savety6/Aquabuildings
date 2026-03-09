import { cn } from "~/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
