import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Solar Quote | Volt & Ray',
  description: 'Start your journey to zero energy bills. Contact us for a free, custom solar proposal and financial analysis.',
};

export default function GetQuotePage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Start Your Solar Journey"
        subtitle="Ready to see how much you can save? Fill out the form below for a free, no-obligation custom design and quote."
        imageSrc="/images/contact-hero.png"
        imageAlt="Customer support representative with solar tablet"
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-midnight mb-6">Contact Information</h2>
              <p className="text-slate-grey mb-8">
                Have questions before you start? Give us a call or stop by our office.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-soft-mist flex items-center justify-center text-solar-blue shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-midnight">Headquarters</p>
                    <p className="text-slate-grey">123 Solar Avenue, Suite 400<br/>San Francisco, CA 94107</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-soft-mist flex items-center justify-center text-solar-blue shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-midnight">Phone</p>
                    <p className="text-slate-grey">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-grey mt-1">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-soft-mist flex items-center justify-center text-solar-blue shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-midnight">Email</p>
                    <p className="text-slate-grey">hello@voltandray.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-midnight p-8 rounded-2xl text-white">
               <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-2 text-white/80">
                   <ArrowRight size={16} className="text-solar-blue" />
                   <span>Local, certified installers</span>
                 </li>
                 <li className="flex items-center gap-2 text-white/80">
                   <ArrowRight size={16} className="text-solar-blue" />
                   <span>No hidden fees or markups</span>
                 </li>
                 <li className="flex items-center gap-2 text-white/80">
                   <ArrowRight size={16} className="text-solar-blue" />
                   <span>Industry-leading warranties</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-soft-mist/30 p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-midnight mb-8">Request Your Free Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-midnight">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-midnight">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

               <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-midnight">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-midnight">Home Address</label>
                  <input type="text" id="address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all" placeholder="123 Solar St" />
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                  <label htmlFor="bill" className="text-sm font-semibold text-midnight">Avg. Monthly Bill</label>
                  <select id="bill" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all bg-white">
                    <option value="">Select range...</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300-500">$300 - $500</option>
                    <option value="500+">$500+</option>
                  </select>
                </div>
                 <div className="space-y-2">
                  <label htmlFor="property" className="text-sm font-semibold text-midnight">Property Type</label>
                  <select id="property" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-blue focus:ring-1 focus:ring-solar-blue outline-none transition-all bg-white">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                 </div>

                 <button type="submit" className="w-full bg-solar-blue text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg mt-4">
                   Get My Free Quote
                 </button>
                 <p className="text-xs text-center text-slate-grey">
                   By clicking the button above, you agree to our Terms of Service and Privacy Policy.
                 </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
