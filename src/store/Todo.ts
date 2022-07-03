import axios from "axios"
import { makeAutoObservable , runInAction} from "mobx"

interface newTodo {
   id: Number 
   title: String
   completed: Boolean
}

class Todo {
   arrey: any[]  = []
   constructor() {
      makeAutoObservable(this)
   }

   getArrey = async () => {
         try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/todos' , {
            params: {_limit: 10}}
            )
               runInAction( () => {
                  this.arrey = [...responce.data]
                  this.todos = this.arrey
               })
         } catch (e) {
            console.log(e)
         } 
   }

   current: String = 'all'
   todos = this.arrey
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