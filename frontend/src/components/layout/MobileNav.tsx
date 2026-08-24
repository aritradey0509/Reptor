import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, BookOpen, LineChart, User } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const items = [
    { to: '/dashboard', label: 'Dash', icon: LayoutDashboard },
    { to: '/log', label: 'Log', icon: Dumbbell },
    { to: '/exercises', label: 'Library', icon: BookOpen },
    { to: '/analytics', label: 'Charts', icon: LineChart },
    { to: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-2 py-2 flex items-center justify-around">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                isActive
                  ? 'text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/40'
                  : 'text-slate-400 font-medium'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
