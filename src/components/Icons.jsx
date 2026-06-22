const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Telegram = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <path fill="currentColor" d="M21.5 4.2 3 11.2c-.9.4-.9 1.6 0 1.9l4.5 1.5 1.7 5.4c.2.6 1 .8 1.4.3l2.5-2.6 4.5 3.3c.8.6 1.9.1 2.1-.9l3.1-13.4c.3-1.1-.8-2-1.8-1.5Z"/>
  </svg>
);
export const Viber = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <path fill="currentColor" d="M12 2c4.5 0 8 2.7 8 7v2c0 4-2.6 7-7 7l-1.5 2.2c-.3.4-.9.4-1.1 0L9 18c-3.4-.4-6-2.6-6.7-5.7a13 13 0 0 1-.3-3.6C2.4 4.5 6.4 2 12 2Z"/>
  </svg>
);
export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <rect {...s} x="3" y="3" width="18" height="18" rx="5"/>
    <circle {...s} cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/>
  </svg>
);
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <path {...s} d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 6 6l1.4-2 4 1.6V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 1-2Z"/>
  </svg>
);
export const Pin = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <path {...s} d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/>
    <circle {...s} cx="12" cy="10" r="2.5"/>
  </svg>
);
export const Clock = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...p}>
    <circle {...s} cx="12" cy="12" r="9"/>
    <path {...s} d="M12 7v5l3 2"/>
  </svg>
);
export const Arrow = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...p}>
    <path {...s} d="M5 12h14m-5-5 5 5-5 5"/>
  </svg>
);
export const Sparkle = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path fill="currentColor" d="M12 2 13.6 8.4 20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z"/>
  </svg>
);
export const Star = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...p}>
    <path fill="currentColor" d="M12 2 14.5 8.5 21 9.3l-5 4.5L17.5 21 12 17.7 6.5 21 8 13.8 3 9.3l6.5-.8L12 2Z"/>
  </svg>
);
export const ChevronDown = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...p}>
    <path {...s} d="m6 9 6 6 6-6"/>
  </svg>
);
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M4 7h16M4 12h16M4 17h16"/>
  </svg>
);
export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M6 6l12 12M18 6 6 18"/>
  </svg>
);
export const Scissors = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <circle {...s} cx="6" cy="6" r="2.5"/><circle {...s} cx="6" cy="18" r="2.5"/>
    <path {...s} d="M20 4 8 16m12 4L8 8"/>
  </svg>
);
export const Brush = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M4 20c2-2 4-2 6-2M14 12 7 19a3 3 0 0 1-3-3l7-7M14 12 19 7a2.1 2.1 0 1 1 3 3l-5 5"/>
  </svg>
);
export const Heart = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M12 20s-7-4.4-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 10c0 5.6-7 10-7 10h-2Z"/>
  </svg>
);
export const Eye = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/>
    <circle {...s} cx="12" cy="12" r="2.5"/>
  </svg>
);
export const Shield = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M12 3 4 6v6c0 4 3.5 7.5 8 9 4.5-1.5 8-5 8-9V6l-8-3Z"/>
    <path {...s} d="m9 12 2 2 4-4"/>
  </svg>
);
export const Drop = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path {...s} d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Z"/>
  </svg>
);
