import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as Instagram, F as ArrowUpRight, I as ArrowRight, l as Star, r as Users, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as SectionHeader, t as Section } from "./Section-BEe_fMTY.mjs";
import { t as Features } from "./Features-Daww_QQ9.mjs";
import { a as newArrivals, n as bestSellers, r as byCategory } from "./products-NYJh0Ncc.mjs";
import { t as ProductGrid } from "./ProductGrid-dRnbRzqB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjUeKpNd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const on = (e) => {
			const r = el.getBoundingClientRect();
			setPos({
				x: (e.clientX - r.left - r.width / 2) / r.width,
				y: (e.clientY - r.top - r.height / 2) / r.height
			});
		};
		el.addEventListener("mousemove", on);
		return () => el.removeEventListener("mousemove", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative -mt-16 sm:-mt-20 min-h-[100svh] overflow-hidden transition-colors duration-500 gradient-royal text-white border-b border-border/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 opacity-60 pointer-events-none",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl animate-gradient",
						style: { background: "radial-gradient(circle, rgba(255,138,0,0.35), transparent 60%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full blur-3xl animate-gradient",
						style: { background: "radial-gradient(circle, rgba(129,73,255,0.45), transparent 60%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-3xl",
						style: { background: "radial-gradient(circle, rgba(15,148,144,0.12), transparent 60%)" }
					}),
					Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute h-1.5 w-1.5 rounded-full animate-float bg-white/40",
						style: {
							top: `${i * 37 % 100}%`,
							left: `${i * 53 % 100}%`,
							animationDelay: `${i % 6 * .6}s`,
							animationDuration: `${5 + i % 5}s`
						}
					}, i))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 min-h-[100svh] flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-10 items-center w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-shadow-luxe",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: "WALK IT."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: "WEAR IT."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gradient-text animate-gradient",
										children: "LOVE IT."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-white/80",
								children: "Premium shoes, premium accessories & stylish kids fashion — curated for people who move with intent and dress with soul."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shoes",
									className: "btn-glow btn-glow-hover inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] shadow-lg",
									children: ["Shop Shoes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/new-arrivals",
									className: "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition border glass-dark hover:bg-white/15 text-white border-white/20",
									children: "Explore Collections"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid grid-cols-3 max-w-lg gap-4",
								children: [
									{
										n: "50K+",
										l: "Happy customers",
										icon: Users,
										color: "text-[color:var(--teal)]"
									},
									{
										n: "1.2K+",
										l: "Premium products",
										icon: Sparkles,
										color: "text-[color:var(--ember)]"
									},
									{
										n: "4.9★",
										l: "Average rating",
										icon: Star,
										color: "text-yellow-500"
									}
								].map((s) => {
									const Icon = s.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "transition-all duration-300 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg border glass-dark hover:bg-white/10 border-white/10 hover:-translate-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `p-2 rounded-full mb-2 bg-white/5 ${s.color}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-xl sm:text-2xl font-black text-white",
												children: s.n
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] sm:text-xs mt-0.5 font-medium leading-tight text-white/75",
												children: s.l
											})
										]
									}, s.l);
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 relative h-[380px] sm:h-[420px] md:h-[520px] mt-10 lg:mt-0 w-full max-w-[320px] sm:max-w-none mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								style: { transform: `translate3d(${pos.x * -30}px, ${pos.y * -30}px, 0) rotate(-8deg)` },
								src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
								alt: "Featured sneaker",
								className: "absolute top-0 left-0 h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 object-cover rounded-[2.5rem] shadow-luxe animate-float"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								style: { transform: `translate3d(${pos.x * 20}px, ${pos.y * 20}px, 0)` },
								src: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
								alt: "Luxury watch",
								className: "absolute bottom-4 right-0 h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 object-cover rounded-[2rem] shadow-luxe animate-float-slow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-2 sm:left-4 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 animate-float-slow glass-dark z-10 shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full gradient-ember text-[color:var(--ember-foreground)] font-bold text-xs sm:text-sm",
									children: "50%"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] sm:text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-white",
										children: "Season Sale"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-white/70",
										children: "Up to 50% off"
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#0f1330]" })
		]
	});
}
var cats = [
	{
		to: "/shoes",
		title: "Men's Shoes",
		desc: "Luxury sneakers, casual, sports & formal.",
		image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80"
	},
	{
		to: "/men-accessories",
		title: "Men's Accessories",
		desc: "Premium men's watches and wearable rings.",
		image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80"
	},
	{
		to: "/kids",
		title: "Kids Collection",
		desc: "Shoes, clothing & accessories for little icons.",
		image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1000&q=80"
	}
];
function CategoryCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-6 md:grid-cols-3",
		children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: c.to,
			className: "group relative block overflow-hidden rounded-[2rem] shadow-luxe aspect-[4/5]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.image,
					alt: c.title,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--royal)]/90 via-[color:var(--royal)]/30 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 p-7 flex flex-col justify-end text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-white/85 max-w-xs",
							children: c.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex w-fit items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm font-semibold group-hover:bg-[color:var(--ember)] group-hover:text-[color:var(--ember-foreground)] transition",
							children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				})
			]
		}) }, c.to))
	});
}
var brands = [
	"FUSION",
	"URBANA",
	"AETHER",
	"NIMBUS",
	"NOVA",
	"REGAL",
	"ELYSIAN",
	"MERIDIAN"
];
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden py-10 border-y border-border bg-[color:var(--secondary)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-16 animate-marquee whitespace-nowrap",
			children: [...brands, ...brands].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-3xl sm:text-4xl font-bold tracking-widest text-[color:var(--royal)]/40 hover:text-[color:var(--royal)] transition",
				children: b
			}, i))
		})
	});
}
var reviews = [
	{
		name: "Ananya Rao",
		role: "Product Designer",
		text: "The quality is incredible. My Aurora Runners feel like they're floating — best purchase this year.",
		avatar: "https://i.pravatar.cc/120?img=47"
	},
	{
		name: "Kabir Mehta",
		role: "Entrepreneur",
		text: "Ordered the Regal Chrono. Packaging, finish, everything screams premium. Fusion nailed it.",
		avatar: "https://i.pravatar.cc/120?img=12"
	},
	{
		name: "Ishita Verma",
		role: "Stylist",
		text: "The kids collection is gorgeous. My daughter refuses to take her Sunny Sneakers off.",
		avatar: "https://i.pravatar.cc/120?img=32"
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-[2rem] p-8 sm:p-10 text-center shadow-luxe transition-all duration-500",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center gap-1 text-[color:var(--ember)]",
						children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-lg sm:text-xl font-medium",
						children: [
							"\"",
							reviews[i].text,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: reviews[i].avatar,
							alt: reviews[i].name,
							className: "h-12 w-12 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-[color:var(--royal)]",
								children: reviews[i].name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: reviews[i].role
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center gap-2",
				children: reviews.map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(k),
					"aria-label": `Show review ${k + 1}`,
					className: `h-2 rounded-full transition-all ${k === i ? "w-8 bg-[color:var(--royal)]" : "w-2 bg-[color:var(--royal)]/25"}`
				}, k))
			})]
		})
	});
}
var shots = [
	"1595950653106-6c9ebd614d3a",
	"1523275335684-37898b6baf30",
	"1514989940723-e8e51635b782",
	"1600185365483-26d7a4cc7519",
	"1546868871-7041f2a55e12",
	"1519238263530-99bdd11df2ea"
];
function InstagramGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
		children: shots.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "#",
			className: "group relative aspect-square overflow-hidden rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`,
				alt: "Instagram",
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[color:var(--royal)]/70 opacity-0 group-hover:opacity-100 transition grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6 text-white" })
			})]
		}, id))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "categories",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Curated categories",
				title: "Shop by category",
				subtitle: "Three worlds, one premium standard. Explore what fits your vibe."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCards, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "trending",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Trending",
					title: "Trending Shoes",
					subtitle: "The picks everyone's talking about this season."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: byCategory("shoes").slice(0, 4) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shoes",
						className: "inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-white",
						children: ["View all shoes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "accessories",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Curated Accessories",
					title: "Men's Accessories",
					subtitle: "Elevate your look with premium rings, bracelets, and essential details."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: byCategory("accessories").slice(0, 4) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/men-accessories",
						className: "inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition duration-300 shadow-lg",
						children: ["View all accessories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "kids",
			className: "rounded-[3rem] bg-[color:var(--secondary)] mx-4 sm:mx-6 lg:mx-8 max-w-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Little icons",
					title: "Kids Fashion Collection",
					subtitle: "Soft, playful, and made to keep up with big adventures."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: byCategory("kids").slice(0, 4) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "new-arrivals",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Just landed",
				title: "New Arrivals",
				subtitle: "Freshly stocked drops from every category."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: newArrivals() })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "offers",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[3rem] gradient-royal text-white p-10 sm:p-16 shadow-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 pointer-events-none opacity-70",
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[color:var(--ember)]/30 blur-3xl animate-gradient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-gradient" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid lg:grid-cols-2 items-center gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--ember)]",
							children: "Season sale"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-4xl sm:text-6xl font-black",
							children: "UP TO 50% OFF"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/85 max-w-md",
							children: "Iconic pieces at unbeatable prices. Only for a limited time — refresh your wardrobe today."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/offers",
							className: "mt-6 inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] btn-glow btn-glow-hover",
							children: ["Shop the sale ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-4",
						children: [
							"1595950653106-6c9ebd614d3a",
							"1523275335684-37898b6baf30",
							"1514989940723-e8e51635b782",
							"1600185365483-26d7a4cc7519",
							"1546868871-7041f2a55e12",
							"1503944583220-79d8926ad5e2"
						].map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`,
							alt: "",
							loading: "lazy",
							className: `h-28 sm:h-36 w-full object-cover rounded-2xl shadow-luxe ${i % 2 ? "animate-float-slow" : "animate-float"}`
						}, id))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "best-sellers",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Loved by many",
				title: "Best Sellers",
				subtitle: "Our most-loved products, chosen by you."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: bestSellers() })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "why",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Why Fusion",
				title: "Why shoppers choose us",
				subtitle: "Everything we do is designed to make you love where you shop."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "reviews",
			className: "rounded-[3rem] bg-[color:var(--secondary)] mx-4 sm:mx-6 lg:mx-8 max-w-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Reviews",
					title: "What our customers say"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "instagram",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "@fusionshoezone",
				title: "Follow the movement",
				subtitle: "Tag us to be featured in our gallery."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramGallery, {})]
		})
	] });
}
//#endregion
export { Home as component };
