"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sun, Building2, Battery } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Modern home with solar panels"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Energy Independence <br />
            <span className="text-solar-blue">Starts Here.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#F5F7FA]/80 max-w-2xl mb-10 font-medium"
          >
            Premium solar solutions designed for modern homes and
            forward-thinking businesses. Join the clean energy revolution today.
          </motion.p>

          {/* Lead Gen Input */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 max-w-md mb-16 sm:mb-24"
          >
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Enter your zipcode"
                className="w-full h-14 pl-6 pr-4 rounded-full bg-white/95 backdrop-blur-sm text-midnight placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-solar-blue shadow-lg transition-all"
              />
            </div>
            <Link
              href="/get-quote"
              className="h-14 px-8 rounded-full bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-solar-blue/25 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Glass Cards - Bento Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
          >
            {/* Card 1 */}
            <Link
              href="/residential"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-solar-blue/20 flex items-center justify-center mb-4 group-hover:bg-solar-blue transition-colors duration-300">
                <Sun className="text-white w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Residential Solar
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Custom-designed systems that blend seamlessly with your home's
                architecture.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              href="/commercial"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-solar-blue/20 flex items-center justify-center mb-4 group-hover:bg-solar-blue transition-colors duration-300">
                <Building2 className="text-white w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Commercial Grid
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Scalable power solutions to reduce operating costs and carbon
                footprint.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              href="/technology"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-solar-blue/20 flex items-center justify-center mb-4 group-hover:bg-solar-blue transition-colors duration-300">
                <Battery className="text-white w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Energy Storage
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Advanced battery systems to keep your power running when the
                grid goes down.
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
