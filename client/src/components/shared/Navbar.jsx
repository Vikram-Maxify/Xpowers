import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Code2, Menu, X, ChevronDown,
  Globe, Smartphone, Settings, Home,
  Briefcase, Info, FolderOpen, Phone,
} from "lucide-react";

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development", icon: Globe },
  { label: "App Development", href: "/services/app-development", icon: Smartphone },
  { label: "Custom Software", href: "/services/custom-software", icon: Settings },
];

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "#", icon: Briefcase, children: serviceLinks },
  { label: "About", href: "/about", icon: Info },
  { label: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Xpowers home">
            <div className="w-9 h-9 bg-royal rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 group-hover:scale-105">
              <Code2 size={19} className="text-white" />
            </div>
            <span className="text-xl font-bold text-heading tracking-tight">
              X<span className="text-royal">powers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropRef}>
                  <button
                    onClick={() => setServicesOpen((p) => !p)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive("/services")
                        ? "text-royal bg-blue-50"
                        : "text-body hover:text-royal hover:bg-blue-50"
                    }`}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 transition-all duration-200 origin-top ${
                      servicesOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-body hover:text-royal hover:bg-blue-50 transition-colors"
                      >
                        <s.icon size={15} className="text-royal" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    isActive(link.href)
                      ? "text-royal bg-blue-50"
                      : "text-body hover:text-royal hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-body hover:text-royal hover:bg-blue-50 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* ── SIDEBAR OVERLAY ─────────────────────────────── */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── SIDEBAR PANEL ───────────────────────────────── */}
      <aside className={`sidebar-panel ${sidebarOpen ? "open" : "closed"}`} aria-label="Mobile navigation">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setSidebarOpen(false)}>
            <div className="w-8 h-8 bg-royal rounded-lg flex items-center justify-center">
              <Code2 size={17} className="text-white" />
            </div>
            <span className="text-lg font-bold text-heading">
              X<span className="text-royal">powers</span>
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-body"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen((p) => !p)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-body hover:text-royal hover:bg-blue-50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <link.icon size={17} className="text-royal" />
                    {link.label}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.label}
                      to={s.href}
                      onClick={() => setSidebarOpen(false)}
                      className="flex items-center gap-3 pl-10 pr-4 py-2.5 text-sm text-body hover:text-royal hover:bg-blue-50 rounded-xl transition-colors"
                    >
                      <s.icon size={14} className="text-royal" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-royal bg-blue-50 font-semibold"
                    : "text-body hover:text-royal hover:bg-blue-50"
                }`}
              >
                <link.icon size={17} className="text-royal" />
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="px-6 py-6 border-t border-gray-100">
          <Link
            to="/contact"
            onClick={() => setSidebarOpen(false)}
            className="btn-primary w-full justify-center text-sm"
          >
            Let's Talk
          </Link>
          <p className="text-center text-xs text-body mt-3">hello@xpowers.dev</p>
        </div>
      </aside>
    </>
  );
}
