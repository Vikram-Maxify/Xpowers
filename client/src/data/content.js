import {
  Code2, Smartphone, Cloud, ShieldCheck, Palette, BarChart3,
  Search, PenTool, Terminal, Rocket, LifeBuoy,
} from "lucide-react";

export const company = {
  name: "Nexora",
  email: "hello@nexora.in",
  phone: "+91 98765 43210",
  address: "Sector 62, Noida, Uttar Pradesh, India",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
  { label: "Clients", href: "#clients" },
];

export const clients = ["Finlytics", "Orbit Retail", "MediCore", "Lumen Logistics", "Zenith Edu", "Craftly"];

export const services = [
  {
    icon: Code2,
    title: "Web development",
    summary: "Fast, secure web applications built around how your team and customers actually work.",
    points: ["Custom portals and dashboards", "E-commerce and marketplaces", "API design and integrations", "Performance and SEO tuning"],
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    summary: "Android and iOS apps that feel native, ship on schedule, and stay easy to maintain.",
    points: ["React Native and Flutter", "Offline-first experiences", "Push notifications and payments", "App store release support"],
  },
  {
    icon: Cloud,
    title: "Cloud and DevOps",
    summary: "Reliable infrastructure that scales with traffic and keeps your monthly bill predictable.",
    points: ["AWS, Azure and GCP setup", "CI/CD pipelines", "Monitoring and alerting", "Cost optimisation"],
  },
  {
    icon: Palette,
    title: "UI/UX design",
    summary: "Clear, accessible interfaces tested with real users before a single line of code is written.",
    points: ["Product and design systems", "Wireframes and prototypes", "Usability testing", "Accessibility reviews"],
  },
  {
    icon: BarChart3,
    title: "Data and AI",
    summary: "Turn scattered data into dashboards, forecasts and automations your team can trust.",
    points: ["Analytics dashboards", "Workflow automation", "Chatbots and assistants", "Data pipelines"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    summary: "Find and fix weak spots early, then keep your product and customer data protected.",
    points: ["Security audits", "Penetration testing", "Compliance readiness", "Incident response planning"],
  },
];

export const whyUs = [
  { title: "Senior engineers on every project", text: "The people you meet in the first call are the ones who build your product." },
  { title: "Fixed scope, honest timelines", text: "You get a written plan, weekly demos and no surprise invoices at the end." },
  { title: "Built to last", text: "Clean code, documentation and handover so your team is never locked in." },
  { title: "Support after launch", text: "Monitoring, updates and a named contact for when something needs attention." },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: " yrs", label: "In business" },
  { value: 98, suffix: "%", label: "Clients who return" },
  { value: 60, suffix: "+", label: "Engineers and designers" },
];

export const process = [
  { icon: Search, title: "Discover", text: "We learn your goals, users and constraints, then agree on what success looks like." },
  { icon: PenTool, title: "Design", text: "Flows and prototypes you can click through and give feedback on early." },
  { icon: Terminal, title: "Build", text: "Two-week sprints with working demos, code reviews and automated tests." },
  { icon: Rocket, title: "Launch", text: "Staged release, load testing and a rollback plan so go-live is calm." },
  { icon: LifeBuoy, title: "Support", text: "Ongoing monitoring, fixes and improvements as your product grows." },
];

export const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  Backend: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  "Data and cloud": ["MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
};

export const testimonials = [
  {
    quote: "They rebuilt our order platform in four months and our checkout time dropped by half. The weekly demos meant there were no surprises.",
    name: "Ananya Sharma",
    role: "COO, Orbit Retail",
  },
  {
    quote: "Clear communication and very strong engineering. Our security audit passed on the first attempt after their fixes.",
    name: "Rohit Mehta",
    role: "CTO, Finlytics",
  },
  {
    quote: "The mobile app launched on both stores on the date we agreed. Support since then has been quick and practical.",
    name: "Dr. Kavita Rao",
    role: "Founder, MediCore",
  },
];
