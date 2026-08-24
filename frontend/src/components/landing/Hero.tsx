import { ArrowRight, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#09090B] px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-400">
            <Dumbbell className="w-4 h-4" /> Science-Based Gym Analytics
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Train Smarter.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Progress with Science.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Reptor combines set-by-set workout logging, dumbbell pressing baseline tracking (63.6kg), and PPL progression analytics into a sleek, real-world platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate('/dashboard')}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              Launch Dashboard
            </button>

            <button
              onClick={() => navigate('/onboarding')}
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-zinc-900 cursor-pointer"
            >
              Set Up Goals
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}