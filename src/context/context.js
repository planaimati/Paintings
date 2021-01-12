import React, { useState } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const toggleSetActiveMenu = () => {
    if (activeMenu === 0) {
      setActiveMenu(1);
    } else if (activeMenu === 1) {
      setActiveMenu(0);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeMenu,
        toggleSetActiveMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
