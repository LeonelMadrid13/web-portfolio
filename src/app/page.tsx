import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import NavbarComponent from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavbarComponent/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
