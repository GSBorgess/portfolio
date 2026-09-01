import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import pizzaBackground from "../assets/pizza-background.webp";
import techBackground from "../assets/tech-background.webp";
import joiasBackground from "../assets/joias-background.webp";

const projects = [
  {
    title: "Bella Pizza",
    type: "Full-stack",
    description:
      "Aplicação fullstack de pizzaria com cardápio digital, carrinho, checkout e painel para gerenciar pedidos e acompanhar status de entrega.",
    accent: "#087CFA",
    image: pizzaBackground,
    href: "https://github.com/GSBorgess/bella-pizza",
  },
  {
    title: "Prospekta",
    type: "Sistema com IA",
    description:
      "plataforma de prospecção corporativa com IA, criada para encontrar leads qualificados, organizar oportunidades e otimizar o fluxo comercial.",
    accent: "#087CFA",
    image: techBackground,
    href: "https://github.com/GSBorgess/prospekta",
  },
  {
    title: "Joia Rara",
    type: "Full-stack",
    description:
      "Sistema de agendamento que permite reservar horários de forma simples, responsiva e segura, evitando conflitos de agenda com validação no backend e no banco de dados.",
    accent: "#087CFA",
    image: joiasBackground,
    href: "https://github.com/GSBorgess/joia-rara",
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [0.92, 1, 0.96]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0, 1, 1, 0.65],
  );
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1.04, 1.12],
  );

  return (
    <motion.article
      ref={cardRef}
      style={{ y, scale, opacity }}
      className="sticky top-24 overflow-hidden rounded-[2rem] border border-border bg-chip shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
    >
      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-20 text-center sm:min-h-[620px] sm:px-10 lg:min-h-[660px]">
        <motion.img
          src={project.image}
          alt=""
          aria-hidden="true"
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 h-[116%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_44%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <span
            className="mb-8 rounded-full px-5 py-2 text-sm font-medium text-bg-main"
            style={{ backgroundColor: project.accent }}
          >
            {project.type}
          </span>
          <h3 className="font-title text-5xl font-bold uppercase leading-none text-text-main sm:text-6xl lg:text-7xl">
            {project.title}
          </h3>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-text-main/90 sm:text-lg">
            {project.description}
          </p>
          <a
            href={project.href}
            target="_blank"
            aria-label={`Ver projeto ${project.title}`}
            className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-text-main backdrop-blur transition hover:border-primary-color hover:bg-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative bg-bg-main px-6 py-20 text-text-main sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mb-8 lg:items-end"
        >
          <div>
            <h2 className="font-title text-5xl text-center font-bold uppercase text-text-main sm:text-6xl lg:text-7xl">
              Projetos em destaque
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="text-base text-center pt-5 leading-8 text-text-secondary sm:text-lg">
              Uma selecao de interfaces, sistemas e produtos digitais com foco
              em performance, responsividade e experiencia limpa.
            </p>
          </div>
        </motion.div>

        <div className="space-y-16 pb-[18vh]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
