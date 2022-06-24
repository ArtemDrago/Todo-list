import { makeAutoObservable , runInAction} from "mobx"

interface newTodo {
   id: Number 
   title: String
   completed: Boolean
}

class Todo {
   arrey = [
      {id:1 , title: "по завтракать" , completed: false},
      {id:2 , title: "помыть машину" , completed: false},
      {id:3 , title: "по обедать" ,  completed: false},
   ]
   current: String = 'all'
   
   todos = this.arrey
   
   constructor() {
      makeAutoObservable(this)
   }
   
   sortetTodo = (select: String) => {
      if (select === 'all') {
         runInAction( () => {
            return this.todos = this.arrey
         })
        
      }
      if (select === 'process') {
         runInAction( () => {
            this.todos = this.arrey
            return this.todos = this.todos.filter(todo => todo.completed === false)
         })
        
      }
      if (select === 'end') {
         runInAction( () => {
            this.todos = this.arrey
     return this.todos = this.todos.filter(todo => todo.completed === true)
         })
      }
   }
   
   addTodo(todo: newTodo | any  ) {
      runInAction( () => {
         this.arrey.push(todo)
         this.sortetTodo(this.current)
      })
   }
   
   removeTodo(id: Number) {
      runInAction( () => {
         this.arrey =  this.arrey.filter(todo => todo.id !== id)
         this.sortetTodo(this.current)
      })
   }
   
   completedTodo(id: Number) {
      runInAction( () => {
         this.arrey =  this.arrey.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
         this.sortetTodo(this.current)
      })
     
   }

}
export default new Todo()