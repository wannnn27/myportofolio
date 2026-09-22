import { useEffect, useRef, useState } from 'react';

export default function PortfolioRail({ children, label }) {
  const rail = useRef(null);
  const [position, setPosition] = useState({ start: true, end: false });
  useEffect(() => {
    const element = rail.current;
    const update = () => setPosition({ start: element.scrollLeft < 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2 });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  const move = (direction) => {
    const element = rail.current;
    const step = element.firstElementChild.getBoundingClientRect().width + 20;
    element.scrollBy({ left: step * direction, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <div className="portfolio-gallery">
    <div className="portfolio-gallery__controls">
      <span>Geser untuk menjelajahi <span aria-hidden="true">↔</span></span>
      <div>
        <button type="button" aria-label={`${label} sebelumnya`} disabled={position.start} onClick={() => move(-1)}>←</button>
        <button type="button" aria-label={`${label} berikutnya`} disabled={position.end} onClick={() => move(1)}>→</button>
      </div>
    </div>
    <div ref={rail} className="portfolio-rail" role="region" aria-label={label} tabIndex={0} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
    }}>{children}</div>
  </div>;
}
