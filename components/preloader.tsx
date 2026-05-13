'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Users, Target, CircleDollarSign, Building2 } from 'lucide-react';

type PreloaderProps = {
  onDone?: () => void;
};

const text = "Welcome to Your Complete Workforce and Business Partner";

const services = [
  { name: "Background Verification", icon: ShieldCheck },
  { name: "HR Solutions", icon: Users },
  { name: "Talent Recruitment", icon: Target },
  { name: "Payroll Management", icon: CircleDollarSign },
  { name: "Business Setup", icon: Building2 },
];

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Increased slightly to allow the new service badge animations to finish
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
      setVideoLoaded(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  // When both conditions are met, dismiss
  useEffect(() => {
    if (minTimeElapsed && videoLoaded) {
       setIsVisible(false);
    }
  }, [minTimeElapsed, videoLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ 
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-zinc-900 px-4 overflow-hidden"
        >

          <div className="flex flex-col items-center gap-12 text-center relative z-10 w-full max-w-5xl">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4 w-full"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.8,
                    staggerChildren: 0.15,
                  }
                }
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-zinc-200 shadow-xl shadow-zinc-200/50 text-zinc-800 font-medium md:text-lg"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-[#F75834]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{service.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
