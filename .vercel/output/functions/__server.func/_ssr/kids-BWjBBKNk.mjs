import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-BVshOLmR.mjs";
import { t as Section } from "./Section-BoK5YPOU.mjs";
import { r as byCategory } from "./products-TRiW77hf.mjs";
import { t as CatalogControls } from "./CatalogControls-o2-IHMP3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kids-BWjBBKNk.js
var import_jsx_runtime = require_jsx_runtime();
function KidsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		crumb: "Kids Collection",
		title: "Kids Collection",
		subtitle: "Soft materials, bright colors and big personality — ready for every adventure."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogControls, { items: byCategory("kids") }) })] });
}
//#endregion
export { KidsPage as component };
