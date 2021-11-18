import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Task from "./components/Tasks";
import { clearState } from "./state/reducers/task";
import Add from "./components/Add";
import { getTasks, deleteTask } from "./services/task";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Backdrop from "./components/Backdrop";

function Home() {
  const [taskList, setTaskList] = useState([]);
  const { email } = useSelector((state) => state.auth);
  const { isEditing, errorMessage, isError, isSuccess, tasks } = useSelector(
    (state) => state.task
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearState());
    dispatch(getTasks(email));
  }, []);

  useEffect(() => {
    setTaskList(tasks);
    dispatch(clearState());
  }, [tasks]);

  const handleDelete = (id) => {
    dispatch(clearState());
    dispatch(deleteTask({ email, id }));
  };
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
    if (isSuccess) {
      toast.success("Deleted successfully");
    }
    dispatch(clearState());
  }, [isError, isSuccess]);

  return (
    <div>
      {isEditing && <Backdrop />}
      <Add />
      <Nav />
      <Hero taskList={taskList} />
      <Task taskList={taskList} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
