import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl">Shamar Weekes</h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <Link className="text-white/70 hover:text-white transition" to="/">Home</Link>
          <Link className="text-white/70 hover:text-white transition" to="/about">About</Link>
          <Link className="text-white/70 hover:text-white transition" to="/projects">Projects</Link>
          <Link className="text-white/70 hover:text-white transition" to="/skills">Skills</Link>
          <Link className="text-white/70 hover:text-white transition" to="/contact">Contact</Link>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black/95 px-6 pb-4 gap-4">
          <Link className="text-white/70 hover:text-white transition" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="text-white/70 hover:text-white transition" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="text-white/70 hover:text-white transition" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link className="text-white/70 hover:text-white transition" to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link className="text-white/70 hover:text-white transition" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
