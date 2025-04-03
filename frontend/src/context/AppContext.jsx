import { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export function AppProvider({ children }) {
  const [introOne, setIntroOne] = useState(true);
  const [introAnim, setIntroAnim] = useState("one");
  const [refreshAnim,setRefreshAnim] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check
  const [animCase,setAnimCase] = useState("welcome")
  const [doctorsList,setDoctorsList] = useState()
  const [showSideBar,setShowSideBar] = useState(false)
  const [darkmode,setDarkmode] = useState(false)
  const [openNavSlider,setOpenNavSlider]=useState(false)

  // Effect to track screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 

  return (
    <AppContext.Provider
      value={{
        introOne,
        setIntroOne,
        introAnim,
        setIntroAnim,
        isMobile,
        refreshAnim,
        setRefreshAnim,
        animCase,setAnimCase,doctorsList,setDoctorsList,
        showSideBar,setShowSideBar,darkmode,setDarkmode,
        openNavSlider,setOpenNavSlider 
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
