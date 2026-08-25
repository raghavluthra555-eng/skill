import { n as BrandLogo, t as about_office_default } from "./about-office-CMKAoMci.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Eye, Facebook, Heart, Instagram, Linkedin, MapPin, Quote, Rocket, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
var nav = [
	{
		label: "Home",
		href: "/",
		isRoute: true
	},
	{
		label: "About Us",
		href: "/about",
		isRoute: true
	},
	{
		label: "Courses",
		href: "/#courses",
		isRoute: false
	},
	{
		label: "Blog",
		href: "/#insights",
		isRoute: false
	},
	{
		label: "Contact",
		href: "/#contact",
		isRoute: false
	}
];
var stats = [
	{
		icon: Users,
		value: "12,000+",
		label: "Students Enrolled",
		color: "text-neon-pink"
	},
	{
		icon: Star,
		value: "4.9/5",
		label: "Average Rating",
		color: "text-neon-cyan"
	},
	{
		icon: Zap,
		value: "50+",
		label: "Expert Modules",
		color: "text-neon-amber"
	},
	{
		icon: TrendingUp,
		value: "98%",
		label: "Success Rate",
		color: "text-neon-violet"
	}
];
var values = [
	{
		icon: Rocket,
		title: "Our Mission",
		description: "Empowering people and brands through skills and creativity.",
		color: "text-neon-pink",
		iconBg: "bg-neon-pink/10",
		border: "border-neon-pink/40"
	},
	{
		icon: Eye,
		title: "Our Vision",
		description: "To be a global brand building partner for ambitious visionaries.",
		color: "text-neon-cyan",
		iconBg: "bg-neon-cyan/10",
		border: "border-neon-cyan/40"
	},
	{
		icon: Heart,
		title: "Our Values",
		description: "Creativity, Integrity, Innovation and Excellence.",
		color: "text-neon-amber",
		iconBg: "bg-neon-amber/10",
		border: "border-neon-amber/40"
	}
];
var quickLinks = [
	{
		label: "Home",
		href: "/",
		isRoute: true
	},
	{
		label: "About Us",
		href: "/about",
		isRoute: true
	},
	{
		label: "Courses",
		href: "/#courses",
		isRoute: false
	},
	{
		label: "Blog",
		href: "/#insights",
		isRoute: false
	},
	{
		label: "Contact",
		href: "/#contact",
		isRoute: false
	}
];
function SectionLabel({ children }) {
	return /* @__PURE__ */ jsx("p", {
		className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink",
		children
	});
}
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(BrandLogo, {}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden items-center gap-8 lg:flex",
							children: nav.map((n) => n.isRoute ? /* @__PURE__ */ jsx(Link, {
								to: n.href,
								className: "relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100",
								children: n.label
							}, n.label) : /* @__PURE__ */ jsx("a", {
								href: n.href,
								className: "relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100",
								children: n.label
							}, n.label))
						}),
						/* @__PURE__ */ jsx("a", {
							href: "/#courses",
							className: "btn-cta rounded-full px-5 py-2.5 text-sm font-semibold",
							children: "Get Started"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-neon-violet/25 blur-[130px]" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-neon-pink/20 blur-[140px]" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-7xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-24",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink animate-hero-text-reveal",
								style: { animationDelay: "0.1s" },
								children: "About Skills Brand"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mx-auto max-w-4xl font-display text-3xl font-black italic uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "inline-block text-gradient animate-hero-text-reveal",
										style: { animationDelay: "0.2s" },
										children: "WE HELP YOU MASTER"
									}),
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "inline-block text-gradient animate-hero-text-reveal",
										style: { animationDelay: "0.35s" },
										children: "DIGITAL ADVERTISING"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-hero-text-reveal",
								style: { animationDelay: "0.5s" },
								children: "Skills Brand is your trusted partner in mastering digital advertising. We curate expert-led courses in Google Ads, Facebook Ads, and Instagram Ads to help you build the skills that drive real business results."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden rounded-2xl border border-border/60",
					children: [/* @__PURE__ */ jsx("img", {
						src: about_office_default,
						alt: "Skills Brand creative workspace",
						loading: "lazy",
						width: 1200,
						height: 600,
						className: "h-64 w-full object-cover sm:h-80 lg:h-[420px]"
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" })]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx(SectionLabel, { children: "Meet Our Founder" }), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl",
						children: "The Mind Behind Skills Brand"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "neon-frame rounded-2xl p-8 sm:p-10",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center gap-6 sm:flex-row sm:items-start",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--neon-violet)] to-[var(--neon-cyan)]",
								children: /* @__PURE__ */ jsx("span", {
									className: "font-display text-3xl font-black italic text-white",
									children: "A"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-black italic text-gradient",
									children: "Aman"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm font-semibold text-neon-pink",
									children: "Founder & CEO"
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-neon-cyan" }), "Jaipur, India"]
								})
							] })]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "Aman is a digital marketing expert from Jaipur with a passion for making quality education accessible. He founded Skills Brand to help aspiring marketers discover the best courses in Google Ads, Facebook Ads, and Instagram Ads. With years of industry experience, he curates only the courses that deliver real results."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "neon-frame relative rounded-2xl p-8 sm:p-10",
						children: [/* @__PURE__ */ jsx(Quote, { className: "absolute right-6 top-6 h-10 w-10 text-neon-violet/20 sm:h-14 sm:w-14" }), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx(Quote, { className: "mb-4 h-8 w-8 text-neon-violet" }),
								/* @__PURE__ */ jsx("blockquote", {
									className: "font-serif text-lg italic leading-relaxed text-foreground sm:text-xl lg:text-2xl",
									children: "\"I believe everyone deserves access to world-class advertising education. Skills Brand is my way of bridging that gap.\""
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-neon-pink/40 via-neon-violet/40 to-transparent" }), /* @__PURE__ */ jsx("span", {
										className: "text-sm font-semibold text-neon-pink",
										children: "— Aman, Founder"
									})]
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, { children: "What We Stand For" }),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl",
							children: "Mission, Vision & Values"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "Everything we do is guided by a clear mission, an ambitious vision, and core values that keep us grounded."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
					children: values.map((v) => /* @__PURE__ */ jsxs("article", {
						className: "neon-frame group rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_-10px_var(--neon-pink)]",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: `inline-flex h-14 w-14 items-center justify-center rounded-full border ${v.border} ${v.iconBg}`,
								children: /* @__PURE__ */ jsx(v.icon, { className: `h-7 w-7 ${v.color}` })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: `mt-6 text-xl font-bold ${v.color}`,
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: v.description
							})
						]
					}, v.title))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-border/60 bg-surface/60",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx(s.icon, {
							className: `h-9 w-9 ${s.color}`,
							strokeWidth: 1.5
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-3xl font-black italic text-gradient",
							children: s.value
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground",
							children: s.label
						})] })]
					}, s.label))
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden py-16 sm:py-24",
				children: [
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-neon-pink/20 blur-[120px]" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-neon-violet/20 blur-[120px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto max-w-3xl px-4 text-center sm:px-6",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, { children: "Take The Next Step" }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-black italic uppercase tracking-tight sm:text-4xl lg:text-5xl",
								children: "Ready to Start Learning?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: "Explore our expert-curated courses and begin your journey to mastering digital advertising today."
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "/#courses",
								className: "btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold",
								children: ["Explore Courses ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "border-t border-border/60 bg-surface/60",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 grid-cols-1 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(BrandLogo, {}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 max-w-xs text-sm text-muted-foreground",
								children: "Building skills. Creating brands. Growing together."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 flex gap-3",
								children: [
									Facebook,
									Instagram,
									Twitter,
									Linkedin
								].map((Icon, i) => /* @__PURE__ */ jsx("a", {
									href: "/#contact",
									"aria-label": "Social link",
									className: "grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-neon-pink hover:text-neon-pink",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
								}, i))
							})
						] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold",
							children: "Quick Links"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-2",
							children: quickLinks.map((li) => /* @__PURE__ */ jsx("li", { children: li.isRoute ? /* @__PURE__ */ jsx(Link, {
								to: li.href,
								className: "text-sm text-muted-foreground transition-colors hover:text-neon-pink",
								children: li.label
							}) : /* @__PURE__ */ jsx("a", {
								href: li.href,
								className: "text-sm text-muted-foreground transition-colors hover:text-neon-pink",
								children: li.label
							}) }, li.label))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold",
							children: "Courses"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-2",
							children: [
								"Google Ads Mastery",
								"Facebook Ads Pro",
								"Instagram Ads Blueprint"
							].map((li) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "/#courses",
								className: "text-sm text-muted-foreground transition-colors hover:text-neon-pink",
								children: li
							}) }, li))
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-bold",
								children: "Stay Updated"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Get the latest tips and course recommendations."
							}),
							/* @__PURE__ */ jsxs("form", {
								className: "mt-4 space-y-3",
								onSubmit: (e) => e.preventDefault(),
								children: [
									/* @__PURE__ */ jsx("label", {
										htmlFor: "about-footer-email",
										className: "sr-only",
										children: "Email address"
									}),
									/* @__PURE__ */ jsx("input", {
										id: "about-footer-email",
										type: "email",
										required: true,
										placeholder: "Enter your email",
										className: "w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-pink"
									}),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										className: "btn-cta w-full rounded-lg px-6 py-2.5 text-sm font-bold",
										children: "Subscribe"
									})
								]
							})
						] })
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-border/60 py-5",
					children: /* @__PURE__ */ jsxs("p", {
						className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:px-6",
						children: [/* @__PURE__ */ jsx("span", { children: "© 2024 Skills Brand. All Rights Reserved." }), /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-1",
							children: [
								"Made with ",
								/* @__PURE__ */ jsx(Heart, { className: "h-3.5 w-3.5 text-neon-pink" }),
								" by Skills Brand"
							]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
