import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import ScrollToTop from "./components/shared/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import AppDevelopmentPage from "./pages/services/AppDevelopmentPage";
import CustomSoftwarePage from "./pages/services/CustomSoftwarePage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/app-development" element={<AppDevelopmentPage />} />
        <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
