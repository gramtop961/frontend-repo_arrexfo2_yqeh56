import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Adventures from './components/Adventures';
import Signup from './components/Signup';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-950 via-blue-950 to-slate-950 text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Adventures />
        <Signup />
      </main>
    </div>
  );
}
