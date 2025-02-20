import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export function AppProvider({ children }) {
  const [introOne,setIntroOne] = useState(true); 
  const [openWrap,setOpenWrap] = useState(null); 

  return (
    <AppContext.Provider value={{ introOne,setIntroOne,openWrap,setOpenWrap }}>
      {children}
    </AppContext.Provider>
  );
}
