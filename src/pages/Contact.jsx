function Contact() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p className="text-lg opacity-70 mb-10 text-center max-w-md">
        I’d love to connect — feel free to reach out.
      </p>
      
        <a href="https://linkedin.com/in/shamar-weekes"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold transition hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
      >
        www.linkedin.com/in/shamar-weekes
      </a>
    </section>
  );
}

export default Contact;
