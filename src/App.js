import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"


const App = () => {
  const [ToDos, setToDos] = useState([])
  const handleAdd = (title) =>{
    const newToDos = {
      title,
      conpleted: false,
      id: crypto.randomUUID()
    }
    setToDos([...ToDos,newToDos])
  }
  console.log(ToDos)
  return (
    <div className="header">
      <h1> TO-DO LIST </h1>
      <div>
      <Form onChange={handleAdd}/>
      </div>
      <div>
      <List list={ToDos} />
      </div>
    </div>
  )
}

export default App

