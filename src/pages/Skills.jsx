import fastapi from "../assets/skills/fastapi.png";
import flask from "../assets/skills/flask.png";
import postgres from "../assets/skills/postgres.png";
import python from "../assets/skills/Python.svg.png";
import react from "../assets/skills/react.svg";
import javascript from "../assets/skills/Unofficial_JavaScript_logo_2.svg.png";
import java from "../assets/skills/hd-java-programming-logo.svg.png";
import typescript from "../assets/skills/ts.png";
import c from "../assets/skills/cee.png";

const skills = [
  { id: 1, name: "Python",      category: "Backend",   image: python },
  { id: 2, name: "JavaScript",  category: "Frontend",  image: javascript },
  { id: 3, name: "TypeScript",  category: "Frontend",  image: typescript },
  { id: 4, name: "React",       category: "Frontend",  image: react },
  { id: 5, name: "FastAPI",     category: "Backend",   image: fastapi },
  { id: 6, name: "Flask",       category: "Backend",   image: flask },
  { id: 7, name: "PostgreSQL",  category: "Database",  image: postgres },
  { id: 8, name: "Java",        category: "Systems",   image: java },
  { id: 9, name: "C / C++",    category: "Systems",   image: c },
];

function Skills() {
  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Skills</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          What I work with
        </h1>
        <p className="text-gray-500 mb-16 max-w-lg text-sm">
          Languages, frameworks, and tools I use to build full-stack and security-focused software.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-3 p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800">{skill.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
