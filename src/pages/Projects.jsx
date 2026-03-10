import portfolio from "../assets/portfolio.png";
import vmmd from "../assets/IMG_5708.PNG";
import care from "../assets/carelog.png";
function Projects() {
  // =============================================
  // TODO: Replace with your actual projects
  // For images: add them to src/assets/ and import at top like:
  // import project1Img from "../assets/project1.png";
  // Then use: image: project1Img
  // =============================================
  const projects = [
    {
      id: 1,
      title: "Patient Care System", // TODO: Update title
      description:
        "A full-stack application for monitoring staff rounds at hospitals,validating patients care.", // TODO: Update description
      tech_stack: "FastAPI, PostgreSQL, React,Python",  // TODO: Update tech stack
      github_url: "https://github.com/Shamar12334/carelog-web",   // TODO: Update GitHub URL
      live_url: "https://carelog-landing.vercel.app/",                                    // TODO: Add live URL if available
      image: care,                                     // TODO: Replace null with imported image
    },
    {
      id: 2,
      title: "Portfolio Website",            // TODO: Update title
      description:
        "A personal portfolio built with React and FastAPI showcasing projects, skills and experience.", // TODO: Update description
      tech_stack: "React, FastAPI, PostgreSQL, Tailwind",
      github_url: "https://github.com/Shamar12334",
      live_url: "",
      image: portfolio,                                     // TODO: Replace null with imported image
    },
    {
      id: 3,
      title: "Vertical Mass Measuring Device",               // TODO: Add your third project
      description: "Developed a device to record the weight of an object osilating back and forth during the launch of a rocket",
      tech_stack: "C, ESP32,Arduino IDE",
      github_url:"",
      live_url: null,
      image:vmmd ,                                     // TODO: Replace null with imported image
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 lg:px-28">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 border border-white/10 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            {/* TODO: Replace null check with your imported image */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
            ) : (
              <div className="w-full h-56 bg-white/5 flex items-center justify-center text-white/40">
                No Image
              </div>
            )}

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="opacity-80 mb-4">{project.description}</p>

              {/* Tech stack badges */}
              {project.tech_stack && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
