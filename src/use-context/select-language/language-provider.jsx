import { createContext ,useState} from "react";
import LangSelector from "./language-selector";
import LangContext from "./language-context";

export const LanguageContext=createContext();

function LangProvider()
{
    const[language,setLanguage]=useState("en")
    return(
        <div>
            <LanguageContext.Provider value={{language,setLanguage}}>
                <LangSelector></LangSelector>
                <LangContext></LangContext>
            </LanguageContext.Provider>
        </div>
    )
}

export default LangProvider;