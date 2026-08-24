import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#09090B] px-6 py-8 text-center text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-white">
          <Dumbbell className="w-4 h-4 text-cyan-400" />
          <span>Reptor AI Fitness Platform</span>
        </div>

        <p>© 2026 Reptor. Fast API + Pandas + TanStack Query + Google Stitch MCP.</p>
      </div>
    </footer>
  );
}
