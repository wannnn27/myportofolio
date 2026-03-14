import { useState } from 'react';
import './Projects.css';
import edaDatmin from '../assets/images/image-project/EDA_datmin.png';
import sastrafyImg from '../assets/images/image-project/Sastrafy.png';
import factifyImg from '../assets/images/image-project/Factify.png';
import foodRecImg from '../assets/images/image-project/food-recomendation.png';
import telcoChurnImg from '../assets/images/image-project/telco_churn.png';

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
import pythonLogo from '../assets/images/icon-tech/python.png';
import tensorflowLogo from '../assets/images/icon-tech/tensorflow.png';
import pytorchLogo from '../assets/images/icon-tech/pytorch.png';
import scikitLearnLogo from '../assets/images/icon-tech/scikit-learn.png';
import dockerLogo from '../assets/images/icon-tech/docker.png';
import jupyterLogo from '../assets/images/icon-tech/jupyter.png';
import streamlitLogo from '../assets/images/icon-tech/streamlit.png';

const projects = [
    {
        id: 11,
        title: 'Semarang Resto Dashboard',
        category: 'Data Mining',
        categoryKey: 'mining',
        description: 'Dashboard Exploratory Data Analysis interaktif untuk data restoran di Semarang. Memvisualisasikan rating, rentang harga, dan jenis masakan dengan filter dinamis untuk menghasilkan insight bisnis kuliner yang actionable.',
        tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
        image: edaDatmin,
        demo: 'https://datmin-resto-rjdkzcpmymurxg8ckjhee2.streamlit.app/',
        github: 'https://github.com/wannnn27/Datmin-Resto',
        features: [
            'Visualisasi interaktif rating dan harga restoran menggunakan Plotly dengan filter multi-dimensi.',
            'Analisis distribusi jenis masakan dan persebaran lokasi restoran di seluruh kota Semarang.',
            'Dashboard real-time berbasis Streamlit yang dapat diakses langsung dari browser tanpa instalasi.'
        ]
    },
    {
        id: 12,
        title: 'Sastrafy',
        category: 'Web App',
        categoryKey: 'web',
        description: 'Platform pembelajaran sastra Indonesia modern yang memadukan edukasi dan kreasi. Pengguna dapat mempelajari karya sastra klasik dan modern, sekaligus menciptakan puisi, cerpen, dan prosa unik dengan kecerdasan Gemini AI.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini AI'],
        image: sastrafyImg,
        demo: 'https://sastrafy.vercel.app/',
        github: 'https://github.com/wannnn27/Sastrafy',
        features: [
            'Modul pembelajaran sastra interaktif dengan materi kurikulum sastra Indonesia yang lengkap dan terstruktur.',
            'Generator karya sastra bertenaga Gemini AI untuk membantu pengguna menulis puisi dan cerpen secara kreatif.',
            'Antarmuka modern berbasis Next.js dengan pengalaman membaca yang nyaman dan sepenuhnya responsif.'
        ]
    },
    {
        id: 13,
        title: 'Factify',
        category: 'Mobile App',
        categoryKey: 'apps',
        description: 'Aplikasi mobile verifikasi fakta berbasis AI dengan 4 metode input: teks, URL, gambar, dan video. Dilengkapi modul edukasi literasi digital untuk membantu pengguna mengenali hoaks dan misinformasi di era digital.',
        tech: ['Flutter', 'Firebase', 'Flask', 'Gemini', 'Hugging Face'],
        image: factifyImg,
        demo: 'https://factify-2b144.web.app',
        github: 'https://github.com/wannnn27/Factify',
        features: [
            'Verifikasi informasi multi-modal: mendukung input teks, URL, gambar, dan video dalam satu platform.',
            'Model deteksi hoaks menggunakan Hugging Face dikombinasikan dengan reasoning Gemini AI yang akurat.',
            'Modul edukasi literasi digital interaktif untuk meningkatkan kesadaran pengguna terhadap misinformasi.'
        ]
    },
    {
        id: 14,
        title: 'Food Recommendation',
        category: 'Machine Learning',
        categoryKey: 'ml',
        description: 'Sistem rekomendasi makanan cerdas berbasis AI yang menyesuaikan pilihan menu dengan berat badan, kebutuhan kalori, dan tujuan gaya hidup sehat pengguna menggunakan algoritma content-based filtering.',
        tech: ['Python', 'Scikit-Learn', 'Pandas', 'Gradio'],
        image: foodRecImg,
        demo: 'https://huggingface.co/spaces/arwnsyh/food-recommendation-system',
        github: 'https://github.com/wannnn27/food-recomendation',
        features: [
            'Algoritma content-based filtering yang mempersonalisasi rekomendasi berdasarkan profil kesehatan pengguna.',
            'Kalkulasi kebutuhan kalori harian (BMR/TDEE) untuk menyesuaikan pilihan makanan dengan goal pengguna.',
            'Interface Gradio yang mudah digunakan dan dapat diakses langsung melalui Hugging Face Spaces.'
        ]
    },
    {
        id: 15,
        title: 'Telco Churn Prediction',
        category: 'Machine Learning',
        categoryKey: 'ml',
        description: 'Proyek machine learning end-to-end untuk memprediksi pelanggan telekomunikasi yang berisiko churn. Mencakup EDA mendalam, feature engineering, model XGBoost, hingga rekomendasi strategi retensi berbasis data.',
        tech: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas'],
        demo: 'https://github.com/wannnn27/Telco_Churn_Analisis',
        github: 'https://github.com/wannnn27/Telco_Churn_Analisis',
        image: telcoChurnImg,
        features: [
            'Model prediksi churn menggunakan XGBoost dengan feature engineering dan hyperparameter tuning yang optimal.',
            'Analisis faktor-faktor utama penyebab churn pelanggan melalui SHAP values dan feature importance.',
            'Pipeline end-to-end dari preprocessing data hingga laporan rekomendasi bisnis berbasis hasil prediksi.'
        ]
    },
];

