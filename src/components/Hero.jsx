import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/40 to-blue-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="inline-block border-2 border-red-500 rounded-lg px-4 py-2 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          South Park Dojo: The Legend of Kung Fu Kenny
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Train with the most chaotic masters of South Park. Balance your inner zen with outer mayhem and collect legendary belts along the way.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#adventures" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-white text-blue-900 hover:bg-white/90 transition-colors">
            <Rocket size={18} /> Start Adventure
          </a>
          <a href="#about" className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-white/20 bg-transparent hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
