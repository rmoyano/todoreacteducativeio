import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodosList from './components/TodosList';
import data from './data.json';
import Form from './components/Form';


function App() {
  //const [variable, setVariable] = useState(<initState?>);
  const [todos, setTodos] = useState(data);

  const handleToggle = (id) => {
    let mapped = todos.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : {...task};
    })
    setTodos(mapped);
  }
  
  const handleFilter = () => {
    let filtered = todos.filter(task => {return !task.complete });
    setTodos(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...todos];
    copy = [...copy, {id: copy.length + 1 , task: userInput, complete: false}];
    setTodos(copy);
  }

  return (
    <div className="App">
      
          <Header />
          <Form addTask={addTask} />
          <TodosList todos={todos} handleFilter={handleFilter} handleToggle={handleToggle} />
      
    </div>
  );
}

export default App;