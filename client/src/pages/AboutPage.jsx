import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Target,
  Eye,
  Award,
  Users,
  Compass,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageLayout from "../components/shared/PageLayout";
import { useCountUp } from "../hooks/useCountUp";

function StatCounter({ value, suffix = "+", label }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-extrabold text-royal mb-1">
        {count}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm font-medium text-body">{label}</p>
    </div>
  );
}

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Chief Executive Officer & Co-Founder",
    bio: "12+ years in technology leadership driving digital transformation for venture-backed startups and Fortune 500 enterprises.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Former cloud architecture lead with deep expertise in distributed systems, high-availability platforms, and AI engineering.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Vance",
    role: "Head of Product & UX",
    bio: "Passionate about human-centered design systems, micro-interactions, and conversion-focused product interfaces.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Siddharth Nair",
    role: "Lead Mobile Architect",
    bio: "Specialist in cross-platform performance engineering, offline-first architectures, and enterprise mobile security.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

const values = [
  {
    icon: Target,
    title: "Client-Centric Engineering",
    desc: "We focus on real business impact, ROI, and user retention rather than just writing code.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    desc: "Every product is architected with security, clean modular code, and high scalability from day one.",
  },
  {
    icon: Zap,
    title: "Agile Precision",
    desc: "Sprint-based delivery, constant communication, automated CI/CD, and fast time-to-market.",
  },
  {
    icon: Compass,
    title: "Continuous Innovation",
    desc: "Adopting bleeding-edge frameworks and AI capabilities to give our clients an unfair competitive advantage.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-section via-white to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-badge" data-aos="fade-up">
              <Sparkles size={14} />
              About Xpowers
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6 leading-[1.15]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Pioneering Tomorrow's{" "}
              <span className="text-royal">Digital Solutions</span>, Today.
            </h1>
            <p
              className="text-lg text-body leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We are a team of visionary technologists, architects, and design
              strategists dedicated to crafting digital products that redefine
              industries and accelerate business growth worldwide.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/contact" className="btn-primary">
                Work With Us
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION & IMAGE ───────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Xpowers technology engineering team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden sm:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-royal">
                    <Award size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-heading text-sm">Recognized</p>
                    <p className="text-xs text-body">Top Software Innovator</p>
                  </div>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Consistently ranked for product engineering excellence and
                  timely delivery.
                </p>
              </div>
            </div>

            <div data-aos="fade-left">
              <span className="section-badge">Our Story</span>
              <h2 className="section-title mb-6">
                Engineered for Performance. Driven by{" "}
                <span className="text-royal">Real Business Outcomes</span>.
              </h2>
              <p className="section-subtitle mb-6">
                Founded with a mission to bridge the gap between complex software
                engineering and elegant user experience, Xpowers has evolved into
                a trusted technology partner for global startups and enterprises.
              </p>
              <p className="text-body text-base leading-relaxed mb-8">
                Whether creating transformative multi-platform mobile apps,
                enterprise web architectures, or custom algorithmic workflows, we
                bring unyielding dedication to technical quality, code
                maintainability, and transparent partnership.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <StatCounter value={150} suffix="+" label="Projects Shipped" />
                <StatCounter value={98} suffix="%" label="Client Retention" />
                <StatCounter value={12} suffix="+" label="Global Partners" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Our Compass
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Guided by a Clear <span className="text-royal">Purpose</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              Our mission and vision define how we innovate, collaborate, and
              build digital systems that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="card bg-white p-8 md:p-10 flex flex-col justify-between border-t-4 border-t-royal hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-royal flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4">Our Mission</h3>
                <p className="text-body leading-relaxed mb-6">
                  To empower ambitious organizations with state-of-the-art web,
                  mobile, and software applications that reduce operational friction,
                  inspire user delight, and unlock exponential commercial growth.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-gray-100 text-sm text-heading font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-royal" /> Zero-compromise
                  code quality &amp; automated testing
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-royal" /> Scalable cloud
                  architecture ready for millions of users
                </li>
              </ul>
            </div>

            <div
              className="card bg-white p-8 md:p-10 flex flex-col justify-between border-t-4 border-t-sky hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-heading mb-4">Our Vision</h3>
                <p className="text-body leading-relaxed mb-6">
                  To be recognized globally as the elite technology partner where
                  engineering rigor, creative ingenuity, and strategic business acumen
                  converge to build the world's most transformative software systems.
                </p>
              </div>
              <ul className="space-y-2.5 pt-6 border-t border-gray-100 text-sm text-heading font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-royal" /> Shaping the future
                  of AI-augmented digital platforms
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-royal" /> Cultivating a
                  world-class culture of engineering mastery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Core Principles
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              The Values That <span className="text-royal">Drive Us Forward</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              These fundamental tenets guide our daily code commits, design
              critiques, and customer interactions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center">
                  <v.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-heading">{v.title}</h3>
                <p className="text-sm text-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP & TEAM ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              <Users size={14} />
              Our Leadership
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Meet the Minds Behind <span className="text-royal">Xpowers</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              A leadership team combining decades of engineering mastery, product
              intuition, and high-growth operational experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="card p-0 overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="aspect-[4/4] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-heading mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-royal mb-3">{member.role}</p>
                  <p className="text-xs text-body leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-navy via-[#1a4f96] to-royal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Let's turn your concept into a market-leading digital solution. Speak
            directly with our solutions architect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-white-outline">
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
