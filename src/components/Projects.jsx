import { useEffect, useState } from 'react';
import './Projects.css';
import PortfolioRail from './PortfolioRail';
import edaDatmin from '../assets/images/image-project/EDA_datmin.png';
import sastrafyImg from '../assets/images/image-project/Sastrafy.png';
import factifyImg from '../assets/images/image-project/Factify.png';
import foodRecImg from '../assets/images/image-project/food-recomendation.png';
import telcoChurnImg from '../assets/images/telco.png';
import bookstoreImg from '../assets/images/BookStore.png';
import giBrainImg from '../assets/images/image-project/gibrain.png';
import circulaiImg from '../assets/images/image-project/circulai.png';

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
import sertifJuaraAppDevelopment from '../assets/images/sertifikat/7.jpg';

// Tech stack icons
import dockerLogo from '../assets/images/icon-tech/docker.png';

const projects = [
  {
    id: 19,
    title: 'GIBrain',
    category: 'AI Web App',
    categoryKey: 'web',
    description: 'Platform evaluasi critical thinking berbasis AI untuk siswa, guru, dan administrator sekolah Indonesia dengan analisis yang selaras dengan nilai-nilai Pancasila.',
    role: 'Full-stack developer & AI integration',
    problem: 'Sekolah membutuhkan cara yang terukur dan relevan dengan konteks Indonesia untuk melatih serta mengevaluasi proses berpikir kritis siswa.',
    solution: 'Membangun PWA multi-peran dengan React, FastAPI, Supabase, dan Gemini 2.5 Flash untuk menganalisis jawaban, menampilkan progres, serta menghadirkan simulasi pembelajaran interaktif.',
    outcome: 'Menghasilkan platform pembelajaran end-to-end yang memberi umpan balik AI secara instan, tetap dapat divalidasi guru, dan siap digunakan lintas perangkat.',
    tech: ['React 19', 'FastAPI', 'Supabase', 'Gemini AI', 'Tailwind CSS', 'PWA'],
    image: giBrainImg,
    demo: 'https://gibrain.vercel.app',
    github: 'https://github.com/wannnn27/GIBrain',
    features: [
      'Analisis esai berbasis rubrik critical thinking Pancasila menggunakan Gemini 2.5 Flash.',
      'Dashboard analitik untuk memantau progres kemampuan siswa dan kelas.',
      'AI Civic Mentor, Pancasila Decision Lab, dan Smart Voter Simulator untuk pembelajaran kontekstual.',
      'Progressive Web App yang dapat dipasang di mobile maupun desktop dengan dukungan offline.',
    ],
  },
  {
    id: 18,
    title: 'CIRCULAI',
    category: 'Mobile App',
    categoryKey: 'apps',
    description: 'Ekosistem circular fashion yang menghubungkan masyarakat, material fashion bernilai guna, dan UMKM penjahit lokal melalui AI serta Digital Product Passport.',
    role: 'Full-stack mobile developer — team project',
    problem: 'Limbah fashion yang masih bernilai sering berakhir tanpa pemanfaatan ulang, sementara UMKM penjahit lokal belum terhubung ke ekosistem digital yang mendukung ekonomi sirkular.',
    solution: 'Mengembangkan aplikasi React Native dengan marketplace berkelanjutan, Eco Swap, AI Stylist, custom design, Circular Points, dan Digital Product Passport yang didukung Supabase serta Node.js.',
    outcome: 'Meraih Juara III Nasional App Development IT FEST 2026 dan menghadirkan prototype yang menggabungkan circular fashion, pemberdayaan UMKM, serta pengalaman transaksi digital.',
    tech: ['React Native', 'Expo', 'Supabase', 'Node.js', 'Midtrans', 'AI'],
    image: circulaiImg,
    demo: '',
    github: 'https://github.com/wannnn27/circulai',
    features: [
      'Eco Swap untuk mengumpulkan dan menukarkan kain perca maupun pakaian bekas yang masih bernilai guna.',
      'AI Stylist dengan rekomendasi fashion personal dan insight keberlanjutan.',
      'Digital Product Passport, eco-score, dan Circular Points untuk melacak serta mengapresiasi dampak sirkular.',
      'Custom Design Studio yang menghubungkan pengguna dengan artisan dan penjahit lokal.',
    ],
  },
  {
    id: 17,
    title: 'SID',
    category: 'Web App',
    categoryKey: 'web',
    description: 'Sistem Informasi Desa (SID). Platform untuk mengelola dan menyajikan informasi desa secara digital.',
    role: 'Full-stack developer',
    problem: 'Administrasi dan penyebaran informasi desa yang masih manual membutuhkan digitalisasi untuk efisiensi.',
    solution: 'Membangun aplikasi web Sistem Informasi Desa yang interaktif dan mudah diakses oleh warga.',
    outcome: 'Terciptanya platform digital yang mempermudah layanan dan akses informasi desa.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://sid-neon-sigma.vercel.app',
    github: '',
    features: [
      'Portal informasi dan berita desa terkini.',
      'Sistem administrasi persuratan digital.',
      'Antarmuka modern dan responsif.',
    ],
  },
  {
    id: 16,
    title: 'One Book',
    category: 'Web App',
    categoryKey: 'web',
    description: 'Platform e-commerce buku modern yang menawarkan pengalaman berbelanja yang mulus, sistem manajemen inventaris, dan integrasi pembayaran yang aman untuk pecinta literatur.',
    role: 'Full-stack developer',
    problem: 'Pembeli membutuhkan pengalaman membeli buku yang cepat, jelas, dan aman, sementara admin membutuhkan alur pengelolaan katalog yang mudah dipelihara.',
    solution: 'Membangun e-commerce end-to-end dengan katalog, cart, checkout flow, autentikasi, dan struktur backend yang memisahkan data produk, user, dan transaksi.',
    outcome: 'Menghasilkan prototype e-commerce yang dapat didemokan langsung, lengkap dengan user flow utama dan fondasi backend yang siap dikembangkan lebih lanjut.',
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
    role: 'Data analyst & dashboard developer',
    problem: 'Data restoran sulit dibaca jika hanya berupa tabel, sehingga insight tentang rating, harga, lokasi, dan kategori makanan tidak langsung terlihat.',
    solution: 'Mendesain dashboard Streamlit dengan filter interaktif, chart Plotly, dan struktur visual yang membantu pengguna mengeksplorasi pola restoran di Semarang.',
    outcome: 'Membuat proses eksplorasi data lebih cepat dan mudah dipahami melalui visualisasi yang bisa digunakan langsung di browser.',
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
    role: 'Frontend developer & AI integration',
    problem: 'Materi sastra sering terasa pasif, padahal pengguna membutuhkan cara belajar yang lebih interaktif dan ruang untuk berlatih menulis.',
    solution: 'Menggabungkan modul pembelajaran, pengalaman membaca yang nyaman, dan Gemini AI untuk membantu pengguna membuat puisi atau cerpen.',
    outcome: 'Menyediakan platform edukasi sastra yang lebih engaging, responsif, dan dapat memperlihatkan integrasi AI dalam konteks pembelajaran.',
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
    role: 'Mobile developer & AI workflow designer',
    problem: 'Pengguna membutuhkan cara cepat memeriksa informasi dari berbagai format, bukan hanya teks, terutama saat menghadapi misinformasi digital.',
    solution: 'Mendesain flow verifikasi multi-input dengan Flutter, Firebase, Flask API, Gemini, dan model dari Hugging Face.',
    outcome: 'Menghasilkan aplikasi edukatif yang menggabungkan deteksi informasi, reasoning AI, dan literasi digital dalam satu pengalaman mobile.',
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
    role: 'Machine learning developer',
    problem: 'Rekomendasi makanan sering terlalu umum dan tidak mempertimbangkan profil kesehatan sederhana seperti kebutuhan kalori atau tujuan pengguna.',
    solution: 'Membangun content-based filtering dengan kalkulasi BMR/TDEE dan UI Gradio agar pengguna bisa mencoba rekomendasi secara langsung.',
    outcome: 'Menyediakan prototype rekomendasi makanan yang personal, mudah diuji, dan cocok sebagai contoh penerapan ML untuk kebutuhan sehari-hari.',
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
    role: 'Machine learning analyst',
    problem: 'Perusahaan telekomunikasi perlu memahami pelanggan berisiko churn agar strategi retensi dapat diarahkan ke faktor yang paling relevan.',
    solution: 'Mengerjakan pipeline dari EDA, preprocessing, feature engineering, training XGBoost, sampai interpretasi faktor penting menggunakan feature importance.',
    outcome: 'Membuat workflow analisis churn yang menjelaskan tidak hanya prediksi, tetapi juga alasan bisnis di balik risiko pelanggan.',
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
  { id: 11, title: 'Juara III Nasional App Development — IT FEST', issuer: 'UIN K.H. Abdurrahman Wahid Pekalongan', year: '2026', image: sertifJuaraAppDevelopment, achievement: true },
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

const ACCENT = { color: '#6ba9ff', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.28)' };

const catStyle = {
  mining: { color: '#c084fc', bg: 'rgba(168,85,247,0.12)', border: 'rgba(192,132,252,0.28)' },
  web:    ACCENT,
  apps:   { color: '#4ade80', bg: 'rgba(34,197,94,0.12)', border: 'rgba(74,222,128,0.28)' },
  ml:     { color: '#fbbf24', bg: 'rgba(245,158,11,0.12)', border: 'rgba(251,191,36,0.28)' },
};

/* ── Icons ──────────────────────────────────────────────────── */
const ICode   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const ICert   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IStack  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IArrowR = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ILink   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const ISearch = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg>;
const IClose  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

/* ══════════════════════════════════════════════════════════════
   Projects Component
══════════════════════════════════════════════════════════════ */
const Projects = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projectFilter, setProjectFilter] = useState('All');
  const [projectQuery, setProjectQuery] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertificate]);

  const filteredProjects = projects.filter(p => {
    const matchesFilter = projectFilter === 'All'
      || (projectFilter === 'Web' && p.categoryKey === 'web')
      || (projectFilter === 'ML' && (p.categoryKey === 'ml' || p.categoryKey === 'mining'))
      || (projectFilter === 'Mobile' && p.categoryKey === 'apps');
    const searchableText = `${p.title} ${p.description} ${p.tech.join(' ')}`.toLowerCase();
    return matchesFilter && searchableText.includes(projectQuery.trim().toLowerCase());
  });

  const projectCounts = {
    All: projects.length,
    Web: projects.filter(p => p.categoryKey === 'web').length,
    ML: projects.filter(p => p.categoryKey === 'ml' || p.categoryKey === 'mining').length,
    Mobile: projects.filter(p => p.categoryKey === 'apps').length,
  };

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
              id={`portfolio-tab-${tab.id}`}
              aria-controls={`portfolio-panel-${tab.id}`}
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
          <div id="portfolio-panel-projects" role="tabpanel" aria-labelledby="portfolio-tab-projects">
            <div className="ps__toolbar">
              <label className="ps__search">
                <ISearch />
                <span className="sr-only">Search projects</span>
                <input
                  type="search"
                  value={projectQuery}
                  onChange={(event) => setProjectQuery(event.target.value)}
                  placeholder="Search projects or technology..."
                />
              </label>
              <div className="ps__filter" aria-label="Filter projects by category">
                {['All', 'Web', 'ML', 'Mobile'].map(cat => (
                  <button key={cat} aria-pressed={projectFilter === cat} className={`ps__filter-btn ${projectFilter === cat ? 'ps__filter-btn--on' : ''}`} onClick={() => setProjectFilter(cat)}>
                    {cat} <span>{projectCounts[cat]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="ps__results" aria-live="polite">
              <span>{filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}</span>
              {(projectQuery || projectFilter !== 'All') && (
                <button onClick={() => { setProjectQuery(''); setProjectFilter('All'); }}>Reset filters</button>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <PortfolioRail key={`${projectFilter}-${projectQuery}`} label="Proyek">
                {filteredProjects.map((p, idx) => {
                  const c = catStyle[p.categoryKey] || ACCENT;
                  return (
                    <article className={`pc pc--project ${idx < 2 && projectFilter === 'All' && !projectQuery ? 'pc--featured' : ''}`} key={p.id || idx} style={{ animationDelay: `${idx * 0.06}s` }}>
                      <div className="pc__img-wrap" style={{ background: `radial-gradient(circle at center, ${c.bg} 0%, var(--bg-card) 100%)` }}>
                        {p.image ? (
                          <div className="pc__frame">
                            <div className="pc__frame-dots"><span className="pc__frame-dot pc__frame-dot--red" /><span className="pc__frame-dot pc__frame-dot--yellow" /><span className="pc__frame-dot pc__frame-dot--green" /></div>
                            <div className="pc__frame-img"><img src={p.image} alt={`Tampilan proyek ${p.title}`} loading="lazy" decoding="async" className="pc__img" /></div>
                          </div>
                        ) : <div className="pc__no-img"><span>{p.title}</span><small>WEB APPLICATION</small></div>}
                      </div>
                      <div className="pc__body">
                        <span className="pc__badge" style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>{p.category}</span>
                        <h3 className="pc__title">{p.title}</h3>
                        <p className="pc__role">{p.role}</p>
                        <p className="pc__desc pc__desc--project">{p.description}</p>
                        <div className="pc__chips">
                          {p.tech.slice(0, 3).map((t, i) => <span key={i} className="pc__chip">{t}</span>)}
                          {p.tech.length > 3 && <span className="pc__chip pc__chip--more">+{p.tech.length - 3}</span>}
                        </div>
                        <div className="pc__foot">
                          <a href={p.demo || p.github} target="_blank" rel="noopener noreferrer" className="pc__demo">{p.demo && p.demo !== p.github ? 'Live Demo' : 'Source Code'} <ILink /></a>
                          <a className="pc__det" href={`?project=${p.id}`} aria-label={`Case study ${p.title}`} onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) { event.preventDefault(); onSelectProject(p); } }}>Case Study <IArrowR /></a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </PortfolioRail>
            ) : (
              <div className="ps__empty"><ISearch /><h3>No projects found</h3><p>Try a different keyword or category.</p><button onClick={() => { setProjectQuery(''); setProjectFilter('All'); }}>Show all projects</button></div>
            )}
          </div>
        )}

        {/* ── Certificates ── */}
        {activeTab === 'certificates' && (
          <div id="portfolio-panel-certificates" role="tabpanel" aria-labelledby="portfolio-tab-certificates" >
            <PortfolioRail label="Sertifikat">
                  {certificates.map((cert) => (
                    <button type="button" className={`pc pc--certificate ${cert.achievement ? 'pc--achievement' : ''}`} key={cert.id} onClick={() => setSelectedCertificate(cert)}>
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
                            {cert.achievement ? 'Achievement' : cert.issuer}
                          </span>
                          <span className="pc__cert-year">{cert.year}</span>
                        </div>
                        <h3 className="pc__title">{cert.title}</h3>
                        <p className="pc__desc">Issued by {cert.issuer} · {cert.year}</p>
                      </div>
                    </button>
                  ))}
            </PortfolioRail>
          </div>
        )}

        {/* ── Tech Stack ── */}
        {activeTab === 'tech-stack' && (
          <div id="portfolio-panel-tech-stack" role="tabpanel" aria-labelledby="portfolio-tab-tech-stack" >
            <PortfolioRail label="Teknologi">
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
            </PortfolioRail>
          </div>
        )}
      </div>

      {selectedCertificate && (
        <div className="cert-lightbox" role="dialog" aria-modal="true" aria-labelledby="cert-lightbox-title" onMouseDown={() => setSelectedCertificate(null)}>
          <div className="cert-lightbox__panel" onMouseDown={(event) => event.stopPropagation()}>
            <button className="cert-lightbox__close" type="button" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate preview"><IClose /></button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} />
            <div className="cert-lightbox__info">
              <div><span>{selectedCertificate.year} · {selectedCertificate.issuer}</span><h3 id="cert-lightbox-title">{selectedCertificate.title}</h3></div>
              <a href={selectedCertificate.image} target="_blank" rel="noopener noreferrer">Open full size <ILink /></a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Projects.data = projects;

export default Projects;
