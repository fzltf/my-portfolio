"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#111111] bg-[#FAF8F0]/90 backdrop-blur-xl dark:border-[#2A2A2A] dark:bg-[#0B0B0C]/90">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
  href="/"
  onClick={closeMenu}
  aria-label="Fauza Lutfia Home"
  className="flex h-9 w-9 items-center justify-center border-2 border-[#111111] bg-[#FFCC00] p-1 shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none sm:h-10 sm:w-10 dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]"
>
  <Image
    src="/logo-fl.png"
    alt="Fauza Lutfia Logo"
    width={32}
    height={32}
    priority
    className="h-full w-full object-contain"
  />
</Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-black uppercase tracking-wide transition ${
                  isActive
                    ? "text-[#111111] dark:text-white"
                    : "text-[#5F5F5F] hover:text-[#111111] dark:text-[#B5B5B5] dark:hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[3px] bg-[#FFCC00] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#111111] bg-white text-[#111111] shadow-[3px_3px_0px_#111111] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none sm:h-11 sm:w-11 dark:border-[#FFCC00] dark:bg-[#151515] dark:text-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t-2 border-[#111111] bg-[#FAF8F0] px-4 py-4 dark:border-[#2A2A2A] dark:bg-[#0B0B0C] sm:px-6 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`border-2 px-4 py-3 text-sm font-black uppercase tracking-wide transition ${
                    isActive
                      ? "border-[#111111] bg-[#FFCC00] text-[#111111] shadow-[3px_3px_0px_#111111]"
                      : "border-[#111111] bg-white text-[#111111] hover:bg-[#FFF3B0] dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-white dark:hover:border-[#FFCC00]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}