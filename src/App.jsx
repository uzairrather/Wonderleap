import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import StudentsPage from './pages/StudentsPage';
import ParentsPage from './pages/ParentsPage';
import ZoneDetailPage from './pages/ZoneDetailPage';
import PricingPage from './pages/PricingPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import { ZonesPage } from './pages/OtherPages';
import CareersPage from './pages/CareersPage';
// Auth Pages
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ForgotPassword from './components/auth/ForgotPassword';

// Dashboard Pages
import TeacherDashboardPage from './pages/dashboards/TeacherDashboardPage';
import StudentDashboardPage from './pages/dashboards/StudentDashboardPage';
import ParentDashboardPage from './pages/dashboards/ParentDashboardPage';
import AdminDashboardPage from './pages/dashboards/AdminDashboardPage';

// Mission Pages
import MissionPlayPage from './pages/missions/MissionPlayPage';
import MissionResultsPage from './pages/missions/MissionResultsPage';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/parents" element={<ParentsPage />} />
                <Route path="/zones" element={<ZonesPage />} />
                <Route path="/zones/:zoneId" element={<ZoneDetailPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Auth Routes */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/careers" element={<CareersPage />} />
                {/* Protected Dashboard Routes */}
                <Route 
                  path="/dashboard/teacher" 
                  element={
                    <ProtectedRoute allowedRoles={['teacher']}>
                      <TeacherDashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/student" 
                  element={
                    <ProtectedRoute allowedRoles={['student']}>
                      <StudentDashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/parent" 
                  element={
                    <ProtectedRoute allowedRoles={['parent']}>
                      <ParentDashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/admin" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboardPage />
                    </ProtectedRoute>
                  } 
                />

                {/* Mission Routes */}
                <Route 
                  path="/missions/:zoneId/:missionId/play" 
                  element={
                    <ProtectedRoute allowedRoles={['student']}>
                      <MissionPlayPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/missions/:zoneId/:missionId/results" 
                  element={
                    <ProtectedRoute allowedRoles={['student']}>
                      <MissionResultsPage />
                    </ProtectedRoute>
                  } 
                />

                {/* 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;  