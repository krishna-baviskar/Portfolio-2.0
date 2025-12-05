export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            I'm always open to networking with professionals, innovators, and teams that are pushing the boundaries of engineering and technology. Whether you're looking to collaborate on exciting projects, discuss innovative ideas, or explore opportunities, I'd love to connect!
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-12">
            With my interdisciplinary background spanning mechanical engineering, computer science, web development, AI/ML, and Android development, I bring a unique perspective to problem-solving and innovation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="mailto:krishna@email.com"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
  );
}
