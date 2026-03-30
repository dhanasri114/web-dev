import { useContext } from "react";
import { ThemeContext } from "./toggle1";

function ConsumerToggle()
{
    const {hide,click}=useContext(ThemeContext)
    return(
        <div>
            <h1>{hide?"Drak Theme":"Light Theme"}</h1>
            <button onClick={click}>Theme toggle</button>
        </div>
    )
}

export default ConsumerToggle