import { Activity, Brain, Dumbbell, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="relative py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="border-b border-zinc-800 px-8 py-6 flex items-center justify-between">

            <div>
              <p className="text-zinc-400 text-sm">
                Good Evening,
              </p>

              <h2 className="text-3xl font-bold mt-1">
                Aritra 👋
              </h2>
            </div>

            <div className="rounded-full bg-green-500/15 px-4 py-2 text-green-400 text-sm font-semibold">
              AI Coach Active
            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 p-8">

            {/* Left */}

            <div className="space-y-6">

              <div className="rounded-2xl bg-zinc-800/70 p-5">

                <div className="flex items-center gap-3">
                  <Activity className="text-green-400" />
                  <span className="text-zinc-400">
                    Workout Streak
                  </span>
                </div>

                <h3 className="text-5xl font-black mt-4">
                  18
                </h3>

                <p className="text-green-400 mt-2">
                  days
                </p>

              </div>

              <div className="rounded-2xl bg-zinc-800/70 p-5">

                <div className="flex items-center gap-3">
                  <Dumbbell className="text-green-400" />
                  <span className="text-zinc-400">
                    Weekly Volume
                  </span>
                </div>

                <h3 className="text-4xl font-black mt-4">
                  13,240 kg
                </h3>

              </div>

            </div>

            {/* Middle */}

            <div className="rounded-2xl bg-zinc-800/70 p-6">

              <div className="flex items-center gap-3 mb-6">

                <TrendingUp className="text-green-400" />

                <h3 className="font-semibold">
                  Bench Progress
                </h3>

              </div>

              <div className="flex items-end justify-between h-56">

                {[65, 70, 75, 80, 82.5].map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-10 rounded-xl bg-green-500"
                      style={{
                        height: `${value * 2}px`,
                      }}
                    />

                    <span className="text-sm text-zinc-400">
                      {value}
                    </span>

                  </div>
                ))}

              </div>

            </div>

            {/* Right */}

            <div className="rounded-2xl bg-gradient-to-br from-green-500/15 to-zinc-900 p-6 border border-green-500/20">

              <div className="flex items-center gap-3">

                <Brain className="text-green-400" />

                <h3 className="font-semibold">
                  AI Insight
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                <div>

                  <p className="text-green-400 font-semibold">
                    Bench Plateau Detected
                  </p>

                  <p className="text-zinc-400 mt-2">
                    Your bench press has remained between
                    80–82.5 kg for the last four weeks.
                  </p>

                </div>

                <div>

                  <p className="text-white font-semibold">
                    Suggested Action
                  </p>

                  <p className="text-zinc-400 mt-2">
                    Maintain weekly volume but increase
                    intensity using heavier top sets.
                  </p>

                </div>

                <div className="rounded-xl bg-green-500/15 p-4">

                  <p className="text-green-400 font-bold">
                    Confidence
                  </p>

                  <p className="text-3xl font-black mt-1">
                    92%
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}