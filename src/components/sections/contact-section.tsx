import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
        <div className="flex justify-center mb-12">
            <Button asChild size="lg" className="font-bold">
                <a href="mailto:hello@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Say Hello
                </a>
            </Button>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Link href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
