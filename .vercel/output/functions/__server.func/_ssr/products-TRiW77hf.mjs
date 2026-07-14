import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-TRiW77hf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
function safeGet(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function StoreProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)(() => safeGet("fsz.cart", []));
	const [wishlist, setWishlist] = (0, import_react.useState)(() => safeGet("fsz.wishlist", []));
	const [dark, setDark] = (0, import_react.useState)(() => safeGet("fsz.dark", false));
	(0, import_react.useEffect)(() => {
		localStorage.setItem("fsz.cart", JSON.stringify(cart));
	}, [cart]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("fsz.wishlist", JSON.stringify(wishlist));
	}, [wishlist]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("fsz.dark", JSON.stringify(dark));
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	const value = (0, import_react.useMemo)(() => {
		return {
			cart,
			wishlist,
			dark,
			toggleDark: () => setDark((d) => !d),
			addToCart: (p, qty = 1) => {
				setCart((prev) => {
					if (prev.find((c) => c.product.id === p.id)) return prev.map((c) => c.product.id === p.id ? {
						...c,
						qty: c.qty + qty
					} : c);
					return [...prev, {
						product: p,
						qty
					}];
				});
				toast.success(`Added to cart`, { description: p.name });
			},
			removeFromCart: (id) => setCart((prev) => prev.filter((c) => c.product.id !== id)),
			updateQty: (id, qty) => setCart((prev) => prev.map((c) => c.product.id === id ? {
				...c,
				qty: Math.max(1, qty)
			} : c)),
			clearCart: () => setCart([]),
			toggleWishlist: (p) => {
				setWishlist((prev) => {
					if (prev.some((x) => x.id === p.id)) {
						toast(`Removed from wishlist`, { description: p.name });
						return prev.filter((x) => x.id !== p.id);
					}
					toast.success(`Added to wishlist`, { description: p.name });
					return [...prev, p];
				});
			},
			inWishlist: (id) => wishlist.some((x) => x.id === id),
			cartCount: cart.reduce((n, c) => n + c.qty, 0),
			cartTotal: cart.reduce((n, c) => n + c.qty * c.product.price, 0)
		};
	}, [
		cart,
		wishlist,
		dark
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value,
		children
	});
}
function useStore() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useStore must be used within StoreProvider");
	return c;
}
var img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
var products = [
	{
		id: "s1",
		name: "Aurora Runner Pro",
		price: 149,
		oldPrice: 199,
		category: "shoes",
		subcategory: "Sneakers",
		image: img("1542291026-7eec264c27ff"),
		images: [
			img("1542291026-7eec264c27ff"),
			img("1542291026-7eec264c27ff", 600),
			img("1595950653106-6c9ebd614d3a"),
			img("1552346154-21d32810aba3")
		],
		rating: 4.8,
		badge: "-25%",
		bestSeller: true,
		newArrival: true
	},
	{
		id: "s2",
		name: "Nimbus Court Classic",
		price: 129,
		category: "shoes",
		subcategory: "Casual",
		image: img("1600185365483-26d7a4cc7519"),
		images: [
			img("1600185365483-26d7a4cc7519"),
			img("1600185365483-26d7a4cc7519", 600),
			img("1520639888713-7851133b1ed0"),
			img("1542291026-7eec264c27ff")
		],
		rating: 4.6,
		newArrival: true
	},
	{
		id: "s3",
		name: "Velocity X Trainer",
		price: 179,
		oldPrice: 229,
		category: "shoes",
		subcategory: "Sports",
		image: img("1595950653106-6c9ebd614d3a"),
		images: [
			img("1595950653106-6c9ebd614d3a"),
			img("1595950653106-6c9ebd614d3a", 600),
			img("1584735175315-9d5df23860e6"),
			img("1552346154-21d32810aba3")
		],
		rating: 4.9,
		badge: "HOT",
		bestSeller: true
	},
	{
		id: "s4",
		name: "Onyx Formal Oxford",
		price: 199,
		category: "shoes",
		subcategory: "Formal",
		image: img("1533867617858-e7b97e060509"),
		images: [
			img("1533867617858-e7b97e060509"),
			img("1533867617858-e7b97e060509", 600),
			img("1449505078894-e264902f0abb"),
			img("1600185365483-26d7a4cc7519")
		],
		rating: 4.7
	},
	{
		id: "s5",
		name: "Cloudline Slip-On",
		price: 99,
		oldPrice: 139,
		category: "shoes",
		subcategory: "Casual",
		image: img("1520639888713-7851133b1ed0"),
		images: [
			img("1520639888713-7851133b1ed0"),
			img("1520639888713-7851133b1ed0", 600),
			img("1600185365483-26d7a4cc7519"),
			img("1533867617858-e7b97e060509")
		],
		rating: 4.5,
		badge: "-28%"
	},
	{
		id: "s6",
		name: "Trailblazer Hi-Top",
		price: 159,
		category: "shoes",
		subcategory: "Sneakers",
		image: img("1552346154-21d32810aba3"),
		images: [
			img("1552346154-21d32810aba3"),
			img("1552346154-21d32810aba3", 600),
			img("1542291026-7eec264c27ff"),
			img("1595950653106-6c9ebd614d3a")
		],
		rating: 4.6,
		bestSeller: true
	},
	{
		id: "s7",
		name: "Pulse Elite Runner",
		price: 189,
		category: "shoes",
		subcategory: "Sports",
		image: img("1584735175315-9d5df23860e6"),
		images: [
			img("1584735175315-9d5df23860e6"),
			img("1584735175315-9d5df23860e6", 600),
			img("1595950653106-6c9ebd614d3a"),
			img("1552346154-21d32810aba3")
		],
		rating: 4.8,
		newArrival: true
	},
	{
		id: "s8",
		name: "Metro Leather Derby",
		price: 219,
		category: "shoes",
		subcategory: "Formal",
		image: img("1449505078894-e264902f0abb"),
		images: [
			img("1449505078894-e264902f0abb"),
			img("1449505078894-e264902f0abb", 600),
			img("1533867617858-e7b97e060509"),
			img("1600185365483-26d7a4cc7519")
		],
		rating: 4.7
	},
	{
		id: "w1",
		name: "Imperial Gold Signet",
		price: 189,
		oldPrice: 249,
		category: "accessories",
		subcategory: "Ring",
		image: img("1603561591411-07134e71a2a9"),
		images: [
			img("1603561591411-07134e71a2a9"),
			img("1603561591411-07134e71a2a9", 600),
			img("1605100804763-247f67b3557e"),
			img("1617038260897-41a1f14a8ca0")
		],
		rating: 4.9,
		badge: "-24%",
		bestSeller: true
	},
	{
		id: "w2",
		name: "Chrono Heritage Gold",
		price: 349,
		oldPrice: 499,
		category: "accessories",
		subcategory: "Watch",
		image: img("1524592094714-0f0654e20314"),
		images: [
			img("1524592094714-0f0654e20314"),
			img("1524592094714-0f0654e20314", 600),
			img("1508685096489-7aacd43bd3b1"),
			img("1542496658-e33a6d0d50f6")
		],
		rating: 4.9,
		badge: "-30%",
		bestSeller: true
	},
	{
		id: "w3",
		name: "Nova Smart Classic",
		price: 299,
		category: "accessories",
		subcategory: "Watch",
		image: img("1508685096489-7aacd43bd3b1"),
		images: [
			img("1508685096489-7aacd43bd3b1"),
			img("1508685096489-7aacd43bd3b1", 600),
			img("1524592094714-0f0654e20314"),
			img("1542496658-e33a6d0d50f6")
		],
		rating: 4.7,
		newArrival: true
	},
	{
		id: "w4",
		name: "Titanium Matte Band",
		price: 119,
		oldPrice: 159,
		category: "accessories",
		subcategory: "Ring",
		image: img("1605100804763-247f67b3557e"),
		images: [
			img("1605100804763-247f67b3557e"),
			img("1605100804763-247f67b3557e", 600),
			img("1603561591411-07134e71a2a9"),
			img("1506152983158-b4a74a01c721")
		],
		rating: 4.8,
		badge: "-25%",
		bestSeller: true
	},
	{
		id: "w5",
		name: "Regal Leather Analog",
		price: 229,
		category: "accessories",
		subcategory: "Watch",
		image: img("1524592094714-0f0654e20314"),
		images: [
			img("1524592094714-0f0654e20314"),
			img("1524592094714-0f0654e20314", 600),
			img("1508685096489-7aacd43bd3b1"),
			img("1542496658-e33a6d0d50f6")
		],
		rating: 4.6,
		newArrival: true
	},
	{
		id: "w6",
		name: "Textured Onyx Signet",
		price: 139,
		category: "accessories",
		subcategory: "Ring",
		image: img("1617038260897-41a1f14a8ca0"),
		images: [
			img("1617038260897-41a1f14a8ca0"),
			img("1617038260897-41a1f14a8ca0", 600),
			img("1603561591411-07134e71a2a9"),
			img("1506152983158-b4a74a01c721")
		],
		rating: 4.5
	},
	{
		id: "k1",
		name: "Sunny Sneakers",
		price: 59,
		oldPrice: 79,
		category: "kids",
		subcategory: "Shoes",
		image: img("1514989940723-e8e51635b782"),
		images: [
			img("1514989940723-e8e51635b782"),
			img("1514989940723-e8e51635b782", 600),
			img("1560769629-975ec94e6a86"),
			img("1519238263530-99bdd11df2ea")
		],
		rating: 4.8,
		badge: "-25%",
		bestSeller: true,
		newArrival: true
	},
	{
		id: "k2",
		name: "Rainbow Tee",
		price: 25,
		category: "kids",
		subcategory: "T-Shirts",
		image: img("1519238263530-99bdd11df2ea"),
		images: [
			img("1519238263530-99bdd11df2ea"),
			img("1519238263530-99bdd11df2ea", 600),
			img("1518831959646-742c3a14ebf7"),
			img("1514989940723-e8e51635b782")
		],
		rating: 4.7
	},
	{
		id: "k3",
		name: "Blossom Dress",
		price: 45,
		category: "kids",
		subcategory: "Dresses",
		image: img("1518831959646-742c3a14ebf7"),
		images: [
			img("1518831959646-742c3a14ebf7"),
			img("1518831959646-742c3a14ebf7", 600),
			img("1519238263530-99bdd11df2ea"),
			img("1503944583220-79d8926ad5e2")
		],
		rating: 4.9,
		newArrival: true
	},
	{
		id: "k4",
		name: "Adventure Jacket",
		price: 69,
		oldPrice: 89,
		category: "kids",
		subcategory: "Jackets",
		image: img("1503944583220-79d8926ad5e2"),
		images: [
			img("1503944583220-79d8926ad5e2"),
			img("1503944583220-79d8926ad5e2", 600),
			img("1518831959646-742c3a14ebf7"),
			img("1519238263530-99bdd11df2ea")
		],
		rating: 4.6,
		badge: "-22%"
	},
	{
		id: "k5",
		name: "Star Backpack",
		price: 39,
		category: "kids",
		subcategory: "Accessories",
		image: img("1622560480605-d83c853bc5c3"),
		images: [
			img("1622560480605-d83c853bc5c3"),
			img("1622560480605-d83c853bc5c3", 600),
			img("1560769629-975ec94e6a86"),
			img("1503944583220-79d8926ad5e2")
		],
		rating: 4.8,
		bestSeller: true
	},
	{
		id: "k6",
		name: "Cloud Runners Kids",
		price: 65,
		category: "kids",
		subcategory: "Shoes",
		image: img("1560769629-975ec94e6a86"),
		images: [
			img("1560769629-975ec94e6a86"),
			img("1560769629-975ec94e6a86", 600),
			img("1514989940723-e8e51635b782"),
			img("1622560480605-d83c853bc5c3")
		],
		rating: 4.7
	}
];
var byCategory = (c) => products.filter((p) => p.category === c);
var bestSellers = () => products.filter((p) => p.bestSeller);
var newArrivals = () => products.filter((p) => p.newArrival);
var findProduct = (id) => products.find((p) => p.id === id);
//#endregion
export { newArrivals as a, findProduct as i, bestSellers as n, products as o, byCategory as r, useStore as s, StoreProvider as t };
