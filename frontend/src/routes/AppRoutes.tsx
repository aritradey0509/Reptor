import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import WorkoutLogPage from "../pages/WorkoutLogPage";
import ExercisesPage from "../pages/ExercisesPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import OnboardingPage from "../pages/OnboardingPage";
import ProfilePage from "../pages/ProfilePage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Authenticated Application Shell */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/log" element={<WorkoutLogPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}