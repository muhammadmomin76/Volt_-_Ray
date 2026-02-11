import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Battery, DollarSign, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Solar Solutions | Volt & Ray',
  description: 'Power your home with clean, renewable energy. Custom solar installations designed for efficiency, savings, and energy independence.',
};

export default function ResidentialPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Power Your Home with Pure Energy"
        subtitle="Reduce your carbon footprint and electricity bills with a custom-designed solar energy system tailored to your home's unique needs."
        imageSrc="/images/residential-hero.png"
        imageAlt="Modern home with solar panels at sunset"
      />

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-4">Why Go Solar?</h2>
          <p className="text-slate-grey max-w-2xl mx-auto">
            Switching to solar isn't just about saving money—it's about investing in a sustainable future for your family and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <DollarSign className="w-8 h-8 text-solar-blue" />,
              title: "Lower Bills",
              description: "Drastically reduce or even eliminate your monthly electricity costs from day one."
            },
            {
              icon: <Sun className="w-8 h-8 text-solar-blue" />,
              title: "Energy Independence",
              description: "Generate your own power and protect yourself from rising utility rates and grid instability."
            },
            {
              icon: <Leaf className="w-8 h-8 text-solar-blue" />,
              title: "Eco-Friendly",
              description: "Reduce your home's carbon footprint and contribute to a cleaner, healthier environment."
            },
            {
              icon: <Battery className="w-8 h-8 text-solar-blue" />,
              title: "Resilience",
              description: "Pair with battery storage to keep your lights on during blackouts and storms."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-soft-mist/30 p-8 rounded-2xl hover:bg-soft-mist/50 transition-colors duration-300">
              <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-midnight mb-2">{feature.title}</h3>
              <p className="text-slate-grey leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-midnight py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Installation Process</h2>
              <p className="text-white/70 mb-8 text-lg">
                We handle everything from start to finish. Our team of experts ensures a hassle-free experience, so you can start saving sooner.
              </p>
              <div className="space-y-6">
                {[
                  "Free Consultation & Site Assessment",
                  "Custom System Design & Engineering",
                  "Permitting & Utility Approvals",
                  "Professional Installation",
                  "System Activation & Monitoring Setup"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-solar-blue flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="/images/residential-process.png"
                  alt="Solar installation process diagram"
                  fill
                  className="object-contain p-8"
                />
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-soft-mist/20">
        <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6">Ready to make the switch?</h2>
        <p className="text-xl text-slate-grey mb-10 max-w-2xl mx-auto">
          Get a free, custom solar design and quote for your home today. No pressure, just savings.
        </p>
        <Link
          href="/get-quote"
          className="inline-block bg-solar-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
        >
          Get Your Free Quote
        </Link>
      </section>
    </main>
  );
}
