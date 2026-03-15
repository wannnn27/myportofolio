import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/Projectdetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

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
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Projects onSelectProject={setSelectedProject} />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;