import { useState, useRef } from 'react';
import './Projects.css';
import edaDatmin from '../assets/images/image-project/EDA_datmin.png';
import sastrafyImg from '../assets/images/image-project/Sastrafy.png';
import factifyImg from '../assets/images/image-project/Factify.png';
import foodRecImg from '../assets/images/image-project/food-recomendation.png';
import telcoChurnImg from '../assets/images/telco.png';
import bookstoreImg from '../assets/images/BookStore.png';

// Certificate images
import sertifJuara from '../assets/images/sertifikat/juara.jpeg';
import sertifPythonDicoding from '../assets/images/sertifikat/python-dicoding.png';
import sertif1 from '../assets/images/sertifikat/sertif 1.png';
import sertif2 from '../assets/images/sertifikat/sertif 2.png';
import sertif3 from '../assets/images/sertifikat/sertif 3.png';
import sertif4 from '../assets/images/sertifikat/sertif 4.png';
import sertifBootcamp from '../assets/images/sertifikat/sertif-bootcamp.png';
import sertifMachineLearning from '../assets/images/sertifikat/Machine-learning-dicoding.png';
import sertifDasarAI from '../assets/images/sertifikat/dasar-ai.png';
import sertifWeb from '../assets/images/sertifikat/web.png';

// Tech stack icons
import dockerLogo from '../assets/images/icon-tech/docker.png';

const projects = [
  {
    id: 16,
    title: 'One Book',
    category: 'Web App',
    categoryKey: 'web',
    description: 'Platform e-commerce buku modern yang menawarkan pengalaman berbelanja yang mulus, sistem manajemen inventaris, dan integrasi pembayaran yang aman untuk pecinta literatur.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: bookstoreImg,
    demo: 'https://1-book.vercel.app/',
    github: 'https://github.com/wannnn27/BookStore',
    features: [
      'E-Commerce Lengkap: Katalog interaktif, manajemen keranjang belanja, dan sistem checkout yang mulus.',
      'Keamanan Autentikasi: Fitur login/registrasi aman dengan hashing password (bcrypt) dan validasi real-time.',
      'UI/UX Premium & Responsif: Desain modern (light-mode) yang ringan, animasi dinamis, serta kompatibel di semua ukuran layar.',
    ],
  },
  {
    id: 11,
    title: 'Semarang Resto Dashboard',
    category: 'Data Mining',
    categoryKey: 'mining',
    description: 'Dashboard Exploratory Data Analysis interaktif untuk data restoran di Semarang. Memvisualisasikan rating, rentang harga, dan jenis masakan dengan filter dinamis.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    image: edaDatmin,
    demo: 'https://datmin-resto-rjdkzcpmymurxg8ckjhee2.streamlit.app/',
    github: 'https://github.com/wannnn27/Datmin-Resto',
    features: [
      'Visualisasi interaktif rating dan harga restoran menggunakan Plotly dengan filter multi-dimensi.',
      'Analisis distribusi jenis masakan dan persebaran lokasi restoran di seluruh kota Semarang.',
      'Dashboard real-time berbasis Streamlit yang dapat diakses langsung dari browser tanpa instalasi.',
    ],
  },
  {
    id: 12,
    title: 'Sastrafy',
    category: 'Web App',
    categoryKey: 'web',
    description: 'Platform pembelajaran sastra Indonesia modern yang memadukan edukasi dan kreasi. Pengguna dapat mempelajari karya sastra klasik dan modern dengan bantuan Gemini AI.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI'],
    image: sastrafyImg,
    demo: 'https://sastrafy.vercel.app/',
    github: 'https://github.com/wannnn27/Sastrafy',
    features: [
      'Modul pembelajaran sastra interaktif dengan materi kurikulum sastra Indonesia yang lengkap dan terstruktur.',
      'Generator karya sastra bertenaga Gemini AI untuk membantu pengguna menulis puisi dan cerpen secara kreatif.',
      'Antarmuka modern berbasis Next.js dengan pengalaman membaca yang nyaman dan sepenuhnya responsif.',
    ],
  },
  {
    id: 13,
    title: 'Factify',
    category: 'Mobile App',
    categoryKey: 'apps',
    description: 'Aplikasi mobile verifikasi fakta berbasis AI dengan 4 metode input: teks, URL, gambar, dan video. Dilengkapi modul edukasi literasi digital untuk mengenali hoaks.',
    tech: ['Flutter', 'Firebase', 'Flask', 'Gemini', 'Hugging Face'],
    image: factifyImg,
    demo: 'https://factify-2b144.web.app',
    github: 'https://github.com/wannnn27/Factify',
    features: [
      'Verifikasi informasi multi-modal: mendukung input teks, URL, gambar, dan video dalam satu platform.',
      'Model deteksi hoaks menggunakan Hugging Face dikombinasikan dengan reasoning Gemini AI yang akurat.',
      'Modul edukasi literasi digital interaktif untuk meningkatkan kesadaran pengguna terhadap misinformasi.',
    ],
  },
  {
    id: 14,
    title: 'Food Recommendation',
    category: 'Machine Learning',
    categoryKey: 'ml',
    description: 'Sistem rekomendasi makanan cerdas berbasis AI yang menyesuaikan pilihan menu dengan berat badan, kebutuhan kalori, dan tujuan gaya hidup sehat pengguna.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Gradio'],
    image: foodRecImg,
    demo: 'https://huggingface.co/spaces/arwnsyh/food-recommendation-system',
    github: 'https://github.com/wannnn27/food-recomendation',
    features: [
      'Algoritma content-based filtering yang mempersonalisasi rekomendasi berdasarkan profil kesehatan pengguna.',
      'Kalkulasi kebutuhan kalori harian (BMR/TDEE) untuk menyesuaikan pilihan makanan dengan goal pengguna.',
      'Interface Gradio yang mudah digunakan dan dapat diakses langsung melalui Hugging Face Spaces.',
    ],
  },
  {
    id: 15,
    title: 'Telco Churn Prediction',
    category: 'Machine Learning',
    categoryKey: 'ml',
    description: 'Proyek machine learning end-to-end untuk memprediksi pelanggan telekomunikasi yang berisiko churn. Mencakup EDA mendalam, feature engineering, dan model XGBoost.',
    tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas'],
    demo: 'https://github.com/wannnn27/Telco_Churn_Analisis',
    github: 'https://github.com/wannnn27/Telco_Churn_Analisis',
    image: telcoChurnImg,
    features: [
      'Model prediksi churn menggunakan XGBoost dengan feature engineering dan hyperparameter tuning yang optimal.',
      'Analisis faktor-faktor utama penyebab churn pelanggan melalui SHAP values dan feature importance.',
      'Pipeline end-to-end dari preprocessing data hingga laporan rekomendasi bisnis berbasis hasil prediksi.',
    ],
  },
];

