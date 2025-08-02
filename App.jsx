import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context
import { AuthProvider } from '@/contexts/AuthContext';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingAuthButtons from '@/components/FloatingAuthButtons';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PricingPage from '@/pages/PricingPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import CancellationPolicyPage from '@/pages/CancellationPolicyPage';
import StartEarningPage from '@/pages/StartEarningPage';
import TrackRidePage from '@/pages/TrackRidePage';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from '@/pages/Dashboard';

// Driver Pages
import { 
  DriverLogin, 
  DriverRegister, 
  DriverDashboard, 
  RideOngoing 
} from '@/driver';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || 
                     location.pathname === '/driver/login' || location.pathname === '/driver/register';

  return (
    <AuthProvider>
      <div className="bg-slate-900 text-white font-sans">
        {!isAuthPage && <Header />}
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
            <Route path="/start-earning" element={<StartEarningPage />} />
            <Route path="/track-ride" element={<TrackRidePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Driver Routes */}
            <Route path="/driver/login" element={<DriverLogin />} />
            <Route path="/driver/register" element={<DriverRegister />} />
            <Route path="/driver/dashboard" element={<DriverDashboard />} />
            <Route path="/driver/ride/:rideId" element={<RideOngoing />} />
          </Routes>
        </AnimatePresence>
        {!isAuthPage && <Footer />}
        <FloatingAuthButtons />
      </div>
    </AuthProvider>
  );
}

export default App;
