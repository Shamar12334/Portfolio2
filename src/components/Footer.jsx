import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 text-white">
      <div className="flex flex-col items-center gap-6">
        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link className="text-white/60 hover:text-white transition" to="/">Home</Link>
          <Link className="text-white/60 hover:text-white transition" to="/about">About</Link>
          <Link className="text-white/60 hover:text-white transition" to="/projects">Projects</Link>
          <Link className="text-white/60 hover:text-white transition" to="/skills">Skills</Link>
          <Link className="text-white/60 hover:text-white transition" to="/contact">Contact</Link>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          <a className="text-white/60 hover:text-white transition" href="https://linkedin.com/in/shamar-weekes" target="_blank" rel="noopener">LinkedIn</a>
          <a className="text-white/60 hover:text-white transition" href="https://github.com/Shamar12334" target="_blank" rel="noopener">GitHub</a>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm">&copy; 2025 Shamar Weekes</p>
      </div>
    </footer>
  );
}

export default Footer;
