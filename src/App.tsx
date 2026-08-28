import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SpecialtiesSection } from "./components/SpecialtiesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
