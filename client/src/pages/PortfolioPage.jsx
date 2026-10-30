import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import PageLayout from "../components/shared/PageLayout";

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "E-Commerce",
];

const projects = [
  {
    id: 1,
    title: "Apex Logistics Cloud Platform",
    category: "Custom Software",
    desc: "Autonomous dispatch, telemetry tracking, and predictive freight routing system handling 25,000+ daily asset movements.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    metric: "+34% Route Efficiency",
    link: "/contact",
  },
  {
    id: 2,
    title: "OmniStore Multi-Vendor Marketplace",
    category: "E-Commerce",
    desc: "Global headless e-commerce ecosystem featuring instantaneous catalog search, multi-currency checkout, and merchant payouts.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Node.js", "Stripe Connect", "Tailwind CSS", "Redis"],
    metric: "$4.2M GMV Processed",
    link: "/contact",
  },
  {
    id: 3,
    title: "CarePulse Telehealth & Vital Monitor",
    category: "Mobile Apps",
    desc: "HIPAA-compliant telemedicine app connecting patients with board-certified physicians, live encrypted video, and IoT vitals sync.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "WebRTC", "Node.js", "MongoDB", "AWS S3"],
    metric: "4.9★ App Store (120k Users)",
    link: "/contact",
  },
  {
    id: 4,
    title: "EstateView Immersive Real Estate Portal",
    category: "Web Development",
    desc: "Interactive 3D virtual tour real estate platform with live neighborhood demographics, spatial mapping, and digital escrow signing.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Three.js", "Node.js", "Mapbox GL", "PostgreSQL"],
    metric: "+180% Tour Engagement",
    link: "/contact",
  },
  {
    id: 5,
    title: "QuickBite Smart Delivery & Loyalty App",
    category: "Mobile Apps",
    desc: "Hyper-local food delivery platform with dynamic geo-fenced driver allocation, real-time rider tracking, and contactless billing.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter / React Native", "Firebase", "Node.js", "Socket.io"],
    metric: "<24 min Avg Delivery",
    link: "/contact",
  },
  {
    id: 6,
    title: "NeuroLearn Adaptive EdTech Platform",
    category: "Custom Software",
    desc: "AI-driven corporate upskilling engine that customizes curriculum pathways in real time based on employee quiz telemetry.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Python / PyTorch", "FastAPI", "MongoDB", "AWS"],
    metric: "92% Completion Rate",
    link: "/contact",
  },
  {
    id: 7,
    title: "FinMatrix Portfolio & Algorithmic Trading",
    category: "Web Development",
    desc: "Sub-millisecond latency financial analytics dashboard with customizable candlestick charting, backtesting bots, and webhook alerts.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "D3.js", "WebSockets", "Go", "TimescaleDB"],
    metric: "99.99% Feed Reliability",
    link: "/contact",
  },
  {
    id: 8,
    title: "FitPulse AI Workout & Form Coach",
    category: "Mobile Apps",
    desc: "Computer vision smartphone application analyzing skeletal body posture during strength exercises with immediate audio feedback.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    tech: ["React Native", "TensorFlow Lite", "Node.js", "PostgreSQL"],
    metric: "80,000 Active Members",
    link: "/contact",
  },
  {
    id: 9,
    title: "NordicLuxe Artisan Luxury Showcase",
    category: "E-Commerce",
    desc: "Minimalist ultra-fast e-commerce experience for Scandinavian furniture house with augmented reality room placement.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    tech: ["Shopify Plus", "Hydrogen", "Oxygen CDN", "Tailwind CSS"],
    metric: "0.8s Page Load Speed",
    link: "/contact",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-section via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge" data-aos="fade-up">
            <Sparkles size={14} />
            Our Portfolio &amp; Case Studies
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Digital Products That Drive{" "}
            <span className="text-royal">Real Impact</span>
          </h1>
          <p
            className="text-lg text-body max-w-2xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Explore our curated showcase of high-performance web applications,
            mobile experiences, and enterprise platforms delivered for visionary
            clients.
          </p>

          {/* ── FILTER BUTTONS ────────────────────────────── */}
          <div
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-royal text-white shadow-md shadow-royal/20 scale-105"
                    : "bg-white text-body border border-gray-200 hover:border-royal hover:text-royal hover:bg-blue-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ───────────────────────────────── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="card p-0 overflow-hidden group flex flex-col hover:-translate-y-2 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-royal shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  {project.metric && (
                    <div className="absolute bottom-3 right-3 bg-heading/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                      <TrendingUp size={13} className="text-sky" />
                      {project.metric}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-royal transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium bg-section text-body px-2.5 py-0.5 rounded-md border border-gray-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-royal hover:gap-2.5 transition-all duration-200"
                    >
                      Discuss Similar Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body text-base">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CLIENT STATS BANNER ─────────────────────────── */}
      <section className="py-16 bg-section border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="0">
              <p className="text-3xl sm:text-4xl font-extrabold text-heading mb-1">
                99.8%
              </p>
              <p className="text-xs sm:text-sm text-body">
                On-Time Milestone Delivery
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-3xl sm:text-4xl font-extrabold text-royal mb-1">
                4.9 / 5.0
              </p>
              <p className="text-xs sm:text-sm text-body">Average Client Rating</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-3xl sm:text-4xl font-extrabold text-heading mb-1">
                15+
              </p>
              <p className="text-xs sm:text-sm text-body">
                Industries Transformed
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-3xl sm:text-4xl font-extrabold text-royal mb-1">
                24 / 7
              </p>
              <p className="text-xs sm:text-sm text-body">Post-Launch Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-navy via-[#1a4f96] to-royal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
            Have a Project You Want to Showcase Here?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to build an industry-defining digital product. Get
            in touch for a confidential project consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Schedule Architecture Call
              <ArrowRight size={18} />
            </Link>
            <Link to="/services/web-development" className="btn-white-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
