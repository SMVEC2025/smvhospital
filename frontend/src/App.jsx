// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ToastContainer, Bounce } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorsDetail from "./pages/DoctorsDetail";
import SpecialtyPage from "./pages/SpecialtyPage";
import ContactUs from "./pages/ContactUs";
import Appointment from "./pages/Appointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import NewsAndEvents from "./pages/NewsAndEvents";
import MainNewsAndEvents from "./pages/MainNewsAndEvents";
import "./App.css";
import "./i18n";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import BotWrapper from "./components/bot/BotWrapper";
import MobileSideBar from "./components/navbar/MobileSideBar";
import NavSlider from "./components/navbar/NavSlider";
import LogoAnimation from "./components/LogoAnimation";
import InternationalPatients from "./pages/InternationalPatients";

const glitchVariants = {
  initial: { opacity: 0.4, filter: "blur(10px) contrast(0.8)" },
  animate: {
    opacity: 1,
    filter: "blur(0px) contrast(1)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0.4,
    filter: "blur(50px) contrast(1.5) hue-rotate(90deg)",
    transition: { duration: 0, ease: "easeInOut" },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={glitchVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorsDetail />} />
          <Route path="/Specialty" element={<SpecialtyPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/AppointmentSuccess" element={<AppointmentSuccess />} />
          <Route path="/newsandevents/:name" element={<NewsAndEvents />} />
          <Route path="/news-events" element={<MainNewsAndEvents />} />
          <Route path="/test" element={<LogoAnimation />} />
          <Route path="/international-patients" element={<InternationalPatients />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          theme="dark"
          transition={Bounce}
        />
        <Navbar />
        <MobileSideBar />
        <BotWrapper />
        <NavSlider />
        <AnimatedRoutes />
      </Router>
    </AppProvider>
  );
}

export default App;
