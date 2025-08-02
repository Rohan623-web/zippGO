import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, X, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingAuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="user"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <User className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Floating Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-40"
          >
            <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-700 rounded-2xl p-4 shadow-2xl">
              <div className="space-y-3">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-slate-700 h-12 px-4"
                >
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <LogIn className="w-5 h-5 mr-3" />
                    Sign In
                  </Link>
                </Button>
                
                <Button
                  asChild
                  className="w-full justify-start bg-yellow-400 text-slate-900 hover:bg-yellow-300 h-12 px-4 font-semibold"
                >
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <UserPlus className="w-5 h-5 mr-3" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAuthButtons; 