import { createContext, useState } from "react";
import CompD from "./theme1";
export const ThemeContext = createContext();

function A() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CompD ></CompD>
    </ThemeContext.Provider>
  );
}

export default A;
