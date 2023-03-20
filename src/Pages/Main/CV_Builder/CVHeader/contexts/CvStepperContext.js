import { createContext, useContext, useState } from "react";

const CvStepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <CvStepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </CvStepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(CvStepperContext);

  return { userData, setUserData };
}