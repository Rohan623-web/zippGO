
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Clock, Car, XCircle } from 'lucide-react';

const PolicyCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 text-center"
  >
    <div className="inline-block p-5 bg-yellow-400/10 rounded-full mb-6">
      <Icon className="w-12 h-12 text-yellow-400" />
    </div>
    <h2 className="text-2xl font-bold font-grotesk mb-3">{title}</h2>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const CancellationPolicyPage = () => {
  const policies = [
    {
      icon: Clock,
      title: "Full Refund",
      description: "You will receive a 100% refund of any cancellation fee if you cancel your ride within 2 minutes of the booking being confirmed."
    },
    {
      icon: Car,
      title: "Partial Refund",
      description: "If you cancel after 2 minutes but before the driver arrives at your pickup location, a small cancellation fee will be charged to compensate the driver for their time and fuel."
    },
    {
      icon: XCircle,
      title: "No Refund",
      description: "No refund will be provided if the cancellation is made after the driver has arrived at your pickup location, or if you fail to show up for your ride (no-show)."
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Cancellation & Refund Policy | ZippGo</title>
        <meta name="description" content="Understand ZippGo's cancellation and refund policy. Learn about the conditions for full refunds, partial refunds, and cancellation fees." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Cancellation & Refund Policy</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">Clear and fair policies for when your plans change.</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <PolicyCard key={index} {...policy} index={index} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center text-slate-400 bg-slate-800/50 p-6 rounded-xl max-w-3xl mx-auto"
            >
              <p className="font-semibold">How to Cancel:</p>
              <p>You can easily cancel your ride directly from the ZippGo app. Any applicable fees or refunds will be processed automatically to your original payment method.</p>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default CancellationPolicyPage;
