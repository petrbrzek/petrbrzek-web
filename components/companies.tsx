
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="companies" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold font-heading mb-12 text-center">Companies</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Langtail</CardTitle>
                <CardDescription>CEO & Founder (2023 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An all-in-one platform for building and managing LLM applications. Langtail simplifies the 
                  development of production-ready AI chatbots, addressing challenges like chat history management 
                  and response accuracy.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed a lightweight AI agent orchestration framework</li>
                  <li>Created tools for managing LLM applications at scale</li>
                  <li>Built solutions for enterprise-grade AI implementation</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Avocode</CardTitle>
                <CardDescription>Co-Founder (2014 - 2022)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A design-to-code collaboration tool that enabled developers to inspect and export assets from 
                  design files (PSD, Sketch) directly, streamlining workflows for teams.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pioneered design inspection workflow tools</li>
                  <li>Created Nachos UI, a React Native component library</li>
                  <li>Built tools for seamless designer-developer collaboration</li>
                  <li>Successfully exited the company in 2022</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
