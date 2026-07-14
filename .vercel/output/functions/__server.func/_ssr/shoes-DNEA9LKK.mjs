import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { t as Section } from "./Section-BoK5YPOU.mjs";
import { r as byCategory } from "./products-NYJh0Ncc.mjs";
import { t as CatalogControls } from "./CatalogControls-BTY0AnMi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shoes-DNEA9LKK.js
var import_jsx_runtime = require_jsx_runtime();
function ShoesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		crumb: "Shoes",
		title: "The Shoe Edit",
		subtitle: "From street-ready sneakers to boardroom-worthy oxfords — step into premium."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogControls, { items: byCategory("shoes") }) })] });
}
//#endregion
export { ShoesPage as component };
