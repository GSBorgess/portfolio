import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa6";
import hero from "../assets/hero.webp";

const socialLinks = [
  { label: "LinedIn", href: "https://www.linkedin.com/in/gabriel-borges-03a721240/", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/___borgesgabriel/", icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/GSBorgess", icon: FaGithub },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-bg-main px-6 py-20 text-text-main sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 lg:grid-cols-[minmax(280px,520px)_minmax(0,1fr)] lg:gap-20">
        <div className="order-2 mx-auto w-full max-w-[300px] lg:order-1 lg:mx-0 lg:max-w-[340px] xl:max-w-[400px]">
          <div className="overflow-hidden rounded-2xl bg-bg-secondary">
            <img
              src={hero}
              alt="Retrato Gabriel Borges"
              className="aspect-[4/5] h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h2 className="font-title text-5xl font-bold uppercase leading-none tracking-normal text-text-main sm:text-6xl lg:text-7xl">
            Sobre mim
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-8 text-text-secondary sm:text-lg lg:mx-0">
            <p>
              Sou Gabriel Borges, Desenvolvedor Full-stack apaixonado por criar
              sistemas modernos, responsivos, robustos e escaláveis, desenvolvendo projetos
              que impactam positivamente os usuários.
            </p>
            <p>
              Trabalho com React, TypeScript, Node.js para transformar ideias em produtos
              fluidos, acessiveis e escaláveis.
            </p>
          </div>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
            <div>
              <p className="text-lg font-bold leading-tight text-text-main">
                Contato :
              </p>
              <a
                href="https://wa.me/5551994207862"
                target="_blank"
                className="mt-1 block text-lg leading-tight text-text-secondary transition hover:text-primary-color"
              >
                (51) 99420-7862
              </a>
            </div>

            <div>
              <p className="text-lg font-bold leading-tight text-text-main">
                Email :
              </p>
              <a
                href="mailto:gabrielborgesschmidt@gmail.com"
                className="mt-1 block break-words text-lg leading-tight text-text-secondary transition hover:text-primary-color"
              >
                gabrielborgesschmidt@gmail.com
              </a>
            </div>
          </div>

          <ul
            aria-label="Redes sociais"
            className="mt-10 flex items-center justify-center gap-5 lg:justify-start"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-primary-color transition hover:bg-primary-color hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color duration-250"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
