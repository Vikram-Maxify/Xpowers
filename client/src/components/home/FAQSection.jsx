import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project development process?",
    answer:
      "We follow a structured six-step process: Discovery & Planning → UI/UX Design → Development → Testing & QA → Deployment → Support & Maintenance. This ensures clear communication, predictable timelines, and high-quality outcomes.",
  },
  {
    question: "How long does it take to build a web or mobile application?",
    answer:
      "Project timelines depend on scope and complexity. A standard web application typically takes 6–12 weeks, while a complex enterprise platform may take 3–6 months. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials engagements depending on your project's nature. After understanding your requirements, we provide a transparent, detailed proposal with no hidden fees.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "We primarily use React, Next.js, Node.js, React Native, Python, MongoDB, PostgreSQL, AWS, and Tailwind CSS. We select the best-fit technology stack based on your specific project requirements.",
  },
  {
    question: "Do you provide post-launch maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, security updates, and feature enhancements after launch. We have dedicated support plans tailored to different business needs.",
  },
  {
    question: "Can you work with our existing codebase or team?",
    answer:
      "Absolutely. We have extensive experience integrating with existing codebases and collaborating with in-house development teams. We can augment your team or take full ownership of a project — whatever works best for you.",
  },
  {
    question: "How do you ensure the quality of your deliverables?",
    answer:
      "Quality is built into every stage of our process. We use code reviews, automated testing, manual QA, and performance audits before every release. We also maintain comprehensive documentation for all projects.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left bg-white hover:bg-section transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base font-semibold text-heading">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-royal flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-surface border-t border-gray-100">
          <p className="text-sm text-body leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge" data-aos="fade-up">
            FAQ
          </span>
          <h2
            className="section-title mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Frequently Asked <span className="text-royal">Questions</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Answers to the most common questions we receive from our clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <FAQItem {...faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
