import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { StoreProvider } from "../lib/store";
import { Layout } from "../components/site/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center gradient-royal px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-white/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-ember px-6 py-3 text-sm font-semibold text-[color:var(--ember-foreground)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  // Log server-side only — never render raw error details in the DOM.
  // Exposing stack traces to users is a security risk and was the source of
  // the "h3 swallowed SSR error" message being visible on the deployed site.
  if (typeof window === "undefined") {
    console.error("[SSR] Root error boundary caught:", error);
  }
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-royal px-4 text-white">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-6">⚡</div>
        <h1 className="text-xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full gradient-ember px-6 py-2.5 text-sm font-semibold text-[color:var(--ember-foreground)] transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fusion Shoe Zone & Accessories · Walk it. Wear it. Love it." },
      {
        name: "description",
        content:
          "Premium footwear, premium accessories and stylish kids fashion. Shop Fusion Shoe Zone & Accessories — walk it, wear it, love it.",
      },
      { name: "author", content: "Fusion Shoe Zone" },
      { property: "og:title", content: "Fusion Shoe Zone & Accessories" },
      {
        property: "og:description",
        content: "Premium shoes, accessories & kids fashion. Walk it. Wear it. Love it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/fusion-logo.png", type: "image/png" },
      // NOTE: Google Fonts stylesheet is intentionally NOT included here.
      // External <link rel="stylesheet"> in head() triggers an SSR-side HTTP fetch
      // in TanStack Start / Nitro, causing an HTTPError crash on Vercel.
      // The font is loaded in RootShell via a plain <link> tag instead.
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Fonts loaded here as static HTML — NOT via head() links array.
            External link tags in head() can trigger SSR HTTP fetches in TanStack Start
            which crash with HTTPError on Vercel's serverless runtime. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Layout />
        <Toaster position="top-right" richColors closeButton />
      </StoreProvider>
    </QueryClientProvider>
  );
}
