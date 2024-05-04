import { useState } from "react";

function State(){
    const [person, setPerson] = useState({name:"tony", age:150});

    const handleIncreaseAge = () =>{
        const newPerson = {...person, age: person.age + 1};
        setPerson(newPerson)
    };
    
    return (
        <>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <button onClick={handleIncreaseAge}>Augmente Age</button>
        </>
    );
}

export default State;