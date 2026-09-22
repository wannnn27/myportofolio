import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import ProjectDetail from './components/Projectdetail';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


const getProjectFromUrl = () => {
  if (typeof window === 'undefined') return null;
  const projectId = Number(new URLSearchParams(window.location.search).get('project'));
  return Projects.data.find(project => project.id === projectId) || null;
};

function App() {
  const [selectedProject, setSelectedProject] = useState(getProjectFromUrl);


  useEffect(() => {
    const handlePopState = () => {

      setSelectedProject(getProjectFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const title = selectedProject ? selectedProject.title + ' — Case Study | Adi Arwan Syah' : 'Adi Arwan Syah | Software Engineer, Web & AI Portfolio';
    const description = selectedProject?.description || 'Portofolio Adi Arwan Syah: aplikasi web, mobile, dashboard data, dan integrasi AI. Jelajahi proyek, studi kasus, sertifikasi, dan kontak.';
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', description);
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', title);
    const url = new URL(window.location.pathname, document.querySelector('meta[property="og:url"]')?.content || window.location.origin);
    if (selectedProject) url.searchParams.set('project', selectedProject.id);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
    canonical.href = url.href;
  }, [selectedProject]);

  const handleSelectProject = (project) => {

    const url = new URL(window.location.href);
    url.searchParams.set('project', project.id);
    url.hash = '';
    window.history.pushState({ projectId: project.id }, '', url);
    setSelectedProject(project);
  };

  const handleBack = () => {

    if (window.history.state?.projectId) {
      window.history.back();
      return;
    }
    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    url.hash = 'projects';
    window.history.replaceState({}, '', url);
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
        <TechMarquee />
        <Projects onSelectProject={handleSelectProject} />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
