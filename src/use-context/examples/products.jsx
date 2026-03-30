import { useContext } from "react";
import { pname } from "./usecontext1";



function Details()
{
    const details=useContext(pname);
    return(
        <div>
            <h1>{details.name}</h1>
            <h1>{details.name} color is {details.color}</h1>
            <h1>{details.name} ram is {details.ram}</h1>
        </div>
    )
}

export default Details;