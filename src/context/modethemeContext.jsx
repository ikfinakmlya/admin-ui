import { createContext, useState } from "react";

export const ModeThemeContext = createContext();

export const ModeThemeProvider = ({ children }) => {
  const lightTheme = { name: "light", color: "#000000", background: "#FFFFFF" };
  const darkTheme = { name: "dark", color: "#FFFFFF", background: "#333333" };

  const [theme, setTheme] = useState(lightTheme);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme.name === "light" ? darkTheme : lightTheme));
  };

  return (
    <ModeThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ModeThemeContext.Provider>
  );
};
