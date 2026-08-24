import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Bell } from 'lucide-react';
import { Button } from '../common/Button';

interface HeaderProps {
  pageTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ pageTitle = 'Gym Analytics' }) => {
  const navigate = useNavigate();

  return (
    <header className="h-16 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-20 px-4 sm:px-6 flex items-center justify-between">
      {/* Title */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-extrabold text-white tracking-tight">{pageTitle}</h2>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Quick Log Button */}
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate('/log')}
          icon={<Plus className="w-4 h-4" />}
        >
          <span className="hidden sm:inline">Log Workout</span>
          <span className="sm:hidden">Log</span>
        </Button>

        {/* Notifications Icon */}
        <button
          className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 absolute top-1.5 right-1.5 animate-pulse" />
        </button>
      </div>
    </header>
  );
};
