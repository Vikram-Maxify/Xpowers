import {
  Heart,
  BookOpen,
  ShoppingCart,
  DollarSign,
  Home,
  Plane,
  Truck,
  Zap,
} from "lucide-react";

const industries = [
  { icon: Heart, label: "Healthcare", bg: "bg-red-50", color: "text-red-500" },
  {
    icon: BookOpen,
    label: "Education",
    bg: "bg-yellow-50",
    color: "text-yellow-600",
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: DollarSign,
    label: "Finance",
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
  { icon: Home, label: "Real Estate", bg: "bg-sky-50", color: "text-sky-600" },
  {
    icon: Plane,
    label: "Travel & Hospitality",
    bg: "bg-violet-50",
    color: "text-violet-600",
  },
  { icon: Truck, label: "Logistics", bg: "bg-blue-50", color: "text-royal" },
  { icon: Zap, label: "Startups", bg: "bg-pink-50", color: "text-pink-500" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">
            Industries We Serve
          </span>
          <h2
            className="section-title mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Solving Digital Challenges{" "}
            <span className="text-royal">Across Industries</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We bring domain knowledge and technical expertise to every sector
            we work in, ensuring solutions that truly fit your market.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="card flex flex-col items-center text-center gap-4 py-8 hover:-translate-y-1 transition-all duration-300 cursor-default"
              data-aos="zoom-in"
              data-aos-delay={i * 50}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${ind.bg}`}
              >
                <ind.icon size={26} className={ind.color} />
              </div>
              <p className="text-sm font-semibold text-heading">{ind.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
