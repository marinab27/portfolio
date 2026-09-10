"use client";

import { useEffect, useRef } from "react";

type AboutStarProps = {
    className?: string;
};

export default function AboutStar({
    className = "",
}: AboutStarProps) {
    const starRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const star = starRef.current;

        if (!star) return;

        const handlePointerMove = (event: PointerEvent) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            const moveX = x * 8;
            const moveY = y * 8;
            const rotation = x * 4;

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
            viewBox="0 0 220 220"
            aria-hidden="true"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: "transform 220ms ease-out",
            }}
        >
            <path
                d="
          M106 12
          L124 76
          L190 42
          L145 96
          L210 118
          L143 126
          L168 202
          L112 148
          L72 198
          L86 139
          L14 170
          L73 119
          L8 91
          L82 96
          Z
        "
                fill="#DDE4F6"
                fillOpacity="1"
            />
        </svg>
    );
}