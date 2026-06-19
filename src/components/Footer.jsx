import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-10 text-gray-500">
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
          <Link className="hover:text-gray-900 transition-colors" to="/about">About</Link>
          <Link className="hover:text-gray-900 transition-colors" to="/projects">Projects</Link>
          <Link className="hover:text-gray-900 transition-colors" to="/skills">Skills</Link>
          <Link className="hover:text-gray-900 transition-colors" to="/contact">Contact</Link>
        </div>
        <div className="flex gap-6 text-sm">
          <a className="hover:text-gray-900 transition-colors" href="https://linkedin.com/in/shamar-weekes" target="_blank" rel="noopener">LinkedIn</a>
          <a className="hover:text-gray-900 transition-colors" href="https://github.com/Shamar12334" target="_blank" rel="noopener">GitHub</a>
        </div>
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Shamar Weekes</p>
      </div>
    </footer>
  );
}

export default Footer;
