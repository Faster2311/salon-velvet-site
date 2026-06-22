import { useEffect, useRef } from 'react';
import { gsap } from '../lib/reveal.js';
import { business, tgMessage } from '../data/site.js';
import { photos } from '../data/content.js';
import { Telegram, Arrow, Sparkle, Star } from './Icons.jsx';

const ph = photos(import.meta.env.BASE_URL + 'photos/');

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-h="eyebrow"]', { opacity: 0, y: 16, duration: 0.6 })
        .from('[data-h="title"] .line', { opacity: 0, y: 36, stagger: 0.12, duration: 0.9 }, '-=0.3')
        .from('[data-h="lede"]', { opacity: 0, y: 18, duration: 0.7 }, '-=0.4')
        .from('[data-h="cta"] > *', { opacity: 0, y: 14, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('[data-h="meta"] > *', { opacity: 0, y: 12, stagger: 0.08, duration: 0.5 }, '-=0.3')
        .from('[data-h="image"]', { opacity: 0, scale: 1.06, duration: 1.4, ease: 'power2.out' }, '-=1.1')
        .from('[data-h="badge"]', { opacity: 0, y: 16, duration: 0.7 }, '-=0.5');

      gsap.to('[data-h="badge"]', { y: -6, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="relative overflow-hidden">
      <div className="container-x relative pt-10 pb-20 lg:pt-20 lg:pb-32 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 relative z-10">
          <span data-h="eyebrow" className="eyebrow">Салон краси · Вінниця, Соборна 38</span>

          <h1 data-h="title" className="h-display mt-6 text-[42px] sm:text-6xl lg:text-[80px]">
            <span className="line block">Догляд, після якого</span>
            <span className="line block">хочеться <span className="script text-rose-600 text-7xl sm:text-8xl lg:text-9xl leading-none">сфотографуватись</span></span>
            <span className="line block">— у центрі Вінниці</span>
          </h1>

          <p data-h="lede" className="mt-7 max-w-xl text-base sm:text-lg text-mute leading-relaxed">
            Стрижка, фарбування, манікюр, педикюр, брови. Без поспіху, без «я вирішила інакше»,
            без сюрпризів у касі. Перший візит — мінус 15% за промокодом <span className="text-rose-600 font-semibold">{business.promoCode}</span>.
          </p>

          <div data-h="cta" className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={tgMessage(`Доброго дня! Хочу скористатися знижкою 15% за промокодом ${business.promoCode}.`)}
              target="_blank" rel="noopener noreferrer"
              className="btn-rose"
            >
              <Telegram/> Записатись зі знижкою −15%
            </a>
            <a href="#services" className="btn-ghost">
              Дивитись послуги <Arrow/>
            </a>
          </div>

          <div data-h="meta" className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-mute">
            <span className="inline-flex items-center gap-2">
              <span className="flex text-beige-500">{[0,1,2,3,4].map(i => <Star key={i}/>)}</span>
              <span><span className="text-ink font-medium">4.9</span> у Google · 280+ відгуків</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <Sparkle className="text-rose-500"/> Працюємо без вихідних · 9—20
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div data-h="image" className="relative rounded-[28px] overflow-hidden border border-line aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] shadow-soft">
            <img
              src={ph.hero.src}
              alt={ph.hero.alt}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Decorative script */}
          <span aria-hidden className="absolute -top-6 -left-2 script text-rose-500/70 text-6xl select-none rotate-[-8deg] hidden sm:block">
            ніжно
          </span>

          {/* Floating promo card */}
          <div
            data-h="badge"
            className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 card p-5 sm:p-6"
          >
            <span className="text-xs uppercase tracking-wider2 text-rose-600">Перший візит</span>
            <p className="font-display text-2xl sm:text-3xl text-ink mt-2 leading-tight">
              Знижка <span className="text-rose-600">−15%</span> на будь-яку процедуру
            </p>
            <p className="mt-2 text-sm text-mute">
              Промокод <span className="text-rose-700 font-semibold">{business.promoCode}</span> — у повідомленні Viber або Telegram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
