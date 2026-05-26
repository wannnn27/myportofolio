import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import ProjectDetail from './components/Projectdetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleBack = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 10);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBack} />;
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;