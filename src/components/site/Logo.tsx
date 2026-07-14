import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Fusion Shoe Zone home">
      <img
        src="/fusion-logo.png"
        alt="Fusion Shoe Zone & Accessories"
        className={`${className} w-auto object-contain drop-shadow-[0_6px_20px_rgba(61,27,106,0.35)]`}
        loading="eager"
      />
    </Link>
  );
}
