
import { useState } from "react";

function LogForm()
{
    const[Log,setLog]=useState(false)
    return(
        <div>
            {Log?(
                <div>
                    <h1>we are logout</h1>
                <button onClick={()=>setLog(false)}>Login</button>
                </div>
            ):(
                <>
                <h1>wlcome</h1>
                <button onClick={()=>setLog(true)}>logout</button>
                </>
            )}
        </div>
    )
}

export default LogForm