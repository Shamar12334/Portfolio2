import { useEffect } from "react";
import fastapi from "../assets/skills/fastapi.png";
import flask from "../assets/skills/flask.png";
import postgres from "../assets/skills/postgres.png";
import python from "../assets/skills/Python.svg.png";
import react from "../assets/skills/react.svg";
import javascript from "../assets/skills/Unofficial_JavaScript_logo_2.svg.png";
import java from "../assets/skills/hd-java-programming-logo.svg.png";
import typescript from "../assets/skills/ts.png";
import c from "../assets/skills/cee.png";

const categories = [
  {
    label: "Languages",
    skills: [
      { name: "Python",      image: python },
      { name: "JavaScript",  image: javascript },
      { name: "TypeScript",  image: typescript },
      { name: "Java",        image: java },
      { name: "C / C++",    image: c },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React",       image: react },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "FastAPI",     image: fastapi },
      { name: "Flask",       image: flask },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL",  image: postgres },
    ],
  },
];

const textSkills = {
  "Frameworks": ["Next.js", "Node.js", "Express", "Django", "Tailwind CSS"],
  "Databases": ["MongoDB", "MySQL", "SQLite", "Redis", "Firebase"],
  "Tools": ["Docker", "Git", "CI/CD", "Linux", "REST APIs", "Figma", "Agile"],
  "Testing": ["PyTest", "JUnit", "Vitest"],
};

function Skills() {
  useEffect(() => {
    document.title = "Skills | Shamar Weekes";
  }, []);

  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Skills</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          What I work with
        </h1>
        <p className="text-gray-500 mb-16 max-w-lg text-sm">
          Languages, frameworks, and tools I use across full-stack, ML, and embedded projects.
        </p>

        {/* Icon grid */}
        <div className="space-y-12 mb-16">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{label}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <img src={skill.image} alt={skill.name} className="w-10 h-10 object-contain" />
                    <p className="text-sm font-semibold text-gray-800 text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Text-based additional skills */}
        <div className="border-t border-gray-100 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(textSkills).map(([label, items]) => (
            <div key={label}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
