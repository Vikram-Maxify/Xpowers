import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-navy via-[#1a4f96] to-royal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky/10 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6" data-aos="fade-up">
          <Sparkles size={14} />
          Start Your Digital Journey
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
          Have an Idea? Let's Build Something{" "}
          <span className="text-sky">Great Together.</span>
        </h2>
        <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="200">
          Partner with our experienced team to transform your vision into a scalable, high-impact digital product. From concept to launch — we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
          <Link to="/contact" className="btn-white">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn-white-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
