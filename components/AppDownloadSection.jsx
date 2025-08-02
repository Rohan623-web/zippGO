
import React from 'react';
    import { motion } from 'framer-motion';
    import { useToast } from "@/components/ui/use-toast";

    const AppDownloadSection = () => {
      const { toast } = useToast();

      const handleNotImplemented = () => {
        toast({
          title: "🚧 Feature Not Implemented",
          description: "The app is launching soon! You can request to be notified. 🚀",
        });
      };

      return (
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-4xl md:text-5xl font-black font-urbanist">Get the ZippGo App</h2>
                <p className="mt-6 text-lg text-slate-300 max-w-md mx-auto lg:mx-0">Book rides, track your driver in real-time, and pay seamlessly. Your next ride is just a tap away.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button onClick={handleNotImplemented} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors">
                    <img className="w-8 h-8 mr-3" alt="Google Play Store icon" src="https://images.unsplash.com/photo-1421757350652-9f65a35effc7" />
                    <div>
                      <p className="text-xs">GET IT ON</p>
                      <p className="text-xl font-semibold">Google Play</p>
                    </div>
                  </button>
                  <button onClick={handleNotImplemented} className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors">
                    <img className="w-8 h-8 mr-3" alt="Apple App Store icon" src="https://images.unsplash.com/photo-1576071574325-77b9333188b0" />
                    <div>
                      <p className="text-xs">Download on the</p>
                      <p className="text-xl font-semibold">App Store</p>
                    </div>
                  </button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <img className="w-24 h-24" alt="QR code to download the ZippGo app" src="https://images.unsplash.com/photo-1626682561113-d1db402cc866" />
                  </div>
                  <p className="text-slate-400 font-semibold">Scan to Download</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, type: 'spring' }}
                className="flex justify-center"
              >
                <div className="relative w-80 h-[550px]">
                  <img className="w-full h-full object-contain" alt="Mobile phone mockup showing the ZippGo app interface with an Indian map" src="https://images.unsplash.com/photo-1554260570-83dc2f46ef79" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default AppDownloadSection;
