import portfolio from "../assets/portfolio.png";
import vmmd from "../assets/IMG_5708.PNG";
import care from "../assets/carelog.png";

const projects = [
  {
    id: 1,
    title: "ScamAware",
    description:
      "AI-powered scam detection tool that analyzes phone numbers, text messages, and emails to protect users from fraud. Built for the 305 HackShells hackathon hosted by Code Crunch — and took first place.",
    tech_stack: "HTML, CSS, JavaScript, AI APIs",
    github_url: "https://github.com/Shamar12334/ScamAware",
    live_url: null,
    image: null,
    hackathon: "305 HackShells Winner",
  },
  {
    id: 2,
    title: "CareLog Systems",
    description:
      "Full-stack application for behavioral health facilities to manage staff rounds, log patient check-ins, track activity, and generate care reports. Supports team collaboration across free, facility, and enterprise tiers.",
    tech_stack: "React, FastAPI, PostgreSQL, Python",
    github_url: "https://github.com/Shamar12334/carelog-web",
    live_url: "https://www.carelogsystems.com",
    image: care,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This portfolio — a full-stack application with a FastAPI backend, PostgreSQL database, React frontend, and a protected admin portal for managing all content dynamically.",
    tech_stack: "React, FastAPI, PostgreSQL, Tailwind",
    github_url: "https://github.com/Shamar12334/Portfolio2",
    live_url: null,
    image: portfolio,
  },
  {
    id: 4,
    title: "Vertical Mass Measuring Device",
    description:
      "Programmed an ESP32 microcontroller to calculate the mass of an unknown object through oscillatory motion — designed to operate during a rocket launch.",
    tech_stack: "C, ESP32, Arduino IDE",
    github_url: null,
    live_url: null,
    image: vmmd,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white">

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
        />
      ) : (
        <div className="w-full h-2 bg-gray-900" />
      )}

      <div className="p-6 flex flex-col flex-1">

        {project.hackathon && (
          <span className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold rounded-full">
            🏆 {project.hackathon}
          </span>
        )}

        <h2 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.tech_stack && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech_stack.split(",").map((tech, idx) => (
              <span key={idx} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          What I've built
        </h1>
        <p className="text-gray-500 mb-16 max-w-lg text-sm">
          A selection of projects spanning web applications, security tools, and embedded systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
