import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Apple,
  Cpu,
  Bell,
  WifiOff,
  Fingerprint,
  CreditCard,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import PageLayout from "../../components/shared/PageLayout";

const mobileFeatures = [
  {
    icon: Fingerprint,
    title: "Biometric & Secure Enclave",
    desc: "FaceID, TouchID, and Android BiometricPrompt integration with hardware-backed encryption keys.",
  },
  {
    icon: WifiOff,
    title: "Offline-First Synchronization",
    desc: "Persistent local databases with automatic background conflict resolution and bidirectional delta sync.",
  },
  {
    icon: Bell,
    title: "Interactive Push Notifications",
    desc: "Targeted rich push notifications, dynamic badges, deep linking, and automated APNS/FCM delivery.",
  },
  {
    icon: CreditCard,
    title: "Apple Pay & Google Wallet",
    desc: "Seamless one-touch in-app purchases, recurring subscriptions, and multi-gateway checkout security.",
  },
  {
    icon: MapPin,
    title: "Background Geolocation",
    desc: "Battery-efficient background GPS tracking, dynamic geofencing, and proximity-based user triggers.",
  },
  {
    icon: Cpu,
    title: "Native Device Hardware API",
    desc: "Camera frame capture, Bluetooth Low Energy (BLE) peripheral pairing, and gyroscope telemetry.",
  },
];

const appFaqs = [
  {
    q: "Should we build Native (Swift / Kotlin) or Cross-Platform (React Native)?",
    a: "For 90% of commercial mobile applications, React Native provides identical 60fps native performance, native platform UI components, and 40% faster time-to-market with a unified codebase. If your product requires low-level GPU shaders or heavy Bluetooth hardware drivers, we architect purely native Swift/Kotlin modules.",
  },
  {
    q: "How do you guarantee approval on the Apple App Store and Google Play?",
    a: "We adhere strictly to Apple's Human Interface Guidelines (HIG) and Google's Material Design from the earliest wireframing stages. We conduct pre-submission compliance audits, test sandbox in-app purchases, and handle all TestFlight/Internal Track distributions.",
  },
  {
    q: "Do you support publishing to our corporate enterprise developer account?",
    a: "Yes. We configure automated fastlane CI/CD pipelines directly to your designated Apple Developer and Google Play Console accounts with full ownership transfers upon delivery.",
  },
  {
    q: "What happens after the app is launched in the App Store?",
    a: "We offer continuous post-launch support including OS version compatibility upgrades (iOS/Android annual major releases), crash telemetry monitoring via Firebase Crashlytics, and feature enhancements.",
  },
];

