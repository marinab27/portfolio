import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-12 items-center gap-6 py-32 md:py-40"
    >
      {/* Imagen */}
      <div className="relative col-span-12 md:col-span-4 md:col-start-2">
        <div className="relative aspect-[4/3] w-full max-w-[480px] overflow-hidden">
          <Image
            src="/about/marina.png"
            alt="Marina, Art Director and Digital Designer"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        {/* Anotación provisional */}
        <div className="absolute -right-20 -top-12 hidden md:block">
          <p className="rotate-[-4deg] text-3xl italic">that&apos;s me</p>

          <span className="absolute -left-8 top-10 text-3xl">↙</span>
        </div>
      </div>

      {/* Texto */}
      <div className="col-span-12 md:col-span-4 md:col-start-8">
        <h2 className="text-3xl font-normal leading-[1.05] tracking-tight md:text-4xl">
          I&apos;m Marina, an Art Director and Digital Designer based in Madrid.
        </h2>

        <div className="mt-6 max-w-[500px]">
          <p className="text-sm leading-relaxed">
            With a background in Fine Arts, I gradually moved into digital
            design, UX/UI and web development.
          </p>

          <p className="mt-5 text-sm leading-relaxed">
           <b> I like understanding how things work,</b> from the first idea to the
            final implementation.
          </p>
        </div>

        <a
          href="/about"
          className="mt-8 inline-flex items-center gap-3 text-sm"
        >
          <span className="underline underline-offset-4">More About Me</span>

          <span className="text-[var(--accent)]">→</span>
        </a>
      </div>
    </section>
  );
}
