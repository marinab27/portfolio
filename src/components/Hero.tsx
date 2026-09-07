"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HeroMark from "@/components/HeroMark";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.from(".hero-intro", {
          opacity: 0,
          y: 10,
          duration: 0.55,
        });

        tl.from(
          ".hero-title",
          {
            opacity: 0,
            y: 28,
            duration: 0.9,
          },
          "-=0.25",
        );

        tl.from(
          ".hero-mark-wrap",
          {
            opacity: 0,
            scale: 0.75,
            rotation: -8,
            duration: 0.65,
            transformOrigin: "center center",
          },
          "-=0.55",
        );

        tl.from(
          ".hero-mobile-subtitle",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
          },
          "-=0.3",
        );

        tl.from(
          ".hero-info-item",
          {
            opacity: 0,
            y: 12,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.25",
        );
      });

      return () => mm.revert();
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      className="relative grid grid-cols-12 gap-4 pt-16 md:pt-24 lg:pt-32"
    >
      {/* TITLE */}
      <div className="col-span-12 md:order-2 md:col-span-10 md:mt-2 lg:mt-4">
        <h1 className="hero-title relative z-10 text-[clamp(2.9rem,12vw,4.5rem)] font-normal leading-[0.9] tracking-[-0.045em] md:text-[4.6rem] lg:text-8xl">
          Art Direction{" "}
          <span className="hero-mark-wrap relative inline-block">
            <HeroMark />

            <span className="relative z-10">&amp;</span>
          </span>
          <br />
          Digital Experiences
        </h1>

        {/* Mobile subtitle */}
        <p className="hero-mobile-subtitle mt-5 max-w-[290px] text-left text-sm font-medium leading-[1.3] md:hidden">
          From identities and campaigns to interfaces and digital experiences.
        </p>
      </div>

      {/* DESKTOP / TABLET INTRO */}
      <div className="hero-intro hidden md:order-1 md:col-span-5 md:col-start-8 md:block md:text-right lg:col-span-4 lg:col-start-9">
        <p className="text-sm leading-tight">
          I&apos;m interested in what happens
          <br />
          between an idea and the way
          <br />
          people experience it.
        </p>

        <p className="mt-6 text-sm font-semibold leading-tight lg:mt-8">
          From identities and campaigns
          <br />
          to interfaces and digital experiences.
        </p>
      </div>

      {/* INFO */}
      <div className="col-span-12 mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:order-3 md:mt-10 md:grid-cols-12 md:gap-4 lg:mt-12">
        <div className="hero-info-item col-span-1 md:col-span-3">
          <p className="mb-3 text-[10px] uppercase md:text-xs">Currently</p>

          <p className="text-xs leading-[1.35] md:text-sm md:leading-tight">
            Art Director &amp; Digital
            <br />
            Designer @ One&apos;s
          </p>
        </div>

        <div className="hero-info-item col-span-1 md:col-span-3">
          <p className="mb-3 text-[10px] uppercase md:text-xs">Disciplines</p>

          <p className="text-xs leading-[1.35] md:text-sm md:leading-tight">
            Art Direction
            <br />
            Digital Design
            <br />
            UX/UI + Web
          </p>
        </div>

        <div className="hero-info-item col-span-2 md:col-span-3">
          <p className="mb-3 text-[10px] uppercase md:text-xs">Contact</p>

          <div className="flex gap-4 text-xs leading-tight underline md:flex-col md:gap-0 md:text-sm">
            <a href="mailto:TUEMAIL">Email</a>
            <a href="#">LinkedIn</a>
            <a href="/cv.pdf">CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
