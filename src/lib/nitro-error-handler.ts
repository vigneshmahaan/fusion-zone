import { defineErrorHandler } from "nitro";
import { recordError } from "./error-capture";

export default defineErrorHandler((error, event) => {
  // Log the actual original error details so they show up in Vercel logs
  console.error("[Nitro Error Handler] Caught unhandled server-side error:", error);

  // Capture the error in error-capture so server.ts can consume it
  recordError(error);

  // Return the default JSON format so that normalizeCatastrophicSsrResponse is triggered in server.ts
  return new Response(
    JSON.stringify({
      status: 500,
      unhandled: true,
      message: "HTTPError",
    }),
    {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    }
  );
});
