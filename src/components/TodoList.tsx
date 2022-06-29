import React from "react";
import {observer} from "mobx-react-lite"
import "../style/TodoList.scss"
import TodoSetting from "./TodoSetting";
import TodoTodos from "./TodoTodos";


const TodoList = observer( () => {

return (
   <div className="todo-list">
      <TodoSetting/>
      <TodoTodos/>
   </div>
)
})

export default TodoList;