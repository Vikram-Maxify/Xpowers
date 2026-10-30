import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    // Refresh AOS animations on route change
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  }, [pathname]);

  return null;
}
