import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export function AppProvider({ children }) {
  const [introOne,setIntroOne] = useState(true); 
  const [openWrap,setOpenWrap] = useState(null); 
  const [introAnim,setIntroAnim] = useState('one'); 


  return (
    <AppContext.Provider value={{ introOne,setIntroOne,openWrap,setOpenWrap,introAnim,setIntroAnim }}>
      {children}
    </AppContext.Provider>
  );
}
