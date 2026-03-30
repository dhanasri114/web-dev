import { useContext } from "react"
import { UserDetails } from "./example4"


function UserForm()
{
    const {name="sai",email,number}=useContext(UserDetails) //we can pass default value
    return(
        <div>
{/* we can't change value inside jsx we can changr value ouside the jsx */}
            <h2>User Name:{name}</h2>
            <h2>User Email:{email}</h2>
            <h2>User Numbers:{number}</h2>
        </div>
    )
}


export default UserForm