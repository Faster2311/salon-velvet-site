import Section from './Section.jsx';
import { advantages } from '../data/content.js';
import { Heart, Brush, Shield, Clock, Telegram, Sparkle } from './Icons.jsx';

const icons = [Heart, Brush, Shield, Clock, Telegram, Sparkle];

export default function Advantages() {
  return (
    <Section
      eyebrow="Як ми працюємо інакше"
      title={<>Шість стандартів, на яких <span className="italic text-rose-600">тримається Velvet</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {advantages.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={a.title} className="card card-hover p-7 reveal-up">
              <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                <Icon />
              </span>
              <h3 className="mt-6 font-display text-2xl text-ink">{a.title}</h3>
              <p className="mt-3 text-mute leading-relaxed">{a.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
