import { useState } from 'react';
import './Contact.css';
import waLogo from '../assets/images/wa.png';
import gmailLogo from '../assets/images/gmail (1).png';
import linkedinLogo from '../assets/images/linkedin.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      id: 'email',
      title: 'Email',
      value: 'arwansyah2787@gmail.com',
      link: 'mailto:arwansyah2787@gmail.com',
      icon: <img src={gmailLogo} alt="Email" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      value: '+62 815-1576-5980',
      link: 'https://wa.me/6281515765980',
      icon: <img src={waLogo} alt="WhatsApp" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'Adi Arwan Syah',
      link: 'https://www.linkedin.com/in/adi-arwan-syah/',
      icon: <img src={linkedinLogo} alt="LinkedIn" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />,
    },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's work together.</h2>
        </div>

        <div className="contact-grid">
          {/* Left — info */}
          <div className="contact-info">
            <h3 className="contact-info-head">
              Open to internships,<br />collaborations &amp; projects.
            </h3>
            <p className="contact-info-desc">
              Whether you have an idea to explore, a project to collaborate on,
              or just want to connect — I'm always happy to hear from you.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info) => (
                <a
                  href={info.link}
                  className={`contact-card ${info.id}`}
                  key={info.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${info.title}: ${info.value}`}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                  <div className="contact-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="form-success" role="alert">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
