import React, { useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() !== "") {
      setTask("");
      setTaskList([...taskList, { task: task, subTextList: [] }]);
    }
  };

  const handleDelete = (todo) => {
    const updatedList = taskList.filter((item) => item.task !== todo);
    setTaskList(updatedList);
  };

  const handleSubTextChange = (index, event) => {
    const updatedList = [...taskList];
    updatedList[index].subText = event.target.value;
    setTaskList(updatedList);
  };

  const handleSubTextAdd = (index) => {
    const updatedList = [...taskList];
    const subText = updatedList[index].subText;
    if (subText && subText.trim() !== "") {
      updatedList[index].subTextList.push(subText);
      updatedList[index].subText = "";
      setTaskList(updatedList);
    }
  };

  return (
    <div>
      <Display
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleSubTextChange={handleSubTextChange}
        handleSubTextAdd={handleSubTextAdd}
        taskList={taskList}
        task={task}
      />
    </div>
  );
};

export default App;
