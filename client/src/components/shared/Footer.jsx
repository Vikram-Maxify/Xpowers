import { Link } from "react-router-dom";
import {
  Code2, Mail, Phone, MapPin,
  Share2, Globe, BookOpen, MessageSquare,
} from "lucide-react";

const footerServices = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "UI/UX Design", href: "/services/web-development" },
  { label: "Cloud Solutions", href: "/services/custom-software" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Share2, href: "#", label: "Twitter / X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: BookOpen, href: "#", label: "GitHub" },
  { icon: MessageSquare, href: "#", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heading text-gray-400 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-royal rounded-lg flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                X<span className="text-sky">powers</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A premium technology company building modern web, mobile, and software
              solutions that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-royal flex items-center justify-center transition-colors duration-200"
                >
                  <s.icon size={15} className="text-gray-300" />
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
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
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
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
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
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-royal flex-shrink-0" />
                  hello@xpowers.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-royal flex-shrink-0" />
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-royal flex-shrink-0 mt-0.5" />
                <span>1234 Innovation Drive, Tech City, TC 00001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">&copy; {year} Xpowers. All rights reserved.</p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
