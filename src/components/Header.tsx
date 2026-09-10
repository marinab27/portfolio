"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 pt-4 md:pt-5">
      <div className="grid grid-cols-12 items-center gap-4 md:items-start">
        {/* LOGO */}
        <div className="col-span-6 md:col-span-5">
          <Image
            src="/logo/marina-b.png"
            alt="Marina B."
            width={220}
            height={80}
            priority
            className="h-auto w-[105px] md:w-[125px]"
          />
        </div>

        {/* LOCATION — DESKTOP */}
        <div className="hidden text-xs uppercase leading-tight md:col-span-2 md:block">
          Madrid,
          <br />
          Spain
        </div>

        {/* NAV — DESKTOP */}
        <nav className="hidden text-xs uppercase leading-tight md:col-span-2 md:flex md:flex-col">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="/cv.pdf">CV</a>
        </nav>

        {/* CONTACT — DESKTOP */}
        <div className="hidden text-right text-xs uppercase md:col-span-3 md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2"
          >
            <span className="animated-underline">
              Let&apos;s talk
            </span>

            <span
              aria-hidden="true"
              className="
      text-[var(--accent)]
      transition-transform
      duration-300
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:translate-x-1
    "
            >
              →
            </span>
          </a>
        </div>

        {/* HAMBURGER — MOBILE */}
        <div className="col-span-6 flex justify-end md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex h-8 w-8 items-center justify-center"
          >
            <span
              className={`
                absolute h-px w-5 bg-current
                transition-transform duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[3px]"}
              `}
            />

            <span
              className={`
                absolute h-px w-5 bg-current
                transition-transform duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[3px]"}
              `}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden
          transition-[max-height,opacity,margin]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${menuOpen
            ? "mt-10 max-h-[360px] opacity-100"
            : "mt-0 max-h-0 opacity-0"
          }
        `}
      >
        <nav className="border-t border-[var(--line)]">
          {[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "CV", href: "/cv.pdf" },
            { label: "Let's talk", href: "#contact" },
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                group
                flex
                items-center
                justify-between
                py-5
                text-[1.35rem]
                font-normal
                tracking-[-0.02em]
                ${index < 3 ? "border-b border-[var(--line)]" : ""}
              `}
            >
              <span>{item.label}</span>

              <span
                aria-hidden="true"
                className="
                  text-[var(--accent)]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
