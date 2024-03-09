import React from "react";
import Container from "./container";
import UploadUserDoc from "./uploadingDoc";
import { TextProvider } from "./TextContext";



function App(){ 

  return(
   
    <TextProvider>
       <Container/>
      <UploadUserDoc/>
    </TextProvider>
  

  );

}

export default App