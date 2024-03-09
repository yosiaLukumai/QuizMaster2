import React, {useState,useEffect, useContext} from "react"
import ChatComponent from "./GPTapi";
import TextContext from "./TextContext";
 
 function Container(){
    const [isClicked, setIsClicked] = useState(false)
    const [isCorrect, setIsCorrect] = useState(null);
    const [isClicked2, setIsClicked2] = useState(false)
    const [isCorrect2, setIsCorrect2] = useState(null);
    const[result, setResult] = useState("")
    const[sendClicked, setSendClicked] = useState(false);
    const {extractedText} = useContext(TextContext)
    const[shuffledAnswers, setShuffledAnswers]=useState([])
    const [disableButtons, setDisableButtons] =useState(false) 
    const [firstQuestionFetched, setFirstQuestionFetched]=useState(false)
    
    useEffect(()=>{
        const shuffledArray=(array)=>{
            if(array.length===0){
                return array;
            }
            let randomIndex;
            for(let i=array.length-1;i>0;i--){
                 randomIndex  = Math.floor(Math.random()*(i+1));
                [array[i],array[randomIndex ]] = [array[randomIndex], array[i]];
            }
            return array;
        }

       
          
        if (!firstQuestionFetched){
            fetchNewQuestion();
        }
        
        const answers = [result.correct_answer, result.incorrect_answer]
        const shuffledAnswer = shuffledArray(answers);
        setShuffledAnswers(shuffledAnswer)
        console.log('shuffledAnswersFFFFFFFFFFFFFFF',shuffledAnswer[0])
        console.log('shuffledAnswersFFFFFFFFFFFFFFFKKKKKK',result.correct_answer)
        
    },[sendClicked, 
        extractedText,
         result,
         ]);

         const  fetchNewQuestion=async()=>{
            try{
                if(extractedText !==''){
                    const response = await ChatComponent({userPrompt:extractedText})
                    setResult(response)
                    setFirstQuestionFetched(true)
                    setIsClicked(false);
                    setIsClicked2(false);
                    setIsCorrect(null)
                    setIsCorrect2(null)
                    setDisableButtons(false)
        
                }
            }catch(error){
                console.log(error)
            }
         }

     
    const handleClick = (selected)=>{ 
        if (!disableButtons) {
            setIsClicked(selected === 0);
            setIsClicked2(selected === 1);
            setIsCorrect(selected === 0 && shuffledAnswers[selected] === result.correct_answer);
            setIsCorrect2(selected === 1 && shuffledAnswers[selected] === result.correct_answer);
            setDisableButtons(true);
            setTimeout(() => {
                setSendClicked(true);
                fetchNewQuestion();
            }, 2000);
        }

    } 
  
    const buttonClassName = (index) => {
        return (
            (isClicked && index === 0 && isCorrect) ||
            (isClicked2 && index === 1 && isCorrect2)
        ) ? 'button-correct' :
        (
            (isClicked && index === 0 && !isCorrect) ||
            (isClicked2 && index === 1 && !isCorrect2)
        ) ? 'button-wrong' : 'button-notClicked';
    };
    



    return(<div className="container-with-button">
        <div className="Title">
            QuizMaster
        </div>
        <div className="my-container"><p>
       Ai: {result.question} </p>
        </div>
        {shuffledAnswers.map((answer, index)=>(
            <button 
            key={index}
            className={buttonClassName(index)}
            onClick={()=>handleClick(index)}
            disabled={
                disableButtons||
                (isClicked && index===0)
                ||(isClicked2 && index === 1)}
                >
                        {index===0?'A':'B'}. {answer}
            </button>
        ))}
    </div>)
 } 
 export default Container