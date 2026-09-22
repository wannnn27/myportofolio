import { useState, useEffect } from 'react';
import './Projects.css';

const catStyle = {
  mining: { color: '#2e87f6', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.24)' },
  web:    { color: '#2e87f6', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.24)' },
  apps:   { color: '#2e87f6', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.24)' },
  ml:     { color: '#2e87f6', bg: 'rgba(46,135,246,0.12)', border: 'rgba(46,135,246,0.24)' },
};

const ICode   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IArrowL = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;
const ILink   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IGH     = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const IChev   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>;
const IShare  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.5" x2="15.4" y2="6.5"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/></svg>;

const ProjectDetail = ({ project, onBack }) => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const c = catStyle[project.categoryKey] || catStyle.ml;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    requestAnimationFrame(() => setShow(true));
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: `${project.title} — Adi Arwan Syah`, text: project.description, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // A cancelled native share dialog should leave the page unchanged.
    }
  };

  return (
    <div className={`dp ${show ? 'dp--in' : ''}`}>
      <div className="dp__bg-grid" aria-hidden="true" />

      <div className="dp__wrap">
        {/* Top nav */}
        <div className="dp__nav">
          <button className="dp__back" onClick={onBack}>
            <IArrowL /> Back to Projects
          </button>
          <div className="dp__crumb">
            <span>Projects</span>
            <IChev />
            <span className="dp__crumb-cur">{project.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="dp__hero">
          {/* Left */}
          <div className="dp__left">
            <span
              className="dp__cat"
              style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
            >
              {project.category}
            </span>

            <h1 className="dp__title">{project.title}</h1>
            <div className="dp__accent" style={{ background: c.color }} />
            <p className="dp__desc">{project.description}</p>

            <div className="dp__case">
              <div className="dp__case-card">
                <span>Role</span>
                <p>{project.role}</p>
              </div>
              <div className="dp__case-card">
                <span>Problem</span>
                <p>{project.problem}</p>
              </div>
              <div className="dp__case-card">
                <span>Approach</span>
                <p>{project.solution}</p>
              </div>
              <div className="dp__case-card">
                <span>Outcome</span>
                <p>{project.outcome}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="dp__stats">
              <div className="dp__stat">
                <span className="dp__stat-n" style={{ color: c.color }}>{project.tech.length}</span>
                <span className="dp__stat-l">Technologies</span>
              </div>
              <div className="dp__stat-sep" />
              <div className="dp__stat">
                <span className="dp__stat-n" style={{ color: c.color }}>{project.features.length}</span>
                <span className="dp__stat-l">Key Features</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="dp__ctas">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dp__btn-primary"
                  style={{ background: c.color }}
                >
                  <ILink /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.demo ? 'dp__btn-ghost' : 'dp__btn-primary'}
                  style={project.demo ? undefined : { background: c.color }}
                >
                  <IGH /> Source Code
                </a>
              )}
              <button type="button" className="dp__btn-ghost dp__share" onClick={handleShare}>
                <IShare /> {copied ? 'Link Copied!' : 'Share Project'}
              </button>
            </div>

            {/* Tech chips */}
            <div>
              <p className="dp__section-label"><ICode /> Tech Stack</p>
              <div className="dp__tech-list">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="dp__chip"
                    style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="dp__right">
            {/* Browser mockup */}
            <div className="dp__frame">
              <div className="dp__frame-dots">
                <span /><span /><span />
              </div>
              <div className="dp__frame-img">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="dp__no-preview">
                    <ICode />
                    <span>Project preview coming soon</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features card */}
            <div className="dp__features">
              <p className="dp__features-title">Key Features</p>
              <ul className="dp__features-list">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
