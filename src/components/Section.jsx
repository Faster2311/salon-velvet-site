export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <header className="max-w-3xl mb-12 sm:mb-16">
            {eyebrow && <span className="eyebrow reveal-up">{eyebrow}</span>}
            {title && (
              <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl mt-5 reveal-up">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-5 text-mute text-base sm:text-lg leading-relaxed reveal-up">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
