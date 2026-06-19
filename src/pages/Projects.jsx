import { useEffect } from "react";
import portfolio from "../assets/portfolio.png";
import vmmd from "../assets/IMG_5708.PNG";
import care from "../assets/carelog.png";

const carelog = {
  title: "CareLog Systems",
  description:
    "Founded and engineered a patient care validation system for healthcare facilities. Built real-time staff round logging, indoor positioning, compliance monitoring dashboards, and a scalable FastAPI + PostgreSQL backend — eliminating manual documentation and improving audit readiness. Designed to scale across multiple locations.",
  tech_stack: "React, FastAPI, PostgreSQL, Python",
  github_url: "https://github.com/Shamar12334/carelog-web",
  live_url: "https://www.carelogsystems.com",
  image: care,
};

const projects = [
  {
    id: 1,
    title: "Real-Time Human Activity Recognition",
    description:
      "Built a real-time activity recognition system using TensorFlow and OpenCV that classifies actions like walking, running, and jumping with 92% accuracy on webcam data. Collected and annotated 1,200+ video clips, and optimized the model with dropout and data augmentation — reducing misclassification by 28% and training time by 35%.",
    tech_stack: "Python, TensorFlow, OpenCV, Flask",
    github_url: null,
    live_url: null,
    image: null,
    placeholder: { icon: "🤖", label: "ML / Computer Vision" },
  },
  {
    id: 2,
    title: "ScamAware",
    description:
      "AI-powered scam detection tool that analyzes phone numbers, text messages, and emails to protect users from fraud. Built for the 305 HackShells hackathon hosted by Code Crunch — and took first place.",
    tech_stack: "HTML, CSS, JavaScript, AI APIs",
    github_url: "https://github.com/Shamar12334/ScamAware",
    live_url: null,
    image: null,
    hackathon: "305 HackShells Winner",
    placeholder: { icon: "🛡️", label: "Security Tool" },
  },
  {
    id: 3,
    title: "Gamified Habit Tracker",
    description:
      "RPG-style habit tracking app — users build a character, complete daily quests, unlock achievements, and compete on a leaderboard as they level up through habit completion.",
    tech_stack: "React, Python, Django, Node.js",
    github_url: "https://github.com/bryanfernandez-eng/gamified-habit-tracker",
    live_url: null,
    image: null,
    placeholder: { icon: "🎮", label: "Capstone Project" },
  },
  {
    id: 4,
    title: "Web Status Monitor",
    description:
      "Tool for monitoring the uptime and status of web services, alerting when sites go down.",
    tech_stack: "JavaScript",
    github_url: "https://github.com/Shamar12334/web-status-monitor",
    live_url: null,
    image: null,
    placeholder: { icon: "📡", label: "Dev Tool" },
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This portfolio — React frontend with a FastAPI backend, PostgreSQL database, and a protected admin portal for managing all content dynamically.",
    tech_stack: "React, FastAPI, PostgreSQL, Tailwind",
    github_url: "https://github.com/Shamar12334/Portfolio2",
    live_url: "https://www.shamar-weekes.com",
    image: portfolio,
  },
  {
    id: 6,
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
        <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-36 bg-gray-50 border-b border-gray-100 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{project.placeholder?.label ?? "Project"}</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {project.hackathon && (
          <span className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold rounded-full">
            {project.hackathon}
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
            <a href={project.github_url} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
              GitHub
            </a>
          )}
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  useEffect(() => { document.title = "Projects | Shamar Weekes"; }, []);

  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          What I've built
        </h1>
        <p className="text-gray-500 mb-16 max-w-lg text-sm">
          Production apps, ML systems, security tools, and embedded projects.
        </p>

        {/* CareLog — featured startup */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Startup</p>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              <img
                src={carelog.image}
                alt="CareLog Systems"
                className="w-full h-64 lg:h-full object-cover"
              />

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">
                      Founder & Engineer
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full">
                      Live
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">CareLog Systems</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{carelog.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {carelog.tech_stack.split(",").map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={carelog.github_url} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                    GitHub
                  </a>
                  <a href={carelog.live_url} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
                    carelogsystems.com ↗
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Rest of projects */}
        <div className="flex items-center gap-3 mb-6 mt-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Other Projects</p>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

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
