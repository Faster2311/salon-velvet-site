import { business, nav } from '../data/site.js';
import { Telegram, Viber, Instagram, Pin, Phone, Clock } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="container-x py-16 grid gap-10 sm:gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo size="lg"/>
          <p className="mt-6 text-mute max-w-md leading-relaxed">
            Velvet — салон краси у центрі Вінниці. Стрижка, фарбування, манікюр, педикюр, брови.
            Працюємо без вихідних, перший візит зі знижкою 15%.
          </p>
          <div className="mt-7 flex gap-3">
            <a className="tap inline-grid place-items-center w-11 h-11 rounded-full bg-paper border border-line text-rose-600 hover:border-rose-500 transition-colors" href={business.viber} aria-label="Viber"><Viber/></a>
            <a className="tap inline-grid place-items-center w-11 h-11 rounded-full bg-paper border border-line text-rose-600 hover:border-rose-500 transition-colors" href={business.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Telegram/></a>
            <a className="tap inline-grid place-items-center w-11 h-11 rounded-full bg-paper border border-line text-rose-600 hover:border-rose-500 transition-colors" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram/></a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs uppercase tracking-wider2 text-rose-600 mb-5">Сторінка</h3>
          <ul className="space-y-3">
            {nav.map(n => (
              <li key={n.href}><a href={n.href} className="text-ink/80 hover:text-rose-600 transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="text-xs uppercase tracking-wider2 text-rose-600 mb-5">Контакти</h3>
          <ul className="space-y-4 text-ink/85">
            <li className="flex items-start gap-3"><Pin className="text-rose-500 mt-0.5"/><a href={business.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-rose-600">{business.address}</a></li>
            <li className="flex items-start gap-3"><Phone className="text-rose-500 mt-0.5"/><a href={`tel:${business.phone}`} className="hover:text-rose-600">{business.phoneDisplay}</a></li>
            <li className="flex items-start gap-3"><Clock className="text-rose-500 mt-0.5"/><span>{business.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="divider-rose"/>
      <div className="container-x py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-mute">
        <span>© {new Date().getFullYear()} Салон краси Velvet, Вінниця. Усі права захищено.</span>
        <span className="font-display italic">Догляд, після якого хочеться сфотографуватись</span>
      </div>
    </footer>
  );
}
