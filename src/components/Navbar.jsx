import { Menu, User, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-rose-500 shadow-sm" />
          <span className="font-extrabold tracking-tight text-xl">Kung Fu Kenny</span>
          <span className="ml-2 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 hidden sm:inline-flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" /> Dojo
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#adventures" className="text-black/70 hover:text-black transition-colors">Adventures</a>
          <a href="#signup" className="text-black/70 hover:text-black transition-colors">Join Dojo</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white hover:bg-black/5 transition-colors">
            <Menu size={18} />
          </button>
          <button className="hidden md:inline-flex items-center gap-2 h-10 px-3 rounded-md border border-black/10 bg-white hover:bg-black/5 transition-colors">
            <User size={16} />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
