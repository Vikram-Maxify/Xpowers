import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Globe,
  Share2,
  BookOpen,
} from "lucide-react";
import PageLayout from "../components/shared/PageLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "$10,000 - $25,000",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Please tell us briefly about your project";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message must be at least 15 characters long";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <PageLayout>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-section via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge" data-aos="fade-up">
            <Sparkles size={14} />
            Let's Start a Conversation
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have an Idea? Let's Build{" "}
            <span className="text-royal">Something Great</span>
          </h1>
          <p
            className="text-lg text-body max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Whether you are launching a greenfield product, refactoring enterprise
            infrastructure, or scaling your mobile ecosystem — our senior architects
            are ready to consult.
          </p>
        </div>
      </section>

      {/* ── FORM & DETAILS SPLIT ────────────────────────── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* ── LEFT: CONTACT DETAILS ───────────────────── */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="bg-section rounded-3xl p-8 sm:p-10 border border-blue-50 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-heading mb-3">
                  Direct Inquiries
                </h2>
                <p className="text-sm text-body leading-relaxed mb-8">
                  Fill out our project inquiry form or reach us directly through
                  our official corporate channels. We respond within 24 hours.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-royal flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-body uppercase tracking-wider">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@xpowers.dev"
                        className="text-base font-semibold text-heading hover:text-royal transition-colors"
                      >
                        hello@xpowers.dev
                      </a>
                      <p className="text-xs text-body mt-0.5">
                        For RFP and client consultations
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-royal flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-body uppercase tracking-wider">
                        Call Us
                      </p>
                      <a
                        href="tel:+10000000000"
                        className="text-base font-semibold text-heading hover:text-royal transition-colors"
                      >
                        +1 (000) 000-0000
                      </a>
                      <p className="text-xs text-body mt-0.5">
                        Mon – Fri: 9:00 AM – 6:00 PM EST
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-royal flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-body uppercase tracking-wider">
                        Headquarters
                      </p>
                      <p className="text-base font-semibold text-heading">
                        1234 Innovation Drive
                      </p>
                      <p className="text-xs text-body mt-0.5">
                        Tech City, TC 00001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="mt-8 pt-8 border-t border-gray-200/60 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-heading font-medium">
                    <ShieldCheck size={16} className="text-royal" />
                    Strict Non-Disclosure Agreement (NDA) on request
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-heading font-medium">
                    <Clock size={16} className="text-royal" />
                    Guaranteed response within 1 business day
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="card p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-heading">Connect With Us</p>
                  <p className="text-xs text-body">Follow our tech updates</p>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-9 h-9 rounded-lg bg-section hover:bg-royal hover:text-white text-body flex items-center justify-center transition-colors"
                  >
                    <Share2 size={16} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-lg bg-section hover:bg-royal hover:text-white text-body flex items-center justify-center transition-colors"
                  >
                    <Globe size={16} />
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-lg bg-section hover:bg-royal hover:text-white text-body flex items-center justify-center transition-colors"
                  >
                    <BookOpen size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: CONTACT FORM ─────────────────────── */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-heading mb-3">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-sm text-body leading-relaxed max-w-md mx-auto mb-8">
                      We have received your project inquiry. A senior technology
                      architect will review your specifications and get in touch
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "Web Development",
                          budget: "$10,000 - $25,000",
                          message: "",
                        });
                      }}
                      className="btn-primary text-sm py-2.5 px-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-2xl font-bold text-heading mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-body mb-8">
                      Tell us about your requirements and we'll schedule a discovery call.
                    </p>

                    <div className="space-y-5">
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Johnathan Davis"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.name
                                ? "border-red-400 focus:ring-red-200"
                                : "border-gray-200 focus:border-royal focus:ring-blue-100"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-xs text-red-500 mt-1.5">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                          >
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? "border-red-400 focus:ring-red-200"
                                : "border-gray-200 focus:border-royal focus:ring-blue-100"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1.5">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Service Row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.phone
                                ? "border-red-400 focus:ring-red-200"
                                : "border-gray-200 focus:border-royal focus:ring-blue-100"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1.5">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="service"
                            className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                          >
                            Service Required
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading focus:outline-none focus:border-royal focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                          >
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>Custom Software Development</option>
                            <option>UI/UX Design &amp; Architecture</option>
                            <option>Cloud Infrastructure &amp; DevOps</option>
                          </select>
                        </div>
                      </div>

                      {/* Estimated Budget */}
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                        >
                          Estimated Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-heading focus:outline-none focus:border-royal focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                        >
                          <option>&lt; $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000 - $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-heading uppercase tracking-wider mb-2"
                        >
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your objectives, target timeline, or tech preferences..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.message
                              ? "border-red-400 focus:ring-red-200"
                              : "border-gray-200 focus:border-royal focus:ring-blue-100"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1.5">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center text-sm py-3.5 cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Inquiry <Send size={16} />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-body">
                        By submitting, you agree to our privacy policy and mutual confidentiality.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAPS EMBED ───────────────────────────── */}
      <section className="py-12 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10" data-aos="fade-up">
            <span className="section-badge">Visit Our Office</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-heading">
              Our Location in Tech City
            </h2>
            <p className="text-sm text-body mt-2">
              1234 Innovation Drive, Tech City, TC 00001
            </p>
          </div>

          <div
            className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 aspect-[21/9] min-h-[350px] w-full"
            data-aos="fade-up"
          >
            <iframe
              title="Xpowers Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192842405626!2d-122.41941548468205!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
