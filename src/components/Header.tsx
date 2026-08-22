import { Menu, X } from "lucide-react";
import { useState } from "react";
import hero from "../assets/hero.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Blogs", href: "#blogs" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <nav
        aria-label="Navegacao principal"
        className="mx-auto w-full max-w-6xl"
      >
        <div className="hidden min-h-16 grid-cols-[1fr_auto_1fr] items-center rounded-full border border-border bg-chip/90 px-4 shadow-[0_18px_60px_var(--bg-secondary)] backdrop-blur md:grid">
          <a
            href="#home"
            aria-label="Gabriel Borges - inicio"
            className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary"
          >
            <img
              src={hero}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </a>

          <ul className="flex items-center justify-center gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full px-5 text-sm font-medium text-text-secondary transition hover:bg-bg-secondary hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="ml-auto flex min-h-12 items-center justify-center rounded-full border border-border bg-bg-main px-6 text-sm font-semibold text-text-main transition hover:border-primary-color hover:bg-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
          >
            Contato
          </a>
        </div>

        <div
          className={[
            "overflow-hidden rounded-[2rem] border border-border bg-chip/95 shadow-[0_18px_60px_var(--bg-secondary)] backdrop-blur transition-all duration-300 ease-out md:hidden",
            isOpen ? "max-h-[420px]" : "max-h-16",
          ].join(" ")}
        >
          <div className="flex min-h-16 items-center justify-between gap-3 px-3">
            <a
              href="#home"
              aria-label="Gabriel Borges - inicio"
              onClick={closeMenu}
              className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-bg-secondary"
            >
              <img
                src={hero}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </a>

            <div className="flex min-w-0 flex-1 items-center justify-center gap-2 px-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-primary-color"
              />
              <span className="truncate text-sm font-medium text-text-main">
                Online e codando
              </span>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-bg-main text-text-main transition hover:border-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          <div
            id="mobile-navigation"
            className={[
              "grid transition-all duration-300 ease-out",
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            ].join(" ")}
          >
            <div className="min-h-0 overflow-hidden">
              <ul className="flex flex-col items-center gap-1 px-4 pb-4 pt-3">
                {navLinks.map((item) => (
                  <li key={item.href} className="w-full">
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-12 w-full items-center justify-center rounded-full px-5 text-base font-medium text-text-secondary transition hover:bg-bg-secondary hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="px-4 pb-4">
                <a
                  href="#contato"
                  onClick={closeMenu}
                  className="flex min-h-12 w-full items-center justify-center rounded-full border border-border bg-bg-main px-6 text-base font-semibold text-text-main transition hover:border-primary-color hover:bg-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
