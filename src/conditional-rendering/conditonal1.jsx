
import { useState } from "react"


function Form()
{
    const[userLogin,setLogin]=useState(false)

    return(
        <div>
            {userLogin ? (
                <div>
            <h1>Login successfully</h1>
             <button onClick={()=>setLogin('true')}>Login</button>
             </div>
            ):(
                <div>
            <h1>Login faild</h1>
             <button onClick={()=>setLogin('false')}>Login</button>
             </div>
            )}
        </div>
    )
}

export default Form