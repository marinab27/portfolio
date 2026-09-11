"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FooterStar from "@/components/marks/FooterStar";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 82%",
              once: true,
            },
          });

          tl.from(".footer-kicker", {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power3.out",
          });

          tl.from(
            ".footer-title",
            {
              opacity: 0,
              y: 24,
              duration: 0.85,
              ease: "power3.out",
            },
            "-=0.25",
          );

          tl.from(
            ".footer-star",
            {
              scale: 0.96,
              y: 18,
              duration: 1.1,
              ease: "power3.out",
              transformOrigin: "center center",
            },
            "-=0.65",
          );

          tl.from(
            ".footer-link",
            {
              y: 10,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.55",
          );

          tl.from(
            ".footer-bottom",
            {
              y: 8,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.25",
          );
        },
      );

      return () => mm.revert();
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="
        portfolio-footer
        relative
        mt-0
        overflow-hidden
        px-5
        pb-8
        pt-16
        md:px-10
        md:pt-24
        lg:px-20
        xl:px-32
      "
    >
      {/* STAR */}
      <div
        aria-hidden="true"
        className="
          footer-star
          pointer-events-none
          absolute
          bottom-[-185px]
          left-1/2
          z-0
          h-[320px]
          w-[470px]
          -translate-x-1/2

          md:bottom-[-245px]
          md:h-[470px]
          md:w-[720px]

          lg:bottom-[-290px]
          lg:h-[580px]
          lg:w-[900px]
        "
      >
        <FooterStar className="block h-full w-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20">
        <p className="footer-kicker mb-4 text-base md:text-xl">
          Let&apos;s talk
        </p>

        <h2
          className="
            footer-title
            max-w-[1000px]
            text-[clamp(3rem,13vw,4.5rem)]
            font-normal
            leading-[0.93]
            tracking-[-0.045em]
            md:text-[clamp(3.5rem,6vw,6.8rem)]
          "
        >
          Have something
          <br />
          weird, ambitious
          <br />
          or beautiful in mind?
        </h2>

        {/* LINKS */}
        <div
          className="
            relative
            z-20
            mt-14
            grid
            grid-cols-12
            items-end
            gap-4
            md:mt-20
          "
        >
          <a
            href="mailto:TUEMAIL"
            className="
              footer-link
              group
              col-span-12
              inline-flex
              w-fit
              items-center
              gap-3
              text-xl
              md:col-span-4
              md:text-3xl
            "
          >
            <span className="animated-underline">
              Say hello
            </span>

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
    footer-link
    group
    col-span-6
    inline-flex
    w-fit
    items-center
    gap-3
    text-base

    md:col-span-3
    md:col-start-7
    md:text-xl

    lg:col-span-2
    lg:col-start-8
    lg:text-2xl
  "
          >
            <span className="animated-underline">
              LinkedIn
            </span>

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
            href="/cv.pdf"
            className="
    footer-link
    group
    col-span-6
    inline-flex
    w-fit
    items-center
    gap-3
    text-base

    md:col-span-2
    md:col-start-11
    md:text-xl

    lg:col-span-2
    lg:col-start-auto
    lg:text-2xl
  "
          >
            <span className="animated-underline">
              CV
            </span>

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

      {/* BOTTOM */}
      <div
        className="
          footer-bottom
          relative
          z-20
          mt-10
          flex
          items-end
          justify-between
          border-t
          border-[var(--line)]
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
          className="
            theme-logo
            h-auto
            w-[90px]
            md:w-[115px]
          "
        />

        <p className="text-[9px] uppercase md:text-xs">
          Madrid | Spain | 2026
        </p>
      </div>
    </footer>
  );
}