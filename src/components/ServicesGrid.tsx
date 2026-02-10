"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Residential Installation',
      description:
        'Turn your roof into a power plant. We design beautiful, high-efficiency solar systems tailored to your home’s energy needs and aesthetics.',
      link: '/residential'
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description:
        'Reduce operating costs and demonstrate corporate responsibility. Our commercial systems are built for ROI and long-term reliability.',
      link: '/commercial'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Optimization',
      description:
        'Keep your system running at peak performance. We offer comprehensive monitoring, cleaning, and repair services for all system types.',
      link: '/technology'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
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
            className="text-solar-blue font-semibold text-sm tracking-widest uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
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
              delay: 0.1
            }}
            className="text-3xl md:text-4xl font-bold text-midnight mb-6"
          >
            Comprehensive Solar Solutions
          </motion.h2>
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
              delay: 0.2
            }}
            className="text-slate-grey text-lg"
          >
            From initial consultation to lifetime maintenance, we handle every
            aspect of your solar journey with precision and care.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F5F7FA] flex items-center justify-center mb-6 group-hover:bg-solar-blue transition-colors duration-300">
                <service.icon className="w-7 h-7 text-midnight group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-midnight mb-4">
                {service.title}
              </h3>
              <p className="text-slate-grey leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-flex items-center text-solar-blue font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
