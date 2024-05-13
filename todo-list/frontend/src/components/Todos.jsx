import { useState } from "react"

export function Todos({todos, setTodos}){
    const [isCompleted,setisCompleted] = useState("");
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    fetch("http://localhost:3000/completed",{ //here we want to fetch id from the database and pass it to body so that our api can work
                        method:"PUT",
                })
                }}>{todo.isCompleted == true?"Completed":"Mark as Completed"}</button>
                </div>
        })}
    </div>
}