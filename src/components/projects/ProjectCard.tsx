import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border-2 border-[#111111] bg-white shadow-[6px_6px_0px_#111111] transition duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-none dark:hover:border-[#FFCC00]">
      <div className="relative m-3 mb-0 h-44 overflow-hidden border-2 border-[#111111] bg-[#EDE9DD] sm:m-4 sm:mb-0 sm:h-52 dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3">
          <span className="border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-[#111111] shadow-[3px_3px_0px_#111111] sm:text-xs">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:min-h-[270px] sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-lg font-black leading-tight text-[#111111] sm:text-xl dark:text-[#F5F5F5]">
            {project.title}
          </h2>

          <span className="mt-1 h-3 w-3 shrink-0 bg-[#FFCC00]" />
        </div>

        <p className="mt-3 line-clamp-4 text-sm leading-6 text-[#5F5F5F] sm:mt-4 dark:text-[#B5B5B5]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#111111] bg-[#FAF8F0] px-2.5 py-1 text-[11px] font-bold text-[#111111] sm:px-3 sm:text-xs dark:border-[#3A3A3A] dark:bg-[#1F1F1F] dark:text-[#F5F5F5]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}