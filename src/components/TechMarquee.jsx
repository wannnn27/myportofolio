import { Card } from '@/components/ui/card';
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
    text: 'Membangun produk digital yang fungsional, responsif, dan mudah digunakan.',
  },
  {
    number: '03',
    title: 'Grow every day',
    text: 'Menjadi 1% lebih baik dari kemarin lewat konsistensi, feedback, dan proses yang terus diperbaiki.',
  },
];

const TechMarquee = () => {
  return (
    <section className="growth-strip" id="tech-stack" aria-label="Learning mindset">
      <div className="growth-bridge" aria-hidden="true" />
      <div className="growth-strip-inner">
        <div className="growth-strip-heading">
          <span className="growth-eyebrow">Mindset</span>
          <h2>Learn. Build. Grow.</h2>
          <p>Prinsip sederhana yang menjaga setiap proses tetap terarah, berguna, dan terus berkembang.</p>
        </div>

        <div className="growth-marquee" aria-label="Growth principles">
          <div className="growth-track">
            {growthItems.map((item) => (
              <Card
                className="growth-card"
                key={item.number}
              >
                <div className="growth-card-top">
                  <span className="growth-number">{item.number}</span>
                  <span className="growth-card-mark" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
