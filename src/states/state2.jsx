
import { useState } from 'react';

function Change()
{
    const[name,setName]=useState("dhanu");

    function text()
    {
        setName("sai");
    }
    return(
        <div><br></br><br></br>
        <h1>{name}</h1>
            <button onClick={text}>change name</button>
        </div>
    )
}

export default Change