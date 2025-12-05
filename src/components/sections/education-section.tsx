 const education = [
    {
      institution: 'D. Y. Patil College of Engineering',
      degree: 'Bachelor of Technology - Computer Engineering',
      location: 'Akurdi, Pune',
      period: 'August 2024 - Present',
      icon: '🎓'
    },
    {
      institution: 'Government Polytechnic College',
      degree: 'Diploma in Mechanical Engineering',
      location: 'Nashik',
      period: 'August 2021 - July 2024',
      icon: '⚙️'
    },
    {
      institution: 'Kendriya Vidyalaya (KV)',
      degree: '10th Standard',
      location: 'Ahmedabad, India',
      period: '2011 - 2021',
      icon: '📚'
    }
];

export default function EducationSection() {
    return (
        <section id="education" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Educational Background
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-slate-700/30 hover:border-yellow-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-yellow-300 mb-2">{edu.institution}</h3>
                    <p className="text-lg md:text-xl text-orange-400 mb-2">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
                      <span>📍 {edu.location}</span>
                      <span>📅 {edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
