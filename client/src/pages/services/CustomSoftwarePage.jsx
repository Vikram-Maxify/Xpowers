import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Server,
  Database,
  Lock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Activity,
  Workflow,
  FileCheck,
} from "lucide-react";
import PageLayout from "../../components/shared/PageLayout";

const enterpriseSolutions = [
  {
    title: "Legacy System Modernization",
    desc: "Seamlessly decouple and migrate mission-critical monoliths into distributed microservices architectures with zero business disruption or data loss.",
    points: ["Automated Data Migration", "Dual-Run Verification", "Cost Reduction"],
    icon: Server,
  },
  {
    title: "Bespoke ERP & Internal Operations",
    desc: "Custom-tailored resource planning, inventory synchronization, automated reporting, and role-based operational tooling designed around your business.",
    points: ["Automated Workflows", "Custom Integrations", "Audit Trails"],
    icon: Workflow,
  },
  {
    title: "Event-Driven Distributed Pipelines",
    desc: "Real-time streaming telemetry and event-driven data streaming built on Apache Kafka, RabbitMQ, and distributed cache clusters.",
    points: ["Sub-Millisecond Processing", "Fault Tolerant", "Auto-Clustering"],
    icon: Activity,
  },
];

const customSoftwareFaqs = [
  {
    q: "How do you handle IP (Intellectual Property) ownership?",
    a: "100% of the custom source code, documentation, architecture diagrams, and database schemas developed by Xpowers belong entirely to your company from day one under a clear contractual assignment agreement.",
  },
  {
    q: "Can your team integrate with our internal databases and legacy systems?",
    a: "Yes. Our senior software engineers routinely integrate with proprietary on-premise Oracle/SQL Server databases, SAP/Salesforce systems, custom mainframe APIs, and cloud microservices.",
  },
  {
    q: "How do you guarantee data security and compliance?",
    a: "We implement encryption at rest (AES-256) and in transit (TLS 1.3), strict Role-Based Access Control (RBAC), automated vulnerability scanning in CI/CD, and architectures compliant with SOC 2, HIPAA, and GDPR standards.",
  },
  {
    q: "What engagement model do you offer for custom software projects?",
    a: "We offer both fixed-scope milestone deliverables and dedicated engineering pods (Senior Tech Lead, Backend, Frontend, and QA engineers) working as an embedded extension of your technology organization.",
  },
];

