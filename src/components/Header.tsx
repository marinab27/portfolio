export default function Header() {
  return (
    <header className="grid grid-cols-12 items-start gap-4">
      <div className="col-span-5">
        <p className="text-2xl italic">marina b.</p>
      </div>

      <div className="col-span-2 text-xs uppercase leading-tight">
        Madrid,
        <br />
        Spain
      </div>

      <nav className="col-span-2 flex flex-col text-xs uppercase leading-tight">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="/cv.pdf">CV</a>
      </nav>

      <div className="col-span-3 text-right text-xs uppercase">
        <a href="#contact">Let&apos;s talk →</a>
      </div>
    </header>
  );
}
