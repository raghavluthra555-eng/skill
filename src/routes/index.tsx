import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Rocket,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroRing } from "@/components/HeroRing";
import aboutOffice from "@/assets/about-office.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skills Brand — Master Digital Advertising with Expert-Led Courses" },
      {
        name: "description",
        content:
          "Skills Brand recommends the best courses in Google Ads, Facebook Ads, and Instagram Ads. Build skills, create brands, grow together.",
      },
      { property: "og:title", content: "Skills Brand — Master Digital Advertising" },
      {
        property: "og:description",
        content:
          "Discover expert-curated courses in Google Ads, Facebook Ads, and Instagram Ads to accelerate your digital marketing career.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "#courses" },
  { label: "Blog", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

/* ── Google Ads SVG Icon ── */
function GoogleAdsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={1.5} stroke="currentColor">
      <path d="M12 2L2 19.5h6l4-7.5L8 19.5h8l6-17.5H12z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5" cy="19" r="2.5" fill="currentColor" opacity={0.3} />
    </svg>
  );
}

/* ── Facebook Ads SVG Icon ── */
function FacebookAdsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={1.5} stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M15.5 3v4.5a1.5 1.5 0 01-1.5 1.5h-2a1.5 1.5 0 00-1.5 1.5V21" strokeLinecap="round" />
      <path d="M8.5 13h7" strokeLinecap="round" />
    </svg>
  );
}

/* ── Instagram Ads SVG Icon ── */
function InstaAdsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={1.5} stroke="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

const courses = [
  {
    Icon: GoogleAdsIcon,
    title: "Google Ads Mastery",
    copy: "Learn search, display, and YouTube ad campaigns that drive real conversions. From keyword research to campaign optimization — master the world's largest ad platform.",
    features: ["Search & Display Ads", "YouTube Advertising", "Conversion Tracking", "Smart Bidding Strategies"],
    tone: "text-neon-cyan",
    iconBg: "bg-neon-cyan/10",
    border: "hover:border-neon-cyan/60",
    glow: "hover:shadow-[0_0_40px_-10px_var(--neon-cyan)]",
    tag: "Most Popular",
  },
  {
    Icon: FacebookAdsIcon,
    title: "Facebook Ads Pro",
    copy: "Master Meta's powerful advertising ecosystem. Build high-converting funnels, leverage audience targeting, and scale campaigns profitably across Facebook.",
    features: ["Audience Targeting", "Funnel Building", "Retargeting Pixels", "A/B Testing & Scaling"],
    tone: "text-neon-pink",
    iconBg: "bg-neon-pink/10",
    border: "hover:border-neon-pink/60",
    glow: "hover:shadow-[0_0_40px_-10px_var(--neon-pink)]",
    tag: "Best Value",
  },
  {
    Icon: InstaAdsIcon,
    title: "Instagram Ads Blueprint",
    copy: "Create scroll-stopping Instagram campaigns that convert followers into customers. Master Reels ads, Story ads, and Shopping campaigns for explosive growth.",
    features: ["Reels & Story Ads", "Shopping Campaigns", "Influencer Strategy", "Creative Best Practices"],
    tone: "text-neon-amber",
    iconBg: "bg-neon-amber/10",
    border: "hover:border-neon-amber/60",
    glow: "hover:shadow-[0_0_40px_-10px_var(--neon-amber)]",
    tag: "Trending",
  },
];

