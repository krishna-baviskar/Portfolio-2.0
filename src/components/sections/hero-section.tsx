"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import ThreeCanvas from '@/components/ui/three-canvas';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [particleSpeed, setParticleSpeed] = useState(1);
  const [shapeComplexity, setShapeComplexity] = useState(20);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <ThreeCanvas particleSpeed={particleSpeed} shapeComplexity={shapeComplexity} />
      
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-foreground mb-4 animate-fade-in-down">
          CodeCanvas Portfolio
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
          An interactive portfolio exploring creative development and modern web technologies.
        </p>
        <div className="animate-fade-in-up [animation-delay:0.4s]">
          <Link href="#projects">
            <Button size="lg" className="font-bold">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute z-10 bottom-4 right-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg w-64 space-y-4 shadow-lg hidden md:block">
        <div className="space-y-2">
          <Label htmlFor="speed-slider" className="text-sm font-medium">Particle Speed</Label>
          <Slider
            id="speed-slider"
            defaultValue={[1]}
            value={[particleSpeed]}
            max={5}
            step={0.1}
            onValueChange={(value) => setParticleSpeed(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="complexity-slider" className="text-sm font-medium">Shape Complexity</Label>
          <Slider
            id="complexity-slider"
            defaultValue={[20]}
            value={[shapeComplexity]}
            max={100}
            step={5}
            onValueChange={(value) => setShapeComplexity(value[0])}
          />
        </div>
      </div>

      <div className="absolute bottom-8 z-10 text-muted-foreground animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
}
