"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="projects" className="relative mt-36 md:mt-44">
      <h2 className="mb-8 text-4xl font-normal tracking-tight md:text-5xl">
        Selected Work
      </h2>

      <div className="border-t border-[var(--line)]">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid cursor-pointer grid-cols-12 items-center gap-4 border-b border-[var(--line)] py-5"
            onMouseEnter={() => setActiveImage(project.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <h3 className="col-span-5 text-xl font-normal">{project.title}</h3>

            <p className="col-span-2 text-xs uppercase">{project.client}</p>

            <p className="col-span-3 text-xs uppercase">{project.category}</p>

            <div className="col-span-2 text-right text-xl text-[var(--accent)]">
              →
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="pointer-events-none absolute right-[8%] top-[20%] z-10 hidden w-[360px] overflow-hidden rounded-xl shadow-lg md:block">
          <Image
            src={activeImage}
            alt="Project preview"
            width={720}
            height={480}
            className="h-auto w-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
