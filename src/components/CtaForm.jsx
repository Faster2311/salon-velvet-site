import { useState } from 'react';
import Section from './Section.jsx';
import { business, tgMessage } from '../data/site.js';
import { photos } from '../data/content.js';
import { Telegram, Viber, Phone } from './Icons.jsx';

const ph = photos(import.meta.env.BASE_URL + 'photos/');

const RATE_LIMIT_MS = 10 * 60 * 1000;
const MAX_SUBMITS = 3;
const KEY = 'velvet.formrate.v1';

const sanitize = (s) => String(s || '').replace(/[<>]/g, '').slice(0, 500);

const allowed = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    const now = Date.now();
    return raw.filter(t => now - t < RATE_LIMIT_MS).length < MAX_SUBMITS;
  } catch { return true; }
};
const mark = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    localStorage.setItem(KEY, JSON.stringify([...raw, Date.now()].slice(-MAX_SUBMITS * 2)));
  } catch {}
};

export default function CtaForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Будь-яка послуга', when: '', honey: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.honey) { setStatus('ok'); return; }
    if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 9) {
      setStatus('error'); return;
    }
    if (!allowed()) { setStatus('limited'); return; }

    const text =
      `Заявка з сайту Velvet:\n` +
      `Промокод: ${business.promoCode} (-15% перший візит)\n` +
      `Ім'я: ${sanitize(form.name)}\n` +
      `Телефон: ${sanitize(form.phone)}\n` +
      `Послуга: ${sanitize(form.service)}\n` +
      (form.when ? `Бажаний час: ${sanitize(form.when)}\n` : '');

    window.open(tgMessage(text), '_blank', 'noopener,noreferrer');
    mark();
    setStatus('ok');
    setForm({ name: '', phone: '', service: 'Будь-яка послуга', when: '', honey: '' });
  };

  return (
    <Section className="!py-0">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-paper reveal-fade">
          <div className="absolute inset-0 lg:hidden">
            <img src={ph.cta.src} alt={ph.cta.alt} className="w-full h-full object-cover opacity-15" loading="lazy"/>
          </div>

          <div className="relative grid lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-5 relative">
              <img src={ph.cta.src} alt={ph.cta.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-700/55 via-rose-600/30 to-beige-400/40"/>
              <div className="relative h-full p-12 flex flex-col justify-between text-white">
                <span className="eyebrow !text-rose-100">Перший візит · {business.promoCode}</span>
                <div>
                  <p className="script text-6xl text-rose-50 leading-none">записуємо</p>
                  <h3 className="h-display text-5xl mt-3">Слот для вас уже забронюємо</h3>
                  <p className="mt-5 text-rose-50/90 max-w-md leading-relaxed">
                    Залиште ім'я і телефон — підтвердимо у Viber протягом 30 хвилин у робочі години.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="relative lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-5">
              <div className="lg:hidden">
                <span className="eyebrow">Перший візит · {business.promoCode}</span>
                <h2 className="h-display text-3xl mt-4">Запишіться зі знижкою 15%</h2>
                <p className="mt-3 text-mute">Заповніть форму — відкриємо Telegram з готовим повідомленням.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-wider2 text-mute">Як до вас звертатися</span>
                  <input name="name" value={form.name} onChange={onChange} required maxLength={60}
                         placeholder="Анна" className="input mt-2"/>
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider2 text-mute">Телефон</span>
                  <input name="phone" type="tel" inputMode="tel" value={form.phone} onChange={onChange}
                         required maxLength={20} placeholder="+380 95 234 56 78" className="input mt-2"/>
                </label>
              </div>

              <label className="block">
                <span className="text-xs uppercase tracking-wider2 text-mute">Послуга</span>
                <select name="service" value={form.service} onChange={onChange} className="input mt-2">
                  <option>Будь-яка послуга</option>
                  <option>Жіноча стрижка</option>
                  <option>Фарбування</option>
                  <option>Манікюр</option>
                  <option>Педикюр</option>
                  <option>Оформлення брів</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs uppercase tracking-wider2 text-mute">Бажаний день / час — необов'язково</span>
                <input name="when" value={form.when} onChange={onChange} maxLength={80}
                       placeholder="Наприклад, субота після 14:00" className="input mt-2"/>
              </label>

              <input type="text" name="honey" value={form.honey} onChange={onChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true"/>

              <button type="submit" className="btn-rose w-full">
                <Telegram/> Надіслати у Telegram
              </button>

              <p aria-live="polite" className="text-sm min-h-5">
                {status === 'ok' && <span className="text-rose-600">Дякуємо! Перевірте відкрите вікно Telegram — повідомлення вже готове.</span>}
                {status === 'error' && <span className="text-rose-700">Будь ласка, перевірте ім'я і номер телефону.</span>}
                {status === 'limited' && <span className="text-rose-700">Забагато спроб за 10 хвилин. Напишіть нам напряму у Viber.</span>}
              </p>

              <div className="pt-4 border-t border-line flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                <span className="text-xs text-mute">Або напишіть напряму:</span>
                <div className="flex flex-wrap gap-2">
                  <a href={business.viber} className="btn-ghost !py-2.5 !text-xs"><Viber/> Viber</a>
                  <a href={tgMessage('Доброго дня! Хочу записатися у Velvet.')} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 !text-xs"><Telegram/> Telegram</a>
                  <a href={`tel:${business.phone}`} className="btn-ghost !py-2.5 !text-xs"><Phone/> Дзвінок</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
