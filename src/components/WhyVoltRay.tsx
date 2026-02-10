"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function WhyVoltRay() {
  const benefits = [
    {
      title: 'Certified Excellence',
      description:
        'Our team consists of NABCEP-certified installers with over a decade of experience in premium solar integration.'
    },
    {
      title: 'Custom Design',
      description:
        'We don’t do cookie-cutter. Every system is engineered specifically for your roof’s geometry and your energy needs.'
    },
    {
      title: '25-Year Warranty',
      description:
        'Sleep soundly with our comprehensive bumper-to-bumper warranty covering panels, inverters, and workmanship.'
    },
    {
      title: 'Transparent Pricing',
      description:
        'No hidden fees or surprise costs. We provide a clear, detailed quote so you know exactly what you’re investing in.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80"
                alt="Solar technician inspecting panels"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block border border-gray-100">
              <p className="text-solar-blue text-4xl font-bold mb-1">100%</p>
              <p className="text-midnight font-semibold text-sm leading-tight">
                Energy Offset Guarantee
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <motion.div
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
            >
              <span className="text-solar-blue font-semibold text-sm tracking-widest uppercase mb-4 block">
                Why Volt & Ray
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mb-8 leading-tight">
                Revolutionizing Solar Installations for a{' '}
                <span className="text-solar-blue">Sustainable Future</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="text-solar-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-midnight font-bold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-grey leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
