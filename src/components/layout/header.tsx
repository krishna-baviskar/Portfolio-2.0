
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return '<Good Morning />';
      } else if (hour >= 12 && hour < 18) {
        return '<Good Afternoon />';
      } else if (hour >= 18 && hour < 22) {
        return '<Good Evening />';
      } else {
        return '<Good Night />';
      }
    };
    setGreeting(getGreeting());
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-purple-500/20"
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" onClick={closeMobileMenu}>
            {greeting || '</> Welcome'}
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
            <button className="md:hidden text-purple-400" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-6 py-3 hover:bg-purple-500/10 transition-colors" onClick={closeMobileMenu}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