const certificates = [
  { id: 1,  title: 'Juara 3 National Essay Competition', issuer: 'UIN Sunan Gunung Djati', year: '2025', image: sertifJuara },
  { id: 2,  title: 'Python Programming',                 issuer: 'Dicoding',                   year: '2025', image: sertifPythonDicoding },
  { id: 3,  title: 'Machine Learning',                   issuer: 'Dicoding',                   year: '2025', image: sertifMachineLearning },
  { id: 4,  title: 'Dasar Artificial Intelligence',      issuer: 'Dicoding',                   year: '2024', image: sertifDasarAI },
  { id: 5,  title: 'Pemrograman Web',                    issuer: 'Dicoding',                   year: '2025', image: sertifWeb },
  { id: 6,  title: 'GitHub Copilot',                     issuer: 'Microsoft',                  year: '2024', image: sertif1 },
  { id: 7,  title: 'Azure Cloud Concepts',               issuer: 'Microsoft',                  year: '2024', image: sertif2 },
  { id: 8,  title: 'Computer Vision',                    issuer: 'Microsoft',                  year: '2024', image: sertif3 },
  { id: 9,  title: 'Document Intelligence',              issuer: 'Microsoft',                  year: '2024', image: sertif4 },
  { id: 10, title: 'Bootcamp Machine Learning',          issuer: 'Lumoshive Academy',           year: '2025', image: sertifBootcamp },
];

