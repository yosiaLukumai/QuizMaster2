import { useContext, useState } from 'react'
import {FaUpload} from 'react-icons/fa'
import extractTextFromPdf from './extractTextPdf';
import TextContext from './TextContext';

const UploadUserDoc = ()=>{
    const [selectedFile, setSelectedFile] = useState(null);   
    const {setExtractedText} = useContext(TextContext)

    const handleFileChange = (event)=>{
        setSelectedFile(event.target.files[0])
    }
    

    const handleUpload = ()=>{
        if(selectedFile){

            const reader = new FileReader();
            reader.onload =async (event) =>{
                const fileContent = event.target.result;
            if (selectedFile.type=== 'application/pdf'){
                 extractTextFromPdf(selectedFile).then((textContent)=>{
                    if(textContent !=='' || textContent!== null){
                        setExtractedText(textContent)
                    }else if(textContent==='' || textContent === null){
                            console.log('it is SO empTYYY');
                    }
                 }).catch((error)=>{
                    console.error('Error extracting text from PDF', error);
                 });
              
               
            }else{
                console.log('file is not PDF. can not extract text')
            }            
            }
            reader.readAsArrayBuffer(selectedFile)
        }else{
            console.log('No file selected')
        }

    }
    return (
        <div className='upload-button-container'>
            <input
            type='file'
            id='fileInput'
            style={{display:'none'}}
            onChange={handleFileChange}/>
            <label htmlFor='fileInput' className='upload-button'>
                <FaUpload/> 
                </label>
            <button className = 'upload-button' 
            onClick={handleUpload}>
                Upload
            </button >
          
        </div>
    )
}

export default UploadUserDoc;