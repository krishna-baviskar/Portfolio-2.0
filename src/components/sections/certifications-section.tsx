import { Award } from 'lucide-react'; 

const certifications = [
    { name: 'Oracle Certified Foundation Associate', desc: 'Database management expertise' },
    { name: 'Prompt Engineering', desc: 'AI language model optimization' },
    { name: 'Software Development', desc: 'Microsoft & LinkedIn certified' },
    { name: 'Fundamentals of Deep Learning', desc: 'Neural networks and architectures' },
    { name: 'Data Analysis', desc: 'Microsoft & LinkedIn certified' }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 p-6 rounded-2xl backdrop-blur-lg border border-pink-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20"
              >
                <Award className="w-10 h-10 md:w-12 md:h-12 text-pink-400 mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-pink-300 mb-2">{cert.name}</h3>
                <p className="text-gray-300">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
