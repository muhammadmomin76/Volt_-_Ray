import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Smartphone, Zap, BatteryCharging, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Technology & Monitoring | Volt & Ray',
  description: 'Experience the future of energy with our advanced solar panels, smart inverters, and real-time monitoring apps.',
};

export default function TechnologyPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Next-Generation Solar Tech"
        subtitle="We partner with industry leaders to bring you the most efficient, durable, and intelligent solar energy systems available."
        imageSrc="/images/technology-hero.png"
        imageAlt="Close up of futuristic solar cells"
      />

      {/* Tech Specs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-midnight border border-white/10">
            <Image
              src="/images/tech-panel-exploded.png"
              alt="Exploded view of N-Type TOPCon solar panel layers"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-blue/10 text-solar-blue font-bold text-sm mb-6">
              <Zap size={16} />
              <span>N-Type TOPCon Technology</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6">Maximum Power, Even in Low Light.</h2>
            <p className="text-slate-grey text-lg mb-8 leading-relaxed">
              Our panels utilize N-Type TOPCon cells, which offer superior efficiency and performance in low-light conditions compared to traditional PERC panels. This means you generate more energy earlier in the morning and later in the evening.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "22.8% Efficiency",
                  desc: "Market-leading conversion rates ensure you get the most out of every square foot of roof space."
                },
                {
                  title: "Bifacial Gain",
                  desc: "Capture reflected light from the rear side of the panel for up to 30% bonus generation (ground mount)."
                },
                {
                  title: "Degradation Resistance",
                  desc: "Guaranteed 87.4% power output even after 30 years of operation."
                }
              ].map((spec, i) => (
                <div key={i} className="border-l-4 border-solar-blue pl-6">
                  <h3 className="text-xl font-bold text-midnight mb-1">{spec.title}</h3>
                  <p className="text-slate-grey">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Ecosystem */}
      <section className="bg-soft-mist py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">A Complete Smart Ecosystem</h2>
            <p className="text-slate-grey max-w-2xl mx-auto">
              Solar is more than just panels. It's an intelligent network of devices working together to optimize your energy usage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-midnight rounded-2xl flex items-center justify-center text-white mb-6">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-3">Microinverters</h3>
              <p className="text-slate-grey leading-relaxed">
                Panel-level optimization means shade on one panel doesn't affect the rest of the system. Enhanced safety with rapid shutdown capabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-solar-blue transform md:-translate-y-4">
              <div className="w-14 h-14 bg-solar-blue rounded-2xl flex items-center justify-center text-white mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-3">Real-Time App</h3>
              <p className="text-slate-grey leading-relaxed">
                Monitor your production and consumption in real-time from anywhere. Get alerts, track savings, and control your battery modes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-midnight rounded-2xl flex items-center justify-center text-white mb-6">
                <BatteryCharging size={28} />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-3">Energy Storage</h3>
              <p className="text-slate-grey leading-relaxed">
                Store excess solar power for use at night or during outages. Smart load management keeps your critical appliances running.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
