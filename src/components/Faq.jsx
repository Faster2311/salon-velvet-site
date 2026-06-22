import { useState } from 'react';
import Section from './Section.jsx';
import { faq } from '../data/content.js';
import { ChevronDown } from './Icons.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Section
      id="faq"
      eyebrow="Питання — відповідь"
      title={<>Те, що питають <span className="italic text-rose-600">перед першим візитом</span></>}
    >
      <div className="max-w-3xl">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`reveal-up border-b border-line ${i === 0 ? 'border-t' : ''}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 text-left py-6 group"
              >
                <span className="font-display text-xl sm:text-2xl text-ink group-hover:text-rose-600 transition-colors">{item.q}</span>
                <span className={`mt-1.5 text-rose-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown/>
                </span>
              </button>
              <div className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="text-mute leading-relaxed max-w-2xl">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
