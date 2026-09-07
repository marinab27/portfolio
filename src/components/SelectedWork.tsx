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
              className="
                border-b
                border-[var(--line)]
                py-5
                md:grid
                md:cursor-none
                md:grid-cols-12
                md:items-center
                md:gap-4
                md:py-5
              "
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

              {/* DESKTOP */}
              <h3
                className={`
                  hidden
                  font-normal
                  transition-transform
                  duration-300
                  ease-out
                  md:col-span-5
                  md:block
                  md:text-xl
                  md:leading-tight
                  ${isActive ? "md:translate-x-1" : ""}
                `}
              >
                {project.title}
              </h3>

              <p className="hidden text-xs uppercase md:col-span-3 md:block">
                {project.client}
              </p>

              <p className="hidden text-xs uppercase md:col-span-4 md:block">
                {project.category}
              </p>
            </div>
          );
        })}
      </div>

      {/* Floating project preview — desktop only */}
      {activeProject !== null && projects[activeProject].image && (
        <div
          className="
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

      {/* Custom cursor — desktop only */}
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
