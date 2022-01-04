import React, {useState} from "react";

const Form = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);

    }
    const handleSubmit = (e) => {
            e.preventDefault();
            addTask(userInput);
            setUserInput("");   
    }
    return (
    <form  onSubmit={handleSubmit}>
    <input type="text" value={userInput} onChange={handleChange} placeholder="Enter task..." /> 
    <button> Agregar </button>
    </form>
    );
};

export default Form;