export default function CustomSoftwarePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* ── HERO: ENTERPRISE DARK-ACCENT HERO WITH TERMINAL CONSOLE ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#0b1329] text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sky/15 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7" data-aos="fade-right">
              <span className="inline-flex items-center gap-2 bg-white/10 text-sky border border-white/10 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <Settings size={14} />
                Enterprise Custom Software Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
                Mission-Critical Software{" "}
                <span className="text-sky">Engineered for Scale</span> &amp; Precision.
              </h1>
              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-xl">
                When off-the-shelf software falls short, we design, build, and
                maintain custom digital infrastructure engineered to solve your
                most complex computational and operational challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-white">
                  Schedule Tech Assessment <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-white-outline">
                  Browse Architecture Case Studies
                </Link>
              </div>

              {/* Enterprise Compliance Pills */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                  SOC 2 &bull; HIPAA Ready
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                  Domain-Driven Design (DDD)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                  Zero-Downtime Migration
                </span>
              </div>
            </div>

            {/* Right Column: Terminal Console Composition */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="bg-[#030712] rounded-3xl p-5 border border-gray-800 shadow-2xl font-mono text-xs text-gray-300">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800 text-[11px] text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 text-gray-400">xpowers-cluster: production</span>
                  </div>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>

                {/* Console Log Simulation */}
                <div className="space-y-2.5 leading-relaxed">
                  <p className="text-gray-500">$ xpowers deploy --tier=enterprise --ha</p>
                  <p className="text-sky">&gt; Initializing Microservices Mesh v4.2...</p>
                  <p className="text-emerald-400">
                    ✓ PostgreSQL Multi-Region Replica Connected (Latency: 2.1ms)
                  </p>
                  <p className="text-emerald-400">
                    ✓ Kafka Broker Distributed Cluster: 3 Nodes Active
                  </p>
                  <p className="text-emerald-400">
                    ✓ Redis Distributed Cache Hydrated: 99.8% Hit Ratio
                  </p>
                  <p className="text-amber-300">
                    ! Verifying RBAC Security Policies &amp; OAuth2 Gateways...
                  </p>
                  <p className="text-emerald-400">
                    ✓ Zero Vulnerabilities Detected (OWASP Top 10 Scan Clean)
                  </p>
                  <div className="pt-3 mt-3 border-t border-gray-800 flex justify-between items-center text-[11px]">
                    <span className="text-gray-400">Throughput:</span>
                    <span className="text-sky font-bold">14,200 req/sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: ENTERPRISE SOLUTIONS ─────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Engineered for Enterprise
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Custom Software That Solves{" "}
              <span className="text-royal">Complex Friction</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              We design software architectures around your exact proprietary
              workflows, replacing fragmented tools with unified power.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {enterpriseSolutions.map((sol, i) => (
              <div
                key={sol.title}
                className="card p-8 flex flex-col justify-between border-t-4 border-t-royal hover:-translate-y-1.5 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center mb-5">
                    <sol.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{sol.title}</h3>
                  <p className="text-sm text-body leading-relaxed mb-6">{sol.desc}</p>
                </div>
                <div>
                  <ul className="space-y-2 pt-4 border-t border-gray-100 text-xs font-semibold text-heading">
                    {sol.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-royal" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ENGINEERING RIGOR & SECURITY ─────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Engineering Rigor
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Built on Uncompromising <span className="text-royal">Standards</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              Security, compliance, and automated quality testing are hardcoded
              into every commit we produce.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center mb-4">
                <Lock size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Security &amp; RBAC</h3>
              <p className="text-xs text-body leading-relaxed">
                Granular permission hierarchies, OAuth2/SAML single sign-on, AES-256 encryption at rest, and TLS 1.3 transit.
              </p>
            </div>

            <div className="card p-6" data-aos="fade-up" data-aos-delay="150">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <FileCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Automated CI/CD &amp; Testing</h3>
              <p className="text-xs text-body leading-relaxed">
                Comprehensive unit, integration, and end-to-end test pipelines ensuring 90%+ code coverage before release.
              </p>
            </div>

            <div className="card p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Database size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Data Resiliency</h3>
              <p className="text-xs text-body leading-relaxed">
                Point-in-time recovery, geo-replicated database clusters, and automated disaster failover strategies.
              </p>
            </div>

            <div className="card p-6" data-aos="fade-up" data-aos-delay="250">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-bold text-heading mb-2">Full IP Ownership</h3>
              <p className="text-xs text-body leading-relaxed">
                Complete intellectual property transfer. No licensing fees, no proprietary vendor locks, pure clean code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ENGAGEMENT FRAMEWORK ─────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Predictable Delivery
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Our Custom Software Delivery Framework
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              A transparent, milestone-driven partnership structured around your
              corporate governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Phase 1", title: "Discovery & TSD", desc: "Technical Specification Document outlining architecture, entity relationship diagrams, and non-functional requirements." },
              { step: "Phase 2", title: "Dedicated Pod Sprints", desc: "Bi-weekly sprint demos with automated staging deployments and transparent sprint velocity tracking." },
              { step: "Phase 3", title: "Enterprise Cutover", desc: "Zero-disruption data migration, user acceptance testing (UAT), and load testing up to 10x peak traffic." },
              { step: "Phase 4", title: "Dedicated SLA Support", desc: "Post-launch guarantee, ongoing security patch management, and dedicated tier-3 support engineers." },
            ].map((p, i) => (
              <div
                key={p.step}
                className="bg-section p-6 rounded-2xl border border-gray-100 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div>
                  <span className="text-xs font-bold text-royal uppercase tracking-wider mb-2 block">
                    {p.step}
                  </span>
                  <h3 className="text-base font-bold text-heading mb-2">{p.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CUSTOM SOFTWARE FAQS ─────────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge" data-aos="fade-up">
              Custom Software FAQ
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {customSoftwareFaqs.map((faq, idx) => (
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
            Consult an Enterprise Solutions Architect
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Discuss your complex software challenges under strict mutual non-disclosure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Schedule Technical Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-white-outline">
              Review Enterprise Projects
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
