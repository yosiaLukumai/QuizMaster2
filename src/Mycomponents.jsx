import React, {useState} from "react";

function MyComponents(){
    const [name, setName] = useState('Fabian');
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName('spongebob');
    }

    const incrimentAge =()=>{
        setAge(age+1);
    }

    return(<div><p>
        Name:{name}</p>
        <button onClick={updateName}>set name</button>
        <p>
        Name:{age}</p>
        <button onClick={incrimentAge}>incriment Age</button>
        </div>)
}
export default MyComponents