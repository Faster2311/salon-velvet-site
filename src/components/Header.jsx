import { useEffect, useState } from 'react';
import { nav, business, tgMessage } from '../data/site.js';
import { Telegram, Menu, Close } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8" aria-label="Головна навігація">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink/85 hover:text-rose-600 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tgMessage('Доброго дня! Хочу записатися у Velvet.')}
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-rose !py-2.5 !px-5"
          >
            <Telegram /> Записатись
          </a>
          <button
            type="button"
            className="lg:hidden tap inline-grid place-items-center w-11 h-11 rounded-full border border-line text-ink"
            aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            {open ? <Close/> : <Menu/>}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-20 bg-bg/95 backdrop-blur-md transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="container-x py-8 flex flex-col gap-1">
          {nav.map(n => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="tap flex items-center justify-between rounded-2xl px-5 py-4 border border-line bg-paper hover:border-rose-500/50"
            >
              <span className="font-display text-2xl">{n.label}</span>
              <span aria-hidden className="text-mute">→</span>
            </a>
          ))}
          <div className="divider-rose my-6"/>
          <a
            href={tgMessage('Доброго дня! Хочу записатися у Velvet.')}
            target="_blank" rel="noopener noreferrer"
            className="btn-rose"
          >
            <Telegram /> Записатись у Telegram
          </a>
          <a href={`tel:${business.phone}`} className="btn-ghost mt-3">
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
