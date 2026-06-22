import { useMemo, useState } from 'react';
import Section from './Section.jsx';
import { portfolio, portfolioFilters, photos } from '../data/content.js';

const ph = photos(import.meta.env.BASE_URL + 'photos/');

export default function Portfolio() {
  const [cat, setCat] = useState('all');
  const [active, setActive] = useState(null);

  const items = useMemo(
    () => cat === 'all' ? portfolio : portfolio.filter(p => p.cat === cat),
    [cat],
  );

  return (
    <Section
      id="portfolio"
      eyebrow="Портфоліо"
      title={<>Образи, які <span className="italic text-rose-600">пишаємось показати</span></>}
      subtitle="Реальні клієнтки з нашого крісла, без фільтрів Instagram. Натисніть на роботу, щоб побачити її крупніше."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {portfolioFilters.map(f => (
          <button
            key={f.id}
            type="button"
            onClick={() => setCat(f.id)}
            className={`tap px-4 py-2.5 rounded-full text-sm transition-colors border ${
              cat === f.id ? 'bg-rose-600 text-white border-rose-600' : 'border-line text-ink hover:border-rose-500/60 bg-paper'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {items.map(p => {
          const img = ph[p.photo];
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-line aspect-[4/5] reveal-up text-left"
            >
              <img src={img.src} alt={p.caption} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"/>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                <span className="block text-[10px] uppercase tracking-wider2 text-rose-200 mb-1.5">
                  {portfolioFilters.find(f => f.id === p.cat)?.label}
                </span>
                <p className="text-sm leading-snug line-clamp-3">{p.caption}</p>
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-md p-4 sm:p-8 grid place-items-center"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 tap inline-grid place-items-center w-11 h-11 rounded-full bg-paper text-ink"
            aria-label="Закрити"
          >
            ✕
          </button>
          <figure className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={ph[active.photo].src} alt={active.caption} className="w-full max-h-[80vh] object-contain rounded-2xl"/>
            <figcaption className="mt-4 text-center text-rose-100">{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}
