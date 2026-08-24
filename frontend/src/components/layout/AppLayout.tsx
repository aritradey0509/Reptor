import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { MobileNav } from './MobileNav';

export const AppLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Page title mapping based on route path
  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Gym Analytics Dashboard';
      case '/log':
        return 'Live Workout Logger';
      case '/exercises':
        return 'Exercise Library';
      case '/analytics':
        return 'Progression & PR Wall';
      case '/onboarding':
        return 'Fitness Setup & Goals';
      case '/profile':
        return 'My Profile';
      default:
        return 'Reptor Fitness';
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-100 flex flex-row">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <Header pageTitle={getTitle()} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
};
