import { createContext } from "react";
import UserForm from "./form";
export const UserDetails=createContext()

function UseComp()
{
    
    return(
        <div>
            <UserDetails.Provider value={{email:'dhnau@gmail.com',number:875756757}}>
                <UserForm></UserForm>
            </UserDetails.Provider>
        </div>
    )
}

export default UseComp