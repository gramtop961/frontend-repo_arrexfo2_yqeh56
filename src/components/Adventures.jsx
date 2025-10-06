import { Sword, Trophy, Map, Shield } from 'lucide-react';

const adventures = [
  {
    icon: Sword,
    title: 'Cartman Kata Chaos',
    desc: 'Master the greedy palm strike and navigate moral ambiguity with maximum sass.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    title: 'Kenny’s Silent Shadow',
    desc: 'Learn the art of invincible silence and respawn resilience across wild quests.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Map,
    title: 'Stan’s Balance Path',
    desc: 'Find harmony between leadership and awkwardness. Bonus points for eye-roll defense.',
    color: 'from-cyan-500 to-indigo-600',
  },
  {
    icon: Trophy,
    title: 'Kyle’s Logic Trials',
    desc: 'Debate, deduce, and deliver spinning back kicks with ironclad reasoning.',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function Adventures() {
  return (
    <section id="adventures" className="py-16 bg-gradient-to-b from-transparent to-blue-950/30">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Choose Your Dojo Path</h2>
        <p className="mt-2 text-center text-white/80 max-w-2xl mx-auto">
          Pick a path inspired by South Park’s finest and level up your belts. Every quest unlocks unique abilities and ridiculous rewards.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventures.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:shadow-lg hover:bg-white/10 transition-all">
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center shadow-md`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-sm text-white/80 mt-1">{desc}</p>
              <button className="mt-4 inline-flex text-sm items-center gap-1 font-medium text-white/90 hover:text-white">
                Enter Quest →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
