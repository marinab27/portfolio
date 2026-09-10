"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AboutStar from "@/components/marks/AboutStar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // TABLET + DESKTOP
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 76%",
              once: true,
            },
          });

          // PHOTO
          tl.from(".about-photo", {
            opacity: 0,
            y: 24,
            scale: 0.985,
            duration: 0.9,
            ease: "power3.out",
          });

          // COPY
          tl.from(
            ".about-copy",
            {
              opacity: 0,
              y: 18,
              duration: 0.75,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.5",
          );

          // THAT'S ME
          tl.from(
            ".about-note",
            {
              opacity: 0,
              y: 8,
              rotation: -4,
              scale: 0.96,
              duration: 0.65,
              ease: "back.out(1.4)",
              transformOrigin: "center center",
            },
            "-=0.4",
          );

          // STAR
          // Entrada sutil, sin tocar opacity.
          tl.from(
            ".about-star",
            {
              scale: 0.92,
              y: 6,
              duration: 0.6,
              ease: "power3.out",
              transformOrigin: "center center",
            },
            "-=0.35",
          );

          // CTA
          // No animamos opacity para evitar que pueda quedar invisible.
          tl.from(
            ".about-cta",
            {
              y: 8,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.25",
          );
        },
      );

      // MOBILE
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          });

          // COPY
          tl.from(".about-copy", {
            opacity: 0,
            y: 12,
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
          });

          // PHOTO
          tl.from(
            ".about-photo",
            {
              opacity: 0,
              y: 14,
              scale: 0.99,
              duration: 0.75,
              ease: "power3.out",
            },
            "-=0.35",
          );

          // THAT'S ME
          tl.from(
            ".about-note",
            {
              opacity: 0,
              y: 6,
              rotation: -3,
              scale: 0.97,
              duration: 0.55,
              ease: "back.out(1.3)",
            },
            "-=0.3",
          );

          // STAR
          tl.from(
            ".about-star",
            {
              scale: 0.95,
              y: 4,
              duration: 0.5,
              ease: "power3.out",
              transformOrigin: "center center",
            },
            "-=0.25",
          );

          // CTA
          // Igual que en desktop: siempre visible.
          tl.from(
            ".about-cta",
            {
              y: 6,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.2",
          );
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative mx-auto mt-20 max-w-[1280px] md:mt-32 lg:mt-40"
    >
      {/* =========================
          MOBILE
      ========================== */}
      <div className="md:hidden">
        <h2 className="about-copy text-[1.75rem] font-normal leading-[0.98] tracking-[-0.035em]">
          I&apos;m Marina, an Art Director and Digital Designer based in Madrid.
        </h2>

        <p className="about-copy mt-7 text-sm leading-[1.5]">
          With a background in Fine Arts, I work across visual identities,
          digital design and interactive experiences.
        </p>

        {/* PHOTO AREA */}
        <div className="about-photo group relative mt-16 translate-x-3">
          {/* THAT'S ME */}
          <div
            className="
              about-note
              absolute -top-14 right-0 z-10
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

          {/* ABOUT STAR */}
          <div
            aria-hidden="true"
            className="
              about-star
              pointer-events-none
              absolute
              -left-10
              top-[15%]
              z-20
              h-[82px]
              w-[82px]
            "
          >
            <AboutStar className="block h-full w-full" />
          </div>

          {/* PHOTO */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/about/marina.png"
              alt="Marina"
              fill
              loading="eager"
              sizes="(max-width: 767px) calc(100vw - 40px), 45vw"
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

        {/* SECOND PARAGRAPH */}
        <p className="about-copy mt-7 text-sm leading-[1.5]">
          <strong className="font-semibold">
            I like understanding how things work,
          </strong>{" "}
          from the first idea to the final implementation.
        </p>

        {/* MORE ABOUT ME */}
        <a
          href="#"
          className="
            about-cta
            group
            mt-9
            inline-flex
            items-center
            gap-4
            text-sm
          "
        >
          <span className="animated-underline">
            More About Me
          </span>

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
      </div>

      {/* =========================
          TABLET + DESKTOP
      ========================== */}
      <div className="hidden grid-cols-12 items-center gap-x-5 md:grid lg:gap-x-10">
        {/* PHOTO COLUMN */}
        <div className="about-photo group relative col-span-5 col-start-1 lg:col-start-2">
          {/* THAT'S ME */}
          <div
            className="
              about-note
              absolute -top-16 right-0 z-10
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

          {/* ABOUT STAR */}
          <div
            aria-hidden="true"
            className="
              about-star
              pointer-events-none
              absolute
              -left-16
              top-[13%]
              z-20
              h-[110px]
              w-[110px]
              lg:-left-24
              lg:h-[140px]
              lg:w-[140px]
            "
          >
            <AboutStar className="block h-full w-full" />
          </div>

          {/* PHOTO */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/about/marina.png"
              alt="Marina"
              fill
              loading="eager"
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

        {/* TEXT COLUMN */}
        <div className="col-span-6 col-start-7 lg:col-span-5 lg:col-start-8">
          <h2 className="about-copy max-w-[540px] text-[2.2rem] font-normal leading-[0.98] tracking-[-0.035em] lg:text-[clamp(2rem,3vw,3.2rem)]">
            I&apos;m Marina, an Art Director and Digital Designer based in Madrid.
          </h2>

          <div className="mt-7 max-w-[520px] space-y-5 text-sm leading-[1.5] lg:mt-8 lg:space-y-6 lg:text-base">
            <p className="about-copy">
              With a background in Fine Arts, I work across visual identities,
              digital design and interactive experiences.
            </p>

            <p className="about-copy">
              <strong className="font-semibold">
                I like understanding how things work,
              </strong>{" "}
              from the first idea to the final implementation.
            </p>
          </div>

          {/* MORE ABOUT ME */}
          <a
            href="#"
            className="
              about-cta
              group
              mt-9
              inline-flex
              items-center
              gap-4
              text-sm
              md:mt-10
              md:text-base
            "
          >
            <span className="animated-underline">
              More About Me
            </span>

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
        </div>
      </div>
    </section>
  );
}