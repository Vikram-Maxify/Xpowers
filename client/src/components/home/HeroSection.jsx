import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustItems = [
  "Trusted by 50+ Businesses",
  "On-Time Delivery",
  "Dedicated Support",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 via-sky-50/30 to-transparent rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50/50 to-transparent rounded-full translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left */}
        <div>
          <span className="section-badge" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-sky inline-block" />
            Digital Innovation &amp; Technology Partner
          </span>

          <h1
            className="section-title text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Building Digital{" "}
            <span className="text-royal">Experiences</span> That Drive{" "}
            <span className="relative inline-block">
              Business Growth.
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-royal to-sky rounded-full" />
            </span>
          </h1>

          <p
            className="section-subtitle text-body max-w-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We design and develop world-class web applications, mobile apps, and
            custom software solutions that help businesses scale, compete, and
            succeed in the digital era.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/services/web-development" className="btn-primary">
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Let's Discuss Your Project
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3" data-aos="fade-up" data-aos-delay="400">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-body">
                <CheckCircle2 size={16} className="text-royal flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/60 aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Software development team collaborating"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
          </div>
          <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-blue-50 px-4 py-3 flex items-center gap-3 animate-pulse2">
            <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-royal" />
            </div>
            <div>
              <p className="text-xs text-body">Project Delivered</p>
              <p className="text-sm font-bold text-heading">On Time &amp; Budget</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-blue-50 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center text-white font-bold text-sm">
              50+
            </div>
            <div>
              <p className="text-xs text-body">Happy Clients</p>
              <p className="text-sm font-bold text-heading">Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
