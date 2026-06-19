import { useEffect } from "react";

function Contact() {
  useEffect(() => { document.title = "Contact | Shamar Weekes"; }, []);

  return (
    <section className="min-h-screen bg-white py-32 px-6 lg:px-28">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Let's talk
        </h1>
        <p className="text-gray-500 mb-16 max-w-lg text-sm">
          Open to internships, collaborations, and interesting projects. Reach out through any of the channels below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">

          <a
            href="mailto:weekesshamar38@gmail.com"
            className="flex flex-col gap-1 p-5 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
            <p className="text-sm font-semibold text-gray-900 break-all">weekesshamar38@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/shamar-weekes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 p-5 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">LinkedIn</p>
            <p className="text-sm font-semibold text-gray-900">shamar-weekes ↗</p>
          </a>

          <a
            href="https://github.com/Shamar12334"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 p-5 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">GitHub</p>
            <p className="text-sm font-semibold text-gray-900">Shamar12334 ↗</p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
