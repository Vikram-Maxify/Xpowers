import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fade-in-up">
          Crafting Bespoke Digital Experiences for Visionary Brands
        </h1>
        <p className="text-lg md:text-xl text-gray-200 animate-fade-in-up delay-150">
          From cutting‑edge web development and native mobile apps to custom software solutions, we turn ideas into high‑impact products.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 animate-fade-in-up delay-300">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
          >
            Start Your Project
          </Link>
          <Link
            to="#services"
            className="inline-flex items-center px-6 py-3 border border-white hover:bg-white hover:text-gray-900 text-white rounded-md font-medium transition"
          >
            Explore Our Services
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
