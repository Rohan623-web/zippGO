
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here in production
    toast({
      title: "✅ Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon! (This is a demo).",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | ZippGo Support</title>
        <meta name="description" content="Get in touch with ZippGo. For support, partnerships, or any inquiries, please fill out our contact form or reach out via email or phone." />
      </Helmet>
      <div className="pt-20 bg-slate-900">
        <header className="py-24 bg-slate-900/50 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4"
          >
            <h1 className="text-5xl md:text-7xl font-black font-urbanist">Get in Touch</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">We&apos;re here to help. Whether you have a question, a suggestion, or need support, we&apos;re ready to listen.</p>
          </motion.div>
        </header>

        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="bg-slate-800/50 p-8 rounded-2xl"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-yellow-400" />
                    <a href="mailto:support@zippgo.in" className="text-lg hover:text-yellow-400">support@zippgo.in</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-yellow-400" />
                    <span className="text-lg">+91 1800 123 4567</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                    <span className="text-lg">ZippGo HQ, Cyber City, Gurugram, Haryana, India</span>
                  </div>
                </div>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name" className="text-lg">Full Name</Label>
                  <Input id="name" type="text" placeholder="e.g., Rohan Kumar" required value={formData.name} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 h-12" />
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
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea id="message" placeholder="How can we help you today?" required value={formData.message} onChange={handleChange} className="mt-2 bg-slate-800 border-slate-700 min-h-[150px]" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-yellow-400 text-slate-900 font-bold text-lg hover:bg-yellow-300">Send Message</Button>
              </motion.form>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
