import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { t as Section } from "./Section-BoK5YPOU.mjs";
import { a as newArrivals } from "./products-TRiW77hf.mjs";
import { t as ProductGrid } from "./ProductGrid-BuVQtTY2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-arrivals-CMYUh5GY.js
var import_jsx_runtime = require_jsx_runtime();
function NewArrivalsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		crumb: "New Arrivals",
		title: "Just Landed",
		subtitle: "This week's freshest additions across every category."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: newArrivals() }) })] });
}
//#endregion
export { NewArrivalsPage as component };
