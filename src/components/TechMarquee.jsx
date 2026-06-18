import './TechMarquee.css';

const TechMarquee = () => {
  return (
    <div className="tech-marquee-wrapper" id="tech-stack">
      <div className="tech-marquee-track">
        {[0, 1].map((i) => (
          <div className="tech-marquee-content" key={i} aria-hidden={i === 1}>
            <span>JAVASCRIPT</span>
            <span className="tech-marquee-dot">•</span>
            <span>TYPESCRIPT</span>
            <span className="tech-marquee-dot">•</span>
            <span>REACT</span>
            <span className="tech-marquee-dot">•</span>
            <span>NEXT.JS</span>
            <span className="tech-marquee-dot">•</span>
            <span>NODE.JS</span>
            <span className="tech-marquee-dot">•</span>
            <span>POSTGRESQL</span>
            <span className="tech-marquee-dot">•</span>
            <span>MYSQL</span>
            <span className="tech-marquee-dot">•</span>
            <span>DOCKER</span>
            <span className="tech-marquee-dot">•</span>
            <span>GIT</span>
            <span className="tech-marquee-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
