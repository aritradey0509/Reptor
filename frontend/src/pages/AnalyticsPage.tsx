import React from 'react';
import { ProgressionChart } from '../components/analytics/ProgressionChart';
import { MuscleSplitPie } from '../components/analytics/MuscleSplitPie';
import { PRWall } from '../components/analytics/PRWall';

export default function AnalyticsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Grid: Strength Trend & Volume Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressionChart />
        </div>
        <div>
          <MuscleSplitPie />
        </div>
      </div>

      {/* Trophy PR Wall */}
      <PRWall />
    </div>
  );
}
