import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6 text-primary">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a passionate creative developer with a love for building beautiful, interactive, and performant web experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
              </p>
              <p>
                My goal is to leverage technology to create memorable digital products that not only look good but are also a joy to use. This portfolio is a canvas for my experiments in the realm of 3D web graphics and modern frontend architecture.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative aspect-square w-full max-w-sm">
              {profileImage && <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={profileImage.imageHint}
                sizes="(max-width: 640px) 90vw, 400px"
              />}
              <div className="absolute -inset-2.5 rounded-lg border-2 border-primary/30 -z-10 transform rotate-3"></div>
              <div className="absolute -inset-2.5 rounded-lg border-2 border-primary/30 -z-10 transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
