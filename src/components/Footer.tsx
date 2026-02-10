import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-midnight pt-24 pb-12 overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <span className="text-[12vw] font-bold text-white opacity-[0.03] whitespace-nowrap leading-none">
          VOLT & RAY
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-solar-blue rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Volt & Ray
              </span>
            </Link>
            <p className="text-slate-grey leading-relaxed">
              Empowering homes and businesses with clean, renewable energy
              solutions. Building a sustainable future, one roof at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-solar-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-solar-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-solar-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-solar-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Press & Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Our Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/get-quote"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Warranty Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  Installation Guide
                </a>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-slate-grey hover:text-white transition-colors"
                >
                  System Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-slate-grey">
                <MapPin className="w-5 h-5 text-solar-blue flex-shrink-0" />
                <span>
                  123 Solar Avenue, Suite 400
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-grey">
                <Phone className="w-5 h-5 text-solar-blue flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-grey">
                <Mail className="w-5 h-5 text-solar-blue flex-shrink-0" />
                <span>hello@voltandray.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-grey text-sm">
            © 2026 Volt & Ray. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-slate-grey hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-grey hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-grey hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
