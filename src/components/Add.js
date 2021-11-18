import React, { useState } from "react";
import "./Add.scss";
import { clearState, isEditing } from "../state/reducers/task";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../services/task";
import toast from "react-hot-toast";

function Add() {
  const [taskName, setTaskName] = useState("");
  const [due_date, setDueDate] = useState("");
  const { email } = useSelector((state) => state.auth);
  const { isEditing } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handleNewTask = (e) => {
    e.preventDefault();
    if (taskName === "" || due_date === "") {
      return toast.error("fill both fields");
    }
    const data = { email, task: taskName, due_date };

    dispatch(clearState());
    dispatch(createTask(data));
    setTaskName("");
    setDueDate("");
  };

  return (
    isEditing && (
      <div className="add">
        <h1>New Task huh.. :-0</h1>
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="task name"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <h4>Due date</h4>
          <input
            type="date"
            value={due_date}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleNewTask}>submit</button>
        </form>
      </div>
    )
  );
}

export default Add;