export default function AppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* ── HERO: ASYMMETRICAL SPLIT WITH SMARTPHONE MOCKUP ── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#f3f7fc] via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left text */}
            <div className="lg:col-span-7" data-aos="fade-right">
              <span className="section-badge">
                <Smartphone size={14} />
                Native &amp; Cross-Platform Mobile Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6 leading-[1.12]">
                Crafting Addictive,{" "}
                <span className="text-royal">High-Performance Mobile Apps</span> That
                Users Love.
              </h1>
              <p className="text-lg text-body leading-relaxed mb-8 max-w-xl">
                We design and engineer native iOS, Android, and cross-platform
                mobile applications with silky smooth 60fps animations, intuitive
                gestures, and offline-first capabilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Start Mobile App Project <ArrowRight size={18} />
                </Link>
                <Link to="/portfolio" className="btn-outline">
                  See Mobile Case Studies
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100 text-xs text-heading font-semibold">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-royal flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>100% App Store Approval Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-royal flex items-center justify-center font-bold">
                    ★
                  </div>
                  <span>4.8+ Average User Store Rating</span>
                </div>
              </div>
            </div>

            {/* Right: Smartphone Mockup Composition */}
            <div
              className="lg:col-span-5 flex justify-center relative"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              {/* Floating Pill Badges */}
              <div className="absolute -top-4 -left-6 z-20 bg-white shadow-xl rounded-2xl p-3 border border-blue-50 hidden sm:flex items-center gap-2.5 animate-pulse2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-royal flex items-center justify-center font-bold text-xs">
                  iOS
                </div>
                <div>
                  <p className="text-xs font-bold text-heading">Swift &amp; SwiftUI</p>
                  <p className="text-[10px] text-body">Native Apple Frameworks</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 z-20 bg-white shadow-xl rounded-2xl p-3 border border-blue-50 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  RN
                </div>
                <div>
                  <p className="text-xs font-bold text-heading">React Native 0.74+</p>
                  <p className="text-[10px] text-body">New Architecture &bull; Bridgeless</p>
                </div>
              </div>

              {/* Smartphone Frame */}
              <div className="w-[280px] sm:w-[320px] bg-heading rounded-[44px] p-3.5 shadow-2xl border-4 border-gray-800 relative">
                {/* Speaker notch */}
                <div className="w-32 h-5 bg-black rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-gray-900 inline-block mr-2" />
                  <span className="w-2 h-2 rounded-full bg-blue-900 inline-block" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="bg-surface rounded-[34px] overflow-hidden p-5 flex flex-col justify-between aspect-[9/18]">
                  {/* Status Bar */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-body font-semibold mb-4 px-1">
                      <span>9:41 AM</span>
                      <span>5G &bull; 100%</span>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-[10px] text-body">Good Morning</p>
                        <p className="text-sm font-bold text-heading">
                          Alex Sterling
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center font-bold text-xs">
                        AS
                      </div>
                    </div>

                    {/* App Card Widget */}
                    <div className="bg-gradient-to-br from-royal to-navy text-white rounded-2xl p-4 shadow-md mb-4">
                      <p className="text-[10px] text-sky uppercase tracking-wider mb-1">
                        Active Health Telemetry
                      </p>
                      <p className="text-lg font-bold">Optimal Condition</p>
                      <div className="flex justify-between items-center mt-3 text-xs">
                        <span>Heart Rate: 72 bpm</span>
                        <span className="text-emerald-300 font-bold">Normal</span>
                      </div>
                    </div>

                    {/* Action buttons list */}
                    <div className="space-y-2">
                      <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-50 text-royal flex items-center justify-center text-[10px]">
                            ⚡
                          </div>
                          <span className="text-xs font-semibold text-heading">
                            Telemedicine Call
                          </span>
                        </div>
                        <span className="text-[10px] text-royal font-bold">
                          Join Live
                        </span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px]">
                            🔒
                          </div>
                          <span className="text-xs font-semibold text-heading">
                            Encrypted Vitals Sync
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-bold">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* App Bottom Navigation */}
                  <div className="bg-white rounded-2xl p-2.5 flex justify-around items-center border border-gray-100 text-xs">
                    <span className="text-royal font-bold">Dashboard</span>
                    <span className="text-gray-400">Activity</span>
                    <span className="text-gray-400">Settings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: PLATFORM MATRIX ──────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Platform Engineering
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Native &amp; Cross-Platform <span className="text-royal">Options</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              We guide you to the exact architecture best suited for your target
              demographics, budget, and performance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* iOS Native */}
            <div
              className="card p-8 border-t-4 border-t-heading flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-heading flex items-center justify-center mb-5">
                  <Apple size={24} />
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">iOS Native</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  Engineered exclusively in Swift and SwiftUI for the Apple ecosystem.
                  Deep integration with Apple Watch, Widgets, and VisionOS.
                </p>
                <ul className="space-y-2 text-xs font-medium text-heading">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> SwiftUI &amp; Combine
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> Metal Graphics Acceleration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> CoreData &amp; CloudKit
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-royal">
                  Best for: Premium Apple-first consumer &amp; creative tools
                </span>
              </div>
            </div>

            {/* Android Native */}
            <div
              className="card p-8 border-t-4 border-t-emerald-600 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 font-bold">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">Android Native</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  Built using Kotlin and Jetpack Compose. Tailored for maximum device
                  diversity across smartphones, tablets, and Android Auto.
                </p>
                <ul className="space-y-2 text-xs font-medium text-heading">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" /> Jetpack Compose Declarative UI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" /> Room Database &amp; Coroutines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600" /> Material You Adaptive Theming
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-emerald-600">
                  Best for: Hardware-heavy &amp; specialized OEM integration
                </span>
              </div>
            </div>

            {/* React Native Cross-Platform */}
            <div
              className="card p-8 border-t-4 border-t-royal flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center mb-5 font-bold">
                  ⚛
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">Cross-Platform</h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  One shared TypeScript codebase targeting both iOS and Android with
                  100% native render threads and 40% cost reduction.
                </p>
                <ul className="space-y-2 text-xs font-medium text-heading">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> React Native New Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> 95%+ Shared Business Logic
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-royal" /> CodePush Over-the-air updates
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-royal">
                  Best for: Rapid multi-store launch &amp; SaaS companion apps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: HARDWARE & NATIVE FEATURES ─────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Hardware Mastery
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Deep Device Integration
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              We tap into raw smartphone capabilities to create immersive,
              frictionless user experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileFeatures.map((feat, i) => (
              <div
                key={feat.title}
                className="card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-royal flex items-center justify-center">
                  <feat.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-heading">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: APP STORE RELEASE PROCESS ─────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-badge" data-aos="fade-up">
              Zero Rejection Guarantee
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Our App Store Deployment Lifecycle
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="150">
              We manage the entire submission lifecycle so your team never has to
              worry about compliance roadblocks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "App Prototype & HIG", desc: "Design conforming to Apple Human Interface Guidelines and Material Design." },
              { step: "02", title: "TestFlight & Internal Beta", desc: "Distribute encrypted builds to internal stakeholders and beta user cohorts." },
              { step: "03", title: "Automated Compliance Audit", desc: "Security scanning, permission disclosure verification, and privacy manifests." },
              { step: "04", title: "Store Submission & Launch", desc: "Submission handling, metadata ASO optimization, and immediate release approval." },
            ].map((p, i) => (
              <div
                key={p.step}
                className="bg-section p-6 rounded-2xl border border-gray-100 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div>
                  <span className="text-2xl font-extrabold text-royal/60 mb-2 block">{p.step}</span>
                  <h3 className="text-base font-bold text-heading mb-2">{p.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: APP DEVELOPMENT FAQS ─────────────── */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge" data-aos="fade-up">
              App Development FAQ
            </span>
            <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {appFaqs.map((faq, idx) => (
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
            Launch Your Mobile App on iOS &amp; Android
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Schedule a complimentary architecture review with our lead mobile engineer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-white">
              Schedule Mobile Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn-white-outline">
              Review App Portfolio
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
