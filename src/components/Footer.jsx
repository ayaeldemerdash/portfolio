export default function Footer() {
  return (
    <footer className="bg-[#cf1e76] text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Aya Eldemerdash</h3>
            <p className="text-sm opacity-90">
              Frontend Developer crafting beautiful, responsive websites with React and modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white/80 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white/80 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white/80 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:01007951624" className="hover:text-white/80 transition-colors">
                  +20 100 795 1624
                </a>
              </li>
              <li>
                <a href="mailto:Aya.eldemerdash2005@gmail.com" className="hover:text-white/80 transition-colors">
                  Aya.eldemerdash2005@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aya-eldemardash-14b5b4338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Aya Eldemerdash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}