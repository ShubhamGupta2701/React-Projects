import { useState } from 'react';
import {CreateTodo} from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos,setTodos] = useState([]);

  fetch("http://localhost:3000/todo")
  .then(async(res)=>{
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos> 
    </div>
  ) 
}



export default App;
