import { useState } from "react";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    setTaskList([...taskList, task]);
  };
  const handleDelete = (todo) => {
    const deletedaList = taskList.filter((item) => item !== todo);
    setTaskList(deletedaList);
  };

  return (
    <div>
      <Display
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        taskList={taskList}
        task={task}
      />
    </div>
  );
}

export default App;
