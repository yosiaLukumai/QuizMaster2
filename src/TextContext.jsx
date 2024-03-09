import React, {createContext, useState,useEffect} from "react";


const TextContext = createContext();

export const TextProvider = ({children})=>{
    const [extractedText, setExtractedText] = useState('');

    useEffect(()=>{
    },[extractedText])

    return(
        <TextContext.Provider value={{extractedText, setExtractedText}}>
            {children}
            </TextContext.Provider>
    );
};

export default TextContext;