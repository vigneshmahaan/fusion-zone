import { _ as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { t as Section } from "./Section-BoK5YPOU.mjs";
import { r as byCategory } from "./products-NYJh0Ncc.mjs";
import { t as CatalogControls } from "./CatalogControls-BTY0AnMi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/men-accessories-si1TTu0i.js
var import_jsx_runtime = require_jsx_runtime();
function MenAccessoriesPage() {
	const defaultSub = useSearch({ from: "/men-accessories" }).subcategory || "All";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		crumb: "Accessories",
		title: "Men's Accessories",
		subtitle: "Rings, bracelets, and chains — details that define your style."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogControls, {
		items: byCategory("accessories"),
		defaultSubcategory: defaultSub
	}) })] });
}
//#endregion
export { MenAccessoriesPage as component };
