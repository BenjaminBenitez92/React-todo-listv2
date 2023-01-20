import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  const [ToDos, setToDos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const handleShowTask = () => {
    setShowAddTask(!showAddTask);
  };
  const handleAdd = (title) => {
    const newToDos = {
      title,
      completed: false,
      id: crypto.randomUUID(),
    };
    setToDos([...ToDos, newToDos]);
    setShowAddTask(false);
  };
  const handleEdit = (id) => {
    const editToDo = ToDos.map((toDo) => {
      if (id === toDo.id) {
        return {
          ...toDo,
          completed: !toDo.completed,
        };
      }
      return toDo;
    });
    setToDos(editToDo);
  };
  const handleShowDone = () => {
    setFilteredList(ToDos.filter((toDo) => toDo.completed === true));
  };
  const showFilteredList = filteredList.length >= 1 ? true : false;
  const handleShowAll = () =>{
    setFilteredList([])
  }
  const handleShowNotDone = () =>{
    setFilteredList(ToDos.filter((toDo) => toDo.completed === false))
  }
  return (
    <div className="container">
      <Header onClick={handleShowTask} showAddTask={showAddTask} />
      <div>{showAddTask && <Form onChange={handleAdd} />}</div>
      <div>
        {showFilteredList ? (
          <List list={filteredList} Edit={handleEdit} />
        ) : (
          <List list={ToDos} Edit={handleEdit} />
        )}
      </div>
      <div>
        <Button onClick={handleShowAll}>All</Button>
      </div>
      <div>
        <div>
          <Button onClick={handleShowDone}>Done</Button>
        </div>
        <div className="othbtn">
          <Button onClick={handleShowNotDone}>NOT DONE</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
