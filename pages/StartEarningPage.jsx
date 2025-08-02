
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { DollarSign, Clock, Map } from 'lucide-react';

const StartEarningPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Driver registration logic would go here in production
    toast({
      title: "✅ Registration Submitted!",
      description: "Thank you for your interest! Our team will review your application and get in touch. (This is a demo).",
    });
    setFormData({ name: '', email: '', phone: '', city: '' });
  };

  const benefits = [
    { icon: DollarSign, title: "Competitive Earnings", description: "Keep a larger portion of your fares with our industry-leading commission rates." },
    { icon: Clock, title: "Flexible Hours", description: "Be your own boss. Drive when you want, where you want. Full-time or part-time." },
    { icon: Map, title: "24/7 Support", description: "Our dedicated support team is always available to help you on and off the road." },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Start Earning with ZippGo | Drive with Us</title>
        <meta name="description" content="Join ZippGo as a driver partner and start earning on your own terms. Enjoy flexible hours, competitive pay, and 24/7 support. Sign up today!" />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img className="w-full h-full object-cover opacity-10" alt="A driver's view from inside a car on a city street" src="https://images.unsplash.com/photo-1528156074690-796e5185764f" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Drive with ZippGo.</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">Take the wheel and drive your own success. Join thousands of driver-partners across India earning with ZippGo.</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-bold mb-8">Why Drive With Us?</h2>
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-cyan-400/10 p-3 rounded-full">
                        <benefit.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{benefit.title}</h3>
                        <p className="text-slate-300 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="bg-slate-800/50 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Become a Driver-Partner</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Full Name</Label>
                    <Input id="name" type="text" placeholder="e.g., Vijay Singh" required value={formData.name} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-lg">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-lg">City</Label>
                    <Input id="city" type="text" placeholder="e.g., Mumbai" required value={formData.city} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 h-12" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-yellow-400 text-slate-900 font-bold text-lg hover:bg-yellow-300">Register Now</Button>
                </form>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default StartEarningPage;
