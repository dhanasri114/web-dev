import { useState } from "react";

import { createContext } from "react";
import CompoundColor from "./toggle4";

export const ThemeContext=createContext();

function ColorCompound()
{
    const[theme,seTheme]=useState(false)

    function ChangeTheme()
    {
        seTheme(!theme)
        document.body.style.backgroundColor=!theme?"black":"white"
        document.body.style.color=theme?"black":"white";
    }
    return(
        <div>
            <ThemeContext.Provider value={{theme,ChangeTheme}}>
            <CompoundColor></CompoundColor>
            </ThemeContext.Provider>
        </div>
    )
}

export default ColorCompound