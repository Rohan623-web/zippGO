import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import PageTransition from '@/components/PageTransition';
import { useAuth } from '@/contexts/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast({
        title: "❌ Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "❌ Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "❌ Weak Password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Call signup function from AuthContext
      const response = await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      
      toast({
        title: "✅ Account Created!",
        description: `Welcome to ZippGo, ${response.user.name}! Your account has been successfully created.`,
      });
      
      // Show success screen
      setStep(2);
      
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Something went wrong. Please try again.";
      toast({
        title: "❌ Signup Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 2) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Welcome to ZippGo!</h1>
              <p className="text-slate-400 mb-8">
                Your account has been created successfully. You can now book rides and enjoy our services.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300">
                  <Link to="/">Start Booking Rides</Link>
                </Button>
                <Button variant="outline" asChild className="w-full border-slate-600 text-white hover:bg-slate-700">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Sign Up | ZippGo</title>
        <meta name="description" content="Create your ZippGo account to start booking rides, tracking trips, and enjoying our services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-slate-400 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Join ZippGo</h1>
              <p className="text-slate-400">Create your account and start your journey</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <div className="relative mt-2">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 rounded border-slate-600 text-yellow-400 focus:ring-yellow-400" 
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                  I agree to the{' '}
                  <Link to="/terms-and-conditions" className="text-yellow-400 hover:text-yellow-300">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy" className="text-yellow-400 hover:text-yellow-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300 h-12 text-lg"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-slate-600"></div>
              <span className="px-4 text-slate-400 text-sm">or</span>
              <div className="flex-1 border-t border-slate-600"></div>
            </div>

            {/* Social Signup */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-white hover:bg-slate-700 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700"
                onClick={() => toast({
                  title: "🚧 Google Signup",
                  description: "Google authentication will be implemented soon!",
                })}
              >
                <div className="w-5 h-5 mr-3 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">G</span>
                </div>
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-white hover:bg-slate-700 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700"
                onClick={() => toast({
                  title: "🚧 Apple Signup",
                  description: "Apple authentication will be implemented soon!",
                })}
              >
                <div className="w-5 h-5 mr-3 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                Continue with Apple
              </Button>
            </div>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Signup;
