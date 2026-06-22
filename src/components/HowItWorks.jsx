import Section from './Section.jsx';
import { howItWorks } from '../data/content.js';

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="Як проходить візит"
      title={<>Чотири кроки — і ви <span className="italic text-rose-600">у тиші</span></>}
      subtitle="Без черг, без ребусів з адміністраторкою. Усе ясно з першого повідомлення у Viber."
    >
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {howItWorks.map((s, i) => (
          <li key={s.title} className="relative reveal-up">
            {i < howItWorks.length - 1 && (
              <span aria-hidden className="hidden lg:block absolute top-7 left-[64%] right-[-22%] h-px bg-gradient-to-r from-rose-300/60 to-transparent"/>
            )}
            <span className="grid place-items-center w-14 h-14 rounded-full bg-rose-50 border border-rose-200 font-display text-2xl text-rose-600">
              {i + 1}
            </span>
            <h3 className="mt-6 font-display text-xl text-ink">{s.title}</h3>
            <p className="mt-2 text-mute text-sm leading-relaxed max-w-xs">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
