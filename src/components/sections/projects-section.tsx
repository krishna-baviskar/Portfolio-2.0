import { ExternalLink } from 'lucide-react';

const projects = [
    {
      title: 'AI-Powered Web Application',
      description: 'Full-stack web application with integrated machine learning models for real-time predictions and data analysis.',
      tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
      icon: '🤖'
    },
    {
      title: 'Android Task Manager',
      description: 'Feature-rich Android application with MVVM architecture, Firebase integration, and real-time synchronization.',
      tech: ['Kotlin', 'MVVM', 'Firebase', 'Jetpack'],
      color: 'from-green-500 to-emerald-500',
      icon: '📱'
    },
    {
      title: 'Manufacturing Analytics Dashboard',
      description: 'Real-time analytics dashboard for manufacturing process optimization and quality control monitoring.',
      tech: ['React', 'D3.js', 'REST API', 'Python'],
      color: 'from-orange-500 to-red-500',
      icon: '⚙️'
    },
    {
      title: 'Reinforcement Learning Agent',
      description: 'Advanced RL agent implementation for autonomous decision-making using deep Q-learning networks.',
      tech: ['Python', 'TensorFlow', 'OpenAI Gym', 'NumPy'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🧠'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Scalable e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-yellow-500 to-orange-500',
      icon: '🛒'
    },
    {
      title: 'IoT Device Controller',
      description: 'IoT platform for remote device monitoring and control with real-time data visualization.',
      tech: ['React', 'MQTT', 'Firebase', 'Arduino'],
      color: 'from-indigo-500 to-purple-500',
      icon: '🔌'
    }
  ];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 rounded-2xl backdrop-blur-lg border border-slate-700/30 hover:border-purple-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-6xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className={`flex-1 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                    <ExternalLink size={16} />
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
