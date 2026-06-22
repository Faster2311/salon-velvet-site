import Section from './Section.jsx';
import { reviews } from '../data/content.js';
import { Star } from './Icons.jsx';

export default function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Те, що кажуть клієнтки"
      title={<>Жінки Вінниці — про <span className="italic text-rose-600">свій салон</span></>}
      subtitle="Усі відгуки можна перевірити у Google і нашому Instagram — посилання у футері."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <figure key={i} className="card p-7 flex flex-col reveal-up">
            <div className="flex text-beige-500 gap-0.5">
              {[0,1,2,3,4].map(j => <Star key={j}/>)}
            </div>
            <blockquote className="mt-5 text-ink/85 leading-relaxed flex-1 font-display italic text-lg">
              «{r.text}»
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-line flex items-center justify-between">
              <span className="font-display text-lg text-ink">{r.name}</span>
              <span className="text-xs uppercase tracking-wider2 text-mute">{r.city}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
