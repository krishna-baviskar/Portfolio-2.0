import { Code, Database, Cloud, Brush, Smartphone, TerminalSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { name: 'Frontend', icon: Code, description: 'React, Next.js, Vue, Tailwind' },
  { name: 'Backend', icon: Database, description: 'Node.js, Python, Firebase, SQL' },
  { name: 'Cloud & DevOps', icon: Cloud, description: 'Docker, GCP, Vercel, CI/CD' },
  { name: 'UI/UX Design', icon: Brush, description: 'Figma, Adobe XD, User Research' },
  { name: 'Mobile Dev', icon: Smartphone, description: 'React Native, Flutter' },
  { name: 'Tooling', icon: TerminalSquare, description: 'Git, Webpack, Jest' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-12 text-center">My Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="text-center bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary border-border/50">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                  <skill.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2">{skill.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
