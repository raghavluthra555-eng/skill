import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Quote,
  Rocket,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import aboutOffice from "@/assets/about-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Skills Brand" },
      {
        name: "description",
        content:
          "Learn about Skills Brand, our founder Aman, and our mission to make world-class digital advertising education accessible to everyone.",
      },
      { property: "og:title", content: "About Us — Skills Brand" },
      {
        property: "og:description",
        content:
          "Discover the story behind Skills Brand and our passion for empowering digital marketers worldwide.",
      },
    ],
  }),
  component: AboutPage,
});

const nav = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Courses", href: "/#courses", isRoute: false },
  { label: "Blog", href: "/#insights", isRoute: false },
  { label: "Contact", href: "/#contact", isRoute: false },
];

const stats = [
  { icon: Users, value: "12,000+", label: "Students Enrolled", color: "text-neon-pink" },
  { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-neon-cyan" },
  { icon: Zap, value: "50+", label: "Expert Modules", color: "text-neon-amber" },
  { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-neon-violet" },
];

const values = [
  {
    icon: Rocket,
    title: "Our Mission",
    description: "Empowering people and brands through skills and creativity.",
    color: "text-neon-pink",
    iconBg: "bg-neon-pink/10",
    border: "border-neon-pink/40",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be a global brand building partner for ambitious visionaries.",
    color: "text-neon-cyan",
    iconBg: "bg-neon-cyan/10",
    border: "border-neon-cyan/40",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Creativity, Integrity, Innovation and Excellence.",
    color: "text-neon-amber",
    iconBg: "bg-neon-amber/10",
    border: "border-neon-amber/40",
  },
];

const quickLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Courses", href: "/#courses", isRoute: false },
  { label: "Blog", href: "/#insights", isRoute: false },
  { label: "Contact", href: "/#contact", isRoute: false },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink">
      {children}
    </p>
  );
}

function AboutPage() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <BrandLogo />
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) =>
              n.isRoute ? (
                <Link
                  key={n.label}
                  to={n.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>
          <a
            href="/#courses"
            className="btn-cta rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-neon-violet/25 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-neon-pink/20 blur-[140px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-24">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink animate-hero-text-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            About Skills Brand
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-3xl font-black italic uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            <span
              className="inline-block text-gradient animate-hero-text-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              WE HELP YOU MASTER
            </span>
            <br />
            <span
              className="inline-block text-gradient animate-hero-text-reveal"
              style={{ animationDelay: "0.35s" }}
            >
              DIGITAL ADVERTISING
            </span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-hero-text-reveal"
            style={{ animationDelay: "0.5s" }}
          >
            Skills Brand is your trusted partner in mastering digital advertising.
            We curate expert-led courses in Google Ads, Facebook Ads, and Instagram Ads
            to help you build the skills that drive real business results.
          </p>
        </div>
      </section>

      {/* ABOUT IMAGE SECTION */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border/60">
          <img
            src={aboutOffice}
            alt="Skills Brand creative workspace"
            loading="lazy"
            width={1200}
            height={600}
            className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="text-center">
          <SectionLabel>Meet Our Founder</SectionLabel>
          <h2 className="text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl">
            The Mind Behind Skills Brand
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Founder Card */}
          <div className="neon-frame rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Avatar */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--neon-violet)] to-[var(--neon-cyan)]">
                <span className="font-display text-3xl font-black italic text-white">A</span>
              </div>

              <div>
                <h3 className="text-2xl font-black italic text-gradient">Aman</h3>
                <p className="mt-1 text-sm font-semibold text-neon-pink">Founder & CEO</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-neon-cyan" />
                  Jaipur, India
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Aman is a digital marketing expert from Jaipur with a passion for making quality education
              accessible. He founded Skills Brand to help aspiring marketers discover the best courses in
              Google Ads, Facebook Ads, and Instagram Ads. With years of industry experience, he curates
              only the courses that deliver real results.
            </p>
          </div>

          {/* Quote Card */}
          <div className="neon-frame relative rounded-2xl p-8 sm:p-10">
            <Quote className="absolute right-6 top-6 h-10 w-10 text-neon-violet/20 sm:h-14 sm:w-14" />
            <div className="relative">
              <Quote className="mb-4 h-8 w-8 text-neon-violet" />
              <blockquote className="font-serif text-lg italic leading-relaxed text-foreground sm:text-xl lg:text-2xl">
                "I believe everyone deserves access to world-class advertising education.
                Skills Brand is my way of bridging that gap."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-neon-pink/40 via-neon-violet/40 to-transparent" />
                <span className="text-sm font-semibold text-neon-pink">— Aman, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="text-center">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Mission, Vision & Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything we do is guided by a clear mission, an ambitious vision,
            and core values that keep us grounded.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="neon-frame group rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_-10px_var(--neon-pink)]"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-full border ${v.border} ${v.iconBg}`}
              >
                <v.icon className={`h-7 w-7 ${v.color}`} />
              </div>
              <h3 className={`mt-6 text-xl font-bold ${v.color}`}>{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {v.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-surface/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <s.icon className={`h-9 w-9 ${s.color}`} strokeWidth={1.5} />
              <div>
                <p className="text-3xl font-black italic text-gradient">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-neon-pink/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-neon-violet/20 blur-[120px]" />

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionLabel>Take The Next Step</SectionLabel>
          <h2 className="text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore our expert-curated courses and begin your journey to mastering
            digital advertising today.
          </p>
          <a
            href="/#courses"
            className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold"
          >
            Explore Courses <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 grid-cols-1 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
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
                  href="/#contact"
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
              {quickLinks.map((li) => (
                <li key={li.label}>
                  {li.isRoute ? (
                    <Link
                      to={li.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-neon-pink"
                    >
                      {li.label}
                    </Link>
                  ) : (
                    <a
                      href={li.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-neon-pink"
                    >
                      {li.label}
                    </a>
                  )}
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
                      href="/#courses"
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
              <label htmlFor="about-footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="about-footer-email"
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
          <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:px-6">
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
