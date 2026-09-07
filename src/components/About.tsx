import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto mt-20 max-w-[1280px] md:mt-32 lg:mt-40"
    >
      {/* MOBILE */}
      <div className="md:hidden">
        <h2 className="text-[1.75rem] font-normal leading-[0.98] tracking-[-0.035em]">
          I&apos;m Marina, an Art Director and Digital Designer based in Madrid.
        </h2>

        <p className="mt-7 text-sm leading-[1.5]">
          With a background in Fine Arts, I work across visual identities,
          digital design and interactive experiences.
        </p>

        <div className="group relative mt-16 translate-x-3">
          <div
            className="
              absolute
              -top-14
              right-0
              z-10
              w-[140px]
              transition-transform
              duration-700
              ease-out
              group-hover:-translate-y-[3px]
              group-hover:translate-x-[2px]
            "
          >
            <Image
              src="/about/thats-me.png"
              alt="that's me"
              width={340}
              height={160}
              className="h-auto w-full"
            />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/about/marina.png"
              alt="Marina"
              fill
              sizes="100vw"
              className="
                object-cover
                transition-transform
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.025]
              "
            />
          </div>
        </div>

        <p className="mt-7 text-sm leading-[1.5]">
          <strong className="font-semibold">
            I like understanding how things work,
          </strong>{" "}
          from the first idea to the final implementation.
        </p>

        <a
          href="#"
          className="group mt-9 inline-flex items-center gap-4 text-sm underline underline-offset-4"
        >
          More About Me
          <span
            aria-hidden="true"
            className="text-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      {/* TABLET + DESKTOP */}
      <div className="hidden grid-cols-12 items-center gap-x-5 md:grid lg:gap-x-10">
        {/* Image */}
        <div className="group relative col-span-5 col-start-1 lg:col-start-2">
          <div
            className="
              absolute
              -top-16
              right-0
              z-10
              w-[150px]
              transition-transform
              duration-700
              ease-out
              group-hover:-translate-y-[3px]
              group-hover:translate-x-[2px]
              lg:-top-20
              lg:w-[170px]
            "
          >
            <Image
              src="/about/thats-me.png"
              alt="that's me"
              width={340}
              height={160}
              className="h-auto w-full"
            />
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/about/marina.png"
              alt="Marina"
              fill
              sizes="(max-width: 1024px) 45vw, 42vw"
              className="
                object-cover
                transition-transform
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.025]
              "
            />
          </div>
        </div>

        {/* Text */}
        <div className="col-span-6 col-start-7 lg:col-span-5 lg:col-start-8">
          <h2 className="max-w-[540px] text-[2.2rem] font-normal leading-[0.98] tracking-[-0.035em] lg:text-[clamp(2rem,3vw,3.2rem)]">
            I&apos;m Marina, an Art Director and Digital Designer based in
            Madrid.
          </h2>

          <div className="mt-7 max-w-[520px] space-y-5 text-sm leading-[1.5] lg:mt-8 lg:space-y-6 lg:text-base">
            <p>
              With a background in Fine Arts, I work across visual identities,
              digital design and interactive experiences.
            </p>

            <p>
              <strong className="font-semibold">
                I like understanding how things work,
              </strong>{" "}
              from the first idea to the final implementation.
            </p>
          </div>

          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-4 text-sm underline underline-offset-4 lg:mt-10 lg:text-base"
          >
            More About Me
            <span
              aria-hidden="true"
              className="text-[var(--accent)] transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
