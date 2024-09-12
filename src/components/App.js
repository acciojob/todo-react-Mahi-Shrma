
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[input,setInput] = useState('');
  const [todos,setTodos] = useState([]);

  function addTodo(){
    if(input.trim()){
      setTodos([...todos,input]);
      setInput('');
    }
  };

  function deleteTodos(index){
   setTodos(todos.filter((todo,i)=> i!== index))
  }

  return (
    <div>
       <h1 style={{textAlign:"center"}}>To-to List</h1>
       <input 
       type="text" 
       value={input}
       onChange={(e)=>setInput(e.target.value)}>
       </input>
       <button onClick={addTodo}>Add Todo</button>
       <ul>
        {
          todos.map((task,index)=>(
            <li key={index}>
               {task}
               <button onClick={deleteTodos(index)}>Delete</button>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default App
