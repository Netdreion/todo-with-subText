import { useState } from "react";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [subText, setSubText] = useState("");
  const [subTextlist, setsubTextList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    setTaskList([...taskList, task]);
  };
  const handleDelete = (thing) => {
    const deletedaList = taskList.filter((vez) => vez !== thing);
    setTaskList(deletedaList);
  };

  const addsubText = (event) => {
    setSubText(event.target.value);
  };

  const addsubTextList = () => {
    setsubTextList([...subTextlist, subText]);
  };

  return (
    <div>
      <Display
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        taskList={taskList}
        task={task}
        addsubText={addsubText}
        addsubTextList={addsubTextList}
        subTextlist={subTextlist}
      />
    </div>
  );
}

export default App;
