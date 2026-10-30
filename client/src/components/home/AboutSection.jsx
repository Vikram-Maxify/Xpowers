import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Business-first approach to every project",
  "Transparent communication & regular updates",
  "Scalable and maintainable code architecture",
  "Dedicated team, from design to deployment",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1" data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[5/4]">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
              alt="Team working in a modern office"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-section border border-blue-100 rounded-2xl p-5 shadow-lg max-w-[200px]">
            <p className="text-3xl font-extrabold text-royal leading-none mb-1">5+</p>
            <p className="text-sm font-medium text-heading">Years building premium digital products</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="section-badge" data-aos="fade-up">About Xpowers</span>
          <h2 className="section-title mb-5" data-aos="fade-up" data-aos-delay="100">
            We Are a Technology Company Obsessed with{" "}
            <span className="text-royal">Quality &amp; Results</span>
          </h2>
          <p className="section-subtitle mb-5" data-aos="fade-up" data-aos-delay="150">
            Xpowers is a full-service digital agency that partners with ambitious businesses to design, develop, and
            deliver outstanding digital products. We combine strategic thinking with deep technical expertise to build
            solutions that make a measurable difference.
          </p>
          <p className="section-subtitle mb-8" data-aos="fade-up" data-aos-delay="200">
            Our mission is to empower businesses of all sizes — from early-stage startups to established enterprises —
            with technology that drives growth, efficiency, and competitive advantage.
          </p>
          <ul className="space-y-3 mb-10" data-aos="fade-up" data-aos-delay="250">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-body">
                <CheckCircle2 size={18} className="text-royal mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary" data-aos="fade-up" data-aos-delay="300">
            Discover Our Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
