import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './Hero.css';
import profilePhoto from '../assets/images/sertifikat/me-Photoroom.png';

const phrases = [
  'Software Engineering',
];

const celebrationPieces = [
  { shape: 'dot', left: '8%', top: '44%', midX: '-30px', midY: '-58px', x: '-62px', y: '-106px', rotate: '-260deg', delay: '0s', color: '#2e87f6', scale: '0.9' },
  { shape: 'rect', left: '18%', top: '30%', midX: '-20px', midY: '-72px', x: '-40px', y: '-122px', rotate: '180deg', delay: '0.08s', color: '#f35c2b', scale: '1.05' },
  { shape: 'spark', left: '30%', top: '38%', midX: '-8px', midY: '-78px', x: '-18px', y: '-132px', rotate: '240deg', delay: '0.16s', color: '#f9eccc', scale: '1.1' },
  { shape: 'line', left: '42%', top: '32%', midX: '8px', midY: '-82px', x: '16px', y: '-134px', rotate: '-140deg', delay: '0.04s', color: '#7bb6ff', scale: '0.95' },
  { shape: 'dot', left: '54%', top: '36%', midX: '24px', midY: '-72px', x: '44px', y: '-118px', rotate: '-110deg', delay: '0.12s', color: '#22c55e', scale: '0.86' },
  { shape: 'rect', left: '66%', top: '44%', midX: '42px', midY: '-56px', x: '78px', y: '-96px', rotate: '220deg', delay: '0.2s', color: '#f35c2b', scale: '1' },
  { shape: 'spark', left: '76%', top: '38%', midX: '54px', midY: '-42px', x: '96px', y: '-74px', rotate: '-240deg', delay: '0.28s', color: '#f9eccc', scale: '0.92' },
  { shape: 'dot', left: '20%', top: '58%', midX: '-30px', midY: '16px', x: '-62px', y: '44px', rotate: '130deg', delay: '0.34s', color: '#f9eccc', scale: '0.82' },
  { shape: 'rect', left: '36%', top: '58%', midX: '-6px', midY: '30px', x: '-12px', y: '66px', rotate: '-180deg', delay: '0.42s', color: '#2e87f6', scale: '0.92' },
  { shape: 'dot', left: '54%', top: '60%', midX: '20px', midY: '24px', x: '46px', y: '58px', rotate: '160deg', delay: '0.38s', color: '#22c55e', scale: '0.8' },
  { shape: 'line', left: '68%', top: '56%', midX: '38px', midY: '12px', x: '72px', y: '32px', rotate: '-260deg', delay: '0.5s', color: '#7bb6ff', scale: '0.9' },
  { shape: 'spark', left: '46%', top: '48%', midX: '2px', midY: '-22px', x: '4px', y: '-46px', rotate: '180deg', delay: '0.58s', color: '#f9eccc', scale: '0.74' },
];

const CelebrationBurst = ({ side }) => (
  <div className={`hero-celebration hero-celebration--${side}`} aria-hidden="true">
    <span className="celebration-glow" />
    <span className="celebration-ring" />
    {celebrationPieces.map((piece, index) => (
      <span
        key={`${side}-${piece.shape}-${index}`}
        className={`celebration-piece celebration-piece--${piece.shape}`}
        style={{
          '--piece-color': piece.color,
          '--piece-mid-x': piece.midX,
          '--piece-mid-y': piece.midY,
          '--piece-x': piece.x,
          '--piece-y': piece.y,
          '--piece-rotate': piece.rotate,
          '--piece-delay': piece.delay,
          '--piece-scale': piece.scale,
          left: piece.left,
          top: piece.top,
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setTypedText(current.substring(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else if (charIndex > 0) {
        setTypedText(current.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setIsDeleting(false);
        setPhraseIndex(i => (i + 1) % phrases.length);
      }
    }, isDeleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-bottom-haze" aria-hidden="true" />

      <div
        className={`hero-container ${isInfoVisible ? 'is-info-visible' : ''}`}
        onMouseLeave={() => setIsInfoVisible(false)}
      >
        <div className="hero-content">
          <CelebrationBurst side="left" />

          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="name highlight">Adi Arwan Syah</span>
          </h1>

          <p className="hero-description">
            Mahasiswa Sistem Informasi dengan minat pada software engineering.
          </p>

          <div className="hero-mantra">
            <p>
              Be 1% better than yesterday,
              <br />
              and trust the process.
            </p>

            <div className="hero-mantra-links">
              <a href="#projects">Learn</a>
              <a href="#certificates">Tech</a>
              <a href="#tech-stack">Grow</a>
            </div>
          </div>
        </div>

        <div
          className="hero-image"
          onMouseEnter={() => setIsInfoVisible(true)}
          onFocus={() => setIsInfoVisible(true)}
        >
          <div className="hero-image-inner">
            <div
              className="profile-card"
              tabIndex="0"
              aria-label="Show hero information"
            >
              <img
                src={profilePhoto}
                alt="Adi Arwan Syah"
                className="profile-img"
              />
              <div className="profile-overlay" aria-hidden="true" />
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/wannnn27"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/adi-arwan-syah/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/adi.arwnsyhhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-side-info">
          <CelebrationBurst side="right" />

          <p className="hero-subtitle">
            Information Systems Student focused on{' '}
            <span className="typing-word">{typedText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </p>

          <p className="hero-description hero-side-description">
            Berorientasi pada pengembangan solusi digital yang clean, scalable, dan user-friendly 
            melalui pendekatan software engineering yang terstruktur.
          </p>

          <div className="hero-buttons">
            <Button asChild size="lg" className="hero-action hero-action-primary">
              <a href="#projects">
                <Code2 size={16} strokeWidth={2.4} />
                View Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hero-action hero-action-secondary"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">5+</span>
              Projects
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-num">10+</span>
              Certificates
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat">
              UAD Info. Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
