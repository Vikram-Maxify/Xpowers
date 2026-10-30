import {
  Search,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience, and technical requirements to craft a clear project roadmap.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers create intuitive wireframes and high-fidelity prototypes that prioritize user experience.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "Agile development sprints with clean code, regular reviews, and continuous integration.",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Testing & QA",
    description:
      "Thorough testing across devices, browsers, and use cases to ensure a bug-free, polished product.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deployment",
    description:
      "Seamless deployment to production environments with monitoring and performance optimization.",
  },
  {
    icon: LifeBuoy,
    number: "06",
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, updates, and feature enhancements to keep your product thriving.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">
            Our Process
          </span>
          <h2
            className="section-title mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            How We Turn Your{" "}
            <span className="text-royal">Vision Into Reality</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            A proven, structured approach that delivers predictable results —
            every time.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex-1 relative"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-royal/30 to-sky/30" />
              )}
              <div className="flex flex-col items-center text-center px-3">
                {/* Step icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-royal text-white flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-transform duration-300">
                  <step.icon size={20} />
                </div>
                <span className="text-xs font-bold text-royal/70 mb-1">
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-5"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-royal text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <step.icon size={18} />
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-royal/30 to-sky/20 mt-2 min-h-[2rem]" />
                )}
              </div>
              <div className="pt-1 pb-4">
                <span className="text-xs font-bold text-royal/70">
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-heading mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
