import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Todo from "./Todo";

function App() {

  // State
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(''); 
  

  // New function, para malinis tingnan yung button
  const newTodo = () => {
    // spread operator
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <main className="container p-5">
      <h1 className="fw-bold mb-4">📝 To-do List</h1>
      <label htmlFor="newtodo" className="fw-semibold">Add a new task:</label>
      <input type="text" id="newtodo" value={input} className="form-control" onChange={(e)=> {
        setInput(e.target.value)
      }}/>
      <button className="btn btn-primary mt-2" onClick={newTodo}>New Task</button>

      <div className="card mt-3 p-3">
        {
          todos.map((todo, index) => (
            <Todo todo={todo} index={index}/>
          ))
        }
      </div>
    </main>
  )
}
 
export default App




