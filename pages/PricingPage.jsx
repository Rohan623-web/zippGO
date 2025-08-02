
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Car, Bike, CarTaxiFront, PersonStanding, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const categories = [
  { name: 'Bike', icon: Bike, fare: '₹8/km', description: 'Quick and nimble bike taxis for solo trips through traffic.' },
  { name: 'Mini', icon: Car, fare: '₹12/km', description: 'Affordable hatchbacks for your everyday commute.' },
  { name: 'Sedan', icon: CarTaxiFront, fare: '₹15/km', description: 'Comfortable sedans with extra space and premium feel.' },
  { name: 'SUV', icon: PersonStanding, fare: '₹20/km', description: 'Spacious SUVs for groups, luggage, and family trips.' },
];

const PricingCard = ({ category, index }) => {
  const { toast } = useToast();

  const handleNotImplemented = (e) => {
    e.stopPropagation();
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700 p-8 text-center flex flex-col h-full"
    >
      <div className="flex-grow">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block"
        >
          <category.icon className="w-24 h-24 text-yellow-400 mx-auto" />
        </motion.div>
        <h3 className="mt-6 text-3xl font-bold font-grotesk">{category.name}</h3>
        <p className="text-5xl font-black my-4 text-cyan-400">{category.fare}</p>
        <p className="mt-2 text-slate-400">{category.description}</p>
      </div>
      <Button onClick={handleNotImplemented} className="mt-8 bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 w-full">
        Book Now <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
};

const PricingPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Pricing | ZippGo Ride Fares</title>
        <meta name="description" content="Find the best ride fares with ZippGo. Check out our competitive pricing for Bike, Mini, Sedan, and SUV rides across India." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Transparent Pricing</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">Simple, upfront fares for every ride. No hidden charges, ever.</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <PricingCard key={category.name} category={category} index={index} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center text-slate-400 bg-slate-800/50 p-6 rounded-xl max-w-3xl mx-auto"
            >
              <p className="font-semibold">Please Note:</p>
              <p>Prices are estimates and may vary based on real-time traffic, demand, and applicable tolls or surcharges. The final fare will be shown in the app before you confirm your ride.</p>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default PricingPage;
