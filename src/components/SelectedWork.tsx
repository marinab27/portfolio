"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Fujikina Madrid 2026",
    client: "Fujifilm",
    category: "Art Direction",
    image: "/projects/fujikina-home.png",
  },
  {
    title: "Sumérgete en la Magia",
    client: "Disney",
    category: "Digital Experience",
    image: null,
  },
  {
    title: "LABOLA Digital Agency",
    client: "LABOLA",
    category: "Web Design",
    image: null,
  },
  {
    title: "Fibritel",
    client: "Fibritel",
    category: "UX/UI + Web",
    image: null,
  },
];

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [arrowKey, setArrowKey] = useState(0);

  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!cursorRef.current) return;

    cursorRef.current.style.transform = `
      translate3d(${event.clientX}px, ${event.clientY}px, 0)
      translate(-50%, -50%)
    `;
  };

  const handleMouseEnter = (index: number) => {
    setActiveProject(index);
    setArrowKey((prev) => prev + 1);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section
      id="projects"
      className="relative mt-36 md:mt-44"
      onMouseMove={handleMouseMove}
    >
      <h2 className="mb-8 text-4xl font-normal tracking-tight md:text-5xl">
        Selected Work
      </h2>

      <div className="border-t border-[var(--line)]">
        {projects.map((project, index) => {
          const isActive = activeProject === index;

          return (
            <div
              key={project.title}
              className="grid cursor-none grid-cols-12 items-center gap-4 border-b border-[var(--line)] py-5"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3
                className={`
                  col-span-5
                  text-xl
                  font-normal
                  transition-transform
                  duration-300
                  ease-out
                  ${isActive ? "translate-x-1" : ""}
                `}
              >
                {project.title}
              </h3>

              <p className="col-span-3 text-xs uppercase">{project.client}</p>

              <p className="col-span-4 text-xs uppercase">{project.category}</p>
            </div>
          );
        })}
      </div>

      {activeProject !== null && projects[activeProject].image && (
        <div
          className="
      project-preview
      pointer-events-none
      fixed
      right-[8vw]
      top-1/2
      z-30
      hidden
      w-[320px]
      -translate-y-1/2
      overflow-hidden
      md:block
      lg:w-[380px]
      xl:w-[420px]
    "
        >
          <Image
            src={projects[activeProject].image}
            alt={`${projects[activeProject].title} preview`}
            width={840}
            height={560}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-50
          hidden
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#5B72E8]/10
          bg-[#DDE4F6]/75
          text-lg
          text-[#4258C9]
          backdrop-blur-[2px]
          transition-opacity
          duration-150
          ease-out
          md:flex
          ${activeProject !== null ? "opacity-100" : "opacity-0"}
        `}
      >
        {activeProject !== null && (
          <span
            key={arrowKey}
            className="project-cursor-arrow-enter inline-block"
          >
            →
          </span>
        )}
      </div>
    </section>
  );
}
