import Section from './Section.jsx';
import { pains } from '../data/content.js';

export default function Problem() {
  return (
    <Section
      eyebrow="Знайомо?"
      title={<>Шість історій, які ми чули від жінок Вінниці</>}
      subtitle="І жодну з них не повторюємо у Velvet. Дрібниці, що псують враження — це наша зона відповідальності, не ваша."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {pains.map((p, i) => (
          <div key={i} className="card p-6 sm:p-7 reveal-up">
            <div className="flex items-start gap-4">
              <span className="font-display text-3xl text-rose-300 mt-0.5 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 text-mute text-sm leading-relaxed">{p.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
