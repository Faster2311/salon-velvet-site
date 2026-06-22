import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const initReveals = (root = document) => {
  const els = root.querySelectorAll('.reveal-up, .reveal-fade');
  els.forEach((el) => {
    const isFade = el.classList.contains('reveal-fade');
    gsap.fromTo(
      el,
      isFade ? { opacity: 0 } : { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      },
    );
  });
};

export { gsap, ScrollTrigger };
