"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function SocialProof() {
  const logos = [
    {
      name: 'SunPower',
      text: 'SUNPOWER'
    },
    {
      name: 'Tesla Energy',
      text: 'TESLA'
    },
    {
      name: 'Enphase',
      text: 'ENPHASE'
    },
    {
      name: 'SolarEdge',
      text: 'solaredge'
    },
    {
      name: 'Generac',
      text: 'GENERAC'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center text-slate-grey font-medium mb-10 text-sm uppercase tracking-widest"
        >
          Trusted by 500+ Homeowners & Green Businesses
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="text-xl md:text-2xl font-bold text-slate-grey hover:text-midnight transition-colors cursor-default select-none"
            >
              {logo.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
