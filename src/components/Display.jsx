import { useState } from "react";

const Display = ({
  handleChange,
  handleClick,
  handleDelete,
  handleSubTextChange,
  handleSubTextAdd,
  taskList,
  task,
}) => {
  return (
    <div>
      <input value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {taskList.map((todo, index) => {
            return (
              <li key={index}>
                {todo.task}
                <button onClick={() => handleDelete(todo.task)}>Delete</button>
                <input
                  value={todo.subText || ""}
                  onChange={(event) => handleSubTextChange(index, event)}
                  placeholder="subtext"
                />
                <button onClick={() => handleSubTextAdd(index)}>add</button>
                <div>
                  <ul>
                    {todo.subTextList.map((subTask, subIndex) => {
                      return <li key={subIndex}>{subTask}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Display;
