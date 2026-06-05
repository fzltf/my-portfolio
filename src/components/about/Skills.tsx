import Image from "next/image";
import type { IconType } from "react-icons";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from "react-icons/fa";

import {
  SiCodeigniter,
  SiBootstrap,
  SiTypescript,
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiGooglecloud,
  SiFigma,
} from "react-icons/si";

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiReactjsFill,
} from "react-icons/ri";

type Skill = {
  name: string;
  icon?: IconType;
  image?: string;
  color?: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: RiReactjsFill, color: "text-cyan-500" },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "text-zinc-950 dark:text-white",
  },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-500" },
  { name: "Node.js", icon: RiNodejsFill, color: "text-green-600" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
  { name: "CodeIgniter", icon: SiCodeigniter, color: "text-red-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Flutter", icon: SiFlutter, color: "text-sky-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "SAP HANA", image: "/skills/sap-hana.svg" },
  { name: "Midtrans", image: "/skills/midtrans.svg" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Figma", icon: SiFigma, color: "text-purple-500" },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className="group relative flex min-h-[64px] w-[160px] shrink-0 items-center gap-3 border-2 border-[#111111] bg-white px-3 py-3 text-left shadow-[4px_4px_0px_#111111] transition duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FFF3B0] hover:shadow-none sm:min-h-[72px] sm:w-[190px] sm:px-4 dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-none dark:hover:border-[#FFCC00] dark:hover:bg-[#1F1F1F]">
      {/* Train connector */}
      <span className="pointer-events-none absolute -right-4 top-1/2 hidden h-[2px] w-4 -translate-y-1/2 bg-[#111111] sm:block dark:bg-[#FFCC00]" />
<span className="pointer-events-none absolute -right-5 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 border border-[#111111] bg-[#FFCC00] sm:block dark:border-[#FFCC00]" />

      <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#111111] bg-[#FAF8F0] sm:h-11 sm:w-11 dark:border-[#3A3A3A] dark:bg-[#1F1F1F]">
        {skill.image ? (
          <Image
            src={skill.image}
            alt={`${skill.name} logo`}
            width={34}
            height={34}
            className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
          />
        ) : Icon ? (
          <Icon
            size={26}
            className={`${skill.color} transition duration-300 group-hover:scale-110`}
          />
        ) : null}
      </div>

      <p className="text-xs font-black text-[#111111] sm:text-sm dark:text-[#F5F5F5]">
        {skill.name}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="mb-8">
        <p className="inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-[#111111] shadow-[3px_3px_0px_#111111] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
          Skills
        </p>

        <h2 className="font-heading mt-5 animate-[slideDownReveal_0.75s_ease-out_0.12s_forwards] text-2xl font-black leading-tight tracking-tight text-[#111111] sm:text-3xl dark:text-[#F5F5F5]">
          Tools I use to build Web, Mobile, and UI/UX projects.
        </h2>
      </div>

      <div className="space-y-5 overflow-hidden animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] opacity-0">
        {/* Row 1 - jalan ke kiri */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-6 animate-[skillMarqueeLeft_36s_linear_infinite] hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard key={`left-${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 - jalan ke kanan */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-6 animate-[skillMarqueeRight_36s_linear_infinite] hover:[animation-play-state:paused]">
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map(
              (skill, index) => (
                <SkillCard key={`right-${skill.name}-${index}`} skill={skill} />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}