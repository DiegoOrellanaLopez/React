import React, {useState} from "react";
import { TodoList } from "./components/TodoList";

export function App(){
    const [todos, setTodos] = useState([
        {id:1,task:"Tarea 2", completed:false},
    ]);
    return (
        <TodoList todos={todos}/>
    );
}