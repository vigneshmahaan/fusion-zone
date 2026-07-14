import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { S as Lock, T as HeartHandshake, f as ShieldCheck, m as RotateCcw, o as Truck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Features-DZL0HvYG.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		icon: Sparkles,
		title: "Premium Quality",
		desc: "Only the finest materials & finishes."
	},
	{
		icon: ShieldCheck,
		title: "Trusted Products",
		desc: "100% authentic — guaranteed."
	},
	{
		icon: Truck,
		title: "Fast Delivery",
		desc: "Free shipping over $100."
	},
	{
		icon: Lock,
		title: "Secure Payments",
		desc: "Encrypted checkout, safe & simple."
	},
	{
		icon: RotateCcw,
		title: "Easy Returns",
		desc: "30-day hassle-free returns."
	},
	{
		icon: HeartHandshake,
		title: "Customer Love",
		desc: "Rated 4.9 by 50k+ shoppers."
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: {
				duration: .5,
				delay: i * .05
			},
			className: "glass rounded-3xl p-6 hover:-translate-y-1 hover:shadow-luxe transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-2xl gradient-royal text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-4 font-display text-xl font-semibold text-[color:var(--royal)]",
					children: it.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: it.desc
				})
			]
		}, it.title))
	});
}
//#endregion
export { Features as t };
