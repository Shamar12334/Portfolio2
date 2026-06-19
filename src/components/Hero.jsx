import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white px-6 lg:px-28">
      <div className="max-w-4xl w-full pt-24 pb-20">

        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
          Shamar Weekes
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl font-medium text-gray-400">
          Full-Stack Developer
        </h2>

        <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
          I build production-ready web applications — from REST APIs to polished frontends.
          Passionate about cybersecurity and AI-driven solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap gap-10 text-sm border-t border-gray-100 pt-10">
          <div>
            <p className="text-2xl font-bold text-gray-900">1</p>
            <p className="text-gray-400 mt-0.5">Hackathon Win</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">4+</p>
            <p className="text-gray-400 mt-0.5">Projects Shipped</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">Full-Stack</p>
            <p className="text-gray-400 mt-0.5">Python · React · AI</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
