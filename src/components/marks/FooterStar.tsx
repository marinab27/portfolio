"use client";

import { useEffect, useRef } from "react";

type FooterStarProps = {
    className?: string;
};

export default function FooterStar({
    className = "",
}: FooterStarProps) {
    const starRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const star = starRef.current;

        if (!star) return;

        const handlePointerMove = (event: PointerEvent) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            const moveX = x * 5;
            const moveY = y * 5;
            const rotation = x * 1.8;

            star.style.transform = `
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
        <svg
            ref={starRef}
            viewBox="0 0 520 360"
            aria-hidden="true"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: "transform 260ms ease-out",
            }}
        >
            <path
                d="
          M260 12
          L286 118
          L372 40
          L320 138
          L494 82
          L340 166
          L500 236
          L326 202
          L372 346
          L278 224
          L252 356
          L226 224
          L132 344
          L178 202
          L18 238
          L176 166
          L20 84
          L198 138
          L148 40
          L234 118
          Z
        "
                fill="#DDE4F6"
                fillOpacity="1"
            />
        </svg>
    );
}