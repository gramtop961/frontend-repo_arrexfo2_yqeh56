import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
      {/* Decorative glow blobs (no external assets) */}
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-amber-200 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-rose-200 blur-3xl opacity-50" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          South Park Dojo: The Legend of Kung Fu Kenny
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl mx-auto">
          Train with the most chaotic masters of South Park. Balance your inner zen with outer mayhem and collect legendary belts along the way.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#adventures" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-black text-white hover:bg-black/90 transition-colors">
            <Rocket size={18} /> Start Adventure
          </a>
          <a href="#about" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
