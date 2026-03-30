
import { useContext } from "react"
import { userName } from "./example1"

function CompB()
{
    const user=useContext(userName)
    return(
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default CompB