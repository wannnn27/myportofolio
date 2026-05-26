import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = 'hidden';

    // Timer for loading animation duration
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto'; // Restore scroll
      }, 800); // Fading out transition duration
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">AAS</div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
        <div className="preloader-text">INITIALIZING EXPERIENCE</div>
      </div>
    </div>
  );
};

export default Preloader;
