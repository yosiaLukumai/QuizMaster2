import React, {createContext, useState,useEffect} from "react";


const TextContext = createContext();

export const TextProvider = ({children})=>{
    const [extractedText, setExtractedText] = useState('');
    console.log('extractedTextYYYYY',extractedText)

    useEffect(()=>{
        console.log('TextContext.jsx: updated extractedText:', extractedText)
    },[extractedText])

    return(
        <TextContext.Provider value={{extractedText, setExtractedText}}>
            {children}
            </TextContext.Provider>
    );
};

export default TextContext;