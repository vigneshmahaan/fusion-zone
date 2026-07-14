import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as Package, c as ThumbsUp, d as ShoppingBag, l as Star, m as RotateCcw, o as Truck, w as Heart } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { n as SectionHeader, t as Section } from "./Section-BoK5YPOU.mjs";
import { t as Button } from "./button-B2LyfGb_.mjs";
import { i as findProduct, r as byCategory, s as useStore } from "./products-NYJh0Ncc.mjs";
import { t as ProductGrid } from "./ProductGrid-BZdT1lSc.mjs";
import { t as Route } from "./product._id-BY2kGudJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-Cj8ogV1S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { id } = Route.useParams();
	const product = findProduct(id);
	const { addToCart, toggleWishlist, inWishlist } = useStore();
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[70vh] flex flex-col items-center justify-center text-center p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-black mb-4",
				children: "Product Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-8",
				children: "We couldn't find the product you're looking for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn-glow inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] shadow-lg",
				children: "Back to Home"
			})
		]
	});
	const liked = inWishlist(product.id);
	const gallery = product.images ?? [
		product.image,
		product.image,
		product.image,
		product.image
	];
	const [activeImage, setActiveImage] = (0, import_react.useState)(gallery[0]);
	const [zoomed, setZoomed] = (0, import_react.useState)(false);
	const relatedProducts = byCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			crumb: product.name,
			title: product.name,
			subtitle: product.subcategory
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-10 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setZoomed((v) => !v),
						className: "relative aspect-square overflow-hidden rounded-3xl bg-[color:var(--secondary)]/60 dark:bg-zinc-800 border border-border/40 group cursor-zoom-in",
						"aria-label": "Zoom image",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: activeImage,
							alt: product.name,
							className: `h-full w-full object-cover transition-transform duration-500 ${zoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105"}`
						}), product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 left-4 rounded-full gradient-ember px-4 py-1.5 text-sm font-bold text-[color:var(--ember-foreground)] shadow",
							children: product.badge
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-3",
						children: gallery.map((imgUrl, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setActiveImage(imgUrl);
								setZoomed(false);
							},
							className: `relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${activeImage === imgUrl ? "border-[color:var(--teal)] scale-95 shadow-[0_0_14px_rgba(15,148,144,0.5)]" : "border-transparent hover:border-foreground/25 hover:scale-105"}`,
							"aria-label": `View ${product.name} angle ${index + 1}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: imgUrl,
								alt: `${product.name} view ${index + 1}`,
								loading: "lazy",
								className: "h-full w-full object-cover"
							}), activeImage === imgUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" })]
						}, index))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex self-start items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--teal)] bg-[color:var(--teal)]/10 rounded-full px-3 py-1 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3 w-3" }), product.subcategory]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl sm:text-5xl font-black text-foreground leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-1.5 text-[color:var(--ember)]",
							children: [
								Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-5 w-5 ${i < Math.round(product.rating) ? "fill-current" : "opacity-25"}` }, i)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-base font-bold text-foreground",
									children: product.rating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground ml-1",
									children: "/ 5.0 · (128 Reviews)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-black text-primary",
									children: ["$", product.price]
								}),
								product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xl text-muted-foreground line-through",
									children: ["$", product.oldPrice]
								}),
								product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-base font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full",
									children: ["Save $", product.oldPrice - product.price]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base text-muted-foreground leading-relaxed",
							children: "Crafted for everyday luxury — premium materials, comfort-first design, and finishing details you'll notice at a glance. Elevate your wardrobe with a piece designed to stand the test of time and trends."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-3 p-6 glass rounded-2xl border-border/40",
							children: [{
								icon: Truck,
								text: "Free express shipping on orders over $100"
							}, {
								icon: RotateCcw,
								text: "30-day hassle-free returns & exchanges"
							}].map(({ icon: Icon, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm text-foreground font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-2 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}), text]
							}, text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex gap-3 mt-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "flex-1 gradient-ember text-[color:var(--ember-foreground)] text-lg font-bold rounded-full h-14 shadow-lg hover:shadow-[0_6px_25px_rgba(255,138,0,0.45)] hover:scale-[1.02] transition-all duration-300",
								onClick: () => addToCart(product),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "mr-2 h-5 w-5" }), " Add to cart"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: `rounded-full h-14 w-14 p-0 transition-all duration-300 ${liked ? "border-red-400/50 bg-red-50 dark:bg-red-950/30" : "hover:border-red-300 glass"}`,
								onClick: () => toggleWishlist(product),
								"aria-label": "Toggle wishlist",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-6 w-6 transition-all duration-300 ${liked ? "fill-red-500 text-red-500 scale-110" : ""}` })
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "reviews",
			className: "bg-background/50 border-t border-border/30 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Feedback",
					title: "Customer Reviews",
					subtitle: "See what others are saying about this product."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 relative",
					style: { maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-6 w-max",
						style: { animation: "review-scroll 28s linear infinite" },
						onMouseEnter: (e) => e.currentTarget.style.animationPlayState = "paused",
						onMouseLeave: (e) => e.currentTarget.style.animationPlayState = "running",
						children: [
							{
								name: "Alex Johnson",
								rating: 5,
								date: "2 days ago",
								text: "Absolutely love this! The quality is outstanding and it fits perfectly into my daily rotation. Highly recommend.",
								likes: 12
							},
							{
								name: "Sarah Williams",
								rating: 4,
								date: "1 week ago",
								text: "Great product, shipping was fast. It looks exactly like the pictures. Only giving 4 stars because the box was slightly dented upon arrival.",
								likes: 4
							},
							{
								name: "Michael Chen",
								rating: 5,
								date: "2 weeks ago",
								text: "Worth every penny. The craftsmanship is evident and I've received so many compliments already.",
								likes: 8
							},
							{
								name: "Emily Davis",
								rating: 5,
								date: "1 month ago",
								text: "This is my third purchase from Fusion and they never disappoint. Exceptional comfort and style.",
								likes: 23
							},
							{
								name: "Ryan Patel",
								rating: 5,
								date: "3 days ago",
								text: "Shipping was super fast and the packaging was beautiful. The product exceeded all my expectations!",
								likes: 17
							},
							{
								name: "Mia Thompson",
								rating: 4,
								date: "2 months ago",
								text: "Very stylish and comfortable. I wear these almost every day. Will definitely be buying more from Fusion.",
								likes: 9
							},
							{
								name: "Alex Johnson",
								rating: 5,
								date: "2 days ago",
								text: "Absolutely love this! The quality is outstanding and it fits perfectly into my daily rotation. Highly recommend.",
								likes: 12
							},
							{
								name: "Sarah Williams",
								rating: 4,
								date: "1 week ago",
								text: "Great product, shipping was fast. It looks exactly like the pictures. Only giving 4 stars because the box was slightly dented upon arrival.",
								likes: 4
							},
							{
								name: "Michael Chen",
								rating: 5,
								date: "2 weeks ago",
								text: "Worth every penny. The craftsmanship is evident and I've received so many compliments already.",
								likes: 8
							},
							{
								name: "Emily Davis",
								rating: 5,
								date: "1 month ago",
								text: "This is my third purchase from Fusion and they never disappoint. Exceptional comfort and style.",
								likes: 23
							},
							{
								name: "Ryan Patel",
								rating: 5,
								date: "3 days ago",
								text: "Shipping was super fast and the packaging was beautiful. The product exceeded all my expectations!",
								likes: 17
							},
							{
								name: "Mia Thompson",
								rating: 4,
								date: "2 months ago",
								text: "Very stylish and comfortable. I wear these almost every day. Will definitely be buying more from Fusion.",
								likes: 9
							}
						].map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass flex-shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl border border-border/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-10 w-10 rounded-full gradient-royal text-white grid place-items-center font-bold text-sm shadow",
											children: review.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-sm",
											children: review.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: review.date
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-[color:var(--ember)]",
										children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-3.5 w-3.5 ${j < review.rating ? "fill-current" : "opacity-25"}` }, j))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground/80 leading-relaxed mb-4",
									children: review.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[color:var(--teal)] transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "h-3.5 w-3.5" }),
										" Helpful (",
										review.likes,
										")"
									]
								})
							]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes review-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        ` })
			]
		}),
		relatedProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "related",
			className: "bg-[color:var(--secondary)]/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "More to love",
				title: "Related Products",
				subtitle: `Discover more items from our ${product.category} collection.`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: relatedProducts })]
		})
	] });
}
//#endregion
export { ProductPage as component };
