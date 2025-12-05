import { Code, Cpu, Smartphone, Cog, Star } from 'lucide-react';

const experiences = [
    {
      title: 'Web Development Intern',
      company: 'VaultofCodes',
      period: 'February 2025 - March 2025',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      description: 'Built responsive and scalable web applications with full-stack expertise',
      achievements: [
        'Developed frontend with React, HTML, CSS, JavaScript',
        'Implemented backend with Node.js and REST APIs',
        'Managed MongoDB databases and authentication systems',
        'Version control with Git & GitHub'
      ]
    },
    {
      title: 'AI ML Intern',
      company: 'AICTE',
      period: 'January 2025 - March 2025',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      description: 'Industry-aligned AI/ML learning with hands-on projects',
      achievements: [
        'Mastered supervised and unsupervised learning',
        'Data preprocessing and model building',
        'Python programming with NumPy, Pandas',
        'Deep learning with TensorFlow'
      ]
    },
    {
      title: 'Android Developer Intern',
      company: 'AICTE',
      period: 'October 2024 - December 2024',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      description: 'Enhanced mobile app development skills with modern Android technologies',
      achievements: [
        'Built robust apps with Java/Kotlin',
        'Implemented MVVM architecture patterns',
        'Integrated REST APIs and Firebase',
        'Optimized performance and UI responsiveness'
      ]
    },
    {
      title: 'Manufacturing Intern',
      company: 'Fortuna Engineering',
      period: 'January 2024 - June 2024',
      icon: Cog,
      color: 'from-orange-500 to-red-500',
      description: 'Hands-on manufacturing and design experience',
      achievements: [
        'Learned connecting rod design principles',
        'Operated CNC machines, lathes, milling equipment',
        'Understood complete manufacturing workflow',
        'Quality control and finishing techniques'
      ]
    }
  ];

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-slate-700/30 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 transform hover:rotate-12 transition-transform duration-300`}>
                      <Icon size={40} className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-purple-300">{exp.title}</h3>
                          <p className="text-lg md:text-xl text-cyan-400">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 mt-2 md:mt-0 text-sm md:text-base">{exp.period}</span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <Star size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
}
