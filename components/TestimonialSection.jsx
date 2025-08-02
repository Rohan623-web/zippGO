
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ZippGo is a game-changer for my daily commute in Mumbai. The bike rides are so quick and affordable!",
    name: "Priya Sharma",
    city: "Mumbai",
    rating: 5,
    avatar: "A young Indian woman with a bright smile, wearing a casual top"
  },
  {
    quote: "As a frequent business traveler, I rely on ZippGo's sedans in Delhi. Always on time and professional.",
    name: "Rohan Mehra",
    city: "Delhi",
    rating: 5,
    avatar: "A man in his 30s wearing a business shirt, looking confidently at the camera"
  },
  {
    quote: "The SUV service is perfect for our family outings in Bangalore. Spacious, clean, and safe for the kids.",
    name: "Anjali Desai",
    city: "Bangalore",
    rating: 5,
    avatar: "A smiling woman in her 40s with her family slightly blurred in the background"
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-slate-800/70 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 h-full flex flex-col">
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-lg italic text-slate-200 flex-grow">&quot;{testimonial.quote}&quot;</p>
    <div className="flex items-center mt-6">
      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-yellow-400">
        <img  className="w-full h-full object-cover" alt={testimonial.name} src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
      </div>
      <div>
        <p className="font-bold text-lg text-white">{testimonial.name}</p>
        <p className="text-cyan-400">{testimonial.city}</p>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-urbanist">Trusted by 100,000+ Riders</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">See what our customers across India are saying about ZippGo.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
