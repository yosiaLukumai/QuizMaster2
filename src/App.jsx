import React from "react";
import dotenv from 'dotenv'
import Container from "./container";
import UploadUserDoc from "./uploadingDoc";
import { TextProvider } from "./TextContext";

dotenv.config();

function App(){ 

  return(
   
    <TextProvider>
       <Container/>
      <UploadUserDoc/>
    </TextProvider>
  

  );

}

export default App