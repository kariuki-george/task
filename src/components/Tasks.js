import React, { useEffect, useState } from "react";
import "./Task.scss";

function Tasks({ taskList, handleDelete }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(taskList);
  }, [taskList]);
  return (
    <div className="tasks">
      <h1>Your upcoming tasks</h1>

      {list === [] && (
        <div className="none">
          <h2>You have no tasks</h2>
        </div>
      )}
      {list.length !== 0 && (
        <ul>
          {list.map((task) => {
            return (
              <li key={task.id}>
                <h2>{task.task}</h2>
                <h4>{task.due_date}</h4>
                <button onClick={() => handleDelete(task.id)}>-</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
