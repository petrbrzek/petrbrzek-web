
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">About Me</h2>
          
          <div className="space-y-6 text-lg">
            <p>
              I'm a Czech software engineer and entrepreneur with a passion for developer tools and AI technologies. 
              With over a decade of experience in the tech industry, I've focused on creating solutions that bridge 
              the gap between design, development, and artificial intelligence.
            </p>
            
            <p>
              My journey in tech has been driven by a desire to solve real problems for developers and designers. 
              This led me to co-found Avocode in 2014, a design-to-code collaboration tool that streamlined workflows 
              for teams working with design files. After successfully exiting Avocode, I turned my attention to the 
              emerging field of large language models.
            </p>
            
            <p>
              Currently, as the CEO of Langtail, I'm focused on simplifying the development of production-ready LLM 
              chatbots. My team and I are addressing challenges like chat history management and response accuracy to 
              make AI more accessible and useful for businesses.
            </p>
            
            <p>
              Beyond building products, I'm passionate about fostering tech communities. I co-organize PragueJS and 
              Prague Gen AI Meetups, creating spaces for knowledge sharing and collaboration among developers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
