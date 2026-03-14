import './About.css';
import aboutImage from '../assets/images/aing.jpeg';

const About = () => {
    return (
        <section className="about section section-grid" id="about">
            <div className="container">

                {/* Header */}
                <div className="about-top-header">
                    <h2 className="about-main-title">About Me</h2>
                    <p className="about-subtitle">
                        <span className="sparkle"></span>
                        Mengubah data menjadi insight bermakna
                        <span className="sparkle"></span>
                    </p>
                </div>

                {/* Main content */}
                <div className="about-content-wrapper">
                    <div className="about-text-area">
                        <p className="description-text">
                            Seorang mahasiswa Sistem Informasi yang memiliki ketertarikan besar pada
                            bidang pengembangan Machine Learning. Saya berfokus pada menciptakan
                            solusi analitik yang menarik dan selalu berusaha mengolah data menjadi
                            informasi bermakna dalam setiap proyek.
                        </p>
                        <p className="about-quote">
                            "be 1% better than yesterday, and trust the process"
                        </p>

                        <div className="about-action-btns">
                            <a href="#cv" className="btn btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </a>
                            <a href="#projects" className="btn btn-secondary btn-outline">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                                View Projects
                            </a>
                        </div>
                    </div>

                    <div className="about-image-area">
                        <div className="circle-profile">
                            <img src={aboutImage} alt="Adi Arwan Syah" className="profile-img-circle" />
                            <div className="circle-glow-bg"></div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="about-stats-container">
                    {/* Card 1 */}
                    <div className="stat-box">
                        <div className="stat-box-top">
                            <div className="stat-icon-badge">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                                </svg>
                            </div>
                            <span className="stat-number">5+</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>Total Projects</h4>
                            <p>Innovative ML solutions crafted</p>
                            <span className="stat-arrow">↗</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="stat-box">
                        <div className="stat-box-top">
                            <div className="stat-icon-badge">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21"/>
                                    <line x1="12" y1="17" x2="12" y2="21"/>
                                </svg>
                            </div>
                            <span className="stat-number">10+</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>Certificates</h4>
                            <p>Professional skills validated</p>
                            <span className="stat-arrow">↗</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="stat-box">
                        <div className="stat-box-top">
                            <div className="stat-icon-badge">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                </svg>
                            </div>
                            <span className="stat-number">6</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>Semester Studi</h4>
                            <p>Continuous learning journey</p>
                            <span className="stat-arrow">↗</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;