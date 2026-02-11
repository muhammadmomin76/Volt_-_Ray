import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import Link from 'next/link';
import { TrendingUp, ShieldCheck, Zap, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Solar Systems | Volt & Ray',
  description: 'Scale your business with sustainable energy. Reduce operating costs and boost your bottom line with commercial solar solutions.',
};

export default function CommercialPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Scalable Energy for Modern Business"
        subtitle="Transform your unused roof space into a revenue-generating asset. Reduce operating costs and meet your sustainability goals."
        imageSrc="/images/commercial-hero.png"
        imageAlt="Large commercial building with solar panels"
      />

      {/* ROI Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-6">Invest in Your Bottom Line</h2>
            <p className="text-slate-grey text-lg mb-8 leading-relaxed">
              Energy is one of the highest variable costs for businesses. By generating your own power, you can lock in low electricity rates for decades, protecting your business from volatility and freeing up capital for growth.
            </p>
            <ul className="space-y-4">
              {[
                "Significant reduction in Operating Expenses (OpEx)",
                "Federal Investment Tax Credit (ITC) benefits",
                "Accelerated depreciation (MACRS)",
                "Increased property value"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-solar-blue" />
                  <span className="text-midnight font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-midnight p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold text-solar-blue mb-2">30%</span>
              <span className="text-sm opacity-80">Federal Tax Credit</span>
            </div>
            <div className="bg-soft-mist p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold text-midnight mb-2">3-5</span>
              <span className="text-sm text-slate-grey">Year ROI (Avg)</span>
            </div>
            <div className="bg-soft-mist p-8 rounded-2xl flex flex-col justify-center items-center text-center col-span-2">
              <span className="text-5xl font-bold text-midnight mb-2">25+</span>
              <span className="text-sm text-slate-grey">Year Warranty Coverage</span>
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="w-10 h-10 text-white" />,
              title: "Warehousing & Logistics",
              description: "Turn massive roof footprints into massive power generation."
            },
            {
              icon: <Zap className="w-10 h-10 text-white" />,
              title: "Manufacturing",
              description: "Offset high energy consumption from heavy machinery and operations."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-white" />,
              title: "Corporate Campuses",
              description: "Demonstrate corporate responsibility and power office buildings."
            }
          ].map((sector, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl h-80">
              <div className="absolute inset-0 bg-midnight transition-colors duration-300 group-hover:bg-solar-blue" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-white/80">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-midnight text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Power Your Business Forward</h2>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Contact our commercial solar team to discuss your project requirements and get a custom proposal.
        </p>
        <Link
          href="/get-quote"
          className="inline-block bg-white text-midnight px-8 py-4 rounded-full text-lg font-bold hover:bg-solar-blue hover:text-white transition-all shadow-lg hover:shadow-xl duration-300"
        >
          Request Proposal
        </Link>
      </section>
    </main>
  );
}
