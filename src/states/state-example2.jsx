
import { useState } from "react"


function ChangeBackgroundColor()
{
    const[backGroundColor,SetBackgroundColor]=useState("pink")
    const[color,setColor]=useState("black")
    console.log(backGroundColor)
    return(
        <div>
            <h1 style={{backgroundColor:backGroundColor,color:color}}>react</h1>
            <button onClick={()=>SetBackgroundColor("blue")}>background color</button>
            <button onClick={()=>setColor('white')}>text color</button>
            
        </div>
    )
}

export default ChangeBackgroundColor