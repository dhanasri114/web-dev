import { useContext } from "react";
import { ThemeContext } from "./theme";

function CompD() {
  const { theme, setTheme } = useContext(ThemeContext);

function Theme()
{
  setTheme(!theme)
  document.body.style.backgroundColor=!theme?"black":"white";
}
  return (
    <div>
      <p>Theme is </p>
      <button onClick={Theme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default CompD;
