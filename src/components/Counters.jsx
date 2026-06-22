import { useEffect, useRef } from 'react';
import { gsap } from '../lib/reveal.js';
import { counters } from '../data/content.js';

const parse = (v) => {
  const n = parseFloat(v.replace(/[^\d.]/g, ''));
  return isFinite(n) ? n : 0;
};
const fmt = (raw, n) => {
  const decimals = raw.includes('.') ? 1 : 0;
  const suffix = raw.replace(/[\d.\s]/g, '');
  return n.toFixed(decimals) + suffix;
};

export default function Counters() {
  const root = useRef(null);
  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parse(el.dataset.count);
        const raw = el.dataset.count;
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => { el.textContent = fmt(raw, obj.n); },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="border-y border-line bg-cream">
      <div className="container-x py-14 sm:py-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {counters.map((c) => (
          <div key={c.label} className="text-center sm:text-left">
            <div
              data-count={c.value}
              className="h-display text-5xl sm:text-6xl text-rose-600"
              aria-label={`${c.value} ${c.label}`}
            >
              {c.value}
            </div>
            <div className="mt-2 text-sm text-mute uppercase tracking-wider2">
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
