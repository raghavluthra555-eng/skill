import { n as BrandLogo, t as about_office_default } from "./about-office-CMKAoMci.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BadgeCheck, Check, Eye, Facebook, Heart, Instagram, Linkedin, Rocket, Star, TrendingUp, Twitter, Users, Zap } from "lucide-react";
//#region src/components/HeroRing.tsx
function HeroRing() {
	const wrapRef = useRef(null);
	useEffect(() => {
		const el = wrapRef.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - .5;
			const y = (e.clientY - r.top) / r.height - .5;
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
	return /* @__PURE__ */ jsxs("div", {
		ref: wrapRef,
		className: "relative mx-auto aspect-square w-full max-w-[520px] [perspective:1100px]",
		style: {
			["--rx"]: "0deg",
			["--ry"]: "0deg"
		},
		"aria-label": "Skills Brand neon ring",
		role: "img",
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-8 animate-pulse-glow rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--neon-violet)_55%,transparent),transparent_68%)] blur-3xl" }), /* @__PURE__ */ jsxs("div", {
			className: "relative h-full w-full animate-float transition-transform duration-300 ease-out",
			style: { transform: "rotateX(var(--rx)) rotateY(var(--ry))" },
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-[4%] animate-spin-slow rounded-full",
					style: {
						padding: "2px",
						background: "conic-gradient(from 0deg, transparent, var(--neon-cyan) 30%, transparent 40%, var(--neon-pink) 70%, transparent 80%)",
						mask: "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
						WebkitMask: "radial-gradient(circle, transparent 70%, black 71%, black 73%, transparent 74%)",
						opacity: .5
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-[6%] animate-ring-breathe rounded-full",
					style: {
						padding: "10px",
						background: "conic-gradient(from 210deg, var(--neon-pink), var(--neon-violet) 35%, var(--neon-cyan) 62%, var(--neon-cyan) 78%, var(--neon-pink))",
						mask: "radial-gradient(circle, transparent 68%, black 69%)",
						WebkitMask: "radial-gradient(circle, transparent 68%, black 69%)",
						filter: "blur(0.4px)",
						boxShadow: "0 0 60px -6px color-mix(in oklab, var(--neon-pink) 75%, transparent), 0 0 120px -10px color-mix(in oklab, var(--neon-cyan) 60%, transparent)"
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-[6%] rounded-full opacity-70 blur-2xl",
					style: {
						padding: "16px",
						background: "conic-gradient(from 210deg, var(--neon-pink), var(--neon-violet) 35%, var(--neon-cyan) 62%, var(--neon-cyan) 78%, var(--neon-pink))",
						mask: "radial-gradient(circle, transparent 64%, black 66%)",
						WebkitMask: "radial-gradient(circle, transparent 64%, black 66%)"
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: [
						0,
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ jsx("div", {
						className: "absolute animate-particle-orbit",
						style: {
							animationDelay: `${i * -1.33}s`,
							animationDuration: `${8 + i * .5}s`
						},
						children: /* @__PURE__ */ jsx("div", {
							className: "h-1.5 w-1.5 rounded-full",
							style: {
								background: i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-pink)",
								boxShadow: `0 0 8px ${i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-pink)"}`
							}
						})
					}, i))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-[10%] animate-scan-line overflow-hidden rounded-full",
					style: { opacity: .15 },
					children: /* @__PURE__ */ jsx("div", {
						className: "h-[2px] w-full",
						style: { background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)" }
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-[20%] rounded-full opacity-[0.06]",
					style: {
						backgroundImage: "linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)",
						backgroundSize: "20px 20px",
						mask: "radial-gradient(circle, black 40%, transparent 70%)",
						WebkitMask: "radial-gradient(circle, black 40%, transparent 70%)"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-[clamp(2rem,7vw,3.6rem)] font-black italic leading-none tracking-tight text-gradient",
						children: "SKILLS"
					}), /* @__PURE__ */ jsx("span", {
						className: "font-serif text-[clamp(2rem,7vw,3.6rem)] font-bold italic leading-none text-gradient",
						children: "BRAND"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-x-16 top-[92%] h-32 rounded-full bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--neon-pink)_45%,transparent),transparent_70%)] opacity-60 blur-xl",
					"aria-hidden": true
				})
			]
		})]
	});
}
//#endregion
//#region src/assets/blog-1.jpg
var blog_1_default = "/assets/blog-1-CRDkq9f0.jpg";
//#endregion
//#region src/assets/blog-2.jpg
var blog_2_default = "/assets/blog-2-BjUkmn-Y.jpg";
//#endregion
//#region src/assets/blog-3.jpg
var blog_3_default = "/assets/blog-3-B0anLwpb.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var nav = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About Us",
		href: "/about"
	},
	{
		label: "Courses",
		href: "#courses"
	},
	{
		label: "Blog",
		href: "#insights"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function GoogleAdsIcon({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className,
		strokeWidth: 1.5,
		stroke: "currentColor",
		children: [/* @__PURE__ */ jsx("path", {
			d: "M12 2L2 19.5h6l4-7.5L8 19.5h8l6-17.5H12z",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ jsx("circle", {
			cx: "5",
			cy: "19",
			r: "2.5",
			fill: "currentColor",
			opacity: .3
		})]
	});
}
function FacebookAdsIcon({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className,
		strokeWidth: 1.5,
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "3"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M15.5 3v4.5a1.5 1.5 0 01-1.5 1.5h-2a1.5 1.5 0 00-1.5 1.5V21",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M8.5 13h7",
				strokeLinecap: "round"
			})
		]
	});
}
function InstaAdsIcon({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className,
		strokeWidth: 1.5,
		stroke: "currentColor",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "2",
				y: "2",
				width: "20",
				height: "20",
				rx: "5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "5"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "17.5",
				cy: "6.5",
				r: "1.5",
				fill: "currentColor"
			})
		]
	});
}
var courses = [
	{
		Icon: GoogleAdsIcon,
		title: "Google Ads Mastery",
		copy: "Learn search, display, and YouTube ad campaigns that drive real conversions. From keyword research to campaign optimization — master the world's largest ad platform.",
		features: [
			"Search & Display Ads",
			"YouTube Advertising",
			"Conversion Tracking",
			"Smart Bidding Strategies"
		],
		tone: "text-neon-cyan",
		iconBg: "bg-neon-cyan/10",
		border: "hover:border-neon-cyan/60",
		glow: "hover:shadow-[0_0_40px_-10px_var(--neon-cyan)]",
		tag: "Most Popular"
	},
	{
		Icon: FacebookAdsIcon,
		title: "Facebook Ads Pro",
		copy: "Master Meta's powerful advertising ecosystem. Build high-converting funnels, leverage audience targeting, and scale campaigns profitably across Facebook.",
		features: [
			"Audience Targeting",
			"Funnel Building",
			"Retargeting Pixels",
			"A/B Testing & Scaling"
		],
		tone: "text-neon-pink",
		iconBg: "bg-neon-pink/10",
		border: "hover:border-neon-pink/60",
		glow: "hover:shadow-[0_0_40px_-10px_var(--neon-pink)]",
		tag: "Best Value"
	},
	{
		Icon: InstaAdsIcon,
		title: "Instagram Ads Blueprint",
		copy: "Create scroll-stopping Instagram campaigns that convert followers into customers. Master Reels ads, Story ads, and Shopping campaigns for explosive growth.",
		features: [
			"Reels & Story Ads",
			"Shopping Campaigns",
			"Influencer Strategy",
			"Creative Best Practices"
		],
		tone: "text-neon-amber",
		iconBg: "bg-neon-amber/10",
		border: "hover:border-neon-amber/60",
		glow: "hover:shadow-[0_0_40px_-10px_var(--neon-amber)]",
		tag: "Trending"
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
var posts = [
	{
		img: blog_1_default,
		title: "Google Ads vs Facebook Ads: Which One Should You Learn First?",
		date: "Aug 15, 2024"
	},
	{
		img: blog_2_default,
		title: "5 Instagram Ad Strategies That Tripled Our Client's Revenue",
		date: "Aug 10, 2024"
	},
	{
		img: blog_3_default,
		title: "The Complete Guide to Digital Ad Funnels in 2024",
		date: "Aug 5, 2024"
	}
];
function SectionLabel({ children }) {
	return /* @__PURE__ */ jsx("p", {
		className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink",
		children
	});
}
function WelcomeAnimation({ onComplete }) {
	useEffect(() => {
		const timer = setTimeout(onComplete, 2800);
		return () => clearTimeout(timer);
	}, [onComplete]);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-background animate-welcome-fade overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--neon-violet)_15%,transparent),transparent_70%)]" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center gap-[2px] opacity-[0.08]",
				children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsx("div", {
					className: "h-[1px] w-full origin-center animate-welcome-bars",
					style: {
						background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
						animationDelay: `${.5 + i * .02}s`
					}
				}, i))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute h-36 w-36 animate-welcome-ring rounded-full sm:h-48 sm:w-48 md:h-64 md:w-64",
				style: {
					border: "2px solid transparent",
					background: "conic-gradient(from 0deg, var(--neon-pink), var(--neon-cyan), var(--neon-violet), var(--neon-pink)) border-box",
					mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
					WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude"
				}
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute h-44 w-44 animate-welcome-ring rounded-full sm:h-56 sm:w-56 md:h-72 md:w-72",
				style: {
					animationDelay: "0.15s",
					border: "1px solid transparent",
					background: "conic-gradient(from 120deg, var(--neon-cyan), var(--neon-pink), var(--neon-amber), var(--neon-cyan)) border-box",
					mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
					WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
					opacity: .5
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex flex-col items-center animate-welcome-scale",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-3xl font-black italic tracking-tight text-gradient sm:text-4xl md:text-6xl",
					children: "SKILLS"
				}), /* @__PURE__ */ jsx("span", {
					className: "font-serif text-3xl font-bold italic text-gradient sm:text-4xl md:text-6xl",
					children: "BRAND"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "absolute bottom-[25%] animate-welcome-text px-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-0 sm:bottom-[30%] sm:text-xs sm:tracking-[0.3em] md:text-sm",
				children: "Build Skills · Create Brands"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute left-3 top-3 h-6 w-6 border-l border-t border-neon-cyan/30 animate-welcome-text opacity-0 sm:left-6 sm:top-6 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ jsx("div", { className: "absolute right-3 top-3 h-6 w-6 border-r border-t border-neon-pink/30 animate-welcome-text opacity-0 sm:right-6 sm:top-6 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 h-6 w-6 border-b border-l border-neon-pink/30 animate-welcome-text opacity-0 sm:bottom-6 sm:left-6 sm:h-8 sm:w-8" }),
			/* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 h-6 w-6 border-b border-r border-neon-cyan/30 animate-welcome-text opacity-0 sm:bottom-6 sm:right-6 sm:h-8 sm:w-8" })
		]
	});
}
function Index() {
	const [showWelcome, setShowWelcome] = useState(true);
	return /* @__PURE__ */ jsxs("div", {
		id: "home",
		className: "relative overflow-x-hidden bg-background",
		children: [
			showWelcome && /* @__PURE__ */ jsx(WelcomeAnimation, { onComplete: () => setShowWelcome(false) }),
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4",
					children: [
						/* @__PURE__ */ jsx(BrandLogo, {}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden items-center gap-8 lg:flex",
							children: nav.map((n) => /* @__PURE__ */ jsx("a", {
								href: n.href,
								className: "relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-neon-pink after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100",
								children: n.label
							}, n.label))
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#courses",
							className: "btn-cta rounded-full px-4 py-2 text-xs font-semibold sm:px-5 sm:py-2.5 sm:text-sm",
							children: "Get Started"
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-60" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-neon-violet/25 blur-[130px]" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-24 top-0 h-[460px] w-[460px] rounded-full bg-neon-pink/20 blur-[140px]" }),
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-[100px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "mx-auto grid max-w-7xl items-center gap-8 px-4 pb-16 pt-10 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:pb-32 lg:pt-24",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-center lg:text-left",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neon-pink animate-hero-text-reveal sm:text-xs sm:tracking-[0.3em]",
									style: { animationDelay: "0.1s" },
									children: "Welcome to Skills Brand"
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "font-display text-3xl font-black italic uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "inline-block text-gradient animate-hero-text-reveal",
											style: { animationDelay: "0.2s" },
											children: "Master digital"
										}),
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "inline-block text-gradient animate-hero-text-reveal",
											style: { animationDelay: "0.35s" },
											children: "advertising."
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg animate-hero-text-reveal lg:mx-0",
									style: { animationDelay: "0.5s" },
									children: "We help individuals and businesses grow with powerful skills and unforgettable brands. Discover expert-curated courses in Google Ads, Facebook Ads and Instagram Ads."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 animate-hero-text-reveal lg:justify-start",
									style: { animationDelay: "0.65s" },
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#courses",
										className: "btn-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold sm:w-auto sm:px-7 sm:py-3.5",
										children: ["Explore Courses ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ jsx("a", {
										href: "/about",
										className: "btn-ghost-neon inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto sm:px-7 sm:py-3.5",
										children: "Learn More"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:mt-10 sm:gap-x-8 sm:gap-y-3 sm:text-sm animate-hero-text-reveal lg:justify-start",
									style: { animationDelay: "0.8s" },
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 sm:gap-2",
											children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" }), " Expert-led courses"]
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 sm:gap-2",
											children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" }), " Lifetime access"]
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 sm:gap-2",
											children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5 text-neon-cyan sm:h-4 sm:w-4" }), " Proven results"]
										})
									]
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[480px]",
							children: /* @__PURE__ */ jsx(HeroRing, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "border-y border-border/60 bg-surface/60 py-4 sm:py-6",
				children: [/* @__PURE__ */ jsx("p", {
					className: "mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-neon-cyan sm:mb-4 sm:text-[11px] sm:tracking-[0.35em]",
					children: "Trusted by growing brands"
				}), /* @__PURE__ */ jsx("div", {
					className: "relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex w-max animate-marquee gap-8 pr-8 sm:gap-16 sm:pr-16",
						children: Array.from({ length: 2 }).map((_, dup) => /* @__PURE__ */ jsx("div", {
							className: "flex shrink-0 gap-8 pr-8 sm:gap-16 sm:pr-16",
							children: [
								"GOOGLE",
								"META",
								"INSTAGRAM",
								"YOUTUBE",
								"TIKTOK",
								"LINKEDIN"
							].map((b, i) => /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70 sm:gap-2 sm:text-lg sm:tracking-[0.2em]",
								children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50 sm:h-2 sm:w-2" }), b]
							}, `${b}-${i}`))
						}, dup))
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "courses",
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, { children: "Our Courses" }),
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-black italic uppercase tracking-tight sm:text-3xl md:text-4xl",
						children: "Choose Your Path to Mastery"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm md:text-base",
						children: "Hand-picked, expert-recommended courses designed to take you from beginner to advanced in digital advertising."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: courses.map((c) => /* @__PURE__ */ jsxs("article", {
							className: `neon-frame group relative rounded-2xl p-8 ${c.border} ${c.glow} transition-all duration-500`,
							children: [
								/* @__PURE__ */ jsx("span", {
									className: `absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${c.iconBg} ${c.tone} border border-current/20`,
									children: c.tag
								}),
								/* @__PURE__ */ jsx("div", {
									className: `inline-flex h-16 w-16 items-center justify-center rounded-2xl ${c.iconBg}`,
									children: /* @__PURE__ */ jsx(c.Icon, { className: `h-8 w-8 ${c.tone}` })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 text-xl font-bold",
									children: c.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: c.copy
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "mt-6 space-y-2",
									children: c.features.map((f) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ jsx(Check, { className: `h-3.5 w-3.5 shrink-0 ${c.tone}` }), f]
									}, f))
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#contact",
									className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-current/20 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-white/5 group-hover:border-current/40",
									children: [/* @__PURE__ */ jsx("span", {
										className: c.tone,
										children: "Explore Course"
									}), /* @__PURE__ */ jsx(ArrowRight, { className: `h-4 w-4 ${c.tone} transition-transform duration-300 group-hover:translate-x-1` })]
								})
							]
						}, c.title))
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "about",
				className: "mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:gap-10 sm:px-6 sm:pb-24 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:pr-6",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, { children: "About Us" }),
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-black italic uppercase leading-tight tracking-tight sm:text-3xl md:text-4xl",
								children: "We Are Passionate About Your Success"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "Skills Brand is dedicated to helping you discover the best digital advertising courses. We curate, review, and recommend only the courses that deliver real, measurable results for your career and business growth."
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/about",
								className: "btn-ghost-neon mt-6 inline-flex rounded-full px-5 py-2.5 text-xs font-semibold sm:mt-8 sm:px-6 sm:py-3 sm:text-sm",
								children: "Read More About Us"
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative overflow-hidden rounded-2xl border border-border/60",
						children: /* @__PURE__ */ jsx("img", {
							src: about_office_default,
							alt: "Skills Brand creative workspace",
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "neon-frame space-y-6 rounded-2xl p-7",
						children: [
							{
								icon: Rocket,
								t: "Our Mission",
								d: "Empowering people and brands through skills and creativity.",
								color: "text-neon-pink",
								border: "border-neon-pink/40"
							},
							{
								icon: Eye,
								t: "Our Vision",
								d: "To be a global brand building partner for ambitious visionaries.",
								color: "text-neon-cyan",
								border: "border-neon-cyan/40"
							},
							{
								icon: Heart,
								t: "Our Values",
								d: "Creativity, Integrity, Innovation and Excellence.",
								color: "text-neon-amber",
								border: "border-neon-amber/40"
							}
						].map((m) => /* @__PURE__ */ jsxs("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ jsx("span", {
								className: `grid h-11 w-11 shrink-0 place-items-center rounded-full border ${m.border} ${m.color}`,
								children: /* @__PURE__ */ jsx(m.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: `text-sm font-bold ${m.color}`,
								children: m.t
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: m.d
							})] })]
						}, m.t))
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-border/60 bg-surface/60",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-4 lg:gap-8",
					children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 sm:gap-4",
						children: [/* @__PURE__ */ jsx(s.icon, {
							className: `h-7 w-7 shrink-0 sm:h-9 sm:w-9 ${s.color}`,
							strokeWidth: 1.5
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xl font-black italic text-gradient sm:text-2xl md:text-3xl",
							children: s.value
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground sm:text-sm",
							children: s.label
						})] })]
					}, s.label))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "insights",
				className: "border-t border-border/60 bg-surface/50 py-16 sm:py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, { children: "From Our Blog" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-end justify-between gap-3 sm:gap-4",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-black italic uppercase tracking-tight sm:text-3xl md:text-4xl",
								children: "Latest Insights"
							}), /* @__PURE__ */ jsxs("a", {
								href: "#insights",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-neon-pink",
								children: ["View All Posts ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 grid gap-6 md:grid-cols-3",
							children: posts.map((p) => /* @__PURE__ */ jsxs("article", {
								className: "neon-frame group overflow-hidden rounded-2xl",
								children: [/* @__PURE__ */ jsx("img", {
									src: p.img,
									alt: p.title,
									loading: "lazy",
									width: 800,
									height: 600,
									className: "h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-6",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-base font-bold leading-snug",
										children: p.title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: p.date
									})]
								})]
							}, p.title))
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				id: "contact",
				className: "border-t border-border/60 bg-surface/60",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-4",
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
									href: "#contact",
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
							children: [
								"Home",
								"About Us",
								"Courses",
								"Blog",
								"Contact"
							].map((li) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "#home",
								className: "text-sm text-muted-foreground transition-colors hover:text-neon-pink",
								children: li
							}) }, li))
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
								href: "#courses",
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
										htmlFor: "footer-email",
										className: "sr-only",
										children: "Email address"
									}),
									/* @__PURE__ */ jsx("input", {
										id: "footer-email",
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
						className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 text-xs text-muted-foreground",
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
export { Index as component };
