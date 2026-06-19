import shamar from "../assets/shamar.jpeg";

function About() {
  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">About</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-16">
          Who I am
        </h1>

        <div className="flex flex-col lg:flex-row items-start gap-16">

          <div className="flex-shrink-0">
            <img
              src={shamar}
              alt="Shamar Weekes"
              className="w-56 h-56 rounded-2xl object-cover border border-gray-100 shadow-sm"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Shamar Weekes</h2>
            <p className="text-blue-600 font-medium mb-6">Full-Stack Developer · Cybersecurity · AI</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Degree</p>
                <p className="text-gray-800 font-semibold">B.S. Computer Science</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Focus</p>
                <p className="text-gray-800 font-semibold">Full-Stack · Security · IoT</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              CS student with hands-on experience across full-stack development, cybersecurity, IoT, and AI.
              I've shipped production apps using Python, FastAPI, React, and PostgreSQL — including a
              hackathon-winning scam detection tool and a live SaaS product for behavioral health facilities.
              I'm actively looking for an internship where I can contribute across multiple domains and
              grow alongside experienced engineers.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              View Resume ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
