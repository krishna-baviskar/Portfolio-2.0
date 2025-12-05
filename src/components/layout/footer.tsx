export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} Krishna Somnath Baviskar. All rights reserved.</p>
        <p className="mt-2">Built with passion, innovation, and cutting-edge technology.</p>
      </div>
    </footer>
  );
}
