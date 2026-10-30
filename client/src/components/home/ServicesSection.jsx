import { Link } from "react-router-dom";
import {
  Globe, Smartphone, Code2, Palette,
  TrendingUp, Cloud, ShoppingCart, Bot, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", href: "/services/web-development", description: "Responsive, performant, and scalable web applications tailored to your business goals.", capabilities: ["React / Next.js", "Node.js APIs", "CMS Integration"], color: "bg-blue-50 text-royal" },
  { icon: Smartphone, title: "Mobile App Development", href: "/services/app-development", description: "Native and cross-platform mobile applications delivering outstanding user experiences.", capabilities: ["React Native", "iOS & Android", "App Store Deployment"], color: "bg-sky-50 text-sky-600" },
  { icon: Code2, title: "Custom Software Development", href: "/services/custom-software", description: "Bespoke software solutions engineered to solve complex business challenges.", capabilities: ["Business Automation", "Enterprise Systems", "API Development"], color: "bg-indigo-50 text-indigo-600" },
  { icon: Palette, title: "UI/UX Design", href: "/contact", description: "User-centered design that balances aesthetics with intuitive functionality.", capabilities: ["Wireframing", "Prototyping", "Design Systems"], color: "bg-purple-50 text-purple-600" },
  { icon: TrendingUp, title: "Digital Marketing", href: "/contact", description: "Data-driven strategies to grow your online presence and acquire more customers.", capabilities: ["SEO Optimization", "Content Strategy", "Analytics"], color: "bg-emerald-50 text-emerald-600" },
  { icon: Cloud, title: "Cloud Solutions", href: "/services/custom-software", description: "Cloud architecture, migration, and management on AWS, GCP, or Azure.", capabilities: ["Cloud Migration", "DevOps & CI/CD", "Serverless"], color: "bg-cyan-50 text-cyan-600" },
  { icon: ShoppingCart, title: "E-commerce Development", href: "/services/web-development", description: "High-converting online stores built for performance and customer satisfaction.", capabilities: ["Shopify / WooCommerce", "Custom Stores", "Payment Integration"], color: "bg-orange-50 text-orange-600" },
  { icon: Bot, title: "AI & Automation", href: "/contact", description: "Intelligent automation and AI integrations that streamline operations and unlock insights.", capabilities: ["LLM Integration", "Workflow Automation", "Data Pipelines"], color: "bg-pink-50 text-pink-600" },
];

function ServiceCard({ icon: Icon, title, description, capabilities, color, href }) {
  return (
    <div className="card group flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-heading mb-2">{title}</h3>
        <p className="text-sm text-body leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {capabilities.map((cap) => (
          <li key={cap} className="text-xs font-medium bg-section text-royal border border-blue-100 px-2.5 py-1 rounded-full">{cap}</li>
        ))}
      </ul>
      <Link to={href} className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-royal hover:gap-2.5 transition-all duration-200">
        Learn More <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">Our Services</span>
          <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
            Comprehensive Digital Solutions for{" "}
            <span className="text-royal">Every Stage of Growth</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            From concept to launch and beyond — we deliver end-to-end digital services that scale with your ambitions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={service.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
