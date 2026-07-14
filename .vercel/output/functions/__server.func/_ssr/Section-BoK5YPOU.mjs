import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-BoK5YPOU.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeader({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { duration: .6 },
		className: center ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--ember)] mb-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-[color:var(--ember)]/50 rounded-full" }),
					eyebrow,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-[color:var(--ember)]/50 rounded-full" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--royal)] dark:text-primary",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-3 flex items-center gap-2 ${center ? "justify-center" : "justify-start"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-10 rounded-full bg-[color:var(--ember)] shadow-[0_0_8px_rgba(255,138,0,0.5)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-6 rounded-full bg-[color:var(--teal)] shadow-[0_0_8px_rgba(15,148,144,0.5)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-3 rounded-full bg-[color:var(--royal)]/40" })
				]
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: subtitle
			})
		]
	});
}
function Section({ children, className = "", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`,
		children
	});
}
//#endregion
export { SectionHeader as n, Section as t };
