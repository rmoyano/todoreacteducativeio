import React from 'react';
import Todo from './Todo';

const TodosList = ({todos, handleFilter, handleToggle} ) => {
  return (
    < div>
        {/* { todos.map(todo => ( <li key={todo.id}>{todo.title}</li> ))} */}
        { todos.map(todo => { 
            return(
             < Todo todo={todo} handleFilter={handleFilter} handleToggle={handleToggle} /> )
            }) 
        }
        <button style={{ margin: '20px' }} onClick={handleFilter}> Eliminar completados </button>
    </div>

); };

export default TodosList;