import './About.css';
import aboutImage from '../assets/images/aing.jpeg';

const About = () => {
    return (
        <section className="about section section-grid" id="about">
            <div className="container">
                <div className="about-top-header">
                    <h2 className="about-main-title">About Me</h2>
                    <p className="about-subtitle">
                        <span className="sparkle"></span> Mengubah data menjadi insight bermakna <span className="sparkle"></span>
                    </p>
                </div>

                <div className="about-content-wrapper">
                    <div className="about-text-area">
                        <p className="description-text">
                            Seorang mahasiswa Sistem Informasi yang memiliki ketertarikan besar pada bidang pengembangan Machine Learning. Saya berfokus pada menciptakan solusi analitik yang menarik dan selalu berusaha mengolah data menjadi informasi bermakna dalam setiap proyek.
                        </p>
                        <p className="about-quote">
                            "be 1% better than yesterday, and trust the process"
                        </p>

                        <div className="about-action-btns">
                            <a href="#cv" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </a>
                            <a href="#projects" className="btn btn-secondary btn-outline">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

                <div className="about-stats-container">
                    {/* Card 1 */}
                    <div className="stat-box">
                        <div className="stat-box-top">

                            <span className="stat-number">5+</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>TOTAL PROJECTS</h4>
                            <p>innovative ML solutions crafted</p>
                            <span className="stat-arrow">↗</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="stat-box">
                        <div className="stat-box-top">

                            <span className="stat-number">10+</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>CERTIFICATES</h4>
                            <p>Professional skills validated</p>
                            <span className="stat-arrow">↗</span>
                        </div>
                    </div>

                    {/* Card 3 - Study/Semester substituted for Experience per user request */}
                    <div className="stat-box">
                        <div className="stat-box-top">

                            <span className="stat-number">6</span>
                        </div>
                        <div className="stat-box-bottom">
                            <h4>SEMESTER STUDI</h4>
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
