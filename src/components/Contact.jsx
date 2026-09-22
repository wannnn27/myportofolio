import { useState } from 'react';
import './Contact.css';
import waLogo from '../assets/images/wa.png';
import gmailLogo from '../assets/images/gmail (1).png';
import linkedinLogo from '../assets/images/linkedin.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData(current => ({ ...current, [field]: value }));
    if (errors[field]) setErrors(current => ({ ...current, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (formData.name.trim().length < 2) nextErrors.name = 'Please enter at least 2 characters.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (formData.message.trim().length < 10) nextErrors.message = 'Please add a little more detail (minimum 10 characters).';
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:arwansyah2787@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
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
                Opening your email client with the message ready to send.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Adi Arwan Syah"
                required
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && <p className="form-error" id="contact-name-error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="recruiter@example.com"
                required
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && <p className="form-error" id="contact-email-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <div className="form-label-row"><label htmlFor="contact-message">Message</label><span>{formData.message.length}/1000</span></div>
              <textarea
                id="contact-message"
                rows="5"
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Tell me about your project or idea..."
                required
                maxLength="1000"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && <p className="form-error" id="contact-message-error">{errors.message}</p>}
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
