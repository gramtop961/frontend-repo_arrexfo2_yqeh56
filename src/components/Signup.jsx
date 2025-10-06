import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  return (
    <section id="signup" className="py-16">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Join the Dojo</h2>
        <p className="mt-2 text-black/70">Sign up to receive quests, belt promotions, and exclusive dojo lore.</p>
        {submitted ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 p-4 flex items-center gap-2 justify-center">
            <CheckCircle2 size={18} /> You’re in! Keep an eye on your inbox for your first quest.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 flex gap-2">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-md border border-black/10 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-black/20"
                placeholder="you@dojo.com"
              />
            </div>
            <button className="h-12 px-5 rounded-md bg-black text-white hover:bg-black/90">Join</button>
          </form>
        )}
      </div>
    </section>
  );
}
