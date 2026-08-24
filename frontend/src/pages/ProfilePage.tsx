import React from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { User, Scale, Flame, Trophy, Shield, Download, Edit3 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
      {/* Profile Header Card */}
      <Card className="flex flex-col sm:flex-row items-center gap-6 p-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl font-extrabold text-white shadow-xl shadow-cyan-500/20 shrink-0">
          AD
        </div>

        <div className="space-y-2 text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="text-2xl font-bold text-white">Aritra Dey</h2>
            <Badge variant="cyan">Pro Member</Badge>
          </div>
          <p className="text-xs text-slate-400">
            PPL Progression Specialist • Tracking Dumbbell Press & Bodyweight Baseline
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Flame className="w-4 h-4" /> 5 Day Streak
            </span>
            <span className="flex items-center gap-1 text-cyan-400 font-bold">
              <Scale className="w-4 h-4" /> 63.6 kg Current
            </span>
            <span className="flex items-center gap-1 text-violet-400 font-bold">
              <Trophy className="w-4 h-4" /> 6 PRs Hit
            </span>
          </div>
        </div>

        <Button variant="secondary" size="sm" icon={<Edit3 className="w-4 h-4" />}>
          Edit Profile
        </Button>
      </Card>

      {/* Settings & Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Biometrics */}
        <Card className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Scale className="w-4 h-4 text-cyan-400" /> Biometrics & Target Goals
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">Current Bodyweight</span>
              <span className="font-bold text-white">63.6 kg</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">Target Bodyweight</span>
              <span className="font-bold text-cyan-400">65.0 kg</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">Primary Lift Goal</span>
              <span className="font-bold text-white">Flat DB Press 35kg</span>
            </div>
          </div>
        </Card>

        {/* Data Export */}
        <Card className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Shield className="w-4 h-4 text-emerald-400" /> Data & Privacy
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your workout datasets are saved securely and processed locally. Export your full workout history anytime in CSV format.
          </p>
          <div className="pt-2">
            <Button variant="secondary" size="sm" icon={<Download className="w-4 h-4" />}>
              Export Workout History (CSV)
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
