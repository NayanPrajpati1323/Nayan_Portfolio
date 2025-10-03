import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import parthivImage from '../../images/Nayan.jpeg';

export default function Hero() {
  const texts = [
    "My name is Nayan Prajapati.",
    "I am an React Developer.",
    "I am a Python developer.",
    "I am a Full Stack Developer.",
    // Add more texts as needed
  ];
  
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[index]);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [index, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#333]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFD700]/10 via-black to-black"></div>
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Mobile Circular Image View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative block md:hidden mb-8"
          >
            <div className="relative w-[250px] h-[250px] mx-auto">
              <div className="absolute inset-0 border-2 border-dashed border-[#FFD700]/30 rounded-full animate-spin-slow"></div>
              
              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full border-2 border-[#FFD700] overflow-hidden p-2 bg-black/50 backdrop-blur-sm shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FFD700]/50">
                  <img
                    src={parthivImage}
                    alt="Parthiv Shah"
                    className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-[#FFD700]">{currentText}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Building intelligent solutions with cutting-edge AI technologies
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-[#FFD700] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#FFD700]/90 transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Desktop Circular Image View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-[400px] h-[400px] mx-auto">
              {/* Simplified decorative circle */}
              <div className="absolute inset-0 border-2 border-dashed border-[#FFD700]/30 rounded-full animate-spin-slow"></div>
              
              {/* Profile image container */}
              <div className="absolute inset-4 rounded-full border-2 border-[#FFD700] overflow-hidden p-2 bg-black/50 backdrop-blur-sm shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#FFD700]/50">
                  <img
                    src={parthivImage}
                    alt="Parthiv Shah"
                    className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}