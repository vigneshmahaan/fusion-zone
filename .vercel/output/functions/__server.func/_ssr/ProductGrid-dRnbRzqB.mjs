import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as Eye, d as ShoppingBag, l as Star, w as Heart } from "../_libs/lucide-react.mjs";
import { s as useStore } from "./products-NYJh0Ncc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductGrid-dRnbRzqB.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { addToCart, toggleWishlist, inWishlist } = useStore();
	const liked = inWishlist(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-[0_30px_60px_-30px_rgba(61,27,106,0.35)] hover:-translate-y-1.5 transition-all duration-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-[color:var(--secondary)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 top-0 flex items-start justify-between p-3",
					children: [product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full gradient-ember px-3 py-1 text-xs font-bold text-[color:var(--ember-foreground)] shadow-lg",
						children: product.badge
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Wishlist",
						onClick: () => toggleWishlist(product),
						className: `ml-auto grid h-9 w-9 place-items-center rounded-full glass transition ${liked ? "text-[color:var(--ember)]" : "text-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${liked ? "fill-current" : ""}` })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-3 bottom-3 flex items-center gap-2 transition-all duration-500 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => addToCart(product),
						className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-full gradient-royal py-2.5 px-3 text-xs font-bold text-white shadow-lg hover:shadow-[0_10px_40px_rgba(61,27,106,0.5)] hover:scale-105 transition duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Add"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$id",
						params: { id: product.id },
						className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-full glass py-2.5 px-3 text-xs font-bold text-foreground hover:bg-white/25 hover:scale-105 transition duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " View"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 text-[color:var(--ember)]",
					children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}` }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-xs text-muted-foreground",
						children: product.rating.toFixed(1)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-semibold truncate",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: product.subcategory
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-bold text-[color:var(--royal)] dark:text-primary",
						children: ["$", product.price]
					}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground line-through",
						children: ["$", product.oldPrice]
					})]
				})
			]
		})]
	});
}
function ProductGrid({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 text-center py-20 rounded-3xl bg-[color:var(--secondary)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "No products match your filters."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
	});
}
//#endregion
export { ProductGrid as t };
