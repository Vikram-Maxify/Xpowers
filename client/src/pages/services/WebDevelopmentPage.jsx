import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Laptop,
  Flame,
  Check,
} from "lucide-react";
import PageLayout from "../../components/shared/PageLayout";

const webCapabilities = [
  {
    title: "SaaS Platforms & Web Portals",
    desc: "Multi-tenant cloud architectures with granular role-based access, automated billing subscriptions, and complex analytical workflows.",
    tech: ["Next.js", "React", "Node.js", "Stripe API", "PostgreSQL"],
    badge: "Enterprise Grade",
  },
  {
    title: "Headless E-Commerce & Marketplaces",
    desc: "Blazing fast headless commerce backends connected to modern frontends for hyper-optimized checkout conversion and multi-currency support.",
    tech: ["Shopify Plus", "Hydrogen", "Medusa", "Tailwind CSS", "Algolia"],
    badge: "High Conversion",
  },
  {
    title: "Progressive Web Applications (PWAs)",
    desc: "Desktop and mobile web apps with offline capabilities, background push notifications, and native-feeling fluid interactions.",
    tech: ["Workbox", "Service Workers", "IndexedDB", "WebSockets"],
    badge: "Mobile First",
  },
  {
    title: "Custom API & Microservices Gateways",
    desc: "Robust RESTful and GraphQL backend microservices designed for high concurrency, automated schema validation, and third-party webhooks.",
    tech: ["Express", "FastAPI", "Redis Cache", "Kafka", "Docker"],
    badge: "Low Latency",
  },
];

const webFaqs = [
  {
    q: "How do you ensure web applications load in under 1.5 seconds?",
    a: "We utilize Next.js server-side rendering (SSR), static site generation (SSG) for content-heavy pages, edge caching via Cloudflare/Vercel CDN, smart image optimization, code-splitting, and minimal JavaScript bundle overhead.",
  },
  {
    q: "Will our web application be fully responsive across all device sizes?",
    a: "Yes. Every web application undergoes rigorous automated and manual QA testing across 30+ desktop viewport dimensions, tablets, foldables, and mobile screens from 320px to 4K ultra-wide monitors.",
  },
  {
    q: "Can you migrate our legacy monolithic site to a modern headless stack?",
    a: "Absolutely. We specialize in incremental zero-downtime refactoring, safely extracting backend database schemas and building headless APIs alongside a contemporary React/Next.js frontend.",
  },
  {
    q: "Do you build SEO optimization into the web development cycle?",
    a: "Yes. Semantic HTML5 markup, automated XML sitemaps, Open Graph metadata, structured JSON-LD schemas, and 95+ Core Web Vitals scores are integral standards in all our web builds.",
  },
];

