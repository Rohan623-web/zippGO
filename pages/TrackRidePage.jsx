import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageTransition from '@/components/PageTransition';
    import { motion } from 'framer-motion';
    import { MapPin, Car, User, Clock } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const TrackRidePage = () => {
      return (
        <PageTransition>
          <Helmet>
            <title>Track Your Ride | ZippGo Live Tracking</title>
            <meta name="description" content="Track your ZippGo ride in real-time on the map. See your driver's location, estimated time of arrival, and ride details." />
          </Helmet>
          <div className="pt-20 bg-slate-900">
            <header className="py-24 bg-slate-900/50 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4"
              >
                <h1 className="text-5xl md:text-7xl font-black font-urbanist">Track Your Ride</h1>
                <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">No more waiting in the dark. Watch your ride approach on the map, down to the meter.</p>
              </motion.div>
            </header>

            <main className="py-24">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                  className="grid lg:grid-cols-3 gap-8 items-start"
                >
                  <div className="lg:col-span-2 h-[600px] rounded-3xl bg-slate-800/50 border border-slate-700 p-4 shadow-2xl shadow-cyan-500/10">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img className="w-full h-full object-cover opacity-40" alt="A stylized map of an Indian city like Delhi or Mumbai" src="https://images.unsplash.com/photo-1614795801066-5d544d8d464c" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin className="text-yellow-400 w-12 h-12 drop-shadow-lg animate-pulse" />
                        <motion.div
                          className="absolute"
                          animate={{
                            x: [-150, 150, 150, -150, -150],
                            y: [80, 80, -80, -80, 80],
                            rotate: [45, 45, 225, 225, 405],
                          }}
                          transition={{
                            duration: 12,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <Car className="text-cyan-400 w-10 h-10" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-6">Live Ride Status</h2>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <User className="w-8 h-8 text-cyan-400" />
                        <div>
                          <p className="text-slate-400">Driver</p>
                          <p className="text-xl font-bold">Ravi Kumar</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Car className="w-8 h-8 text-cyan-400" />
                        <div>
                          <p className="text-slate-400">Vehicle</p>
                          <p className="text-xl font-bold">Maruti Swift - DL 01 AB 1234</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Clock className="w-8 h-8 text-cyan-400" />
                        <div>
                          <p className="text-slate-400">Est. Arrival</p>
                          <p className="text-xl font-bold">5 minutes</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-8 bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300">Contact Driver</Button>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </PageTransition>
      );
    };

    export default TrackRidePage;