import {
  Lightbulb,
  Layers,
  MessageSquare,
  Clock,
  TrendingUp,
  HeadphonesIcon,
} from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Experienced Development Team",
    description:
      "Our developers bring years of hands-on experience across diverse industries and technology stacks.",
  },
  {
    icon: Layers,
    title: "Modern Technology Stack",
    description:
      "We leverage proven, cutting-edge tools and frameworks to build robust, future-proof solutions.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear reporting, and open channels so you're always informed and in control.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description:
      "We respect your timelines and follow structured processes to deliver projects when promised.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Architecture designed to grow with your business — no costly rewrites down the line.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Post-launch support and maintenance to keep your product running smoothly and evolving.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left – text */}
        <div>
          <span className="section-badge" data-aos="fade-up">
            Why Choose Us
          </span>
          <h2
            className="section-title mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Partner You Need to Build{" "}
            <span className="text-royal">Exceptional Products</span>
          </h2>
          <p
            className="section-subtitle mb-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We don't just write code — we craft digital products that solve real
            problems, delight users, and create lasting value for your business.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={200 + i * 50}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <b.icon size={18} className="text-royal" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – image */}
        <div className="relative" data-aos="fade-left" data-aos-delay="200">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
              alt="Developers collaborating on a project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-transparent" />
          </div>
          {/* Floating metric */}
          <div className="absolute top-6 -left-5 bg-white rounded-xl shadow-lg border border-blue-50 px-4 py-3">
            <p className="text-2xl font-extrabold text-royal leading-none">
              98%
            </p>
            <p className="text-xs text-body mt-0.5">Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
