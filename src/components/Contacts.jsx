import Section from './Section.jsx';
import { business } from '../data/site.js';
import { Pin, Phone, Clock, Telegram, Viber, Instagram } from './Icons.jsx';

export default function Contacts() {
  return (
    <Section
      id="contacts"
      eyebrow="Контакти"
      title={<>На Соборній 38 <span className="italic text-rose-600">вас уже чекають</span></>}
      subtitle="Заходьте, пишіть, телефонуйте — найшвидше відповідаємо у Viber та Telegram."
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-5 card p-7 sm:p-8 reveal-up">
          <h3 className="font-display text-3xl">Знайдете нас тут</h3>
          <ul className="mt-7 space-y-5 text-ink/90">
            <li className="flex items-start gap-4">
              <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 border border-rose-100 shrink-0"><Pin/></span>
              <div>
                <span className="block text-xs uppercase tracking-wider2 text-mute">Адреса</span>
                <a href={business.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition-colors">{business.address}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 border border-rose-100 shrink-0"><Phone/></span>
              <div>
                <span className="block text-xs uppercase tracking-wider2 text-mute">Телефон</span>
                <a href={`tel:${business.phone}`} className="hover:text-rose-600 transition-colors">{business.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 border border-rose-100 shrink-0"><Clock/></span>
              <div>
                <span className="block text-xs uppercase tracking-wider2 text-mute">Графік</span>
                <span>{business.hours}</span>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-7 border-t border-line">
            <span className="text-xs uppercase tracking-wider2 text-mute">Месенджери</span>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={business.viber} className="btn-ghost !py-2.5"><Viber/> Viber</a>
              <a href={business.telegram} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5"><Telegram/> Telegram</a>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5"><Instagram/> Instagram</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-line min-h-[360px] reveal-up">
          <iframe
            title="Velvet на мапі Вінниці"
            src={business.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[360px]"
          />
        </div>
      </div>
    </Section>
  );
}
