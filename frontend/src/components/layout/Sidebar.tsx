import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Dumbbell,
  BookOpen,
  LineChart,
  UserCheck,
  User,
  Flame,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggleCollapse }) => {
  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/log', label: 'Workout Logger', icon: Dumbbell },
    { to: '/exercises', label: 'Exercises Library', icon: BookOpen },
    { to: '/analytics', label: 'Analytics & PRs', icon: LineChart },
    { to: '/onboarding', label: 'Setup Goals', icon: UserCheck },
    { to: '/profile', label: 'My Profile', icon: User },
  ];

  return (
    <aside
      className={`hidden md:flex flex-col bg-slate-950/90 border-r border-slate-800/80 transition-all duration-300 relative z-30 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/80">
        <NavLink to="/" className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-extrabold text-lg shadow-lg shadow-cyan-500/20 shrink-0">
            <Dumbbell className="w-5 h-5" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1">
                Reptor <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">Pro Gym Platform</span>
            </div>
          )}
        </NavLink>

        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Streak Badge */}
      {!isCollapsed && (
        <div className="mx-4 mt-4 p-3 rounded-xl glass-card border border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <Flame className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">5 Day Streak!</p>
              <p className="text-[10px] text-amber-400/90 font-medium">Keep hitting PPL</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`
              }
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Profile Mini */}
      <div className="p-4 border-t border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-md">
            AD
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="text-xs font-bold text-white truncate">Aritra Dey</span>
              <span className="text-[10px] text-cyan-400 truncate">63.6 kg • PPL Split</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
