import { useState } from "react";

function StudentDetails()
{
    const[Details,setDetails]=useState({name:'dhanu',age:30,color:'black',gender:'female'})

    return(
        <div>
            <h1>my name is :{Details.name}</h1>
            <h1>my age is:{Details.age}</h1>
            <h1>i am {Details.color} color</h1>
            <h1>Gender:{Details.gender}</h1>

            {/* this is update only one value
            <button onClick={()=>setDetails({...Details,name:'muni'})}>changename</button>
         */}
            <button onClick={()=>setDetails({name:'sai',age:20,color:'browen',gender:'male'})}>change details</button>
        </div>
    )
}

export default StudentDetails



//Note:(...statevariable,update key: update value) use this oprattor we copiy the propretits while update one vale