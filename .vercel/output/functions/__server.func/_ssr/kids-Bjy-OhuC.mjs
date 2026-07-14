import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-Cx83n6lF.mjs";
import { t as Section } from "./Section-BEe_fMTY.mjs";
import { r as byCategory } from "./products-NYJh0Ncc.mjs";
import { t as CatalogControls } from "./CatalogControls-BoU3S5MC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kids-Bjy-OhuC.js
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
