/**
 * Shared page layout wrapper.
 * Wraps every page with the global Navbar, Footer and WhatsApp button.
 */
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PageLayout({ children }) {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