const techStack = [
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'Language',      desc: 'Core language for interactive and dynamic web development.' },
  { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', category: 'Language',      desc: 'Strongly typed programming language that builds on JavaScript.' },
  { name: 'React',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',       category: 'Frontend',      desc: 'Library for building modern, reactive user interfaces.' },
  { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',       category: 'Framework',     desc: 'React framework for production-grade, full-stack applications.' },
  { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',       category: 'Backend',       desc: 'JavaScript runtime built for scalable server-side applications.' },
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',       category: 'Language',      desc: 'Versatile language for backend systems, scripting, and automation.' },
  { name: 'Flask',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',         category: 'Framework',     desc: 'Lightweight web application framework for Python APIs.' },
  { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'Database',      desc: 'Powerful, open source object-relational database system.' },
  { name: 'Supabase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',   category: 'Backend/BaaS',  desc: 'Open source Firebase alternative with a Postgres database.' },
  { name: 'Docker',       icon: dockerLogo,      category: 'DevOps',        desc: 'Containerizes applications for consistent, reproducible deployment environments.' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',             category: 'Version Control', desc: 'Distributed version control system for tracking source code changes.' },
];

const ACCENT = { color: '#2e87f6', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.24)' };

const catStyle = {
  mining: ACCENT,
  web:    ACCENT,
  apps:   ACCENT,
  ml:     ACCENT,
};

/* ── Icons ──────────────────────────────────────────────────── */
const ICode   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const ICert   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IStack  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IArrowR = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ILink   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

/* ══════════════════════════════════════════════════════════════
   Projects Component
══════════════════════════════════════════════════════════════ */
const Projects = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projectFilter, setProjectFilter] = useState('All');
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
  };

  const filteredProjects = projects.filter(p => {
    if (projectFilter === 'All') return true;
    if (projectFilter === 'Web' && p.categoryKey === 'web') return true;
    if (projectFilter === 'ML' && (p.categoryKey === 'ml' || p.categoryKey === 'mining')) return true;
    if (projectFilter === 'Mobile' && p.categoryKey === 'apps') return true;
    return false;
  });

  const tabs = [
    { id: 'projects',     label: 'Projects',     icon: <ICode /> },
    { id: 'certificates', label: 'Certificates', icon: <ICert /> },
    { id: 'tech-stack',   label: 'Tech Stack',   icon: <IStack /> },
  ];

  return (
    <section className="ps" id="projects">
      <div className="ps__bg" aria-hidden="true" />

      <div className="ps__wrap">
        {/* Header */}
        <div className="ps__header">
          <span className="ps__eyebrow">What I've Built</span>
          <h2 className="ps__title">Portfolio Showcase</h2>
          <p className="ps__sub">
            Projects, certifications, and technical skills, each one a step forward in my engineering journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="ps__tabs" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`ps__tab ${activeTab === tab.id ? 'ps__tab--on' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Projects ── */}
        {activeTab === 'projects' && (
          <>
            <div className="ps__filter-wrap" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div className="ps__filter" style={{ marginBottom: 0 }}>
                {['All', 'Web', 'ML', 'Mobile'].map(cat => (
                  <button
                    key={cat}
                    className={`ps__filter-btn ${projectFilter === cat ? 'ps__filter-btn--on' : ''}`}
                    onClick={() => setProjectFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="ps__marquee-wrapper">
              <div 
                className="ps__marquee-track" 
                style={{ animationDuration: `${Math.max(filteredProjects.length * 8, 20)}s` }}
              >
                {[0, 1].map(i => (
                  <div className="ps__marquee-content" key={i} aria-hidden={i === 1}>
                    {filteredProjects.map((p, idx) => {
                      const c = catStyle[p.categoryKey] || ACCENT;
                      return (
                        <article
                          className="pc pc--project"
                          key={p.id ? `${p.id}-${i}` : idx}
                          style={{ animationDelay: `${idx * 0.06}s` }}
                        >
                          <div
                            className="pc__img-wrap"
                            style={{
                              background: `radial-gradient(circle at center, ${c.bg} 0%, var(--bg-card) 100%)`
                            }}
                          >
                            {p.image ? (
                              <div className="pc__frame">
                                <div className="pc__frame-dots">
                                  <span className="pc__frame-dot pc__frame-dot--red" />
                                  <span className="pc__frame-dot pc__frame-dot--yellow" />
                                  <span className="pc__frame-dot pc__frame-dot--green" />
                                </div>
                                <div className="pc__frame-img">
                                  <img src={p.image} alt={p.title} className="pc__img" />
                                </div>
                              </div>
                            ) : (
                              <div className="pc__no-img" />
                            )}
                          </div>

                          <div className="pc__body">
                            <span
                              className="pc__badge"
                              style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
                            >
                              {p.category}
                            </span>
                            <h3 className="pc__title">{p.title}</h3>

                            <div className="pc__chips">
                              {p.tech.slice(0, 3).map((t, i) => (
                                <span key={i} className="pc__chip">{t}</span>
                              ))}
                              {p.tech.length > 3 && (
                                <span className="pc__chip pc__chip--more">+{p.tech.length - 3}</span>
                              )}
                            </div>

                            <div className="pc__foot">
                              <a
                                href={p.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pc__demo"
                              >
                                Live Demo <ILink />
                              </a>
                              <button
                                className="pc__det"
                                onClick={() => onSelectProject(p)}
                              >
                                Details <IArrowR />
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Certificates ── */}
        {activeTab === 'certificates' && (
          <div className="ps__marquee-wrapper">
            <div className="ps__marquee-track">
              {[0, 1].map(i => (
                <div className="ps__marquee-content" key={i} aria-hidden={i === 1}>
                  {certificates.map((cert) => (
                    <article className="pc" key={cert.id}>
                      <div className="pc__img-wrap">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="pc__img"
                          style={{ objectPosition: 'center center' }}
                        />
                      </div>
                      <div className="pc__body">
                        <div className="pc__cert-meta">
                          <span
                            className="pc__badge"
                            style={{ color: ACCENT.color, background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
                          >
                            {cert.issuer}
                          </span>
                          <span className="pc__cert-year">{cert.year}</span>
                        </div>
                        <h3 className="pc__title">{cert.title}</h3>
                        <p className="pc__desc">Issued by {cert.issuer} · {cert.year}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Tech Stack ── */}
        {activeTab === 'tech-stack' && (
          <div className="ps__marquee-wrapper">
            <div className="ps__marquee-track">
              {[0, 1].map(i => (
                <div className="ps__marquee-content" key={i} aria-hidden={i === 1}>
                  {techStack.map((tech, idx) => (
                    <article className="pc pc--tech" key={idx}>
                      <div className="pc__tech-icon-wrap">
                        <img src={tech.icon} alt={tech.name} className="pc__tech-icon" />
                      </div>
                      <div className="pc__body">
                        <span
                          className="pc__badge"
                          style={{ color: ACCENT.color, background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
                        >
                          {tech.category}
                        </span>
                        <h3 className="pc__title">{tech.name}</h3>
                        <p className="pc__desc">{tech.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
