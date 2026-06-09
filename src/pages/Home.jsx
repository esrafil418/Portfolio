import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutMe />
      </main>
    </div>
  );
}
