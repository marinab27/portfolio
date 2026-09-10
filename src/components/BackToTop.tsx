"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Aparece después de bajar 500px
            setVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
        group
        fixed bottom-5 right-5 z-40
        flex h-11 w-11
        items-center justify-center
        rounded-full
        border border-[var(--foreground)]/25
        bg-[var(--background)]/80
        backdrop-blur-sm

        transition-[opacity,transform,border-color,background-color]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        md:bottom-8 md:right-8
        md:h-12 md:w-12

        ${visible
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none translate-y-3 scale-90 opacity-0"
                }

        hover:border-[var(--accent)]/60
      `}
        >
            <span
                aria-hidden="true"
                className="
          text-lg
          leading-none
          text-[var(--accent)]
          transition-transform
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-translate-y-[3px]
        "
            >
                ↑
            </span>
        </button>
    );
}