import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import portfolio from "../assets/portfolio.png";
import care from "../assets/carelog.png";

const featured = [
  {
    id: 1,
    title: "ScamAware",
    description: "AI-powered scam detection tool that analyzes phone numbers, texts, and emails to protect users from fraud.",
    tech_stack: "HTML, CSS, JavaScript, AI APIs",
    github_url: "https://github.com/Shamar12334/ScamAware",
    live_url: null,
    image: null,
    hackathon: "305 HackShells Winner",
  },
  {
    id: 2,
    title: "CareLog Systems",
    description: "Full-stack SaaS for behavioral health facilities — staff rounds, patient check-ins, care reports, and team collaboration.",
    tech_stack: "React, FastAPI, PostgreSQL, Python",
    github_url: "https://github.com/Shamar12334/carelog-web",
    live_url: "https://www.carelogsystems.com",
    image: care,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This portfolio — React frontend with a FastAPI backend, PostgreSQL database, and a protected admin portal.",
    tech_stack: "React, FastAPI, PostgreSQL, Tailwind",
    github_url: "https://github.com/Shamar12334/Portfolio2",
    live_url: "https://www.shamar-weekes.com",
    image: portfolio,
  },
];

function Home() {
  useEffect(() => {
    document.title = "Shamar Weekes | Full-Stack Developer";
  }, []);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="bg-gray-50 border-t border-gray-100 py-24 px-6 lg:px-28">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">Work</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-36 object-cover" />
                ) : (
                  <div className="w-full h-36 bg-gray-50 flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl">🛡️</span>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Security Tool</span>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  {project.hackathon && (
                    <span className="inline-flex items-center gap-1 self-start mb-2 px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold rounded-full">
                      🏆 {project.hackathon}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex gap-2">
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors">
                        GitHub
                      </a>
                    )}
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-1.5 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:border-gray-400 transition-colors">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
