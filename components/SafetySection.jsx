
import React from 'react';
    import { motion } from 'framer-motion';
    import { ShieldCheck, UserCheck, PhoneCall } from 'lucide-react';

    const safetyFeatures = [
      {
        icon: UserCheck,
        title: "Verified Drivers",
        description: "All our drivers undergo rigorous background checks and vehicle inspections to ensure your safety."
      },
      {
        icon: ShieldCheck,
        title: "In-App Safety Toolkit",
        description: "Access safety features like emergency assistance and ride sharing directly from the app."
      },
      {
        icon: PhoneCall,
        title: "24/7 Support",
        description: "Our dedicated support team is always available to assist you with any concerns, day or night."
      }
    ];

    const SafetySection = () => {
      return (
        <section className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black font-urbanist">Your Safety, Our Priority</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">We&apos;re committed to making every ZippGo ride a safe and secure experience. Learn about the measures we take to protect you.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
                >
                  <div className="inline-block p-5 bg-yellow-400/10 rounded-full mb-6">
                    <feature.icon className="w-12 h-12 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-grotesk mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default SafetySection;
