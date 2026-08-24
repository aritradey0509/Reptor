import { NavLink } from 'react-router-dom';
import { Dumbbell, Sparkles, LayoutDashboard, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800 px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
            <Dumbbell className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-xl text-white tracking-tight flex items-center gap-1.5">
            Reptor <Sparkles className="w-4 h-4 text-cyan-400" />
          </span>
        </NavLink>

        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Open Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
