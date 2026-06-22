# Velvet — салон краси у Вінниці

Сайт пакету «Бізнес» (одна повноформатна сторінка) для салону краси **Velvet**, вул. Соборна 38, Вінниця.

## Стек
- React 18 + Vite 5
- Tailwind CSS 3
- GSAP 3 (ScrollTrigger + Timeline)
- Палітра `salon_007` з design-system.json: ніжний рожевий + теплий беж
- Шрифти: Playfair Display + Lato + Sacramento (для одного декоративного акценту)

## Запуск локально
```bash
npm install
npm run dev
```
Відкриється на `http://localhost:5173/salon-velvet-site/`.

## Деплой на GitHub Pages
1. `gh auth login` (одноразово, потрібен токен з правами repo).
2. `gh repo create salon-velvet-site --private --source=. --remote=origin --push`.
3. `npm run deploy` — збере і опублікує гілку `gh-pages`.
4. У налаштуваннях репо: Settings → Pages → Source = `gh-pages` branch.
5. Сайт буде на `https://Faster2311.github.io/salon-velvet-site/`.
