import { createContext } from "react";
import CompB from "./example2";
import CompC from "./example3";
 export const userName=createContext()
 

function CompA()
{
    return(
        <div>
            <userName.Provider value="ram">
                <CompB></CompB>
            </userName.Provider>
            <userName.Provider value={{name:'sai',age:20}}>
                <CompC></CompC>
            </userName.Provider>
        </div>
    )
}

export default CompA