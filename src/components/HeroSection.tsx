import React from 'react';
import Image from 'next/image';
import { HeroContent } from './HeroContent';

export function HeroSection() {
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
          sizes="100vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end">
        <HeroContent />
      </div>
    </section>
  );
}
