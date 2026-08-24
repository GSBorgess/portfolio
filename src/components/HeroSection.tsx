import { AtSign, Hand } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero.webp";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "#github",
    icon: FaGithub,
  },
  {
    label: "WhatsApp",
    href: "#whatsapp",
    icon: FaWhatsapp,
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-main text-text-main">
      <aside
        aria-label="Midias sociais"
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-5 rounded-full border border-border bg-chip px-4 py-3 shadow-[0_0_48px_var(--bg-secondary)]"
      >
        <AtSign className="h-5 w-5 text-primary-color" aria-hidden="true" />
        <div className="h-8 w-px bg-border" />
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-main text-text-secondary transition hover:border-primary-color hover:bg-primary-color hover:text-text-main"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          );
        })}
      </aside>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_400px_minmax(0,1fr)]">
          <div className="relative z-20 order-2 pt-10 -bottom-6 text-center lg:order-1 lg:pt-0 lg:-bottom-0 lg:text-left">
            <p className="mb-2 font-title text-3xl font-bold uppercase leading-none text-text-main sm:text-4xl lg:text-4xl">
              Gabriel Borges
            </p>
            <h1 className="font-title text-7xl font-bold uppercase leading-[0.86] tracking-normal text-text-main sm:text-8xl lg:text-8xl xl:text-8xl">
              Engenheiro
            </h1>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[300px] lg:max-w-[340px] lg:order-2 xl:max-w-[400px]">
            <div className="overflow-hidden rounded-2xl bg-bg-secondary">
              <img
                src={hero}
                alt="Retrato Gabriel Borges"
                className="w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-main to-bg-main/0" />
            </div>

            <div className="absolute -bottom-10 left-2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-primary-color sm:h-28 sm:w-28">
              <Hand
                className="h-8 w-8 text-text-main lg:h-10 lg:w-10"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="relative z-20 order-3 text-center lg:text-left">
            <h2 className="font-title text-7xl font-bold uppercase leading-[0.86] tracking-normal text-text-main sm:text-8xl lg:text-8xl lg:pt-10 xl:text-8xl">
              De Software
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}
