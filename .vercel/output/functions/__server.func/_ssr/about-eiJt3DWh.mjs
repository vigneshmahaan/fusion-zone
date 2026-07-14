import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { N as Award, O as Clock, d as ShoppingBag, l as Star, r as Users } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-Cx83n6lF.mjs";
import { n as SectionHeader, t as Section } from "./Section-BEe_fMTY.mjs";
import { t as Features } from "./Features-Daww_QQ9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-eiJt3DWh.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			crumb: "About",
			title: "Our Story",
			subtitle: "Fusion Shoe Zone & Accessories was built on a simple idea — everyone deserves to feel confident in what they wear."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
					alt: "Fusion boutique interior",
					className: "rounded-[2rem] shadow-luxe object-cover w-full aspect-[4/5]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 shadow-luxe border border-border/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-full gradient-royal text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-black text-[color:var(--royal)] dark:text-primary",
							children: "10+ Years"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "of premium craft"
						})] })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Who we are",
				title: "Affordable luxury, made for everyday",
				subtitle: "From premium footwear to stylish accessories and playful kids fashion — we curate pieces that feel special, without the intimidating price tag.",
				center: false
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid sm:grid-cols-2 gap-4",
				children: [
					{
						n: "10+",
						l: "Years of craft",
						icon: Clock,
						color: "text-[color:var(--teal)]",
						bg: "bg-[color:var(--teal)]/10"
					},
					{
						n: "50K+",
						l: "Happy customers",
						icon: Users,
						color: "text-primary",
						bg: "bg-primary/10"
					},
					{
						n: "1.2K+",
						l: "Premium SKUs",
						icon: ShoppingBag,
						color: "text-[color:var(--ember)]",
						bg: "bg-[color:var(--ember)]/10"
					},
					{
						n: "4.9★",
						l: "Average rating",
						icon: Star,
						color: "text-yellow-500",
						bg: "bg-yellow-500/10"
					}
				].map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5 flex items-start gap-4 border border-border/50 hover:border-[color:var(--teal)]/40 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `p-2.5 rounded-xl ${s.bg} ${s.color} shrink-0`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-black text-primary",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-0.5 font-medium",
							children: s.l
						})] })]
					}, s.l);
				})
			})] })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "values",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our promise",
				title: "Built on service, styled with soul"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[3rem] gradient-royal text-white p-10 sm:p-16 text-center relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 opacity-40 pointer-events-none",
					"aria-hidden": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[color:var(--ember)]/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-[color:var(--teal)]/20 blur-3xl" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative font-display text-3xl sm:text-5xl font-black gradient-text",
					children: "Walk it. Wear it. Love it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative mt-4 text-white/80 max-w-xl mx-auto",
					children: "Three words. One promise. A better everyday, one premium piece at a time."
				})
			]
		}) })
	] });
}
//#endregion
export { AboutPage as component };
