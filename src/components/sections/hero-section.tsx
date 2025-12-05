"use client";

import Link from 'next/link';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import ThreeCanvas from '@/components/ui/three-canvas';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <ThreeCanvas />
      
      <div className="max-w-7xl mx-auto py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="w-36 h-36 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-36 h-36 md:w-48 md:h-48 mx-auto bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full animate-spin-slow opacity-50"></div>
              <div className="absolute inset-2 md:inset-4 w-32 h-32 md:w-40 md:h-40 mx-auto bg-slate-900 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold">
                KB
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Krishna Somnath Baviskar
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-300 mb-4">
            I'm Software Developer | with AI, Devops and Robotics ethusiasts
          </p>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Technophile | Passionate About Innovation and Problem-Solving
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-6 mb-12">
            <a href="mailto:krishna@email.com" className="transform hover:scale-110 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50">
                <Mail size={24} />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50">
                <Linkedin size={24} />
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/50">
                <Github size={24} />
              </div>
            </a>
          </div>

          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown size={40} className="text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
