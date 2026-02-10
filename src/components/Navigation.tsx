"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Residential',
      href: '/residential'
    },
    {
      name: 'Commercial',
      href: '/commercial'
    },
    {
      name: 'Technology',
      href: '/technology'
    },
    {
      name: 'Our Work',
      href: '/our-work'
    }
  ];

  return (
    <>
      <motion.nav
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
        className={`fixed top-6 left-0 right-0 z-50 mx-auto w-[90%] max-w-5xl transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-white/20' : 'bg-white/70 backdrop-blur-md border border-white/20'} rounded-full px-6 py-3 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-midnight rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="#2B7FFF"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-bold text-midnight text-lg tracking-tight">
            Volt & Ray
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors text-sm ${pathname === link.href ? 'text-solar-blue' : 'text-midnight hover:text-solar-blue'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/get-quote"
            className="bg-midnight text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-solar-blue transition-colors duration-300 shadow-md inline-block"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-midnight p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95
            }}
            transition={{
              duration: 0.2
            }}
            className="fixed top-24 left-0 right-0 mx-auto w-[90%] max-w-md bg-white rounded-2xl shadow-xl z-40 p-6 border border-gray-100 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-lg py-2 border-b border-gray-50 last:border-0 ${pathname === link.href ? 'text-solar-blue' : 'text-midnight'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/get-quote"
                className="bg-midnight text-white w-full py-3 rounded-full font-semibold mt-2 hover:bg-solar-blue transition-colors text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
