import { createContext, useState, useEffect } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export function AppProvider({ children }) {
  const [introOne, setIntroOne] = useState(true);
  const [openWrap, setOpenWrap] = useState(null);
  const [introAnim, setIntroAnim] = useState("one");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check

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
        openWrap,
        setOpenWrap,
        introAnim,
        setIntroAnim,
        isMobile, // Add mobile state
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
