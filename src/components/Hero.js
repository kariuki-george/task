import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { useDispatch } from "react-redux";
import { isEditing } from "../state/reducers/task";

function Hero({ taskList }) {
  const [list, setList] = useState([]);
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setList(taskList);
  }, [taskList]);

  const handleAdd = () => {
    dispatch(isEditing());
  };

  useEffect(() => {
    if (list.length === 0) {
      setWord("what are you waiting for...?");
    } else if (list.length <= 5) {
      setWord("that's it...continue ");
    } else if (list.length > 5) {
      setWord("you are becoming a tasks guru");
    }
  }, [list]);
  return (
    <div className="hero">
      <h2>Oh dear, {word} </h2>
      <div className="hero_task">
        <h3>You have {list.length} tasks ahead</h3>
        <div className="add-task">
          <h4>wanna add more tasks? Hit the button below</h4>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
