import Section from './Section.jsx';
import { services, photos } from '../data/content.js';
import { tgMessage } from '../data/site.js';
import { Telegram, Arrow, Clock } from './Icons.jsx';

const ph = photos(import.meta.env.BASE_URL + 'photos/');

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Прайс салону"
      title={<>Послуги і ціни <span className="italic text-rose-600">без зірочок</span></>}
      subtitle="Що написано — те у касі. Якщо випадок складніший за стандарт (густе волосся, складне фарбування) — попередимо у Viber до візиту, а не після."
    >
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
        {services.map((s) => {
          const p = ph[s.photo];
          return (
            <article key={s.title} className="card card-hover flex flex-col sm:flex-row overflow-hidden reveal-up">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[240px] overflow-hidden">
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"/>
              </div>
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <span className="price-tag whitespace-nowrap">{s.price}</span>
                </div>
                <p className="mt-2 text-mute text-sm leading-relaxed">{s.text}</p>
                <div className="mt-5 pt-4 border-t border-line/80 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider2 text-mute">
                    <Clock className="text-rose-500"/> {s.duration}
                  </span>
                  <a
                    href={tgMessage(`Хочу записатися: ${s.title}`)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:gap-3 transition-all"
                  >
                    Записатись <Arrow/>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 card p-7 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-cream">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl text-ink">Не впевнені, що обрати?</h3>
          <p className="mt-2 text-mute max-w-xl">Напишіть пару слів про побажання — підкажемо процедуру, час і вартість.</p>
        </div>
        <a
          href={tgMessage('Підкажіть, на яку процедуру мені краще записатися?')}
          target="_blank" rel="noopener noreferrer"
          className="btn-rose"
        >
          <Telegram/> Спитати у Telegram
        </a>
      </div>
    </Section>
  );
}
