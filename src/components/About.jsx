import './About.css';
import aboutImage from '../assets/images/aing.jpeg';

const About = () => {
    const aboutCards = [
        { title: 'Education', desc: 'Information Systems Student' },
        { title: 'Focus', desc: 'Machine Learning & AI' },
    ];

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get To Know</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <div className="about-image">
                        <div className="about-img-wrapper">
                            <img src={aboutImage} alt="Adi Arwan Syah" className="about-img" />
                        </div>
                        <div className="experience-badge">
                            <span className="exp-text">Learner</span>
                        </div>
                    </div>

                    <div className="about-content">
                        <div className="about-cards">
                            {aboutCards.map((card, index) => (
                                <div className="about-card" key={index}>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="about-text">
                            <p>
                                Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan besar pada bidang Machine Learning dan Artificial Intelligence. Saya akan terus belajar dan berusaha mengembangkan diri dengan memahami bagaimana data dan teknologi AI dapat digunakan untuk memecahkan berbagai permasalahan.
                            </p>
                            <p>
                                Ketertarikan saya bermula dari rasa ingin tahu terhadap cara data diolah menjadi informasi yang bermakna. Seiring berjalannya waktu, saya semakin terdorong untuk memperdalam kemampuan di bidang AI. Saat ini, saya fokus mengembangkan skill dalam Machine Learning, serta mulai mempelajari area seperti Deep Learning, Natural Language Processing, dan Computer Vision sebagai bagian dari proses bertumbuh dan eksplorasi saya di dunia AI.
                            </p>
                        </div>

                        <a href="#contact" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
