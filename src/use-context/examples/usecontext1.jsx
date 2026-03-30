import { createContext } from "react";
import Details from "./products";

export const pname=createContext();
function Items()
{
    return(
        <div>
            <pname.Provider value={{name:'laptop', color:"black",ram:12}}>
                <Details></Details>
            </pname.Provider>
        </div>
    )
}

export default Items;