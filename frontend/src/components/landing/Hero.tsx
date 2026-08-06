import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            AI Fitness Intelligence
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight tracking-tight md:text-8xl">
            Train Smarter.
            <br />
            <span className="text-green-400">
              Progress with Science.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Reptor combines workout tracking, AI, and exercise science
            to deliver personalized coaching backed by real evidence.
            No bro science. Just data.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400">
              Get Started
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-green-400 hover:bg-zinc-900">
              View GitHub
              <ArrowRight size={18} />
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}