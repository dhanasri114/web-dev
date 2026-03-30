import { useState } from "react";
import { useEffect } from "react";

function TextExample()
{
    const[name,setName]=useState("ram")
    const[color,setColor]=useState("pink")
    const[front,setFront]=useState(20)

    useEffect(()=>{
        console.log("color is changed",color);
     }, []);
    
    return(
        <div>
            <h1>{name}</h1>
            <h1 style={{color}}>hi all</h1>
            <h1 style={{fontSize:front}}>React App</h1>

            <button onClick={()=>setName('dhanu')}>change text</button>
            <button onClick={()=>setColor("green")}>change color</button>
            <button onClick={()=>setFront(30)}>change Font size</button>
        </div>
    )
}

export default TextExample