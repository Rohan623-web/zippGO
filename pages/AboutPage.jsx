
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Target, Globe, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create a seamless, affordable, and safe mobility experience for every Indian, empowering movement and connecting communities."
    },
    {
      icon: Globe,
      title: "India-Focused",
      description: "Built for India, by people who understand its unique roads and challenges. We launched in 2025 to serve the heart of the nation."
    },
    {
      icon: Zap,
      title: "Fast & Affordable",
      description: "Leveraging technology to provide the quickest routes and most competitive pricing, ensuring you get value on every single ride."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is non-negotiable. From verified drivers to live tracking and an in-app SOS button, we've got you covered."
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About ZippGo | Our Story and Mission</title>
        <meta name="description" content="Learn about ZippGo, the India-focused ride-hailing platform launched in 2025. Our mission is to provide affordable, safe, and fast rides across India." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img className="w-full h-full object-cover opacity-10" alt="Abstract background of Indian cityscapes" src="https://images.unsplash.com/photo-1614795801066-5d544d8d464c" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Connecting India.</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">We are ZippGo, a homegrown ride-hailing service on a mission to redefine urban mobility across the nation.</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center"
                >
                  <div className="inline-block p-5 bg-yellow-400/10 rounded-full mb-6">
                    <feature.icon className="w-12 h-12 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold font-grotesk mb-3">{feature.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
