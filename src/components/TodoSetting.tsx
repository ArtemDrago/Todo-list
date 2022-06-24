import React, { useMemo, useState,useEffect } from "react";
import {observer} from "mobx-react-lite"
import todo from "../store/Todo";


const TodoSetting = observer(() => {
   const [inputValue , setInputValue] = useState('')
   const [select , setSelect] = useState('all')
   
   const addPost = () => {
      if (inputValue.length > 4) {
         const total = {
            id: new Date(),
            title: inputValue,
            completed: false,
         }
         todo.addTodo(total)
         
      } else {
         alert("Минимальный размер вводимой задачи 5 символов!")
      }
      setInputValue('')
   }
   useEffect(() => {
   todo.current = select
   todo.sortetTodo(select)
   } , [select])

   return (
   <div className="setting">
      <select className="todo-select" onChange={e => setSelect(e.target.value)} >
         <option className="todo-option" value="all">Все</option>
         <option className="todo-option" value="end">Выполненные</option>
         <option className="todo-option" value="process">Не выполненные</option>
      </select>
      
      <input
      className="add-todo" 
      type="text" 
      placeholder="название поста"  
      value={inputValue} 
      onChange={e => setInputValue(e.target.value)}
      />
      <button className="todo-btn"
      onClick={addPost}
      >
      Добавить
      </button> 
   </div>
   )

})
export default TodoSetting;