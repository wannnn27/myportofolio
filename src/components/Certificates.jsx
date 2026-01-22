import { useEffect, useRef } from 'react';
import './Certificates.css';

// Import certificate images
import sertifJuara from '../assets/images/sertifikat/juara.jpeg';
import sertifPythonDicoding from '../assets/images/sertifikat/python-dicoding.png';
import sertif1 from '../assets/images/sertifikat/sertif 1.png';
import sertif2 from '../assets/images/sertifikat/sertif 2.png';
import sertif3 from '../assets/images/sertifikat/sertif 3.png';
import sertif4 from '../assets/images/sertifikat/sertif 4.png';
import sertif6 from '../assets/images/sertifikat/sertif 6.png';
import sertifBootcamp from '../assets/images/sertifikat/sertif-bootcamp.png';
import sertifMachineLearning from '../assets/images/sertifikat/Machine-learning-dicoding.png';
import sertifDasarAI from '../assets/images/sertifikat/dasar-ai.png';
import sertifWeb from '../assets/images/sertifikat/web.png';

const Certificates = () => {
    const scrollRef = useRef(null);

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

    // Duplicate certificates for infinite scroll effect
    const allCertificates = [...certificates, ...certificates];

    return (
        <section className="certificates section" id="certificates">
            <div className="container-fluid">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certificates & Credentials</h2>
                </div>

                <div className="certificates-scroll-wrapper">
                    <div className="certificates-track" ref={scrollRef}>
                        {allCertificates.map((cert, index) => (
                            <div className="certificate-card" key={`${cert.id}-${index}`}>
                                <div className="cert-image">
                                    <img src={cert.image} alt={cert.title} loading="lazy" />
                                    <div className="cert-overlay">
                                        <a href={cert.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                                            View Certificate
                                        </a>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
