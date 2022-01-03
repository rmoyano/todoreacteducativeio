import { render } from '@testing-library/react';
import React from 'react';
import Todo from './Todo';

const TodosList = ({todos, HandleFilter, HandleToggle} ) => {
  return (
    < div>
        {/* { todos.map(todo => ( <li key={todo.id}>{todo.title}</li> ))} */}
        { todos.map(todo => { 
            return(
             < Todo todo={todo} HandleFilter={HandleFilter} HandleToggle={HandleToggle} /> )
            }) 
        }
        <button style={{ margin: '20px' }} onClick={HandleFilter}> Eliminar completados </button>
    </div>

); };

export default TodosList;