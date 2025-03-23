"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
      
      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full border-4 border-primary/10"
          >
            <Image
              src="https://assets.macaly-user-data.dev/jfl9hdqnp4bk63xoek9djime/pprrfozjtzvpxx5oglm8heiq/JgCjWBYFua-uYma94BT4X/petrbrzek-avatar.jpg"
              alt="Petr Brzek"
              fill
              sizes="(max-width: 768px) 100vw, 160px"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Petr Brzek
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CEO of Langtail • Co-founder of Avocode
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building the future of AI-powered developer tools and fostering tech communities in Prague
          </motion.p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-1 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}