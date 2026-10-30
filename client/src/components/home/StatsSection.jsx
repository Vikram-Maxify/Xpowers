import { useCountUp } from "../../hooks/useCountUp";

function Stat({ value, suffix = "+", label, description, delay = 0 }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div
      ref={ref}
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <p className="text-4xl md:text-5xl font-extrabold text-white leading-none mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-base font-semibold text-sky mb-1">{label}</p>
      <p className="text-sm text-blue-200">{description}</p>
    </div>
  );
}

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across web, mobile & software",
    delay: 0,
  },
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "From startups to enterprises",
    delay: 100,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    description: "Building digital products",
    delay: 200,
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies Used",
    description: "Modern & proven stack",
    delay: 300,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-navy via-[#1a4f96] to-royal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
