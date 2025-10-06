export default function Footer() {
  return (
    <footer id="about" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">About the Dojo</h3>
          <p className="mt-2 text-sm text-black/70">
            Kung Fu Kenny is a playful homage to over-the-top martial arts energy blended with small-town shenanigans.
            Train, laugh, and chase belts in equal measure.
          </p>
        </div>
        <div className="sm:text-right">
          <h3 className="font-semibold">Credits</h3>
          <p className="mt-2 text-sm text-black/70">
            Built with Vite + React + Tailwind. 3D scene by Spline. Icons by Lucide.
          </p>
          <p className="mt-1 text-xs text-black/50">This project is a fan-made parody and not affiliated with any official franchise.</p>
        </div>
      </div>
    </footer>
  );
}
