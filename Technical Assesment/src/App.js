import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LoginAndSignup from "./pages/Login-and-signup";
import Booking1 from "./pages/Booking1";
import Booking2 from "./pages/Booking2";
import Booking from "./pages/Booking";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/booking":
        title = "";
        metaDescription = "";
        break;
      case "/booking1":
        title = "";
        metaDescription = "";
        break;
      case "/booking2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginAndSignup />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking1" element={<Booking1 />} />
      <Route path="/booking2" element={<Booking2 />} />
    </Routes>
  );
}
export default App;
