import { useState } from "react";
const Display = ({
  handleChange,
  handleClick,
  handleDelete,
  taskList,
  task,
}) => {
  const [subText, setSubText] = useState("");
  const [subTextList, setSubTextList] = useState([]);

  const addsubText = (event) => {
    setSubText(event.target.value);
  };

  const addsubTextList = () => {
    setSubTextList([...subTextList, subText]);
  };

  return (
    <div>
      <input value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {taskList.map((todo) => {
            return (
              <li key={task}>
                {todo}
                <button onClick={() => handleDelete(todo)}>Delete</button>
                <input
                  onChange={() => addsubText(event)}
                  placeholder="subtext"
                />
                <button onClick={() => addsubTextList()}>add</button>
                <div>
                  <ul>
                    {subTextList.map((task) => {
                      return <li key={task}>{subText}</li>;
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
