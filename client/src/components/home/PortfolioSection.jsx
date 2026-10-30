import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", description: "A high-performance multi-vendor e-commerce platform with real-time inventory, payment gateway integration, and an intuitive admin dashboard.", tech: ["React", "Node.js", "MongoDB", "Stripe"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80" },
  { title: "Healthcare Mobile App", category: "Mobile App", description: "A cross-platform patient management app with appointment scheduling, telemedicine, and secure health record management.", tech: ["React Native", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80" },
  { title: "Business Analytics Dashboard", category: "Custom Software", description: "An enterprise analytics platform delivering real-time insights, KPI tracking, and interactive data visualizations.", tech: ["React", "Python", "AWS", "D3.js"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" },
  { title: "Real Estate Listing Portal", category: "Web Development", description: "A full-featured property listing platform with advanced search filters, map integration, and virtual tour capabilities.", tech: ["Next.js", "MongoDB", "Google Maps API"], image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80" },
  { title: "Restaurant Ordering App", category: "Mobile App", description: "A food ordering and delivery tracking app with live order updates, loyalty programs, and POS integration.", tech: ["React Native", "Firebase", "Node.js"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80" },
  { title: "EdTech Learning Platform", category: "Custom Software", description: "An interactive e-learning platform with video courses, quizzes, progress tracking, and certificate generation.", tech: ["React", "Node.js", "MongoDB", "AWS S3"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80" },
];

function ProjectCard({ title, category, description, tech, image }) {
  return (
    <div className="card p-0 overflow-hidden group flex flex-col hover:-translate-y-1 transition-all duration-300">
      <div className="overflow-hidden aspect-video">
        <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className="text-xs font-semibold text-royal bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full w-fit">{category}</span>
        <h3 className="text-base font-semibold text-heading">{title}</h3>
        <p className="text-sm text-body leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => <span key={t} className="text-xs bg-section text-body border border-gray-200 px-2 py-0.5 rounded-md">{t}</span>)}
        </div>
        <Link to="/portfolio" className="flex items-center gap-1.5 text-sm font-semibold text-royal hover:gap-2.5 transition-all duration-200 mt-1">
          View Project <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-badge" data-aos="fade-up">Featured Work</span>
          <h2 className="section-title mb-4" data-aos="fade-up" data-aos-delay="100">
            Products We've Built &amp; <span className="text-royal">Delivered</span>
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
            A selection of digital products we've designed, developed, and launched for our clients across various industries.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={project.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <div className="text-center mt-10" data-aos="fade-up">
          <Link to="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
