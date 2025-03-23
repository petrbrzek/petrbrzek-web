"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function MacalyBadge() {
  return (
    <Link 
      href="https://macaly.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative inline-flex items-center px-4 py-2 rounded-full overflow-hidden"
    >
      {/* Animated glow background */}
      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-md group-hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Inner container with glass effect */}
      <span className="relative z-10 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full flex items-center gap-2 border border-white/10">
        {/* Pulsing dot */}
        <motion.span 
          className="w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <span className="text-sm font-medium text-white">
          Created with Macaly
        </span>
      </span>
    </Link>
  );
}