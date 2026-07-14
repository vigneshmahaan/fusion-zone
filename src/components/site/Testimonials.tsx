import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Rao",
    role: "Product Designer",
    text: "The quality is incredible. My Aurora Runners feel like they're floating — best purchase this year.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Kabir Mehta",
    role: "Entrepreneur",
    text: "Ordered the Regal Chrono. Packaging, finish, everything screams premium. Fusion nailed it.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Ishita Verma",
    role: "Stylist",
    text: "The kids collection is gorgeous. My daughter refuses to take her Sunny Sneakers off.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative mt-12">
      <div className="relative mx-auto max-w-3xl">
        <div className="glass rounded-[2rem] p-8 sm:p-10 text-center shadow-luxe transition-all duration-500">
          <div className="flex justify-center gap-1 text-[color:var(--ember)]">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-lg sm:text-xl font-medium">"{reviews[i].text}"</p>
          <div className="mt-6 inline-flex items-center gap-3">
            <img src={reviews[i].avatar} alt={reviews[i].name} className="h-12 w-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-semibold text-[color:var(--royal)]">{reviews[i].name}</div>
              <div className="text-xs text-muted-foreground">{reviews[i].role}</div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Show review ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-[color:var(--royal)]" : "w-2 bg-[color:var(--royal)]/25"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
