import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Dumbbell, Scale, Target, ArrowRight, Check } from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [currentWeight, setCurrentWeight] = useState(63.6);
  const [targetWeight, setTargetWeight] = useState(65.0);
  const [split, setSplit] = useState('Push/Pull/Legs');
  const [goal, setGoal] = useState('Hypertrophy');

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 max-w-xl mx-auto">
      <Card className="w-full space-y-6 p-8">
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Dumbbell className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-white">Setup Profile ({step}/3)</span>
          </div>

          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  s <= step ? 'bg-cyan-400 w-5' : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Biometrics */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Bodyweight & Baseline</h3>
              <p className="text-xs text-slate-400 mt-1">Set your starting bodyweight and target weight goal</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Current Bodyweight (kg)</label>
                <div className="relative">
                  <Scale className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    step="0.1"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm font-bold text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Target Bodyweight (kg)</label>
                <div className="relative">
                  <Target className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    step="0.1"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(parseFloat(e.target.value) || 0)}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm font-bold text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Training Split */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Preferred Training Split</h3>
              <p className="text-xs text-slate-400 mt-1">Select the structure that fits your weekly gym schedule</p>
            </div>

            <div className="space-y-2 pt-2">
              {['Push/Pull/Legs', 'Upper/Lower', 'Full Body', 'Bro Split'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSplit(item)}
                  className={`w-full p-3.5 rounded-xl border text-left font-bold text-sm flex items-center justify-between transition-all cursor-pointer ${
                    split === item
                      ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{item}</span>
                  {split === item && <Check className="w-4 h-4 text-cyan-400" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white">Primary Goal</h3>
              <p className="text-xs text-slate-400 mt-1">Optimize analytics calculations for your goal</p>
            </div>

            <div className="space-y-2 pt-2">
              {['Hypertrophy (Muscle Gain)', 'Strength (Max Loads)', 'Fat Loss & Recomp'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGoal(item)}
                  className={`w-full p-3.5 rounded-xl border text-left font-bold text-sm flex items-center justify-between transition-all cursor-pointer ${
                    goal === item
                      ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{item}</span>
                  {goal === item && <Check className="w-4 h-4 text-cyan-400" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {step > 1 ? (
            <Button variant="ghost" size="sm" onClick={() => setStep((prev) => prev - 1)}>
              Back
            </Button>
          ) : (
            <span />
          )}

          <Button variant="primary" size="md" onClick={handleNext} icon={<ArrowRight className="w-4 h-4" />}>
            {step === 3 ? 'Finish & Launch Dashboard' : 'Next Step'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
