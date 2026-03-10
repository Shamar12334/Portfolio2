import shamar from "../assets/shamar.jpeg";

function About() {
  const about = {
    name: "Shamar Weekes",
    degree: "B.S. Computer Science",
    years_of_experience: "none",
    bio: "I am a Computer Science student with a diverse technical background spanning full-stack development, IoT systems, AI integration, and cybersecurity. I have built production-ready applications using Python, FastAPI, React, and PostgreSQL, and have hands-on experience integrating hardware solutions like BLE beacons into real-world systems. I am actively seeking an internship where I can contribute across multiple domains, continue growing, and make a real impact alongside experienced engineers.",
    resume_url: "/resume.pdf",
  };

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 lg:px-32">
      {/* Heading */}
      <h1 className="text-center text-5xl font-extrabold mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-purple-600/30 rounded-full"></div>
          <img
            src={shamar}
            alt="Profile"
            className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-3xl object-cover shadow-2xl border border-white/10"
          />
        </div>

        {/* Text Content */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-xl max-w-xl">
          <h2 className="text-4xl font-bold mb-4">{about.name}</h2>

          <p className="text-lg opacity-90 mb-2">
            🎓 <span className="font-semibold">Degree:</span> {about.degree}
          </p>

          <p className="text-lg opacity-90 mb-4">
            💼 <span className="font-semibold">Experience:</span>{" "}
            {about.years_of_experience}+ years
          </p>

          <p className="opacity-80 leading-relaxed mb-8 text-lg">{about.bio}</p>

          {about.resume_url && (
            
              <a href={about.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-lg font-semibold transition inline-block shadow-md"
            >
              View Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