const stats = [
  { icon: Users, value: "12,000+", label: "Students Enrolled", color: "text-neon-pink" },
  { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-neon-cyan" },
  { icon: Zap, value: "50+", label: "Expert Modules", color: "text-neon-amber" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-neon-violet" },
];

const posts = [
  { img: blog1, title: "Google Ads vs Facebook Ads: Which One Should You Learn First?", date: "Aug 15, 2024" },
  { img: blog2, title: "5 Instagram Ad Strategies That Tripled Our Client's Revenue", date: "Aug 10, 2024" },
  { img: blog3, title: "The Complete Guide to Digital Ad Funnels in 2024", date: "Aug 5, 2024" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink">
      {children}
    </p>
  );
}

/* ── Welcome Intro Animation ── */
function WelcomeAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background animate-welcome-fade overflow-hidden">
      {/* Radial gradient background pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--neon-violet)_15%,transparent),transparent_70%)]" />

      {/* Scanning horizontal bars — fewer on mobile for performance */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[2px] opacity-[0.08]">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="h-[1px] w-full origin-center animate-welcome-bars"
            style={{
              background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
              animationDelay: `${0.5 + i * 0.02}s`,
            }}
          />
        ))}
      </div>

      {/* Center ring — scales down on mobile */}
      <div className="absolute h-36 w-36 animate-welcome-ring rounded-full sm:h-48 sm:w-48 md:h-64 md:w-64"
        style={{
          border: "2px solid transparent",
          background: "conic-gradient(from 0deg, var(--neon-pink), var(--neon-cyan), var(--neon-violet), var(--neon-pink)) border-box",
          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Second ring — scales down on mobile */}
      <div className="absolute h-44 w-44 animate-welcome-ring rounded-full sm:h-56 sm:w-56 md:h-72 md:w-72"
        style={{
          animationDelay: "0.15s",
          border: "1px solid transparent",
          background: "conic-gradient(from 120deg, var(--neon-cyan), var(--neon-pink), var(--neon-amber), var(--neon-cyan)) border-box",
          mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          opacity: 0.5,
        }}
      />

      {/* Brand text — responsive sizing */}
      <div className="relative flex flex-col items-center animate-welcome-scale">
        <span className="font-display text-3xl font-black italic tracking-tight text-gradient sm:text-4xl md:text-6xl">
          SKILLS
        </span>
        <span className="font-serif text-3xl font-bold italic text-gradient sm:text-4xl md:text-6xl">
          BRAND
        </span>
      </div>

      {/* Tagline — responsive positioning */}
      <p className="absolute bottom-[25%] animate-welcome-text px-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-0 sm:bottom-[30%] sm:text-xs sm:tracking-[0.3em] md:text-sm">
        Build Skills · Create Brands
      </p>

      {/* Corner decorations — smaller on mobile */}
      <div className="absolute left-3 top-3 h-6 w-6 border-l border-t border-neon-cyan/30 animate-welcome-text opacity-0 sm:left-6 sm:top-6 sm:h-8 sm:w-8" />
      <div className="absolute right-3 top-3 h-6 w-6 border-r border-t border-neon-pink/30 animate-welcome-text opacity-0 sm:right-6 sm:top-6 sm:h-8 sm:w-8" />
      <div className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-neon-pink/30 animate-welcome-text opacity-0 sm:bottom-6 sm:left-6 sm:h-8 sm:w-8" />
      <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-neon-cyan/30 animate-welcome-text opacity-0 sm:bottom-6 sm:right-6 sm:h-8 sm:w-8" />
    </div>
  );
}

