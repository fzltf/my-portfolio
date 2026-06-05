export type ProjectCategory = "Web" | "Mobile" | "UI/UX";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Distribution Modul",
    category: "Web",
    description:
       "Refactored a legacy PHP distribution system into CodeIgniter 4 with REST API, JWT authentication, MySQL, and SAP HANA integration.",
    image: "/projects/distribution-modul.webp",
    tags: ["CodeIgniter 4", "PHP", "MySQL", "SAP HANA", "JWT", "Postman"],
    githubUrl: "#",
    
  },
  {
    title: "Cafe POS System",
    category: "Web",
    description:
       "Built a cafe POS system to manage sales transactions, products, stock, and pre-orders.",
    image: "/projects/cafe-pos.webp",
    tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "#",
  },
  {
    title: "Web Company Profile",
    category: "Web",
    description:
      "Created a company profile website to showcase services, products, and contact details.",
    image: "/projects/company-profile.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "#",
  },
  {
    title: "Zennith Watt",
    category: "Web",
    description:
       "Developed a multi-role electricity billing system to manage usage data, bills, and payment verification.",
    image: "/projects/zennith-watt.webp",
    tags: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "#",
  },
   {
    title: "Personal Portfolio",
    category: "Web",
    description:
       "Built a modern personal portfolio website to showcase my projects, skills, resume, and contact information in a clean and responsive interface.",
    image: "/projects/personal-portfolio.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
  },

  {
    title: "Lokasnap",
    category: "Mobile",
    description:
     "Developed a multi-role photo studio booking app for customers and studio owners, with reservations, Midtrans payments, reviews, and Google Maps integration.",
    image: "/projects/lokasnap.webp",
    tags: ["Flutter", "GetX", "Firebase", "Midtrans", "Node.js", "GCP", "Google Maps"],
    githubUrl: "#",
  },

  {
    title: "Go Furniture",
    category: "UI/UX",
    description:
        "Designed a mobile furniture e-commerce app interface with a clean layout, smooth user flow, and consistent visual style.",
    image: "/projects/go-furniture.webp",
    tags: ["UI/UX", "Wireframe", "Prototype"],
    githubUrl: "#",
  },
  {
    title: "BaMeets",
    category: "UI/UX",
    description:
        "Created a web-based meeting management interface for scheduling meetings, discussions, attendance, documentation, and meeting results.",
    image: "/projects/bameets.webp",
    tags: ["UI/UX", "Wireframe", "Prototype"],
    githubUrl: "#",
  },
  {
    title: "Pijar Music",
    category: "UI/UX",
    description:
       "Designed a charity concert ticketing platform for discovering events, buying tickets, making donations, and supporting social causes through music.",
    image: "/projects/pijar-music.webp",
    tags: ["UI/UX", "Wireframe", "Prototype"],
    githubUrl: "#",
  },
];