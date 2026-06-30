export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-balance text-muted-foreground w-full">
          {description}
        </p>
      )}
    </div>
  );
}
