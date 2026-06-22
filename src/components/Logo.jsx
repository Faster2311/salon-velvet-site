export default function Logo({ size = 'md', onClick }) {
  const titleSize = size === 'lg' ? 'text-4xl' : 'text-3xl';
  return (
    <a href="#top" onClick={onClick} className="group inline-flex items-center gap-3" aria-label="Velvet — на початок">
      <span className="grid place-items-center w-11 h-11 rounded-full bg-rose-500/10 border border-rose-500/30">
        <span className="script text-rose-600 text-3xl leading-none -mt-1">V</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display italic ${titleSize} text-ink`}>Velvet</span>
        <span className="block text-[10px] uppercase tracking-wider2 text-mute mt-0.5">Салон краси · Вінниця</span>
      </span>
    </a>
  );
}
