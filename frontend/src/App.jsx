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


function App() {
  return (
    <AppProvider>
  
      <Router>
        <Routes>
         
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Maintenance />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorsDetail />} />
          <Route path="/Specialty" element={<SpecialtyPage />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
