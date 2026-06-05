"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

type FilterCategory = "All" | ProjectCategory;

const categories: FilterCategory[] = ["All", "Web", "Mobile", "UI/UX"];

export default function ProjectsPage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = [
    projects.find((project) => project.category === "Web"),
    projects.find((project) => project.category === "UI/UX"),
    projects.find((project) => project.category === "Mobile"),
  ].filter(Boolean) as typeof projects;

  const displayedProjects = showAllProjects
    ? filteredProjects
    : featuredProjects;

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:py-24">
      {/* Background Abstract */}
      <div className="pointer-events-none absolute left-6 top-28 hidden h-28 w-28 border-2 border-[#111111] opacity-20 dark:border-[#FFCC00] lg:block" />

      <div className="pointer-events-none absolute right-10 top-44 hidden h-20 w-20 bg-[#FFCC00] opacity-80 lg:block" />

      <div className="pointer-events-none absolute bottom-16 left-8 hidden grid-cols-6 gap-2 lg:grid">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#111111]/25 dark:bg-[#FFCC00]/45"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute right-20 top-28 hidden grid-cols-5 gap-2 xl:grid">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#111111]/30 dark:bg-[#FFCC00]/55"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] shadow-[3px_3px_0px_#111111] sm:text-xs sm:tracking-[0.22em] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
            Selected Work
          </p>

          <h1 className="font-heading mt-5 animate-[slideDownReveal_0.75s_ease-out_0.12s_forwards] text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-4xl md:mt-6 md:text-5xl dark:text-[#F5F5F5]">
            Things I’ve built, designed, and improved along the way.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] text-base leading-7 text-[#5F5F5F] opacity-0 sm:text-lg sm:leading-8 md:mt-5 dark:text-[#B5B5B5]">
            A selection of web, mobile, and UI/UX projects from my internship,
            college projects, and personal learning.
          </p>
        </div>

        {showAllProjects && (
          <div className="mt-10 flex flex-wrap justify-center gap-3 animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] opacity-0 sm:mt-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`border-2 px-4 py-2 text-xs font-black uppercase tracking-wide transition sm:px-5 sm:text-sm ${
                    isActive
                      ? "border-[#111111] bg-[#FFCC00] text-[#111111] shadow-[3px_3px_0px_#111111] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]"
                      : "border-[#111111] bg-white text-[#111111] hover:bg-[#FFF3B0] dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-[#F5F5F5] dark:hover:border-[#FFCC00]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="animate-[slideLeftReveal_0.75s_ease-out_0.35s_forwards] opacity-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {!showAllProjects && projects.length > 3 && (
          <div className="mt-12 flex animate-[slideLeftReveal_0.75s_ease-out_0.35s_forwards] justify-center opacity-0 lg:mt-14">
            <button
              type="button"
              onClick={() => setShowAllProjects(true)}
              className="group inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#FFCC00] px-5 py-3 text-sm font-black text-[#111111] shadow-[4px_4px_0px_#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:px-6 dark:border-[#FFCC00] dark:shadow-[4px_4px_0px_#FFCC00]"
            >
              View All Projects
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}