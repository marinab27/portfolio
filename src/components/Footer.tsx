import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
    relative
    mt-0
    overflow-hidden
    px-5
    pb-8
    pt-16
md:mt-0
md:px-10
md:pt-16
lg:mt-8
lg:px-20
lg:pt-20
xl:mt-12
xl:px-32
  "
    >
      <div className="relative z-10">
        <p className="mb-4 text-base md:text-lg lg:text-xl">Let&apos;s talk</p>

        <h2
          className="
            max-w-[1000px]
            text-[clamp(3rem,13vw,4.5rem)]
            font-normal
            leading-[0.93]
            tracking-[-0.045em]
            md:text-[3.8rem]
            lg:text-[clamp(3.5rem,6vw,6.8rem)]
          "
        >
          Have something
          <br />
          weird, ambitious
          <br />
          or beautiful in mind?
        </h2>

        <div className="mt-14 grid grid-cols-12 items-end gap-x-8 gap-y-4 md:mt-16 lg:mt-20">
          <a
            href="mailto:TUEMAIL"
            className="
              group
              col-span-12
              inline-flex
              w-fit
              items-center
              gap-3
              text-xl
              md:col-span-4
              md:text-2xl
              lg:text-3xl
            "
          >
            <span className="border-b border-current">Say hello</span>

            <span
              aria-hidden="true"
              className="
                text-[var(--accent)]
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-[3px]
                group-hover:-translate-y-[3px]
              "
            >
              ↗
            </span>
          </a>

          <a
            href="#"
            className="
              group
              col-span-6
              inline-flex
              w-fit
              items-center
              gap-3
              text-base
              md:col-span-2
              md:col-start-8
              md:text-xl
              lg:text-2xl
            "
          >
            <span className="border-b border-current">LinkedIn</span>

            <span
              aria-hidden="true"
              className="
                text-[var(--accent)]
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-[3px]
                group-hover:-translate-y-[3px]
              "
            >
              ↗
            </span>
          </a>

          <a
            href="#"
            className="
              group
              col-span-4
              inline-flex
              w-fit
              items-center
              gap-3
              text-base
              md:col-span-2
              md:col-start-11
              md:text-xl
              lg:col-start-auto
              lg:text-2xl
            "
          >
            <span className="border-b border-current">CV</span>

            <span
              aria-hidden="true"
              className="
                text-[var(--accent)]
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-x-[3px]
                group-hover:-translate-y-[3px]
              "
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div
        className="
          relative
          z-10
          mt-10
          flex
          items-end
          justify-between
          border-t
          border-black/15
          pt-6
          md:mt-12
          md:pt-7
        "
      >
        <Image
          src="/logo/marina-b.png"
          alt="Marina B."
          width={220}
          height={80}
          className="h-auto w-[90px] md:w-[105px] lg:w-[115px]"
        />

        <p className="text-[9px] uppercase md:text-[10px] lg:text-xs">
          Madrid | Spain | 2026
        </p>
      </div>
    </footer>
  );
}
