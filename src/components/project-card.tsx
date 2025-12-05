import Image from 'next/image'; 
import Link from 'next/link'; 
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ProjectCardProps {
  image: ImagePlaceholder;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export function ProjectCard({ image, title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-card/80 backdrop-blur-sm group transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2 border-border/50 hover:border-primary/50">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="flex flex-col h-full">
          <CardHeader className="p-0">
            <div className="relative aspect-video">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardTitle className="font-headline text-xl mb-2 flex items-center justify-between">
              {title}
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
}
