
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users } from "lucide-react";

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-heading mb-12 text-center">Community Involvement</h2>
          
          <div ref={ref} className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">PragueJS</h3>
              <p className="text-muted-foreground">
                Co-organizer of Prague's JavaScript meetup group, bringing together developers to share knowledge and 
                explore the latest in JavaScript technologies.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prague Gen AI Meetups</h3>
              <p className="text-muted-foreground">
                Co-organizer of Prague's Generative AI community, fostering discussions and knowledge sharing around 
                the latest advancements in AI and machine learning.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg">
              I believe in the power of community to drive innovation and growth in the tech industry. 
              Through these meetups, I aim to create spaces for learning, collaboration, and networking 
              among developers and AI enthusiasts in Prague.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
