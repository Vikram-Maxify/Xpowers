import {
  BookOpen,
  Code2,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Custom Software",
  "Cloud Solutions",
  "AI & Automation",
];

const socialLinks = [
  { icon: Share2, href: "#", label: "Twitter / X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: BookOpen, href: "#", label: "GitHub" },
  { icon: MessageSquare, href: "#", label: "Instagram" },
];

export default function HomeFooter() {
  const year = new Date().getFullYear();

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-heading text-gray-400">
      {/* Main footer */}
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => handleAnchorClick(e, "#hero")}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="w-9 h-9 bg-royal rounded-lg flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                X<span className="text-sky">powers</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              A premium technology company building modern web, mobile, and
              software solutions that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-royal flex items-center justify-center transition-colors duration-200"
                >
                  <s.icon size={16} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleAnchorClick(e, "#services")}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@xpowers.dev"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="text-royal flex-shrink-0" />
                  hello@xpowers.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} className="text-royal flex-shrink-0" />
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-royal flex-shrink-0 mt-0.5" />
                <span>
                  1234 Innovation Drive
                  <br />
                  Tech City, TC 00001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">&copy; {year} Xpowers. All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