const catStyle = {
    mining: { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
    web:    { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
    apps:   { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
    ml:     { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
};

const certificates = [
    {
        id: 1,
        title: 'Juara 3 National Essay Competition',
        issuer: 'National Essay Competition',
        year: '2025',
        image: sertifJuara,
        link: '#'
    },
    {
        id: 2,
        title: 'Python Programming',
        issuer: 'Dicoding',
        year: '2025',
        image: sertifPythonDicoding,
        link: '#'
    },
    {
        id: 3,
        title: 'Machine Learning',
        issuer: 'Dicoding',
        year: '2025',
        image: sertifMachineLearning,
        link: '#'
    },
    {
        id: 4,
        title: 'Dasar AI',
        issuer: 'Dicoding',
        year: '2024',
        image: sertifDasarAI,
        link: '#'
    },
    {
        id: 5,
        title: 'Pemrograman Web',
        issuer: 'Dicoding',
        year: '2025',
        image: sertifWeb,
        link: '#'
    },
    {
        id: 6,
        title: 'GitHub Copilot',
        issuer: 'Microsoft',
        year: '2024',
        image: sertif1,
        link: '#'
    },
    {
        id: 7,
        title: 'Cloud Concepts',
        issuer: 'Microsoft',
        year: '2024',
        image: sertif2,
        link: '#'
    },
    {
        id: 8,
        title: 'Computer Vision',
        issuer: 'Microsoft',
        year: '2024',
        image: sertif3,
        link: '#'
    },
    {
        id: 9,
        title: 'Document Intelligence',
        issuer: 'Microsoft',
        year: '2024',
        image: sertif4,
        link: '#'
    },
    {
        id: 10,
        title: 'Bootcamp Machine Learning',
        issuer: 'Lumoshive Academy',
        year: '2025',
        image: sertifBootcamp,
        link: '#'
    },
];

const techStack = [
    { name: 'Python', icon: pythonLogo },
    { name: 'TensorFlow', icon: tensorflowLogo },
    { name: 'PyTorch', icon: pytorchLogo },
    { name: 'Scikit-learn', icon: scikitLearnLogo },
    { name: 'Jupyter', icon: jupyterLogo },
    { name: 'Streamlit', icon: streamlitLogo },
    { name: 'Docker', icon: dockerLogo },
];

/* ── SVG Icons ───────────────────────────────── */
const ICode   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const ICert   = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const IStack  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IArrowR = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const IArrowL = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const ILink   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IGH     = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const IStar   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IChev   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>;

/* ══════════════════════════════════════════════
   PROJECTS LIST
══════════════════════════════════════════════ */
const Projects = ({ onSelectProject }) => {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <section className="ps section section-grid" id="projects">
            <div className="ps__wrap">
                {/* Header */}
                <div className="ps__header">
                    <span className="ps__eyebrow">— What I've Built</span>
                    <h2 className="ps__title">Portfolio Showcase</h2>
                    <p className="ps__sub">
                        Explore my journey through projects, certifications, and technical expertise.
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                {/* Tab bar */}
                <div className="ps__tabs">
                    {[
                        { id: 'projects',     label: 'Projects',     icon: <ICode /> },
                        { id: 'certificates', label: 'Certificates', icon: <ICert /> },
                        { id: 'tech-stack',   label: 'Tech Stack',   icon: <IStack /> },
                    ].map(tab => (
                        <button key={tab.id}
                                className={`ps__tab ${activeTab === tab.id ? 'ps__tab--on' : ''}`}
                                onClick={() => setActiveTab(tab.id)}>
                            {tab.icon}{tab.label}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                {activeTab === 'projects' && (
                    <div className="ps__grid">
                        {projects.map((p, idx) => {
                            const c = catStyle[p.categoryKey] || catStyle.ml;
                            return (
                                <article className="pc" key={p.id} style={{ animationDelay: `${idx * 0.07}s` }}>
                                    <div className="pc__img-wrap">
                                        {p.image
                                            ? <img src={p.image} alt={p.title} className="pc__img" />
                                            : <div className="pc__no-img" />}
                                        <span className="pc__badge"
                                              style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}>
                                            {p.category}
                                        </span>
                                        <div className="pc__img-fade" />
                                    </div>

                                    <div className="pc__body">
                                        <h3 className="pc__title">{p.title}</h3>
                                        <p className="pc__desc">
                                            {p.description.length > 105
                                                ? p.description.slice(0, 105) + '…'
                                                : p.description}
                                        </p>

                                        <div className="pc__chips">
                                            {p.tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="pc__chip">{t}</span>
                                            ))}
                                            {p.tech.length > 3 && (
                                                <span className="pc__chip pc__chip--more">+{p.tech.length - 3}</span>
                                            )}
                                        </div>

                                        <div className="pc__foot">
                                            <a href={p.demo} target="_blank" rel="noopener noreferrer"
                                               className="pc__demo" style={{ color: c.color }}>
                                                Live Demo <ILink />
                                            </a>
                                            <button className="pc__det"
                                                    onClick={() => onSelectProject(p)}
                                                    style={{ '--c': c.color, '--cbg': c.bg, '--cbr': c.border }}>
                                                Details <IArrowR />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Hover border glow */}
                                    <div className="pc__hglow" style={{ '--c': c.color }} />
                                </article>
                            );
                        })}
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="ps__grid">
                        {certificates.map((cert, idx) => (
                            <article className="pc" key={cert.id} style={{ animationDelay: `${idx * 0.07}s` }}>
                                <div className="pc__img-wrap">
                                    <img src={cert.image} alt={cert.title} className="pc__img" />
                                    <span className="pc__badge"
                                          style={{ color: '#38bdf8', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)' }}>
                                        {cert.year}
                                    </span>
                                    <div className="pc__img-fade" />
                                </div>

                                <div className="pc__body">
                                    <h3 className="pc__title">{cert.title}</h3>
                                    <p className="pc__desc">
                                        Issued by {cert.issuer}
                                    </p>

                                    <div className="pc__chips">
                                        <span className="pc__chip">{cert.issuer}</span>
                                    </div>

                                    <div className="pc__foot">
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                           className="pc__demo" style={{ color: '#38bdf8' }}>
                                            View Certificate <ILink />
                                        </a>
                                    </div>
                                </div>

                                {/* Hover border glow */}
                                <div className="pc__hglow" style={{ '--c': '#38bdf8' }} />
                            </article>
                        ))}
                    </div>
                )}

                {activeTab === 'tech-stack' && (
                    <div className="ps__grid">
                        {techStack.map((tech, idx) => (
                            <article className="pc" key={idx} style={{ animationDelay: `${idx * 0.07}s` }}>
                                <div className="pc__img-wrap">
                                    <div className="pc__no-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0d1526' }}>
                                        <img src={tech.icon} alt={tech.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                                    </div>
                                    <span className="pc__badge"
                                          style={{ color: '#38bdf8', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.25)' }}>
                                        Tech
                                    </span>
                                    <div className="pc__img-fade" />
                                </div>

                                <div className="pc__body">
                                    <h3 className="pc__title">{tech.name}</h3>
                                    <p className="pc__desc">
                                        Core technology in my machine learning stack
                                    </p>

                                    <div className="pc__chips">
                                        <span className="pc__chip">ML Stack</span>
                                    </div>
                                </div>

                                {/* Hover border glow */}
                                <div className="pc__hglow" style={{ '--c': '#38bdf8' }} />
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;