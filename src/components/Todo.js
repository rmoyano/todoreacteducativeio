import React from "react";

const Todo = ({todo, handleToggle}) =>  {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  }

  return(
      <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"} >
            <p> {todo.task} </p>
      </div>
      
    );

};

export default Todo;