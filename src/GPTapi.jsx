import OpenAI from 'openai';



const apiKey  = import.meta.env.VITE_API_KEY;
const openai = new OpenAI({apiKey,dangerouslyAllowBrowser: true})


async function ChatComponent({userPrompt}) {
let data;
    console.log('ChatComponent')
    console.log('User prompt', userPrompt);
    const prompt = `Create a very simple multiple-choice question with one correct answer and one incorrect answer based on the following statement: "${userPrompt}". Provide the question, correct answer, and incorrect answer in the following JSON format:
    {
      "question": "Question text",
      "correct_answer": "Correct answer text",
      "incorrect_answer": "Incorrect answer text"
    }`;
        
    try {
        if (typeof prompt !== 'string') {
            throw new Error("User prompt must be a string");
        }
        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "system", "content": prompt}],
            max_tokens: 150,
            temperature: 0.7,
        });
        
        console.log('BBBBBBJJJLLKK',response.choices[0].message.content);
        const assistantResponse = response.choices[0].message.content;
        try{
            console.log('start to PARSE')
            data = JSON.parse(assistantResponse)
            console.log('HERE the answers VVVV', data)
            return data;
        }catch(error){
            console.error('here the error',error)
        }
        
    } catch (error) { 
        console.error(error);  
        return "";
    }
}




export default ChatComponent