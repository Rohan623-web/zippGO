
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import SafetySection from '@/components/SafetySection';
import AppDownloadSection from '@/components/AppDownloadSection';
import TestimonialSection from '@/components/TestimonialSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>ZippGo - India&apos;s New Ride | Fast, Safe, Affordable</title>
        <meta name="description" content="Welcome to ZippGo, India's newest ride-hailing service launched in 2025. Offering affordable and safe bike, mini, sedan, and SUV rides across India." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <main>
        <HeroSection />
        <AboutSummarySection />
        <TestimonialSection />
        <SafetySection />
        <AppDownloadSection />
      </main>
    </PageTransition>
  );
};

const AboutSummarySection = () => (
  <section className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black font-urbanist">Connecting India, One Ride at a Time</h2>
        <p className="mt-6 text-lg text-slate-300">
          Launched in 2025, ZippGo is a proud India-focused ride-booking platform. We&apos;re dedicated to providing affordable, safe, and fast transportation for everyone. With live tracking powered by Google Maps, your peace of mind is our priority.
        </p>
        <Button asChild size="lg" className="mt-8 bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300">
          <Link to="/about">
            Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HomePage;
