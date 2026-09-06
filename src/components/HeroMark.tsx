"use client";

import { useEffect, useRef } from "react";

export default function HeroMark() {
  const markRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mark = markRef.current;

    if (!mark) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      const moveX = x * 10;
      const moveY = y * 10;
      const rotation = x * 8;

      mark.style.transform = `
        translate(-50%, -50%)
        translate(${moveX}px, ${moveY}px)
        rotate(${rotation}deg)
      `;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <span
      ref={markRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1.4em] w-[1.4em]"
      style={{
        transform: "translate(-50%, -50%)",
        transition: "transform 180ms ease-out",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 8
             L116 66
             L160 28
             L136 80
             L194 66
             L142 96
             L188 128
             L132 112
             L150 176
             L112 126
             L96 190
             L88 126
             L42 168
             L72 112
             L10 130
             L64 96
             L12 62
             L76 78
             Z"
          fill="#DDE4F6"
        />
      </svg>
    </span>
  );
}