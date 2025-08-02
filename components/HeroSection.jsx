
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Car, Bike, CarTaxiFront, PersonStanding } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const rideCategories = [
  { name: 'Mini', icon: Car },
  { name: 'Sedan', icon: CarTaxiFront },
  { name: 'SUV', icon: PersonStanding },
  { name: 'Bike', icon: Bike },
];

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Mini');
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
        <img  className="w-full h-full object-cover" alt="Dynamic background of an Indian city street with motion blur" src="https://images.unsplash.com/photo-1502091118678-dcbfd44d7afc" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-urbanist tracking-tighter"
        >
          India&apos;s New Ride
          <br />
          <span className="text-yellow-400">Fast. Safe. Affordable.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300"
        >
          Launched in 2025, ZippGo is revolutionizing travel across India. Your city, your ride, your way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm p-2 rounded-full space-x-1 sm:space-x-2">
            {rideCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`relative px-4 py-3 sm:px-6 rounded-full text-md sm:text-lg font-semibold transition-colors duration-300 ${
                  selectedCategory === category.name ? 'text-slate-900' : 'text-white hover:bg-slate-700/50'
                }`}
              >
                {selectedCategory === category.name && (
                  <motion.div
                    layoutId="category-pill-hero"
                    className="absolute inset-0 bg-yellow-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-8"
        >
          <Button 
            size="lg" 
            onClick={handleNotImplemented}
            className="bg-yellow-400 text-slate-900 font-bold text-xl px-10 py-8 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/40"
          >
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
