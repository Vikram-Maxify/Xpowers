const technologies = [
  { name: "React", color: "#61DAFB", bg: "#f0fbff" },
  { name: "Next.js", color: "#000000", bg: "#f5f5f5" },
  { name: "Node.js", color: "#339933", bg: "#f0fff0" },
  { name: "Express.js", color: "#000000", bg: "#f9f9f9" },
  { name: "MongoDB", color: "#47A248", bg: "#f0fff4" },
  { name: "JavaScript", color: "#F7DF1E", bg: "#fffde7" },
  { name: "Python", color: "#3776AB", bg: "#e8f4f8" },
  { name: "Tailwind CSS", color: "#06B6D4", bg: "#ecfeff" },
  { name: "AWS", color: "#FF9900", bg: "#fff8eb" },
  { name: "Figma", color: "#F24E1E", bg: "#fff2f0" },
  { name: "PostgreSQL", color: "#336791", bg: "#eef3fb" },
  { name: "TypeScript", color: "#3178C6", bg: "#eff6ff" },
];

function TechBadge({ name, color, bg }) {
  return (
    <div
      className="card flex items-center justify-center px-4 py-3.5 gap-2.5 hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ backgroundColor: bg }}
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <span className="text-sm font-semibold text-heading">{name}</span>
    </div>
  );
}

export default function TechnologyStack() {
  return (
    <section id="tech" className="py-20 md:py-28 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">
            Technology Stack
          </span>
          <h2
            className="section-title mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built With <span className="text-royal">Modern Technologies</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We use proven, industry-leading tools and frameworks to build
            reliable, scalable, and maintainable digital products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              data-aos="zoom-in"
              data-aos-delay={i * 40}
            >
              <TechBadge {...tech} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
