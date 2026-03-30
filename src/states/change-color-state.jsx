import { useState } from "react";

function ChangeBodyColor()
{
    const[backgroundColor,setBackGroundColor]=useState(false)

    function change()
    {
       setBackGroundColor(!backgroundColor);
        document.body.style.backgroundColor=!backgroundColor?"black":"white";
    }

    return(
        <div>
            <h1>change background color</h1>
            <button onClick={change}>color change</button>
        </div>
    )
}

export default ChangeBodyColor