function Index() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div id="home" className="relative overflow-x-hidden bg-background">
      {/* WELCOME ANIMATION */}
      {showWelcome && <WelcomeAnimation onComplete={() => setShowWelcome(false)} />}

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <BrandLogo />
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#courses"
            className="btn-cta rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO — premium with staggered reveals */}
      <section className="relative isolate overflow-hidden">
        {/* Background effects */}
        <div className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-60" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-neon-violet/25 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-neon-pink/20 blur-[140px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-10 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:pb-32 lg:pt-24">
          <div className="text-center lg:text-left">
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neon-pink animate-hero-text-reveal sm:text-xs sm:tracking-[0.3em]"
              style={{ animationDelay: "0.1s" }}
            >
              Welcome to Skills Brand
            </p>
            <h1 className="font-display text-3xl font-black italic uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              <span
                className="inline-block text-gradient animate-hero-text-reveal"
                style={{ animationDelay: "0.2s" }}
              >
                Master digital
              </span>
              <br />
              <span
                className="inline-block text-gradient animate-hero-text-reveal"
                style={{ animationDelay: "0.35s" }}
              >
                advertising.
              </span>
            </h1>
            <p
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg animate-hero-text-reveal lg:mx-0"
              style={{ animationDelay: "0.5s" }}
            >
              We help individuals and businesses grow with powerful skills and unforgettable brands.
              Discover expert-curated courses in Google Ads, Facebook Ads and Instagram Ads.
            </p>
            <div
              className="mt-6 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 animate-hero-text-reveal lg:justify-start"
              style={{ animationDelay: "0.65s" }}
            >
              <a
                href="#courses"
                className="btn-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold sm:w-auto sm:px-7 sm:py-3.5"
              >
                Explore Courses <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/about"
                className="btn-ghost-neon inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto sm:px-7 sm:py-3.5"
              >
                Learn More
              </a>
            </div>
            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:mt-10 sm:gap-x-8 sm:gap-y-3 sm:text-sm animate-hero-text-reveal lg:justify-start"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" /> Expert-led courses
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" /> Lifetime access
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" /> Proven results
              </span>
            </div>
          </div>
          {/* Orb — smaller on mobile */}
          <div className="mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[480px]">
            <HeroRing />
          </div>
        </div>
      </section>

      {/* TRUSTED BY MARQUEE */}
      <section className="border-y border-border/60 bg-surface/60 py-4 sm:py-6">
        <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-neon-cyan sm:mb-4 sm:text-[11px] sm:tracking-[0.35em]">
          Trusted by growing brands
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 pr-8 sm:gap-16 sm:pr-16">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 gap-8 pr-8 sm:gap-16 sm:pr-16">
                {["GOOGLE", "META", "INSTAGRAM", "YOUTUBE", "TIKTOK", "LINKEDIN"].map(
                  (b, i) => (
                    <span
                      key={`${b}-${i}`}
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70 sm:gap-2 sm:text-lg sm:tracking-[0.2em]"
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50 sm:h-2 sm:w-2" />
                      {b}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionLabel>Our Courses</SectionLabel>
        <h2 className="text-2xl font-black italic uppercase tracking-tight sm:text-3xl md:text-4xl">
          Choose Your Path to Mastery
        </h2>
        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm md:text-base">
          Hand-picked, expert-recommended courses designed to take you from beginner to advanced in digital advertising.
        </p>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article
              key={c.title}
              className={`neon-frame group relative rounded-2xl p-8 ${c.border} ${c.glow} transition-all duration-500`}
            >
              {/* Tag */}
              <span className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${c.iconBg} ${c.tone} border border-current/20`}>
                {c.tag}
              </span>

              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${c.iconBg}`}>
                <c.Icon className={`h-8 w-8 ${c.tone}`} />
              </div>
              <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>

              {/* Feature list */}
              <ul className="mt-6 space-y-2">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className={`h-3.5 w-3.5 shrink-0 ${c.tone}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-current/20 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-white/5 group-hover:border-current/40"
              >
                <span className={c.tone}>Explore Course</span>
                <ArrowRight className={`h-4 w-4 ${c.tone} transition-transform duration-300 group-hover:translate-x-1`} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:gap-10 sm:px-6 sm:pb-24 lg:grid-cols-3">
        <div className="lg:pr-6">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="text-2xl font-black italic uppercase leading-tight tracking-tight sm:text-3xl md:text-4xl">
            We Are Passionate About Your Success
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Skills Brand is dedicated to helping you discover the best digital advertising courses.
            We curate, review, and recommend only the courses that deliver real, measurable results
            for your career and business growth.
          </p>
          <a
            href="/about"
            className="btn-ghost-neon mt-6 inline-flex rounded-full px-5 py-2.5 text-xs font-semibold sm:mt-8 sm:px-6 sm:py-3 sm:text-sm"
          >
            Read More About Us
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border/60">
          <img
            src={aboutOffice}
            alt="Skills Brand creative workspace"
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="neon-frame space-y-6 rounded-2xl p-7">
          {[
            {
              icon: Rocket,
              t: "Our Mission",
              d: "Empowering people and brands through skills and creativity.",
              color: "text-neon-pink",
              border: "border-neon-pink/40",
            },
            {
              icon: Eye,
              t: "Our Vision",
              d: "To be a global brand building partner for ambitious visionaries.",
              color: "text-neon-cyan",
              border: "border-neon-cyan/40",
            },
            {
              icon: Heart,
              t: "Our Values",
              d: "Creativity, Integrity, Innovation and Excellence.",
              color: "text-neon-amber",
              border: "border-neon-amber/40",
            },
          ].map((m) => (
            <div key={m.t} className="flex gap-4">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${m.border} ${m.color}`}
              >
                <m.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className={`text-sm font-bold ${m.color}`}>{m.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-surface/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 sm:gap-4">
              <s.icon className={`h-7 w-7 shrink-0 sm:h-9 sm:w-9 ${s.color}`} strokeWidth={1.5} />
              <div>
                <p className="text-xl font-black italic text-gradient sm:text-2xl md:text-3xl">{s.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="insights" className="border-t border-border/60 bg-surface/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionLabel>From Our Blog</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
            <h2 className="text-2xl font-black italic uppercase tracking-tight sm:text-3xl md:text-4xl">
              Latest Insights
            </h2>
            <a
              href="#insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neon-pink"
            >
              View All Posts <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="neon-frame group overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-base font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER — clean & minimal */}
      <footer id="contact" className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Building skills. Creating brands. Growing together.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-neon-pink hover:text-neon-pink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {["Home", "About Us", "Courses", "Blog", "Contact"].map((li) => (
                <li key={li}>
                  <a
                    href="#home"
                    className="text-sm text-muted-foreground transition-colors hover:text-neon-pink"
                  >
                    {li}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-bold">Courses</h3>
            <ul className="mt-4 space-y-2">
              {["Google Ads Mastery", "Facebook Ads Pro", "Instagram Ads Blueprint"].map(
                (li) => (
                  <li key={li}>
                    <a
                      href="#courses"
                      className="text-sm text-muted-foreground transition-colors hover:text-neon-pink"
                    >
                      {li}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get the latest tips and course recommendations.
            </p>
            <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-pink"
              />
              <button type="submit" className="btn-cta w-full rounded-lg px-6 py-2.5 text-sm font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/60 py-5">
          <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 text-xs text-muted-foreground">
            <span>© 2024 Skills Brand. All Rights Reserved.</span>
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="h-3.5 w-3.5 text-neon-pink" /> by Skills Brand
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
