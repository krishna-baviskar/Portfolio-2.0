import { Code, Cpu, Smartphone, Cog, Zap } from 'lucide-react';

const skills = {
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    backend: ['Node.js', 'REST API', 'MongoDB', 'Authentication', 'Firebase'],
    aiml: ['Python', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    mobile: ['Android Studio', 'Java', 'Kotlin', 'MVVM', 'Jetpack Components'],
    tools: ['Git', 'GitHub', 'CNC Machines', 'Manufacturing', 'Oracle DB']
  };

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <Code className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Frontend Development</h3>
              <div className="space-y-2">
                {skills.frontend.map((skill, i) => (
                  <div key={i} className="px-4 py-2 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
              <Cpu className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-300">Backend Systems</h3>
              <div className="space-y-2">
                {skills.backend.map((skill, i) => (
                  <div key={i} className="px-4 py-2 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-cyan-500/20 transform hover:scale-105 transition-all duration-300">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300">AI & Machine Learning</h3>
              <div className="space-y-2">
                {skills.aiml.map((skill, i) => (
                  <div key={i} className="px-4 py-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-green-500/20 transform hover:scale-105 transition-all duration-300">
              <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-green-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-300">Mobile Development</h3>
              <div className="space-y-2">
                {skills.mobile.map((skill, i) => (
                  <div key={i} className="px-4 py-2 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <Cog className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-300">Tools & Manufacturing</h3>
              <div className="space-y-2">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="px-4 py-2 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
