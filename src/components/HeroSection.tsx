import { useEffect, useState } from "react";
import { motion, type Transition, useScroll, useTransform } from "framer-motion";
import { FaHand } from "react-icons/fa6";
import hero from "../assets/hero.webp";

const tickerItems = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const tickerX = useTransform(scrollY, [0, 900], ["0px", "-520px"]);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const handWave = {
    rotate: [0, 17, -9, 16, -6, 10, 0],
    y: [0, -1, 0, -1, 0, -1, 0],
  };
  const titleTransition: Transition = {
    duration: 3.5,
    ease: [0.22, 1, 0.36, 1],
  };
  const leftTitleInitial = isDesktop
    ? { opacity: 0, x: -350 }
    : { opacity: 0, y: 42 };
  const rightTitleInitial = isDesktop
    ? { opacity: 0, x: 350 }
    : { opacity: 0, y: 42 };

  return (
    <section className="relative overflow-hidden bg-bg-main pb-24 text-text-main">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-30 overflow-hidden border-y border-border bg-[#070808] py-4 sm:py-5"
      >
        <motion.div
          className="flex w-max items-center gap-9 whitespace-nowrap will-change-transform sm:gap-12"
          style={{ x: tickerX }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-9 sm:gap-12"
            >
              <span className="font-title text-2xl font-bold uppercase leading-none text-text-main sm:text-3xl">
                {item}
              </span>
              <span className="relative h-3 w-3 rotate-45 bg-primary-color" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-20 mb-5 w-full max-w-[1500px] flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:mb-24">

        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_400px_minmax(0,1fr)]">
          <motion.div
            className="relative z-20 order-2 pt-10 -bottom-6 text-center lg:order-1 lg:pt-0 lg:-bottom-0 lg:text-left"
            initial={leftTitleInitial}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={titleTransition}
          >
            <p className="mb-2 font-title text-3xl font-bold uppercase leading-none text-text-main sm:text-4xl lg:text-4xl">
              Gabriel Borges
            </p>
            <h1 className="font-title text-7xl font-bold uppercase leading-[0.86] tracking-normal text-text-main sm:text-8xl lg:text-8xl xl:text-8xl">
              Engenheiro
            </h1>
          </motion.div>

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
              <motion.div
                aria-hidden="true"
                animate={handWave}
                transition={{
                  duration: 1.45,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.45,
                }}
                style={{ transformOrigin: "65% 85%" }}
              >
                <FaHand className="h-9 w-9 text-text-main sm:h-10 sm:w-10" />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative z-20 order-3 text-center lg:text-left"
            initial={rightTitleInitial}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ...titleTransition, delay: 0.12 }}
          >
            <h2 className="font-title text-7xl font-bold uppercase leading-[0.86] tracking-normal text-text-main sm:text-8xl lg:text-8xl lg:pt-10 xl:text-8xl">
              De Software
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
