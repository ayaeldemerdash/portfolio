import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return window.location.pathname === "/";
    return href.includes("#");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="hidden sm:block font-bold text-gray-800">Aya</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:text-white hover:bg-pink-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-pink-500 text-white"
                    : "text-gray-700 hover:bg-pink-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
