import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Database,
  LayoutDashboard,
  Rocket,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { useRef } from "react";

const specialties = [
  {
    title: "Front-end",
    description:
      "Crio interfaces modernas, responsivas e acessíveis com React, TypeScript e Tailwind, sempre pensando na performance e experiência de uso.",
    icon: LayoutDashboard,
  },
  {
    title: "Back-end",
    description:
      "Desenvolvo APIs organizadas, seguras e escaláveis com autenticação, validações e integrações bem estruturadas utilizando Node.js e TypeScript.",
    icon: ServerCog,
  },
  {
    title: "Full-stack",
    description:
      "Transformo ideias em produtos completos, conectando interface, regra de negócio, banco de dados e deploy em uma solução funcional.",
    icon: Code2,
  },
  {
    title: "Banco de dados",
    description:
      "Modelo estruturas consistentes com PostgreSQL e Prisma, cuidando de relacionamentos, consultas e integridade dos dados.",
    icon: Database,
  },
  {
    title: "Responsividade",
    description:
      "Construo experiências fluidas para desktop, tablet e mobile, com layouts estáveis e navegação confortável em qualquer tela.",
    icon: Smartphone,
  },
  {
    title: "Performance",
    description:
      "Otimizo carregamento, organização do código e experiência final para entregar aplicações rápidas, limpas e prontas para evoluir.",
    icon: Rocket,
  },
];

export function SpecialtiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 1]);

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg-secondary px-6 py-20 text-text-main sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="relative mx-auto w-full max-w-[1500px]">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 className="font-title text-5xl font-bold uppercase leading-[0.86] text-text-main sm:text-6xl lg:text-7xl">
            Especialidades
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Combino engenharia, design de interface e visão de produto para
            construir aplicações úteis, bonitas e preparadas para crescer.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {specialties.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group min-h-[260px] rounded-lg border border-border bg-bg-main p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-color/70 hover:bg-chip"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary-color/30 bg-primary-color/10 text-primary-color transition duration-300 group-hover:bg-primary-color group-hover:text-text-main">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-title text-3xl font-bold uppercase leading-none text-text-main">
                {title}
              </h3>
              <p className="mt-5 text-base leading-7 text-text-secondary">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
