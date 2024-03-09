import * as pdfjsLib from 'pdfjs-dist/build/pdf'


const workerSrc = await import('pdfjs-dist/build/pdf.worker.js');
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

const extractTextFromPdf = async  (file)=> {
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();

        let textContent = ''

        fileReader.onload = async() =>{
            try{
                const arrayBuffer = fileReader.result;
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const page = await pdf.getPage(1)
            const content = await page.getTextContent()
            textContent = content.items.map((item)=>item.str).join('')
             resolve (textContent);
            }catch(error){
                reject(error);
            }
            
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
        fileReader.readAsArrayBuffer(file);
    })
  
}

export default extractTextFromPdf;