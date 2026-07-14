import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--ember)] mb-1">
          <span className="h-px w-6 bg-[color:var(--ember)]/50 rounded-full" />
          {eyebrow}
          <span className="h-px w-6 bg-[color:var(--ember)]/50 rounded-full" />
        </span>
      )}
      <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--royal)] dark:text-primary">
        {title}
      </h2>
      {/* Decorative brand accent bar */}
      <div className={`mt-3 flex items-center gap-2 ${center ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-10 rounded-full bg-[color:var(--ember)] shadow-[0_0_8px_rgba(255,138,0,0.5)]" />
        <div className="h-1 w-6 rounded-full bg-[color:var(--teal)] shadow-[0_0_8px_rgba(15,148,144,0.5)]" />
        <div className="h-1 w-3 rounded-full bg-[color:var(--royal)]/40" />
      </div>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}
