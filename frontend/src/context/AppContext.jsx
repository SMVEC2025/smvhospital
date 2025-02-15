import { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

// Create Provider Component
export function AppProvider({ children }) {
  const [introOne,setIntroOne] = useState(true); 

  return (
    <AppContext.Provider value={{ introOne,setIntroOne }}>
      {children}
    </AppContext.Provider>
  );
}
