import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section'; 
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import EducationSection from '@/components/sections/education-section';
import CertificationsSection from '@/components/sections/certifications-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import ThreeCanvas from '@/components/ui/three-canvas';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-x-hidden">
      <ThreeCanvas />
      <Header />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
