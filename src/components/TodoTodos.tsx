import React from "react";
import {observer} from "mobx-react-lite"
import todo from "../store/Todo";

const TodoTodos = observer( () => {

   return (
      <div >
         {todo.todos.length === 0 ?
         <div className="text">No todos</div>
         :
         <>
         {todo.todos.map(item => 
            <div className="todo-item" key={item.id}>
               <input type="checkbox" className="todo-check" checked={item.completed} onChange={() => todo.completedTodo(item.id)}/>
               <p className="todo-title">{item.title}</p>
               <div className="btn-container">
               <button className="todo-btn" onClick={() => todo.removeTodo(item.id)}>Удалить</button>
               </div>
            </div>
            )}
         </>
         }
      </div>
   )
   })
   
   export default TodoTodos;