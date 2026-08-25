import { useEffect, useRef } from "react";

export function HeroRing() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[520px] [perspective:1100px]"
      style={{ ["--rx" as string]: "0deg", ["--ry" as string]: "0deg" }}
      aria-label="Skills Brand neon ring"
      role="img"
    >
      {/* ambient glow behind the ring */}
      <div className="pointer-events-none absolute inset-8 animate-pulse-glow rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--neon-violet)_55%,transparent),transparent_68%)] blur-3xl" />

      <div
        className="relative h-full w-full animate-float transition-transform duration-300 ease-out"
        style={{ transform: "rotateX(var(--rx)) rotateY(var(--ry))" }}
      >
        {/* rotating outer ring with conic gradient */}
        <div
          className="absolute inset-[4%] animate-spin-slow rounded-full"
          style={{
            padding: "2px",
            background:
              "conic-gradient(from 0deg, transparent, var(--neon-cyan) 30%, transparent 40%, var(--neon-pink) 70%, transparent 80%)",
            mask: "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
            WebkitMask: "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
            opacity: 0.5,
          }}
        />

        {/* main neon ring with breathing glow */}
        <div
          className="absolute inset-[6%] animate-ring-breathe rounded-full"
          style={{
            padding: "10px",
            background:
              "conic-gradient(from 210deg, var(--neon-pink), var(--neon-violet) 35%, var(--neon-cyan) 62%, var(--neon-cyan) 78%, var(--neon-pink))",
            mask: "radial-gradient(circle, transparent 68%, black 69%)",
            WebkitMask: "radial-gradient(circle, transparent 68%, black 69%)",
            filter: "blur(0.4px)",
            boxShadow:
              "0 0 60px -6px color-mix(in oklab, var(--neon-pink) 75%, transparent), 0 0 120px -10px color-mix(in oklab, var(--neon-cyan) 60%, transparent)",
          }}
        />

        {/* outer soft halo of the ring */}
        <div
          className="pointer-events-none absolute inset-[6%] rounded-full opacity-70 blur-2xl"
          style={{
            padding: "16px",
            background:
              "conic-gradient(from 210deg, var(--neon-pink), var(--neon-violet) 35%, var(--neon-cyan) 62%, var(--neon-cyan) 78%, var(--neon-pink))",
            mask: "radial-gradient(circle, transparent 64%, black 66%)",
            WebkitMask: "radial-gradient(circle, transparent 64%, black 66%)",
          }}
        />

        {/* orbiting particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute animate-particle-orbit"
              style={{
                animationDelay: `${i * -1.33}s`,
                animationDuration: `${8 + i * 0.5}s`,
              }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-pink)",
                  boxShadow: `0 0 8px ${i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-pink)"}`,
                }}
              />
            </div>
          ))}
        </div>

        {/* scan line effect sweeping across the ring */}
        <div
          className="pointer-events-none absolute inset-[10%] animate-scan-line overflow-hidden rounded-full"
          style={{ opacity: 0.15 }}
        >
          <div
            className="h-[2px] w-full"
            style={{
              background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
            }}
          />
        </div>

        {/* inner subtle grid pattern for techy feel */}
        <div
          className="pointer-events-none absolute inset-[20%] rounded-full opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            mask: "radial-gradient(circle, black 40%, transparent 70%)",
            WebkitMask: "radial-gradient(circle, black 40%, transparent 70%)",
          }}
        />

        {/* brand wordmark inside the ring */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-display text-[clamp(2rem,7vw,3.6rem)] font-black italic leading-none tracking-tight text-gradient">
            SKILLS
          </span>
          <span className="font-serif text-[clamp(2rem,7vw,3.6rem)] font-bold italic leading-none text-gradient">
            BRAND
          </span>
        </div>

        {/* floor reflection */}
        <div
          className="pointer-events-none absolute inset-x-16 top-[92%] h-32 rounded-full bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--neon-pink)_45%,transparent),transparent_70%)] opacity-60 blur-xl"
          aria-hidden
        />
      </div>
    </div>
  );
}
