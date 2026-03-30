import { useState } from "react";

function TextChange()
{
    const[text,setText]=useState("hi all");

    function ChangeText()
    {
        setText("hy  welcome react");
    }
    return(
        <div>
            <h1>{text}</h1>
            <h1 onClick={ChangeText}>click me</h1>
            {/* <button onClick={ChangeText}>text change</button> */}
        </div>
    )
}

export default TextChange