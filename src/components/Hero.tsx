import HeroMark from "@/components/HeroMark";

export default function Hero() {
  return (
    <section className="relative grid grid-cols-12 gap-4 pt-24 md:pt-32">
      <div className="col-span-12 text-right md:col-span-4 md:col-start-9">
        <p className="text-sm leading-tight">
          I&apos;m interested in what happens
          <br />
          between an idea and the way
          <br />
          people experience it.
        </p>

        <p className="mt-8 text-sm font-semibold leading-tight">
          From identities and campaigns
          <br />
          to interfaces and digital experiences.
        </p>
      </div>

      <div className="col-span-12 mt-12 md:col-span-10 md:mt-4">
        <h1 className="relative z-10 text-5xl font-normal leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
          Art Direction{" "}
          <span className="relative inline-block">
            <HeroMark />
            <span className="relative z-10">&amp;</span>
          </span>
          <br />
          Digital Experiences
        </h1>
      </div>

      <div className="col-span-12 mt-10 grid grid-cols-12 gap-4 md:mt-12">
        <div className="col-span-4 md:col-span-3">
          <p className="mb-3 text-xs uppercase">Currently</p>
          <p className="text-sm leading-tight">
            Art Director &amp; Digital
            <br />
            Designer @ One&apos;s
          </p>
        </div>

        <div className="col-span-4 md:col-span-3">
          <p className="mb-3 text-xs uppercase">Disciplines</p>
          <p className="text-sm leading-tight">
            Art Direction
            <br />
            Digital Design
            <br />
            UX/UI + Web
          </p>
        </div>

        <div className="col-span-4 md:col-span-3">
          <p className="mb-3 text-xs uppercase">Contact</p>

          <div className="flex flex-col text-sm leading-tight underline">
            <a href="mailto:TUEMAIL">Email</a>
            <a href="#">LinkedIn</a>
            <a href="/cv.pdf">CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
