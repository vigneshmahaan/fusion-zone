import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { recordError } from "./lib/error-capture";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    // Always log the raw error server-side so it appears in Vercel function logs.
    console.error("[middleware] Unhandled error during SSR:", error);
    recordError(error);

    // Re-throw h3/TanStack HTTP errors (have statusCode) so the router can
    // handle 404s, redirects, etc. correctly.
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }

    // For truly unexpected errors, return a clean HTML fallback.
    // The root errorComponent in __root.tsx handles errors that occur during
    // React rendering — this catches errors that happen before React even runs.
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
