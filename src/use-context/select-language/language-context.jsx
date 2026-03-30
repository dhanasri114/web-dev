import { useContext } from "react";
import { LanguageContext } from "../language-provider";

function LangContext()
{
    const {language} =useContext(LanguageContext);

    const text={en:"welcome",te:"telugu",hi:"hindi"}


return <h1>{text[language]}</h1>
}

export default LangContext;