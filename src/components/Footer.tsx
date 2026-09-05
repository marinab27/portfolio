export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden px-5 pb-8 pt-24 md:px-10 md:pt-28 lg:px-20 xl:px-32"
    >
      <div className="relative z-10">
        <p className="mb-2 text-xl md:text-2xl">Let&apos;s talk</p>

        <h2 className="max-w-[1050px] text-[clamp(3.5rem,6vw,7rem)] font-normal leading-[0.95] tracking-[-0.04em]">
          Have something
          <br />
          weird, ambitious
          <br />
          or beautiful in mind?
        </h2>

        <div className="mt-16 grid grid-cols-12 items-end gap-4 md:mt-20">
          <a
            href="mailto:TUEMAIL"
            className="col-span-12 inline-flex items-center gap-3 text-3xl underline underline-offset-4 md:col-span-4"
          >
            Say hello
            <span className="text-[var(--accent)]">↗</span>
          </a>

          <a
            href="#"
            className="col-span-6 inline-flex items-center gap-3 text-2xl underline underline-offset-4 md:col-span-2 md:col-start-8"
          >
            LinkedIn
            <span className="text-[var(--accent)]">↗</span>
          </a>

          <a
            href="#"
            className="col-span-6 inline-flex items-center gap-3 text-2xl underline underline-offset-4 md:col-span-2"
          >
            CV
            <span className="text-[var(--accent)]">↗</span>
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex items-end justify-between border-t border-black/15 pt-8">
        <p className="text-2xl italic">marina b.</p>

        <p className="text-xs uppercase">Madrid | Spain | 2026</p>
      </div>
    </footer>
  );
}
