import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 | Shamar Weekes";
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
      <p className="text-gray-500 text-sm mb-8">This page doesn't exist or was moved.</p>
      <Link
        to="/"
        className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
