import { useState, useEffect } from "react";
import axios from 'axios';


function App(){
    const [btn,setBtn] = useState(1);
    return (
        <div>  
            <button onClick={()=>{setBtn(1)}}>1</button>
            <button onClick={()=>{setBtn(2)}}>2</button>
            <button onClick={()=>{setBtn(3)}}>3</button>
            <button onClick={()=>{setBtn(4)}}>4</button>
            <Todo id={btn}></Todo>
            {/* {todos.map(todo=><Todo key={todo.id} title={todo.title} description = {todo.description} />)} */}
        </div>
    );
}


function Todo({id}){
    const [todo, setTodo] = useState({});
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((response)=>{
            setTodo(response.data.todo)
        })
    },[todo])

    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
    )
}

export default App;