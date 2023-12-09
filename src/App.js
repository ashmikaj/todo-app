
import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import axios from 'axios';
import './todo.json';
import './App.css';


function App() {  

  const [todos, setTodos] = useState([]);
  const [ todo, setTodo] = useState('');



  
  const handleUpdatedTodo = newtood =>{
    setTodos(newtood);
  }
  


  const handleValueChange = event =>{
    setTodo(event.target.value);
  }

  const handleKeyEvent =  event =>{
  if(event.key=='Enter' && event.target.value !== "" ){
    setTodo('')
    setTodos([...todos,{
    id: Math.random(),
    task: todo,
    isComplete: false
  }])

   
   }
      
  }
  

  useEffect(()=>{
    axios.get('todo.json')
    .then(response => {
        setTodos(response.data.data)
    })
},[])
  


  return (
    <div className="App">
      <h1>TODO</h1>
      <input className='todo-input' placeholder="please add something to do" value={todo} onChange={handleValueChange} onKeyDown={handleKeyEvent}></input>
      <div>
      <Todo  list={todos} handleUpdatedTodo={handleUpdatedTodo} />
      </div>
    </div>
  );
}

export default App;
