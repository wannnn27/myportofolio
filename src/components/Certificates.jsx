import { useEffect, useState } from 'react';
import './Certificates.css';

// Import certificate images
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

const certificates = [
        {
            id: 11,
            title: 'Juara III Nasional App Development — IT FEST',
            issuer: 'UIN K.H. Abdurrahman Wahid Pekalongan',
            year: '2026',
            image: sertifJuaraAppDevelopment,
            link: sertifJuaraAppDevelopment,
            achievement: true
        },
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
            id: 9,
            title: 'Machine Learning',
            issuer: 'Dicoding',
            year: '2025',
            image: sertifMachineLearning,
            link: '#'
        },
        {
            id: 8,
            title: 'Dasar AI',
            issuer: 'Dicoding',
            year: '2024',
            image: sertifDasarAI,
            link: '#'
        },
        {
            id: 10,
            title: 'Pemrograman Web',
            issuer: 'Dicoding',
            year: '2025',
            image: sertifWeb,
            link: '#'
        },
        {
            id: 3,
            title: 'GitHub Copilot',
            issuer: 'Microsoft',
            year: '2024',
            image: sertif1,
            link: '#'
        },
        {
            id: 4,
            title: 'Cloud Concepts',
            issuer: 'Microsoft',
            year: '2024',
            image: sertif2,
            link: '#'
        },
        {
            id: 5,
            title: 'Computer Vision',
            issuer: 'Microsoft',
            year: '2024',
            image: sertif3,
            link: '#'
        },
        {
            id: 6,
            title: 'Document Intelligence',
            issuer: 'Microsoft',
            year: '2024',
            image: sertif4,
            link: '#'
        },
        {
            id: 7,
            title: 'Bootcamp Machine Learning',
            issuer: 'Lumoshive Academy',
            year: '2025',
            image: sertifBootcamp,
            link: '#'
        },
];

const CloseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

    useEffect(() => {
        if (!selectedCertificate) return undefined;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setSelectedCertificate(null);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', closeOnEscape);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [selectedCertificate]);

    return (
        <section className="certificates section section-grid" id="certificates">
            <div className="container-fluid">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certificates & Credentials</h2>
                    <p className="certificates-intro">A curated record of competitions, technical learning, and milestones that shaped my work.</p>
                </div>

                <div className="certificates-grid">
                        {visibleCertificates.map((cert) => (
                            <button type="button" className={`certificate-card ${cert.achievement ? 'certificate-card--achievement' : ''}`} key={cert.id} onClick={() => setSelectedCertificate(cert)}>
                                <div className="cert-image">
                                    <img src={cert.image} alt={cert.title} loading="lazy" />
                                    <div className="cert-overlay">
                                        <span className="view-btn">Preview Certificate</span>
                                    </div>
                                </div>
                                <div className="cert-content">
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <div className="cert-meta">
                                        <span className="cert-issuer">{cert.issuer}</span>
                                        <span className="cert-dot">•</span>
                                        <span className="cert-year">{cert.year}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                </div>

                <div className="certificates-actions">
                    <span>Showing {visibleCertificates.length} of {certificates.length} credentials</span>
                    <button type="button" onClick={() => setShowAll(value => !value)}>{showAll ? 'Show featured only' : 'View all certificates'}</button>
                </div>
            </div>

            {selectedCertificate && (
                <div className="certificates-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onMouseDown={() => setSelectedCertificate(null)}>
                    <div className="certificates-modal-panel" onMouseDown={(event) => event.stopPropagation()}>
                        <button type="button" className="certificates-modal-close" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate preview"><CloseIcon /></button>
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} />
                        <div className="certificates-modal-info">
                            <div><span>{selectedCertificate.year} · {selectedCertificate.issuer}</span><h3 id="certificate-modal-title">{selectedCertificate.title}</h3></div>
                            <a href={selectedCertificate.image} target="_blank" rel="noopener noreferrer">Open full size ↗</a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
