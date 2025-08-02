
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature Not Implemented",
      description: "Social media links are not yet configured. You can request this in a future prompt! 🚀",
    });
  };
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Subscribed!",
      description: "Thanks for subscribing! (This is a demo, no email was sent).",
    });
    e.target.reset();
  };

  const footerLinks = {
    "Company": [
      { name: "About Us", path: "/about" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact Us", path: "/contact" },
    ],
    "Services": [
      { name: "Book a Ride", path: "/" },
      { name: "Start Earning", path: "/start-earning" },
      { name: "Track Your Ride", path: "/track-ride" },
    ],
    "Legal": [
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cancellation Policy", path: "/cancellation-policy" },
    ],
  };

  const socialIcons = [Twitter, Instagram, Facebook, Linkedin];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold font-grotesk text-white">ZippGo</span>
            </Link>
            <p className="max-w-xs">India&apos;s new ride-hailing platform, launched in 2025 for fast, safe, and affordable travel.</p>
            <div className="flex space-x-4 mt-6">
              {socialIcons.map((Icon, index) => (
                <a key={index} href="#" onClick={handleSocialClick} className="text-slate-500 hover:text-yellow-400 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-bold text-white mb-4">{title}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="hover:text-yellow-400 transition-colors duration-300">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="font-bold text-white mb-4">Subscribe to our Newsletter</p>
            <p className="mb-4">Get the latest news, updates, and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input type="email" placeholder="Your email" required className="w-full bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white" />
              <Button type="submit" size="icon" className="bg-yellow-400 hover:bg-yellow-300 rounded-r-lg rounded-l-none">
                <Send className="w-5 h-5 text-slate-900" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ZippGo Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
