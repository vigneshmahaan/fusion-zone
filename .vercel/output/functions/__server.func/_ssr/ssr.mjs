//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
if (typeof process !== "undefined" && typeof process.on === "function") {
	process.on("uncaughtException", (error) => record(error));
	process.on("unhandledRejection", (reason) => record(reason));
}
function recordError(error) {
	record(error);
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
/**
* Renders a clean, user-facing error page.
*
* NOTE: Error details (message, stack) are intentionally NOT included in the
* HTML output. They are already written to server logs via console.error in
* server.ts. Exposing internal error details in the browser response is a
* security risk and was causing the "h3 swallowed SSR error" message to be
* displayed directly to users in production.
*/
function renderErrorPage(_error) {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load · Fusion Shoe Zone</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        font: 15px/1.5 system-ui, -apple-system, sans-serif;
        background: linear-gradient(135deg, #0f1b2d 0%, #0b3d3b 100%);
        color: #fff;
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
      }
      .card { max-width: 28rem; width: 100%; text-align: center; }
      .icon { font-size: 3rem; margin-bottom: 1rem; }
      h1 { font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem; }
      p { color: rgba(255,255,255,0.65); margin: 0 0 2rem; font-size: 0.9375rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button {
        padding: 0.625rem 1.25rem;
        border-radius: 9999px;
        font: inherit;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        transition: opacity 0.15s, transform 0.15s;
      }
      a:hover, button:hover { opacity: 0.85; transform: scale(1.03); }
      .primary { background: #ff8a00; color: #fff; }
      .secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">⚡</div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-B6QeCerR.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	const err = consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`);
	console.error("[SSR] Catastrophic render error:", err);
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error("[SSR] Unhandled server error:", error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, recordError as n, renderErrorPage as t };
