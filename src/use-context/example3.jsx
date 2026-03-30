import { useContext } from "react";
import { userName } from "./example1";

function CompC()
{
    const user=useContext(userName)
    
    return(
        <div>
            <h1>my name :{user.name}</h1>
            <h1>my age is :{user.age}</h1>
        </div>
    )
}

export default CompC