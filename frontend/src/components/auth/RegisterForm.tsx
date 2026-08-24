import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Dumbbell, Lock, Mail, User, ArrowRight } from 'lucide-react';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding');
  };

  return (
    <Card className="w-full max-w-md p-8 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400">
          <Dumbbell className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Create Your Reptor Account</h2>
        <p className="text-xs text-slate-400">Start tracking your dumbbell pressing & PPL progression</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400">Full Name</label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Aritra Dey"
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400">Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-400">Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
          Continue to Onboarding
        </Button>
      </form>

      <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
        Already have an account?{' '}
        <Link to="/login" className="text-cyan-400 font-bold hover:underline">
          Sign In
        </Link>
      </div>
    </Card>
  );
};
