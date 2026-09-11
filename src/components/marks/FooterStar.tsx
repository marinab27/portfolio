"use client";

import { useEffect, useRef } from "react";

type FooterStarProps = {
    className?: string;
};

const rays = [
    {
        angle: -3,
        length: 235,
        width: 12,
    },
    {
        angle: 36,
        length: 215,
        width: 11,
    },
    {
        angle: 70,
        length: 245,
        width: 10,
    },
    {
        angle: 103,
        length: 195,
        width: 11,
    },
    {
        angle: 139,
        length: 230,
        width: 13,
    },
    {
        angle: 178,
        length: 250,
        width: 10,
    },
    {
        angle: 218,
        length: 210,
        width: 12,
    },
    {
        angle: 253,
        length: 245,
        width: 13,
    },
    {
        angle: 292,
        length: 205,
        width: 10,
    },
    {
        angle: 326,
        length: 235,
        width: 11,
    },
];

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

            const moveX = x * 4;
            const moveY = y * 4;
            const rotation = x * 1.2;

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

    const centerX = 260;
    const centerY = 260;

    return (
        <svg
            ref={starRef}
            viewBox="0 0 520 520"
            aria-hidden="true"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transition: "transform 260ms ease-out",
            }}
        >
            <g
                fill="var(--footer-star-color)"
                opacity="var(--footer-star-opacity)"
            >
                {rays.map(({ angle, length, width }, index) => (
                    <polygon
                        key={index}
                        points={`
              ${centerX - width},${centerY + 7}
              ${centerX},${centerY - length}
              ${centerX + width},${centerY + 7}
            `}
                        transform={`
              rotate(
                ${angle}
                ${centerX}
                ${centerY}
              )
            `}
                    />
                ))}

                <circle
                    cx={centerX}
                    cy={centerY}
                    r="18"
                />
            </g>
        </svg>
    );
}