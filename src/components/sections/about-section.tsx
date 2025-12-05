import { Zap, Target, Rocket } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-lg border border-purple-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <Target className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-purple-300">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm Krishna Baviskar, a passionate and versatile engineering student with a strong foundation in Mechanical Engineering and a keen interest in Computer Engineering. My academic journey has equipped me with a diverse set of skills, allowing me to approach problems with a unique, interdisciplinary perspective.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl backdrop-blur-lg border border-cyan-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <Rocket className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Location & Vision</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              📍 Pune, Maharashtra, India
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm always open to networking with professionals, innovators, and teams that are pushing the boundaries of engineering and technology. Let's connect and collaborate on exciting, future-focused projects!
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-lg border border-pink-500/20">
          <Zap className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 text-center text-pink-300">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300 font-semibold">
              Reinforcement Learning
            </span>
            <span className="px-6 py-3 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300 font-semibold">
              React.js
            </span>
            <span className="px-6 py-3 bg-pink-500/20 rounded-full border border-pink-500/30 text-pink-300 font-semibold">
              JavaScript Libraries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
