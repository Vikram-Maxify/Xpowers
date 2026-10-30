import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechNova Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Xpowers delivered our web platform ahead of schedule with exceptional quality. Their team was communicative, skilled, and genuinely invested in our success. We couldn't be happier with the outcome.",
  },
  {
    name: "James Okafor",
    role: "Founder, HealthSync",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "The mobile app they built for us has received outstanding feedback from our users. From design to deployment, every detail was handled professionally. We've already started our second project with them.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, RetailEdge",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Working with Xpowers was a seamless experience. They understood our requirements quickly, maintained transparency throughout, and delivered a scalable solution that exceeded our expectations.",
  },
  {
    name: "David Chen",
    role: "CTO, LogiFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Their technical expertise and problem-solving ability are top-notch. The dashboard they developed handles thousands of real-time data points flawlessly. Highly recommended.",
  },
  {
    name: "Emma Williams",
    role: "Director, EduPath",
    avatar: "https://images.unsplash.com/photo-1534751516642-a171ed2f455c?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "Xpowers transformed our vision into a beautifully functional e-learning platform. Their UI/UX sensibility and development quality are genuinely premium. A fantastic partner.",
  },
  {
    name: "Amir Hassan",
    role: "Co-Founder, PropNest",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review:
      "From the initial call to final delivery, the process was smooth and professional. They built exactly what we needed, on time and within budget. An outstanding team.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">
            Testimonials
          </span>
          <h2
            className="section-title mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What Our <span className="text-royal">Clients Say</span>
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Real feedback from businesses we've partnered with to build
            outstanding digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex items-center justify-between">
                <StarRating rating={t.rating} />
                <Quote size={20} className="text-blue-200" />
              </div>
              <p className="text-sm text-body leading-relaxed flex-1">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-heading">{t.name}</p>
                  <p className="text-xs text-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