export default function WebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* ── HERO: CENTERED PANORAMIC WITH CODE BROWSER PREVIEW ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#f0f6ff] via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-badge" data-aos="fade-up">
              <Globe size={14} />
              Full-Stack Web Engineering
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6 leading-[1.12]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ultra-Fast, Scalable{" "}
              <span className="text-royal">Web Applications</span> Built for Growth.
            </h1>
            <p
              className="text-lg text-body leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              From ambitious SaaS platforms to high-converting headless digital
              stores — we engineer web applications with sub-second page loads,
              bulletproof security, and architectural longevity.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/contact" className="btn-primary">
                Start Web Project <ArrowRight size={18} />
              </Link>
              <a href="#architecture" className="btn-outline">
                Explore Architecture
              </a>
            </div>
          </div>

          {/* Browser Mockup Hero Visual */}
          <div
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-heading"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            {/* Browser top chrome */}
            <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="bg-[#0f172a] text-gray-300 text-xs px-6 py-1.5 rounded-full border border-gray-700 font-mono flex items-center gap-2">
                <ShieldCheck size={12} className="text-emerald-400" />
                https://app.xpowers-enterprise.io
              </div>
              <div className="text-xs text-sky font-semibold">99.9% Uptime</div>
            </div>

            {/* Browser Inner Visual */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-[#0b1329] via-[#0f1d3e] to-[#123B70] text-white">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/30 text-sky text-xs font-mono">
                    <Flame size={12} /> Next.js 15 &bull; Server Components &bull; Edge Rendered
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    Real-time Data Visualizations &amp; Enterprise Dashboards
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Zero layout shifts, sub-second TTFB, and interactive server-rendered
                    islands designed for immediate responsiveness.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-white">
                      Core Web Vitals: 100/100
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-emerald-300">
                      SSL TLS 1.3 Strict
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-4">
                  <p className="text-xs font-mono text-sky uppercase">System Metrics</p>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Performance Index</span>
                      <span className="text-emerald-400 font-bold">99%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[99%] h-full bg-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>SEO Structure</span>
                      <span className="text-sky font-bold">100%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-sky" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Security &amp; OWASP</span>
                      <span className="text-royal font-bold">A+</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[96%] h-full bg-royal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ───────────────────────────────── */}
      <section className="py-10 bg-section border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div data-aos="fade-up" data-aos-delay="0">
              <p className="text-3xl font-extrabold text-royal mb-1">&lt; 1.2s</p>
              <p className="text-xs text-body font-medium">Average Page Load</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-3xl font-extrabold text-heading mb-1">99.9%</p>
              <p className="text-xs text-body font-medium">Production Uptime SLA</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-3xl font-extrabold text-royal mb-1">100%</p>
              <p className="text-xs text-body font-medium">Responsive Viewports</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-3xl font-extrabold text-heading mb-1">50+</p>
              <p className="text-xs text-body font-medium">Web Systems Live</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: WEB CAPABILITIES ─────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Specialized Solutions
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              What We Build in <span className="text-royal">Web Development</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              High-performance web applications tailored to the precise operational
              needs of modern enterprises and fast-moving scaleups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webCapabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="card p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-royal border border-blue-100">
                      {cap.badge}
                    </span>
                    <Globe size={18} className="text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{cap.title}</h3>
                  <p className="text-sm text-body leading-relaxed mb-6">{cap.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {cap.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-section text-body px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ARCHITECTURE & WEB STACK ─────────── */}
      <section id="architecture" className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Modular Stack
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Our Multi-Tier <span className="text-royal">Web Architecture</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              Clean separation of concerns ensuring maintainability, code
              longevity, and effortless horizontal scaling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 border-t-4 border-t-sky" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Laptop size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Frontend Tier</h3>
              <p className="text-xs text-body leading-relaxed mb-4">
                React, Next.js, TypeScript, Tailwind CSS, component design systems, and responsive layout primitives.
              </p>
              <ul className="text-xs text-heading font-medium space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> Edge SSR &amp; Hydration
                </li>
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> WCAG 2.1 AA Accessibility
                </li>
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-royal" data-aos="fade-up" data-aos-delay="150">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center mb-4">
                <Code2 size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">API &amp; Logic</h3>
              <p className="text-xs text-body leading-relaxed mb-4">
                Node.js, Express, Python FastAPI, GraphQL gateways, and event-driven asynchronous microservices.
              </p>
              <ul className="text-xs text-heading font-medium space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> JWT &amp; OAuth2 Security
                </li>
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> Webhook Integrations
                </li>
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-indigo-600" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Layers size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Data &amp; Cache</h3>
              <p className="text-xs text-body leading-relaxed mb-4">
                PostgreSQL, MongoDB, Redis distributed in-memory cache, Elasticsearch, and automated transactional backups.
              </p>
              <ul className="text-xs text-heading font-medium space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> ACID Compliance
                </li>
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> Sub-10ms Cache Hits
                </li>
              </ul>
            </div>

            <div className="card p-6 border-t-4 border-t-emerald-600" data-aos="fade-up" data-aos-delay="250">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Cpu size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Cloud &amp; CDN</h3>
              <p className="text-xs text-body leading-relaxed mb-4">
                AWS ECS/Lambda, Vercel Enterprise, Docker containerization, Cloudflare DDoS shielding, and automated Git CI/CD.
              </p>
              <ul className="text-xs text-heading font-medium space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> Global Anycast Edge
                </li>
                <li className="flex items-center gap-1.5">
                  <Check size={14} className="text-royal" /> Auto-scaling clusters
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WEB DEVELOPMENT PROCESS ──────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Structured Execution
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Our 5-Stage Web Sprint Workflow
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              From whiteboard design tokens to production deployment, we deliver
              predictable milestones on schedule.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Architecture Blueprint", desc: "Requirements analysis, database schema, user flows, and tech stack decision." },
              { num: "02", title: "UI/UX & Tokens", desc: "Figma interactive wireframes, responsive design systems, and component states." },
              { num: "03", title: "Sprint Coding", desc: "Bi-weekly agile sprints with clean modular code, Git reviews, and staging previews." },
              { num: "04", title: "Automated QA & SEO", desc: "Cross-browser regression, security scans, Lighthouse audit, and load testing." },
              { num: "05", title: "Zero-Downtime Launch", desc: "Production rollout with DNS propagation, SSL setup, and 24/7 telemetry monitoring." },
            ].map((st, i) => (
              <div
                key={st.num}
                className="bg-section rounded-2xl p-6 border border-gray-100 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div>
                  <span className="text-2xl font-extrabold text-royal/60 mb-3 block">
                    {st.num}
                  </span>
                  <h3 className="text-base font-bold text-heading mb-2">{st.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WEB DEVELOPMENT FAQS ─────────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge" data-aos="fade-up">
              Web Development FAQ
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {webFaqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left hover:bg-blue-50/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span className="text-sm sm:text-base font-semibold text-heading">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-royal transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-surface border-t border-gray-100 text-sm text-body leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FINAL CTA ────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-navy via-[#1a4f96] to-royal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-tight">
            Build Your Next Web Platform with Xpowers
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Discuss your technical requirements directly with our principal web architect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Request Project Estimate <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-white-outline">
              View Web Case Studies
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
