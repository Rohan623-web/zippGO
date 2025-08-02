
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

const PrivacyPolicyPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy | ZippGo</title>
        <meta name="description" content="Read the ZippGo Privacy Policy to understand how we collect, use, and protect your data. Your privacy and security are our top priorities." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Privacy Policy</h1>
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
              <PolicySection title="1. Introduction">
                <p>Welcome to ZippGo (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services (collectively, the &quot;Services&quot;).</p>
              </PolicySection>

              <PolicySection title="2. Data Collection">
                <p>We collect information that you provide directly to us, such as when you create an account, request a ride, contact customer support, or otherwise communicate with us. This information may include:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>Personal Details: Name, email address, phone number, profile picture.</li>
                  <li>Location Information: Precise location data from your device is collected when the app is running in the foreground or background to enable ride tracking and location services.</li>
                  <li>Transaction Information: Details related to your rides, including type of service, date, time, fare, and payment method.</li>
                  <li>Device Information: Information about your mobile device, including hardware model, operating system, and unique device identifiers.</li>
                </ul>
              </PolicySection>

              <PolicySection title="3. Data Usage">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>Provide, maintain, and improve our Services.</li>
                  <li>Process transactions and send you related information, including confirmations and receipts.</li>
                  <li>Communicate with you about products, services, promotions, and news.</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
                  <li>Ensure the safety and security of our users and the platform.</li>
                </ul>
              </PolicySection>

              <PolicySection title="4. Data Encryption & Security">
                <p>We use industry-standard encryption (such as SSL/TLS) to protect your data during transmission. We also implement administrative, technical, and physical security measures to safeguard your personal information from unauthorized access, use, or disclosure.</p>
              </PolicySection>

              <PolicySection title="5. User Rights">
                <p>You have the right to access, correct, or delete your personal data. You can manage your account information through the app&apos;s settings. If you wish to delete your account, please contact our support team. Please note that we may retain certain information as required by law or for legitimate business purposes.</p>
              </PolicySection>
              
              <PolicySection title="6. Changes to This Policy">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.</p>
              </PolicySection>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicyPage;
