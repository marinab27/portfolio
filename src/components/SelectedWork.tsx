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
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (!cursorRef.current) return;

    cursorRef.current.style.transform = `
      translate3d(
        ${event.clientX}px,
        ${event.clientY}px,
        0
      )
      translate(-50%, -50%)
    `;
  };

  return (
    <section
      id="projects"
      className="relative mt-24 md:mt-44"
      onMouseMove={handleMouseMove}
    >
      <h2 className="mb-7 text-[2.1rem] font-normal tracking-[-0.035em] md:mb-8 md:text-5xl">
        Selected Work
      </h2>

      <div className="ml-[10px] border-t border-[var(--line)] md:ml-0">
        {projects.map((project, index) => {
          const isActive = activeProject === index;

          return (
            <div
              key={project.title}
              className={`
                relative
                border-b
                py-5
                transition-colors
                duration-300
                md:grid
                md:cursor-none
                md:grid-cols-12
                md:items-center
                md:gap-4
                md:py-5
                ${
                  isActive
                    ? "border-[rgba(91,114,232,0.35)]"
                    : "border-[var(--line)]"
                }
              `}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* MOBILE */}
              <div className="md:hidden">
                <div className="mb-2 flex items-center gap-2 text-[10px] uppercase leading-none">
                  <span>{project.client}</span>

                  <span aria-hidden="true" className="opacity-50">
                    |
                  </span>

                  <span>{project.category}</span>
                </div>

                <h3 className="text-[17px] font-normal leading-[1.15] tracking-[-0.02em]">
                  {project.title}
                </h3>
              </div>

              {/* DESKTOP TITLE */}
              <h3
                className={`
                  hidden
                  font-normal
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  md:col-span-5
                  md:block
                  md:text-xl
                  md:leading-tight
                  ${isActive ? "md:translate-x-[6px]" : ""}
                `}
              >
                {project.title}
              </h3>

              {/* DESKTOP CLIENT */}
              <p
                className={`
                  hidden
                  text-xs
                  uppercase
                  transition-opacity
                  duration-300
                  md:col-span-3
                  md:block
                  ${isActive ? "opacity-60" : "opacity-100"}
                `}
              >
                {project.client}
              </p>

              {/* DESKTOP CATEGORY */}
              <p
                className={`
                  hidden
                  text-xs
                  uppercase
                  transition-opacity
                  duration-300
                  md:col-span-4
                  md:block
                  ${isActive ? "opacity-60" : "opacity-100"}
                `}
              >
                {project.category}
              </p>
            </div>
          );
        })}
      </div>

      {/* FLOATING PREVIEW */}
      {activeProject !== null && projects[activeProject].image && (
        <div
          className="
            project-preview-enter
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

      {/* CUSTOM CURSOR */}
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
        <span className="project-cursor-arrow-enter inline-block">→</span>
      </div>
    </section>
  );
}
