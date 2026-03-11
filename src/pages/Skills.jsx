import fastapi from "../assets/skills/fastapi.png";
import flask from "../assets/skills/flask.png";
import postgres from "../assets/skills/postgres.png";
import python from "../assets/skills/Python.svg.png";
import react from "../assets/skills/react.svg";
import javascript from "../assets/skills/Unofficial_JavaScript_logo_2.svg.png";
import java from "../assets/skills/hd-java-programming-logo.svg.png";
import typescript from "../assets/skills/ts.png";
import c from "../assets/skills/cee.png";

function Skills() {
  const skills = [
    { id: 1, skill_name: "C / C++", category: "Systems", image: c },
    { id: 2, skill_name: "FastAPI", category: "Backend", image: fastapi },
    { id: 3, skill_name: "Flask", category: "Backend", image: flask },
    { id: 4, skill_name: "Java", category: "Systems", image: java },
    {id: 5, skill_name: "JavaScript", category: "Frontend", image: javascript },
    { id: 6, skill_name: "Python", category: "Backend", image: python },
    { id: 7, skill_name: "PostgreSQL", category: "Database", image: postgres },
    { id: 8, skill_name: "React", category: "Frontend", image: react },
    { id: 9, skill_name: "TypeScript", category: "Frontend", image: typescript },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 lg:px-28">
      <h1 className="text-4xl font-bold mb-10 text-center">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white/10 border border-white/10 rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {skill.image ? (
              <img
                src={skill.image}
                alt={skill.skill_name}
                className="w-full h-24 object-contain p-4"
              />
            ) : (
              <div className="w-full h-24 flex items-center justify-center text-4xl bg-white/5">
                💻
              </div>
            )}
            <div className="p-4 text-center">
              <p className="text-lg font-semibold">{skill.skill_name}</p>
              <p className="text-sm text-purple-400 mt-1">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
