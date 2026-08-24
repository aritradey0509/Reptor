import { useNavigate } from 'react-router-dom';
import { Dumbbell, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-[#09090B]">
      <div className="mx-auto max-w-5xl glass-card rounded-3xl p-10 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-blue-950/20 text-center space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Dumbbell className="w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Ready to Track Your PPL & Dumbbell Press Baseline?
        </h2>

        <p className="mx-auto max-w-2xl text-sm md:text-base text-zinc-400">
          Sync live workout logs with FastAPI, process datasets with Pandas, and utilize Google Stitch MCP Server integration.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <Sparkles className="w-5 h-5" />
            <span>Go to Live Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
