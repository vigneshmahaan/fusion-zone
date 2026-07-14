import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as Instagram, E as Facebook, P as ArrowUp, a as Twitter, b as MapPin, d as ShoppingBag, g as Phone, h as Plus, i as User, j as ChevronDown, n as X, p as Search, s as Trash2, t as Youtube, v as Minus, w as Heart, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-B2LyfGb_.mjs";
import { t as Input } from "./input-2g06Pm9g.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType } from "../_libs/zod.mjs";
import { o as products, s as useStore, t as StoreProvider } from "./products-NYJh0Ncc.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Route$10 } from "./product._id-BY2kGudJ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DW_n9mL1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-NHch0_3L.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Logo({ className = "h-10" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "flex items-center gap-2 shrink-0",
		"aria-label": "Fusion Shoe Zone home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/fusion-logo.png",
			alt: "Fusion Shoe Zone & Accessories",
			className: `${className} w-auto object-contain drop-shadow-[0_6px_20px_rgba(61,27,106,0.35)]`,
			loading: "eager"
		})
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function CartDrawer({ children }) {
	const { cart, cartTotal, removeFromCart, updateQty, clearCart } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		side: "right",
		className: "w-full sm:max-w-md flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
			className: "font-display text-2xl",
			children: "Your Cart"
		}) }), cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 grid place-items-center text-center px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--secondary)] text-[color:var(--royal)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-medium",
					children: "Your cart is empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Add some premium picks to get started."
				})
			] })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3",
			children: cart.map(({ product, qty }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-2xl border border-border p-3 hover:shadow-md transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					className: "h-20 w-20 rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: product.subcategory
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => removeFromCart(product.id),
							"aria-label": "Remove",
							className: "p-1 rounded hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-muted-foreground" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center rounded-full border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "p-1.5 hover:bg-muted rounded-l-full",
									onClick: () => updateQty(product.id, qty - 1),
									"aria-label": "Decrease",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 text-sm font-medium",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "p-1.5 hover:bg-muted rounded-r-full",
									onClick: () => updateQty(product.id, qty + 1),
									"aria-label": "Increase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold text-[color:var(--royal)]",
							children: ["$", (product.price * qty).toFixed(2)]
						})]
					})]
				})]
			}, product.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border pt-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Subtotal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xl font-bold",
						children: ["$", cartTotal.toFixed(2)]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full gradient-ember text-[color:var(--ember-foreground)] font-semibold h-11 rounded-full",
					onClick: () => toast.success("Checkout coming soon", { description: "This is a demo store." }),
					children: "Checkout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clearCart,
					className: "w-full text-xs text-muted-foreground hover:text-foreground",
					children: "Clear cart"
				})
			]
		})] })]
	})] });
}
function WishlistDrawer({ children }) {
	const { wishlist, toggleWishlist, addToCart } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
		side: "right",
		className: "w-full sm:max-w-md flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
			className: "font-display text-2xl",
			children: "Wishlist"
		}) }), wishlist.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 grid place-items-center text-center px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--secondary)] text-[color:var(--royal)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-medium",
					children: "No favorites yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Tap the heart on any product to save it."
				})
			] })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3",
			children: wishlist.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-2xl border border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					className: "h-20 w-20 rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium truncate",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleWishlist(p),
								"aria-label": "Remove",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[color:var(--royal)] font-semibold",
							children: ["$", p.price]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "mt-2 gradient-royal text-white rounded-full",
							onClick: () => addToCart(p),
							children: "Add to cart"
						})
					]
				})]
			}, p.id))
		})]
	})] });
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shoes",
		label: "Shoes"
	},
	{
		to: "/men-accessories",
		label: "Men Accessories",
		dropdown: [
			{
				to: "/men-accessories",
				search: { subcategory: "All" },
				label: "All Accessories"
			},
			{
				to: "/men-accessories",
				search: { subcategory: "Watch" },
				label: "Watches"
			},
			{
				to: "/men-accessories",
				search: { subcategory: "Ring" },
				label: "Rings"
			}
		]
	},
	{
		to: "/kids",
		label: "Kids Collection"
	},
	{
		to: "/new-arrivals",
		label: "New Arrivals"
	},
	{
		to: "/offers",
		label: "Offers"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function MobileNavLink({ link, onClose }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	if (link.dropdown) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				className: "text-lg font-medium text-white/90 grow",
				onClick: onClose,
				children: link.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen(!open),
				className: "p-2 rounded-xl hover:bg-white/10 text-white/80 transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 transition-transform duration-250 ${open ? "rotate-180" : ""}` })
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-4 pl-4 border-l border-white/10 flex flex-col gap-1.5 my-1.5",
			children: link.dropdown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				search: item.search,
				className: "px-4 py-2 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/10 transition",
				onClick: onClose,
				children: item.label
			}, item.label))
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: link.to,
		className: "px-4 py-3 rounded-xl text-lg font-medium text-white/90 hover:bg-white/10 transition",
		onClick: onClose,
		children: link.label
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const { cartCount, wishlist } = useStore();
	const { location } = useRouterState();
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	(0, import_react.useEffect)(() => setMobileOpen(false), [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 gradient-royal border-b border-[color:var(--teal)]/20 shadow-[0_10px_40px_-15px_rgba(15,148,144,0.35)] ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: scrolled ? "h-9" : "h-11" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-6 hidden lg:flex items-center gap-1",
					children: links.map((l) => {
						const active = location.pathname === l.to;
						if ("dropdown" in l) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								className: `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${active ? "text-[color:var(--ember)]" : "text-white/85 hover:text-white"}`,
								children: [
									l.label,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[color:var(--teal)] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full mt-1 w-48 glass-dark rounded-2xl border border-border/20 shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2",
								children: l.dropdown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									search: item.search,
									className: "block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition",
									children: item.label
								}, item.label))
							})]
						}, l.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `relative px-3 py-2 text-sm font-medium transition-colors ${active ? "text-[color:var(--ember)]" : "text-white/85 hover:text-white"}`,
							children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[color:var(--teal)] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}` })]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1 sm:gap-2 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Search",
							onClick: () => setSearchOpen((v) => !v),
							className: "p-2 rounded-full hover:bg-white/10 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishlistDrawer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							"aria-label": `Wishlist (${wishlist.length})`,
							className: "relative p-2 rounded-full hover:bg-white/10 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[color:var(--teal)] px-1 text-[10px] font-bold text-white shadow-[0_0_8px_rgba(15,148,144,0.6)]",
								children: wishlist.length
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							"aria-label": `Cart (${cartCount})`,
							className: "relative p-2 rounded-full hover:bg-white/10 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[color:var(--ember)] px-1 text-[10px] font-bold text-[color:var(--ember-foreground)] shadow-[0_0_8px_rgba(255,138,0,0.6)]",
								children: cartCount
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Account",
							className: "p-2 rounded-full hover:bg-white/10 transition hidden sm:inline-grid",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open: mobileOpen,
							onOpenChange: setMobileOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Open menu",
									className: "p-2 rounded-full hover:bg-white/10 transition lg:hidden",
									children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "right",
								className: "gradient-royal text-white border-l-white/10 w-[85vw] sm:w-96",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
									className: "text-white",
									children: "Menu"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "mt-6 flex flex-col gap-1",
									children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavLink, {
										link: l,
										onClose: () => setMobileOpen(false)
									}, l.to))
								})]
							})]
						})
					]
				})
			]
		}), searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-1 animate-reveal relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					const q = searchQuery.toLowerCase();
					const match = products.find((p) => p.name.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q));
					if (match) {
						window.location.href = `/product/${match.id}`;
						setSearchOpen(false);
						setSearchQuery("");
					}
				},
				className: "glass flex items-center gap-2 rounded-full px-4 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-white/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value),
						placeholder: "Search shoes, accessories, kids collection…",
						className: "border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "sm",
						className: "gradient-ember text-[color:var(--ember-foreground)] font-semibold rounded-full",
						children: "Search"
					})
				]
			}), searchQuery.trim().length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-full left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 mt-2 glass-dark rounded-2xl border border-border/20 shadow-2xl overflow-hidden max-h-80 overflow-y-auto z-50",
				children: [products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$id",
					params: { id: product.id },
					onClick: () => {
						setSearchOpen(false);
						setSearchQuery("");
					},
					className: "flex items-center gap-4 p-3 hover:bg-white/10 transition border-b border-border/10 last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "h-12 w-12 object-cover rounded-lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white font-semibold text-sm",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/60 text-xs",
							children: product.subcategory
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto text-[color:var(--ember)] font-bold",
							children: ["$", product.price]
						})
					]
				}, product.id)), products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 text-white/60 text-sm text-center",
					children: [
						"No products found matching \"",
						searchQuery,
						"\""
					]
				})]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: scrolled ? "h-16" : "h-20",
		"aria-hidden": true
	})] });
}
var cols = [
	{
		title: "Shop",
		links: [
			{
				to: "/shoes",
				label: "Shoes"
			},
			{
				to: "/men-accessories",
				label: "Men Accessories"
			},
			{
				to: "/kids",
				label: "Kids Collection"
			},
			{
				to: "/new-arrivals",
				label: "New Arrivals"
			},
			{
				to: "/offers",
				label: "Offers"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				to: "/about",
				label: "About Us"
			},
			{
				to: "/contact",
				label: "Contact"
			},
			{
				to: "/offers",
				label: "Special Offers"
			}
		]
	},
	{
		title: "Customer Service",
		links: [
			{
				to: "/contact",
				label: "Help Center"
			},
			{
				to: "/contact",
				label: "Shipping & Returns"
			},
			{
				to: "/contact",
				label: "Size Guide"
			},
			{
				to: "/contact",
				label: "Order Tracking"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative gradient-royal text-white/85 mt-24 border-t-2 border-[color:var(--teal)]/40 shadow-[0_-10px_30px_rgba(15,148,144,0.15)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 opacity-30 pointer-events-none",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[color:var(--ember)]/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-[color:var(--teal)]/20 blur-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm max-w-sm",
								children: "Premium footwear, premium men accessories, and stylish kids fashion — curated for the ones who walk it, wear it, and love it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-[color:var(--teal)]" }), "24 Fusion Avenue, Fashion District, Mumbai 400001"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[color:var(--ember)]" }), "+91 98765 43210"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-[color:var(--teal)]" }), "hello@fusionshoezone.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 pt-2",
								children: [
									Facebook,
									Instagram,
									Twitter,
									Youtube
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "Social",
									className: "grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-[color:var(--teal)] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(15,148,144,0.5)] transition duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-white font-semibold mb-4",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm",
							children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "hover:text-[color:var(--ember)] transition",
								children: l.label
							}) }, l.label))
						})]
					}, c.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-white font-semibold mb-4",
								children: "Newsletter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mb-4",
								children: "Get exclusive drops, offers, and styling tips — straight to your inbox."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									if (!new FormData(e.currentTarget).get("email")) return;
									toast.success("You're in!", { description: "Welcome to the Fusion insider list." });
									e.currentTarget.reset();
								},
								className: "glass-dark flex items-center gap-2 rounded-full p-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									name: "email",
									type: "email",
									required: true,
									placeholder: "you@email.com",
									className: "border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "gradient-ember text-[color:var(--ember-foreground)] font-semibold rounded-full",
									children: "Subscribe"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Fusion Shoe Zone & Accessories. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[color:var(--ember)] font-bold tracking-widest text-[10px] uppercase",
						children: "Walk it. Wear it. Love it."
					})]
				})
			})
		]
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const on = () => {
			const h = document.documentElement;
			const scrolled = h.scrollTop;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? scrolled / total * 100 : 0);
			setShow(scrolled > 400);
		};
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 inset-x-0 z-[60] h-1 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full gradient-ember transition-[width] duration-150",
			style: { width: `${progress}%` }
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": "Back to top",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: `fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full gradient-royal text-white shadow-luxe transition-all ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
	})] });
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/919876543210",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 left-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition animate-float",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 32 32",
			className: "h-6 w-6",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.28c-.28-.14-1.63-.8-1.88-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.09-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.53-.01a1.03 1.03 0 0 0-.75.35c-.26.28-.99.97-.99 2.36 0 1.4 1.02 2.74 1.16 2.93.14.19 2 3.07 4.86 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.63-.66 1.86-1.3.23-.65.23-1.2.16-1.3-.06-.11-.25-.18-.53-.32zM16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.43 1.66 6.29L3 29l6.9-1.62A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" })
		})
	});
}
function Layout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center gradient-royal px-4 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-8xl font-black gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full gradient-ember px-6 py-3 text-sm font-semibold text-[color:var(--ember-foreground)]",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-left bg-muted border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono max-h-60 max-w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-destructive mb-1",
						children: error.message || String(error)
					}), error.stack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "whitespace-pre",
						children: error.stack
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Fusion Shoe Zone & Accessories · Walk it. Wear it. Love it." },
			{
				name: "description",
				content: "Premium footwear, premium accessories and stylish kids fashion. Shop Fusion Shoe Zone & Accessories — walk it, wear it, love it."
			},
			{
				name: "author",
				content: "Fusion Shoe Zone"
			},
			{
				property: "og:title",
				content: "Fusion Shoe Zone & Accessories"
			},
			{
				property: "og:description",
				content: "Premium shoes, accessories & kids fashion. Walk it. Wear it. Love it."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/fusion-logo.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	});
}
var BASE_URL = "";
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/shoes",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/men-accessories",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/kids",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/new-arrivals",
				changefreq: "daily",
				priority: "0.8"
			},
			{
				path: "/offers",
				changefreq: "daily",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.5"
			}
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$7 = () => import("./shoes-DNEA9LKK.mjs");
var Route$7 = createFileRoute("/shoes")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [
		{ title: "Premium Shoes · Fusion Shoe Zone" },
		{
			name: "description",
			content: "Explore luxury sneakers, casual, sports and formal shoes at Fusion Shoe Zone."
		},
		{
			property: "og:title",
			content: "Premium Shoes · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Sneakers, casual, sports and formal — crafted for everyday luxury."
		}
	] })
});
var $$splitComponentImporter$6 = () => import("./offers-BN7zqIS_.mjs");
var Route$6 = createFileRoute("/offers")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [
		{ title: "Special Offers · Fusion Shoe Zone" },
		{
			name: "description",
			content: "Up to 50% off on premium shoes, accessories and kids fashion."
		},
		{
			property: "og:title",
			content: "Special Offers · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Iconic pieces at unbeatable prices."
		}
	] })
});
var $$splitComponentImporter$5 = () => import("./new-arrivals-CIX_YvGS.mjs");
var Route$5 = createFileRoute("/new-arrivals")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [
		{ title: "New Arrivals · Fusion Shoe Zone" },
		{
			name: "description",
			content: "The latest drops in shoes, accessories and kids fashion at Fusion Shoe Zone."
		},
		{
			property: "og:title",
			content: "New Arrivals · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Fresh drops across every category. Be first."
		}
	] })
});
var $$splitComponentImporter$4 = () => import("./men-accessories-si1TTu0i.mjs");
var accessoriesSearchSchema = objectType({ subcategory: stringType().optional().catch("All") });
var Route$4 = createFileRoute("/men-accessories")({
	validateSearch: (search) => accessoriesSearchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [
		{ title: "Men's Accessories · Fusion Shoe Zone" },
		{
			name: "description",
			content: "Discover premium rings, bracelets, necklaces, and other accessories at Fusion Shoe Zone."
		},
		{
			property: "og:title",
			content: "Men's Accessories · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Rings, bracelets, and neck chains — details that define your style."
		}
	] })
});
var $$splitComponentImporter$3 = () => import("./kids-CHgoxYEP.mjs");
var Route$3 = createFileRoute("/kids")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [
		{ title: "Kids Collection · Fusion Shoe Zone" },
		{
			name: "description",
			content: "Shoes, t-shirts, dresses, jackets and accessories for kids at Fusion Shoe Zone."
		},
		{
			property: "og:title",
			content: "Kids Collection · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Playful, comfortable, and full of personality — for the littlest icons."
		}
	] })
});
var $$splitComponentImporter$2 = () => import("./contact-DDQj_7C5.mjs");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [
		{ title: "Contact Us · Fusion Shoe Zone" },
		{
			name: "description",
			content: "Get in touch with Fusion Shoe Zone & Accessories — store details, hours and support."
		},
		{
			property: "og:title",
			content: "Contact Us · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "We'd love to hear from you. Reach out anytime."
		}
	] })
});
var $$splitComponentImporter$1 = () => import("./about-Dg41Ve9i.mjs");
var Route$1 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "About Us · Fusion Shoe Zone" },
		{
			name: "description",
			content: "The story behind Fusion Shoe Zone & Accessories — premium shoes, men accessories and kids fashion."
		},
		{
			property: "og:title",
			content: "About Us · Fusion Shoe Zone"
		},
		{
			property: "og:description",
			content: "Affordable luxury and thoughtful service — that's the Fusion promise."
		}
	] })
});
var $$splitComponentImporter = () => import("./routes-BeoZzHbN.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Fusion Shoe Zone & Accessories · Walk it. Wear it. Love it." }, {
		name: "description",
		content: "Discover premium shoes, stylish men accessories and kids fashion at Fusion Shoe Zone & Accessories."
	}] })
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var ShoesRoute = Route$7.update({
	id: "/shoes",
	path: "/shoes",
	getParentRoute: () => Route$9
});
var OffersRoute = Route$6.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => Route$9
});
var NewArrivalsRoute = Route$5.update({
	id: "/new-arrivals",
	path: "/new-arrivals",
	getParentRoute: () => Route$9
});
var MenAccessoriesRoute = Route$4.update({
	id: "/men-accessories",
	path: "/men-accessories",
	getParentRoute: () => Route$9
});
var KidsRoute = Route$3.update({
	id: "/kids",
	path: "/kids",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	ContactRoute,
	KidsRoute,
	MenAccessoriesRoute,
	NewArrivalsRoute,
	OffersRoute,
	ShoesRoute,
	SitemapDotxmlRoute,
	ProductIdRoute: Route$10.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
