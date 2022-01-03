import React from "react";

const Todo = ({todo}) =>  {
  return(
      <div className={todo.complete ? "strike" : ""}>
            <p> {todo.task} </p>
      </div>
      
    );

};

export default Todo;