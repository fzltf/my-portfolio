import ContactForm from "@/components/contact/ContactForm";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  {
    label: "Email",
    value: "fzltfia@gmail.com",
    href: "mailto:fzltfia@gmail.com",
    icon: MdEmail,
  },
  {
    label: "Location",
    value: "Tangerang, Indonesia",
    href: "#",
    icon: MdLocationOn,
  },
  {
    label: "WhatsApp",
    value: "+62 818-0733-8767",
    href: "https://wa.me/6281807338767?text=Hi%20Fauza%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20collaboration%20or%20opportunity%20with%20you.",
    icon: FaWhatsapp,
  },
];

export default function ContactPage() {
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

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="inline-flex animate-[slideDownReveal_0.55s_ease-out_forwards] border-2 border-[#111111] bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] shadow-[3px_3px_0px_#111111] sm:text-xs sm:tracking-[0.22em] dark:border-[#FFCC00] dark:shadow-[3px_3px_0px_#FFCC00]">
            Contact
          </p>

          <h1 className="font-heading mt-5 animate-[slideDownReveal_0.75s_ease-out_0.12s_forwards] text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-4xl md:mt-6 md:text-5xl dark:text-[#F5F5F5]">
            Let&apos;s create something great together.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] text-base leading-7 text-[#5F5F5F] opacity-0 sm:mt-5 sm:leading-8 lg:mx-0 dark:text-[#B5B5B5]">
            Have a project, collaboration idea, or opportunity? Send me a
            message, and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          {/* Left Contact Area */}
          <div className="relative border-2 border-[#111111] bg-white p-3 shadow-[6px_6px_0px_#111111] sm:p-4 dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-none">
            <div className="relative min-h-[360px] overflow-hidden border-2 border-[#111111] bg-[#111111] sm:min-h-[380px] lg:min-h-[430px] dark:border-[#3A3A3A]">
              <Image
                src="/contact-cover.jpg"
                alt="Contact workspace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover opacity-45 grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

              <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-4 sm:min-h-[380px] sm:p-5 lg:min-h-[430px]">
                <div>
                  <p className="inline-flex bg-[#FFCC00] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#111111] sm:text-xs sm:tracking-[0.22em]">
                    Let&apos;s Talk
                  </p>

                  <h2 className="font-heading mt-4 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                    Open for collaboration and opportunities.
                  </h2>
                </div>

                <div className="mt-6 grid gap-3">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    if (item.href === "#") {
                      return (
                        <div
                          key={item.label}
                          className="group flex items-center gap-3 border-2 border-white/70 bg-white px-3 py-2.5 text-[#111111]"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#111111] bg-[#FFCC00] text-[#111111]">
                            <Icon size={20} />
                          </span>

                          <span className="min-w-0">
                            <span className="block text-xs font-black uppercase tracking-wide text-[#5F5F5F]">
                              {item.label}
                            </span>

                            <span className="mt-0.5 block break-words text-sm font-black text-[#111111]">
                              {item.value}
                            </span>
                          </span>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3 border-2 border-white/70 bg-white px-3 py-2.5 text-[#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:border-[#FFCC00] hover:bg-[#FFCC00]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#111111] bg-[#FFCC00] text-[#111111] transition group-hover:bg-white">
                          <Icon size={20} />
                        </span>

                        <span className="min-w-0">
                          <span className="block text-xs font-black uppercase tracking-wide text-[#5F5F5F]">
                            {item.label}
                          </span>

                          <span className="mt-0.5 block break-words text-sm font-black text-[#111111]">
                            {item.value}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-12 w-12 border-2 border-[#111111] bg-[#FFCC00] sm:h-14 sm:w-14 dark:border-[#FFCC00]" />
          </div>

          {/* Right Form Area */}
          <div className="relative border-2 border-[#111111] bg-white p-5 shadow-[5px_5px_0px_#111111] sm:p-6 lg:p-7 dark:border-[#3A3A3A] dark:bg-[#151515] dark:shadow-none">
            <div className="pointer-events-none absolute right-5 top-5 h-7 w-7 bg-[#FFCC00] sm:right-6 sm:top-6 sm:h-8 sm:w-8" />

            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-black tracking-tight text-[#111111] sm:text-3xl dark:text-[#F5F5F5]">
                Get in Touch
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#5F5F5F] dark:text-[#B5B5B5]">
                Fill out the form below, and your message will be sent directly
                to my email.
              </p>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}