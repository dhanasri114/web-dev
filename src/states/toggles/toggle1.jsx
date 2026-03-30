import { createContext } from "react";

export const ThemeContext=createContext();

import { useState } from "react"
import ConsumerToggle from "./toggle2";

function UserToggle()
{
    const[hide,setHide]=useState(false)

    function click()
    {
        setHide(!hide)
        document.body.style.backgroundColor=!hide?"black":"white";
        // setHide(prev=>{
        // document.body.style.backgroundColor=!prev ? "black":"white";
        // document.body.style.color=prev ? "black":"white"
        // return !prev;
        // })
    }
    return(
        <div>
            <ThemeContext.Provider value={{hide,click}}>
                <ConsumerToggle></ConsumerToggle>
            </ThemeContext.Provider>
        </div>
    )
}

export default UserToggle