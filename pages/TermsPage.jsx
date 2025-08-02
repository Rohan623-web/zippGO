
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

const PolicySection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-yellow-400 mb-3">{title}</h2>
    <div className="space-y-3 text-slate-300 leading-relaxed">{children}</div>
  </div>
);

const TermsPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms and Conditions | ZippGo</title>
        <meta name="description" content="Read the ZippGo Terms and Conditions. Understand the rules for using our ride-hailing service, your responsibilities as a user, and our policies." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Terms & Conditions</h1>
            <p className="mt-4 text-lg text-slate-400">Last updated: July 24, 2025</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
            >
              <PolicySection title="1. Agreement to Terms">
                <p>By accessing or using our Services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not use our Services.</p>
              </PolicySection>

              <PolicySection title="2. User Responsibilities">
                <p>As a user of ZippGo, you agree to:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>Provide accurate and complete information when creating your account.</li>
                  <li>Maintain the security of your account password and accept all risks of unauthorized access.</li>
                  <li>Treat drivers with respect and not cause any damage to their vehicles.</li>
                  <li>Comply with all applicable laws when using the Services.</li>
                  <li>Not use the service for any unlawful purpose.</li>
                </ul>
              </PolicySection>

              <PolicySection title="3. Ride Rules">
                <p>Users are expected to adhere to basic rules of conduct during a ride. This includes not smoking, not consuming alcohol or illegal substances, and not engaging in any disruptive or unsafe behavior. Drivers have the right to refuse or end a ride if a user violates these rules.</p>
              </PolicySection>

              <PolicySection title="4. Cancellation Guidelines">
                <p>You may cancel your ride request at any time. However, cancellation fees may apply depending on the timing of your cancellation. Please refer to our <a href="/cancellation-policy" className="text-cyan-400 underline hover:text-cyan-300">Cancellation & Refund Policy</a> for detailed information.</p>
              </PolicySection>

              <PolicySection title="5. Limitation of Liability">
                <p>ZippGo is a technology platform that connects riders with independent driver partners. We are not responsible for the actions or inactions of any user or driver. Our liability is limited to the maximum extent permitted by Indian law.</p>
              </PolicySection>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default TermsPage;
