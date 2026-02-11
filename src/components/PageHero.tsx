"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export function PageHero({ title, subtitle, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-grey leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
