import { useState } from "react";

function Store()
{
    const[items,setItems]=useState({item1:'books',item2:'pens'})
    const[num,setNum]=useState([2,4,2,6,4,2])
    const[them,setTheme]=useState(false)

    function ThemeChange()
{
    setTheme(!them);
    document.body.style.backgroundColor=!them?"black":"white";
    
}
    return(
        <div>
            <h1>{items.item2}</h1>
            <h2>
                { num.map((i)=>
                <li>{i}</li>
                )}
            </h2>


            <button onClick={()=>setItems({...items,item2:'bage'})}>item change</button>
            <button onClick={ThemeChange}>Theme change</button>
        </div>
    )
}

export default Store;