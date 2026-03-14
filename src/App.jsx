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

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;