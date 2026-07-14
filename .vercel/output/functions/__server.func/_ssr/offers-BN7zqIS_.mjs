import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { t as Section } from "./Section-BoK5YPOU.mjs";
import { o as products } from "./products-NYJh0Ncc.mjs";
import { t as ProductGrid } from "./ProductGrid-BZdT1lSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offers-BN7zqIS_.js
var import_jsx_runtime = require_jsx_runtime();
function OffersPage() {
	const deals = products.filter((p) => p.oldPrice);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		crumb: "Offers",
		title: "Up to 50% Off",
		subtitle: "Limited-time deals across every category. When they're gone, they're gone."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: deals }) })] });
}
//#endregion
export { OffersPage as component };
