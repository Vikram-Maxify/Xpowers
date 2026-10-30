/**
 * Floating WhatsApp button – fixed bottom-right.
 * Update WHATSAPP_NUMBER with the real company number.
 */
const WHATSAPP_NUMBER = "10000000000"; // e.g. "919876543210"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'd like to discuss a project with Xpowers."
);

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg
                      hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200">
        {/* WhatsApp SVG (brand icon – not in lucide) */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.42.65 4.7 1.79 6.67L3 29l6.53-1.72A12.92 12.92 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.85a10.8 10.8 0 01-5.51-1.51l-.39-.23-4.06 1.07 1.08-3.95-.26-.41A10.83 10.83 0 015.14 16C5.14 9.99 10 5.14 16 5.14c6.01 0 10.86 4.85 10.86 10.86S22.01 26.86 16 26.86zm5.97-8.13c-.33-.17-1.93-.96-2.23-1.06-.3-.11-.52-.17-.74.17-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.14-.67.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.02-.58-.08-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57l-.63-.01c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.17.22 2.29 3.5 5.55 4.91.78.34 1.38.54 1.85.69.78.25 1.49.21 2.04.13.62-.09 1.93-.79 2.2-1.56.27-.76.27-1.41.19-1.56-.08-.14-.29-.22-.62-.39z" />
        </svg>
      </div>
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-heading text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Chat on WhatsApp
      </span>
    </a>
  );
}
