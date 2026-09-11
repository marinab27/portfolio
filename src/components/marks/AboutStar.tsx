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
            const x =
                event.clientX / window.innerWidth - 0.5;

            const y =
                event.clientY / window.innerHeight - 0.5;

            const moveX = x * 8;
            const moveY = y * 8;
            const rotation = x * 4;

            star.style.transform = `
        translate(${moveX}px, ${moveY}px)
        rotate(${rotation}deg)
      `;
        };

        window.addEventListener(
            "pointermove",
            handlePointerMove,
        );

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove,
            );
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
                transition:
                    "transform 220ms ease-out",
            }}
        >
            <path
                d="
          M108 104
          L82 22
          L118 96

          L174 12
          L127 103

          L209 88
          L132 111

          L201 151
          L128 119

          L151 207
          L116 128

          L70 211
          L106 127

          L15 157
          L98 117

          L8 86
          L96 106

          Z
        "
                fill="var(--star-fill)"
                fillOpacity="1"
                style={{
                    transition:
                        "fill 500ms var(--ease-out)",
                }}
            />
        </svg>
    );
}