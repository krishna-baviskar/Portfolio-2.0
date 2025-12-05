import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A data visualization tool built with React and D3, showcasing complex datasets in an interactive manner.',
    tags: ['React', 'D3.js', 'TypeScript'],
    link: '#',
    imageId: 'project-1'
  },
  {
    title: 'Project Beta',
    description: 'A full-featured e-commerce dashboard providing analytics and sales tracking for online businesses.',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma'],
    link: '#',
    imageId: 'project-2'
  },
  {
    title: 'Project Gamma',
    description: 'A sleek and responsive mobile application for social networking, designed with a focus on user experience.',
    tags: ['React Native', 'Firebase', 'Figma'],
    link: '#',
    imageId: 'project-3'
  },
  {
    title: 'Project Delta',
    description: 'Scalable e-commerce platform with a custom CMS and integrated payment gateways for seamless transactions.',
    tags: ['Shopify', 'Liquid', 'GraphQL'],
    link: '#',
    imageId: 'project-4'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-12 text-center">My Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.imageId);
            if (!image) return null;
            return <ProjectCard key={project.title} {...project} image={image} />;
          })}
        </div>
      </div>
    </section>
  );
}
