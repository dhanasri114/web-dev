import { useContext } from "react";
import { LanguageContext } from "./language-provider";

function LangSelector()
{
    const {setLanguage}=useContext(LanguageContext);
    return(
        <div>
            <select onChange={(e)=>setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
            </select>
        </div>
    );
}

export default LangSelector