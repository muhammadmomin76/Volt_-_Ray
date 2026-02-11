import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Solar Portfolio | Volt & Ray',
  description: 'Browse our gallery of residential and commercial solar installations using top-tier technology.',
};

export default function OurWorkPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Building a Sustainable Future"
        subtitle="From cozy family homes to expansive industrial complexes, see how we are transforming skylines one roof at a time."
        imageSrc="/images/our-work-hero.png"
        imageAlt="Aerial view of solar powered neighborhood"
      />

      {/* Stats Strip */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-midnight mb-1">500+</p>
              <p className="text-sm text-slate-grey uppercase tracking-wider font-semibold">Installations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-midnight mb-1">12MW</p>
              <p className="text-sm text-slate-grey uppercase tracking-wider font-semibold">Power Installed</p>
            </div>
             <div>
              <p className="text-4xl font-bold text-midnight mb-1">$2M+</p>
              <p className="text-sm text-slate-grey uppercase tracking-wider font-semibold">Client Savings</p>
            </div>
             <div>
              <p className="text-4xl font-bold text-midnight mb-1">10k</p>
              <p className="text-sm text-slate-grey uppercase tracking-wider font-semibold">Tons CO2 Avoided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filters (Visual only for now) */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <button className="px-6 py-2 rounded-full bg-midnight text-white font-medium">All Projects</button>
          <button className="px-6 py-2 rounded-full bg-soft-mist text-slate-grey hover:bg-gray-200 transition-colors font-medium">Residential</button>
          <button className="px-6 py-2 rounded-full bg-soft-mist text-slate-grey hover:bg-gray-200 transition-colors font-medium">Commercial</button>
          <button className="px-6 py-2 rounded-full bg-soft-mist text-slate-grey hover:bg-gray-200 transition-colors font-medium">Industrial</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "Coastal Luxury Villa",
              category: "Residential",
              system: "18kW System + Powerwall",
              location: "Malibu, CA",
              image: "/images/project-villa.png"
            },
            {
              id: 2,
              title: "Logistics Hub Alpha",
              category: "Industrial",
              system: "1.2MW Rooftop Array",
              location: "Oakland, CA",
              image: "/images/project-warehouse.png"
            },
            {
              id: 3,
              title: "Suburban Energy Independence",
              category: "Residential",
              system: "10kW Shingle Integrated",
              location: "Palo Alto, CA",
              image: "/images/project-suburban.png"
            },
            {
              id: 4,
              title: "Tech Campus EV Charging",
              category: "Commercial",
              system: "500kW Carport Canopy",
              location: "Mountain View, CA",
              image: "/images/project-carport.png"
            },
            {
              id: 5,
              title: "Eco-Resort Microgrid",
              category: "Commercial",
              system: "250kW Off-Grid Solution",
              location: "Kauai, HI",
              image: "/images/project-resort.png"
            },
            {
              id: 6,
              title: "Sustainable Agriculture",
              category: "Agricultural",
              system: "Agrivoltaics Pilot",
              location: "Fresno, CA",
              image: "/images/project-farm.png"
            }
          ].map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-lg">{project.title}</p>
                    <p className="text-white/80 text-sm">{project.location}</p>
                 </div>
              </div>
              <h3 className="text-lg font-bold text-midnight">{project.title}</h3>
              <p className="text-slate-grey text-sm">{project.category} • {project.system}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
