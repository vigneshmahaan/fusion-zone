import { Instagram } from "lucide-react";

const shots = [
  "1595950653106-6c9ebd614d3a",
  "1523275335684-37898b6baf30",
  "1514989940723-e8e51635b782",
  "1600185365483-26d7a4cc7519",
  "1546868871-7041f2a55e12",
  "1519238263530-99bdd11df2ea",
];

export function InstagramGallery() {
  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {shots.map((id) => (
        <a
          key={id}
          href="#"
          className="group relative aspect-square overflow-hidden rounded-2xl"
        >
          <img
            src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=80`}
            alt="Instagram"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[color:var(--royal)]/70 opacity-0 group-hover:opacity-100 transition grid place-items-center">
            <Instagram className="h-6 w-6 text-white" />
          </div>
        </a>
      ))}
    </div>
  );
}
