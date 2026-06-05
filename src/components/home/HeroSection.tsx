import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Abstract */}
      <div className="pointer-events-none absolute left-6 top-28 hidden h-28 w-28 border-2 border-[#111111] opacity-20 dark:border-[#FFCC00] lg:block" />
      <div className="pointer-events-none absolute right-10 top-44 hidden h-20 w-20 bg-[#FFCC00] opacity-80 md:block" />

      <div className="pointer-events-none absolute bottom-16 left-8 hidden grid-cols-6 gap-2 md:grid">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#111111]/25 dark:bg-[#FFCC00]/45"
          />
        ))}
      </div>

        {/* Dot grid right - tidak ikut animasi foto */}
  <div className="pointer-events-none absolute right-20 top-28 hidden grid-cols-5 gap-2 lg:grid">
    {Array.from({ length: 20 }).map((_, index) => (
      <span
        key={index}
        className="h-1.5 w-1.5 rounded-full bg-[#111111]/30 dark:bg-[#FFCC00]/55"
      />
    ))}
  </div>

      <div className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-5 inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] shadow-[3px_3px_0px_#111111] sm:mb-6 sm:text-xs sm:tracking-[0.22em] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
            Fullstack Developer
          </div>

          <h1 className="font-heading animate-[slideDownReveal_0.75s_ease-out_0.12s_forwards] text-4xl font-black leading-[0.98] tracking-tight text-[#111111] sm:text-5xl md:text-6xl dark:text-[#F5F5F5]">
            <span className="block">Hi, I&apos;m</span>
            <span className="mt-2 inline-block bg-[#FFCC00] px-2 py-1 text-[#111111] shadow-[5px_5px_0px_#111111] sm:px-3 sm:shadow-[6px_6px_0px_#111111] dark:shadow-[5px_5px_0px_#FFCC00] sm:dark:shadow-[6px_6px_0px_#FFCC00]">
              Fauza Lutfia.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] text-base leading-7 text-[#5F5F5F] opacity-0 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0 dark:text-[#B5B5B5]">
            Fullstack Developer focused on building database-integrated web
            applications, user-friendly interfaces, and structured backend
            systems.
          </p>

          <div className="mt-8 flex animate-[slideUpReveal_0.6s_ease-out_0.28s_forwards] flex-col items-stretch gap-3 opacity-0 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border-2 border-[#111111] bg-[#FFCC00] px-5 py-3 text-sm font-black text-[#111111] shadow-[4px_4px_0px_#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none sm:px-6 dark:border-[#FFCC00] dark:shadow-[4px_4px_0px_#FFCC00]"
            >
              Let&apos;s Talk
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center border-2 border-[#111111] bg-white px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-[#FFF3B0] sm:px-6 dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-[#F5F5F5] dark:hover:border-[#FFCC00]"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-8 flex animate-[slideUpReveal_0.6s_ease-out_0.28s_forwards] items-center justify-center gap-3 opacity-0 lg:justify-start">
            <Link
              href="https://github.com/fzltf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFCC00] hover:shadow-none sm:h-11 sm:w-11 dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-[#F5F5F5] dark:shadow-none dark:hover:border-[#FFCC00] dark:hover:bg-[#FFCC00] dark:hover:text-[#111111]"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/fauzalutfia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFCC00] hover:shadow-none sm:h-11 sm:w-11 dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-[#F5F5F5] dark:shadow-none dark:hover:border-[#FFCC00] dark:hover:bg-[#FFCC00] dark:hover:text-[#111111]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>

            <a
              href="mailto:fzltfia@gmail.com"
              className="flex h-10 w-10 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#FFCC00] hover:shadow-none sm:h-11 sm:w-11 dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-[#F5F5F5] dark:shadow-none dark:hover:border-[#FFCC00] dark:hover:bg-[#FFCC00] dark:hover:text-[#111111]"
              aria-label="Email"
            >
              <MdEmail size={22} />
            </a>
          </div>
        </div>

        {/* Right Profile Visual */}
        <div className="relative z-10 flex animate-[slideLeftReveal_0.75s_ease-out_0.35s_forwards] justify-center opacity-0 lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]">
            {/* Yellow block behind image */}
            <div className="absolute -right-3 top-6 h-full w-full border-2 border-[#111111] bg-[#FFCC00] sm:-right-4 sm:top-8 dark:border-[#FFCC00]" />

            {/* Main image frame */}
            <div className="relative border-2 border-[#111111] bg-white p-3 shadow-[6px_6px_0px_#111111] sm:p-4 sm:shadow-[8px_8px_0px_#111111] dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-[6px_6px_0px_#FFCC00] sm:dark:shadow-[8px_8px_0px_#FFCC00]">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#111111] bg-[#EDE9DD] dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
                <Image
                  src="/profile1.JPG"
                  alt="Fauza Lutfia profile photo"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 280px, 360px"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 grid gap-3 border-t-2 border-[#111111] pt-3 sm:mt-4 sm:grid-cols-[auto_1fr] sm:items-center sm:pt-4 dark:border-[#3A3A3A]">
  <p className="inline-flex bg-[#FFCC00] px-3 py-2 text-[10px] font-black leading-tight text-[#111111] sm:px-4 sm:text-xs">
    Build with Purpose,
    <br />
    Code with Passion.
  </p>

  <p className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.08em] text-[#111111] sm:text-xs sm:tracking-[0.1em] dark:text-[#F5F5F5]">
    WEB | MOBILE | UI/UX
  </p>
</div>
            </div>

  

            
          </div>
        </div>
      </div>
    </section>
  );
}