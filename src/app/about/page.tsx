import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import ImageCarousel from "@/components/about/ImageCarousel";
import Skills from "@/components/about/Skills";

export default function AboutPage() {
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
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] shadow-[3px_3px_0px_#111111] sm:text-xs sm:tracking-[0.22em] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
              About Me
            </p>

            <h1 className="font-heading mx-auto mt-5 max-w-2xl animate-[slideDownReveal_0.75s_ease-out_0.12s_forwards] text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-4xl md:mt-6 md:text-5xl lg:mx-0 dark:text-[#F5F5F5]">
              I build web and mobile applications with clean interfaces and
              structured systems.
            </h1>

            <div className="mx-auto mt-5 max-w-2xl animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] space-y-4 text-base leading-7 text-[#5F5F5F] opacity-0 sm:mt-6 sm:leading-8 lg:mx-0 dark:text-[#B5B5B5]">
              <p>
                I am a Fullstack Developer with a strong interest in UI/UX
                design and cloud computing. I enjoy creating digital products
                that are functional, efficient, and easy to use.
              </p>

              <p>
                My experience includes developing web application modules,
                working with backend logic, integrating databases, building
                API-based systems, and improving user interfaces. I also have
                experience working on academic and personal projects, including
                mobile apps, web applications, and UI/UX designs.
              </p>
            </div>
          </div>

          <ImageCarousel />
        </div>

        <Skills />

        <div className="mt-16 sm:mt-20">
          <div className="mb-6 sm:mb-8">
            <p className="inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] shadow-[3px_3px_0px_#111111] sm:text-xs sm:tracking-[0.22em] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
              Experience
            </p>
          </div>

          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}