"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const handlePointerMove = (event: PointerEvent) => {
      glow.style.setProperty("--mouse-x", `${event.clientX}px`);
      glow.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="cursor-glow"
      />

      <div
        aria-hidden="true"
        className="grain"
      />
    </>
  );
}