import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { AppContext, AppProvider } from "./context/AppContext";
import "./App.css";
import "./i18n";
import Doctors from "./pages/Doctors";
import DoctorsDetail from "./pages/DoctorsDetail";
import SpecialtyPage from "./pages/SpecialtyPage";
import ContactUs from "./pages/ContactUs";
import Maintenance from "./pages/Maintenance";
import { ToastContainer,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from "./pages/Appointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import NewsAndEvents from "./pages/NewsAndEvents";
import MainNewsAndEvents from "./pages/MainNewsAndEvents";

function App() {
  return (
    <AppProvider>
  <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      <Router>
        <Routes>
         
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Maintenance />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorsDetail />} />
          <Route path="/Specialty" element={<SpecialtyPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/AppointmentSuccess" element={<AppointmentSuccess />} />
          <Route path="/newsandevents/:name" element={<NewsAndEvents />} />
          <Route path="/news-events" element={<MainNewsAndEvents />} />

        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
