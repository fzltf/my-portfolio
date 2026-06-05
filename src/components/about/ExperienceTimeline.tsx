const experiences = [
  {
    year: "November 2025 - May 2026",
    title: "IT Programmer Intern",
    company: "PT Sanken Argadwija",
    description:
      "Worked on a distribution module refactor from native PHP to CodeIgniter 4. I helped build the MVC and API-based structure, implemented JWT authentication, displayed frontend data through JSON responses, integrated MySQL with SAP HANA, and tested APIs using Postman.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6 animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] opacity-0">
      {experiences.map((item) => (
        <div
          key={`${item.year}-${item.title}`}
          className="relative overflow-hidden border-2 border-[#111111] bg-white p-5 shadow-[5px_5px_0px_#111111] sm:p-6 dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-none"
        >
          {/* Timeline line */}
          <div className="absolute bottom-6 left-6 top-6 w-[2px] bg-[#111111] sm:left-7 dark:bg-[#3A3A3A]" />

          {/* Top dot */}
          <span className="absolute left-[19px] top-7 h-3 w-3 rounded-full border-2 border-[#111111] bg-[#FFCC00] sm:left-[23px] dark:border-[#FFCC00]" />

          {/* Middle dot */}
          <span className="absolute left-[19px] top-[90px] h-3 w-3 rounded-full border-2 border-[#111111] bg-[#FFCC00] sm:left-[23px] dark:border-[#FFCC00]" />

          <div className="relative z-10 pl-8 sm:pl-10">
            <p className="text-[11px] font-black uppercase tracking-wide text-[#5F5F5F] sm:text-xs dark:text-[#B5B5B5]">
              {item.year}
            </p>

            <h3 className="font-heading mt-2 text-lg font-black text-[#111111] sm:text-xl dark:text-[#F5F5F5]">
              {item.title}
            </h3>

            <p className="mt-1 text-sm font-bold text-[#5F5F5F] dark:text-[#B5B5B5]">
              {item.company}
            </p>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5F5F5F] dark:text-[#B5B5B5]">
              {item.description}
            </p>
          </div>

          {/* Right bottom dot grid */}
          <div className="pointer-events-none absolute bottom-5 right-8 hidden grid-cols-5 gap-1.5 lg:grid">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-1 w-1 rounded-full bg-[#111111]/30 dark:bg-[#FFCC00]/45"
              />
            ))}
          </div>

          {/* Corner brutalist accent */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-l-2 border-t-2 border-[#111111] bg-[#FFCC00] sm:h-12 sm:w-12 dark:border-[#FFCC00]" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-10 w-10 border-l-2 border-t-2 border-[#111111] bg-transparent sm:h-12 sm:w-12 dark:border-[#FFCC00]" />
        </div>
      ))}
    </div>
  );
}