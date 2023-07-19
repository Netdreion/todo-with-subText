import React, { useState } from "react";
import Display from "./components/Display";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    setTaskList([...taskList, { task: task, subTextList: [] }]);
    setTask("");
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
    updatedList[index].subTextList.push(subText);
    updatedList[index].subText = "";
    setTaskList(updatedList);
  };

  const handleSubDelete = (subTask, index) => {
    const updatedList = [...taskList];
    updatedList[subTask].subTextList = updatedList[subTask].subTextList.filter(
      (_, item) => item.subTask !== index
    );
    setTaskList(updatedList);
  };

  return (
    <div>
      <Display
        handleChange={handleChange}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleSubTextChange={handleSubTextChange}
        handleSubTextAdd={handleSubTextAdd}
        handleSubDelete={handleSubDelete}
        taskList={taskList}
        task={task}
      />
    </div>
  );
};

export default App;
