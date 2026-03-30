import { useContext } from "react";
import { ThemeContext } from "./toggle3";

function CompoundColor()
{
    const {theme,ChangeTheme}=useContext(ThemeContext);

    return(
        <div>
            <h1>Theme Context</h1>
            <button onClick={ChangeTheme}>{theme?"Drak Mode":"Light Mode"}</button>
        </div>
    )
}

export default CompoundColor