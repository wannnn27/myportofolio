import './TechMarquee.css';

const growthItems = [
  {
    number: '01',
    title: 'Learn with purpose',
    text: 'Mempelajari fondasi engineering, memahami masalah, lalu mengubahnya menjadi solusi yang jelas.',
  },
  {
    number: '02',
    title: 'Build useful things',
    text: 'Membangun web app, dashboard, dan produk digital yang rapi, responsif, dan mudah digunakan.',
  },
  {
    number: '03',
    title: 'Grow every day',
    text: 'Menjadi 1% lebih baik dari kemarin lewat konsistensi, feedback, dan proses yang terus diperbaiki.',
  },
];

const TechMarquee = () => {
  const marqueeItems = [...growthItems, ...growthItems];

  return (
    <section className="growth-strip" id="tech-stack" aria-label="Learning mindset">
      <div className="growth-strip-inner">
        <div className="growth-strip-heading">
          <span className="growth-eyebrow">Mindset</span>
          <h2>Learn. Build. Grow.</h2>
        </div>

        <div className="growth-marquee" aria-label="Growth principles">
          <div className="growth-track">
            {marqueeItems.map((item, index) => (
              <article
                className="growth-card"
                key={`${item.number}-${index}`}
                aria-hidden={index >= growthItems.length}
              >
                <span className="growth-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
