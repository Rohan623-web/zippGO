
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import PageTransition from '@/components/PageTransition';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Call login function from AuthContext
      const response = await login({
        email: formData.email,
        password: formData.password
      });
      
      toast({
        title: "✅ Login Successful!",
        description: `Welcome back, ${response.user.name}! You're now logged in.`,
      });
      
      // Redirect to home page after successful login
      setTimeout(() => {
        navigate('/');
      }, 1500);
      
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Please check your email and password and try again.";
      toast({
        title: "❌ Login Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Login | ZippGo</title>
        <meta name="description" content="Login to your ZippGo account to book rides, track your trips, and manage your profile." />
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

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-slate-400">Sign in to your ZippGo account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-600 text-yellow-400 focus:ring-yellow-400" />
                  <span className="ml-2 text-sm text-slate-400">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300 h-12 text-lg"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-slate-600"></div>
              <span className="px-4 text-slate-400 text-sm">or</span>
              <div className="flex-1 border-t border-slate-600"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-white hover:bg-slate-700 h-12 flex items-center justify-center bg-slate-800 hover:bg-slate-700"
                onClick={() => toast({
                  title: "🚧 Google Login",
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
                  title: "🚧 Apple Login",
                  description: "Apple authentication will be implemented soon!",
                })}
              >
                <div className="w-5 h-5 mr-3 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                Continue with Apple
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-400">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
