import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { rideAPI } from '@/services/api';
import { useToast } from "@/components/ui/use-toast";
import { User, MapPin, Car, Clock, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

const Dashboard = () => {
  const { user, isLoggedIn } = useAuth();
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }

    const fetchRides = async () => {
      try {
        const ridesData = await rideAPI.getUserRides(user.id);
        setRides(ridesData);
      } catch (error) {
        toast({
          title: "❌ Error",
          description: "Failed to load your rides.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, [user, isLoggedIn, toast]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'text-yellow-400';
      case 'Accepted':
        return 'text-blue-400';
      case 'Ongoing':
        return 'text-green-400';
      case 'Completed':
        return 'text-green-600';
      case 'Cancelled':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Dashboard | ZippGo</title>
        <meta name="description" content="Your ZippGo dashboard - view your profile, rides, and manage your account." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user?.name}!</h1>
            <p className="text-slate-400">Manage your rides and account settings</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{user?.name}</h3>
                  <p className="text-slate-400">{user?.email}</p>
                  <p className="text-slate-400">{user?.phone}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Member since</span>
                  <span className="text-white font-medium">
                    {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Total rides</span>
                  <span className="text-white font-medium">{rides.length}</span>
                </div>
              </div>
            </motion.div>

            {/* Rides Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Your Rides</h3>
                
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto"></div>
                    <p className="text-slate-400 mt-4">Loading your rides...</p>
                  </div>
                ) : rides.length === 0 ? (
                  <div className="text-center py-8">
                    <Car className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">No rides yet</h4>
                    <p className="text-slate-400 mb-6">Book your first ride to get started!</p>
                    <Button asChild className="bg-yellow-400 text-slate-900 hover:bg-yellow-300">
                      <a href="/">Book a Ride</a>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {rides.map((ride, index) => (
                      <motion.div
                        key={ride._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-slate-700/50 rounded-xl p-4 border border-slate-600"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Car className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-medium">{ride.vehicleType}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ride.status)}`}>
                            {ride.status}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-300 text-sm">
                              {ride.pickupLocation} → {ride.dropLocation}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <DollarSign className="w-4 h-4 text-green-400" />
                                <span className="text-white font-medium">₹{ride.fare}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-400 text-sm">
                                  {new Date(ride.bookedAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard; 