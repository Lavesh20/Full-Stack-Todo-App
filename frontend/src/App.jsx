import { useState } from "react"
import { CreateTodo } from "./component/CreateTodo"
import { Todos } from "./component/Todos"


function App() {

const [todos,setTodos] = useState([])
  return (
    
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>

    </div>
  
)}

export default App
