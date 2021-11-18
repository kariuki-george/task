import "./Backdrop.scss";
import { useDispatch } from "react-redux";
import { clearState } from "../state/reducers/task";
function Backdrop() {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(clearState());
  };
  return (
    <div className="backdrop">
      <button onClick={handleCloseModal}>x</button>
    </div>
  );
}

export default Backdrop;
