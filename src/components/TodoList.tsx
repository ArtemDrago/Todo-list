import React, { useEffect, useState } from "react";
import {observer} from "mobx-react-lite"
import "../style/TodoList.scss"
import TodoSetting from "./TodoSetting";
import TodoTodos from "./TodoTodos";
import todo from "../store/Todo";

const TodoList = observer( () => {
const [load , setLoad] = useState(false)
useEffect(() => {
   setLoad(true)
   todo.getArrey().then(e => {
      setLoad(false)
   })
},[]) 


return (
   <div className="todo-list">
      <TodoSetting/>
      {load 
      ?
      <h1 className="loader">Loading...</h1>
      :
      <TodoTodos/>
      }
      
   </div>
)
})

export default TodoList;