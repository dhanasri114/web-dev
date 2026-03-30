import { useState } from "react";

function ToggleTheme() {
  const [DarkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme(!DarkTheme);

    document.body.style.backgroundColor = !DarkTheme ? "black" : "white";
    //document.body.style.color = !isDark ? "white" : "black";
  }

  return (
    <div>
      <h1>Toggle Theme</h1>
      <button onClick={toggleTheme}>
        {/* {DarkTheme ? "light Mode" : "dark Mode"} */}toggle
      </button>
    </div>
  );
}

export default ToggleTheme;
