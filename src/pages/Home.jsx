import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Header  */}
			<ThemeToggle />

			<StarBackground />

			<Navbar />

			{/* Main  */}
			<main>
				<HeroSection />
				<AboutMeSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>

			{/* Footer  */}
			<Footer />
		</div>
	);
}
