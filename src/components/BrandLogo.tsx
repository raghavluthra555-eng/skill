export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`leading-none tracking-tight ${className}`} aria-label="Skills Brand">
      <span className="block font-display text-xl font-black italic text-gradient">SKILLS</span>
      <span className="block font-serif text-xl font-bold italic text-gradient">Brand</span>
    </a>
  );
}
