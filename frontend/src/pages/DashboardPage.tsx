import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Activity,
  Dumbbell,
  Scale,
  Trophy,
  RefreshCw,
  Search,
  AlertTriangle,
  NotebookPen,
  Plus
} from 'lucide-react'
import { fetchWorkouts } from '../services/api'
import { WorkoutRecord } from '../types/workout'
import { Button } from '../components/common/Button'
import { StatCard } from '../components/common/StatCard'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Query workouts data
  const { data, isLoading, isError, refetch, isFetching } = useQuery<{ data: WorkoutRecord[] }>({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  })

  const workoutList = data?.data ?? []

  // Metric Computations
  const currentBodyweight = useMemo(() => {
    if (!workoutList.length) return 63.6
    const validBw = workoutList.filter((item) => item.bodyweight_kg > 0)
    return validBw.length > 0 ? validBw[0].bodyweight_kg : 63.6
  }, [workoutList])

  const totalLogged = workoutList.length

  const topWeightRecord = useMemo(() => {
    if (!workoutList.length) return { weight: 30.0, exercise: 'Flat Dumbbell Press' }
    const sorted = [...workoutList].sort((a, b) => b.weight_kg - a.weight_kg)
    return { weight: sorted[0].weight_kg, exercise: sorted[0].exercise }
  }, [workoutList])

  const dumbbellPressRecord = useMemo(() => {
    return (
      workoutList.find((item) =>
        item.exercise.toLowerCase().includes('flat dumbbell press')
      ) || {
        weight_kg: 30.0,
        notes: 'Approximate current working weight; around 7 reps mentioned',
      }
    )
  }, [workoutList])

  // Filtered workout records
  const filteredWorkouts = useMemo(() => {
    return workoutList.filter((item) => {
      const matchesSearch =
        item.exercise.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.notes.toLowerCase().includes(searchTerm.toLowerCase())

      if (selectedCategory === 'All') return matchesSearch
      if (selectedCategory === 'Press')
        return matchesSearch && item.exercise.toLowerCase().includes('press')
      if (selectedCategory === 'Row / Pull')
        return (
          matchesSearch &&
          (item.exercise.toLowerCase().includes('row') ||
            item.exercise.toLowerCase().includes('pull'))
        )
      if (selectedCategory === 'Legs')
        return (
          matchesSearch &&
          (item.exercise.toLowerCase().includes('squat') ||
            item.exercise.toLowerCase().includes('deadlift'))
        )

      return matchesSearch
    })
  }, [workoutList, searchTerm, selectedCategory])

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900/90 to-cyan-950/20">
        <div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/60">
            Current Split: Push / Pull / Legs
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-2">
            Welcome back, Aritra!
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Tracking dumbbell pressing baseline & bodyweight progression (63.6 kg).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => refetch()}
            disabled={isFetching}
            icon={<RefreshCw className={`w-4 h-4 text-cyan-400 ${isFetching ? 'animate-spin' : ''}`} />}
          >
            Sync Data
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/log')}
            icon={<Plus className="w-4 h-4" />}
          >
            Start Workout
          </Button>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl animate-pulse space-y-3">
                <div className="h-4 bg-slate-800 rounded w-1/2" />
                <div className="h-8 bg-slate-800 rounded w-3/4" />
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-6 animate-pulse space-y-4">
            <div className="h-6 bg-slate-800 rounded w-1/4" />
            <div className="h-48 bg-slate-800/50 rounded-xl" />
          </div>
        </div>
      )}

      {/* Error Alert */}
      {isError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 rounded-2xl border-rose-500/30 bg-rose-950/20 text-slate-200 space-y-4"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-rose-300">FastAPI Connection Error</h3>
              <p className="text-sm text-slate-300 mt-1">
                Currently displaying cached dataset. To sync with live backend, start FastAPI:
              </p>
              <code className="block bg-slate-900 px-3 py-1.5 rounded-lg text-cyan-300 text-xs mt-2 font-mono">
                cd backend; python -m uvicorn app.main:app --reload --port 8000
              </code>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <div className="space-y-6">
          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard
              title="Current Bodyweight"
              value={currentBodyweight}
              unit="kg"
              subtitle="Optimal Progression Baseline"
              icon={<Scale className="w-5 h-5" />}
              accentColor="cyan"
            />
            <StatCard
              title="Logged Entries"
              value={totalLogged}
              unit="records"
              subtitle="PPL Split Active"
              icon={<Activity className="w-5 h-5" />}
              accentColor="violet"
            />
            <StatCard
              title="Top Working Weight"
              value={topWeightRecord.weight}
              unit="kg"
              subtitle={topWeightRecord.exercise}
              icon={<Trophy className="w-5 h-5" />}
              accentColor="amber"
            />
            <StatCard
              title="Flat DB Press Target"
              value={dumbbellPressRecord.weight_kg}
              unit="kg"
              subtitle="Working Weight (~7 reps)"
              icon={<Dumbbell className="w-5 h-5" />}
              accentColor="emerald"
            />
          </div>

          {/* Table Container Section */}
          <div className="glass-card rounded-2xl overflow-hidden border border-slate-800/80">
            {/* Table Header Controls */}
            <div className="p-5 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/40">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <NotebookPen className="w-5 h-5 text-cyan-400" />
                  Workout History & Progress Log
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Pandas CSV dataset loaded from FastAPI backend
                </p>
              </div>

              {/* Controls: Search and Filters */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search exercise or notes..."
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/60 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
                  {['All', 'Press', 'Row / Pull', 'Legs'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-cyan-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/80 bg-slate-950/50 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                    <th className="py-4 px-6">Exercise</th>
                    <th className="py-4 px-6">Working Weight (kg)</th>
                    <th className="py-4 px-6">Bodyweight (kg)</th>
                    <th className="py-4 px-6">Notes & Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  <AnimatePresence>
                    {filteredWorkouts.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-slate-500">
                          No matching workout logs found.
                        </td>
                      </tr>
                    ) : (
                      filteredWorkouts.map((row, index) => {
                        const isFlatDBPress = row.exercise
                          .toLowerCase()
                          .includes('flat dumbbell press')

                        return (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            className={`hover:bg-slate-800/40 transition-colors ${
                              isFlatDBPress ? 'bg-cyan-950/10' : ''
                            }`}
                          >
                            {/* Exercise Name */}
                            <td className="py-4 px-6 font-semibold text-slate-100 flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                              <div>
                                <span className="block text-white font-medium">
                                  {row.exercise}
                                </span>
                                {isFlatDBPress && (
                                  <span className="inline-block mt-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                                    Primary Target
                                  </span>
                                )}
                              </div>
                            </td>

                            {/* Weight kg */}
                            <td className="py-4 px-6 font-semibold text-slate-200">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                                {row.weight_kg > 0 ? `${row.weight_kg} kg` : 'Bodyweight'}
                              </span>
                            </td>

                            {/* Bodyweight kg */}
                            <td className="py-4 px-6 text-slate-300">
                              <span className="text-slate-400 font-mono text-xs">
                                {row.bodyweight_kg > 0 ? `${row.bodyweight_kg} kg` : '—'}
                              </span>
                            </td>

                            {/* Notes */}
                            <td className="py-4 px-6 text-slate-300 max-w-xs sm:max-w-md">
                              {row.notes ? (
                                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                                  {row.notes}
                                </p>
                              ) : (
                                <span className="text-xs text-slate-600 italic">No notes logged</span>
                              )}
                            </td>
                          </motion.tr>
                        )
                      })
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Showing {filteredWorkouts.length} of {workoutList.length} workout logs</span>
              <span className="text-slate-500">FastAPI + Pandas Integration</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}