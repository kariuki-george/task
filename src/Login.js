import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user } from "./state/reducers/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(user(email));

    history.push("/");
  };
  return (
    <div className="login">
      <h1>Hey you...</h1>
      <h2>
        While you're worrying about becoming famous, there is someone out there
        putting in work and not wasting a second of their time. Which person
        will you be?
        <h6>
          <i>Torron-Lee Dewar</i>
        </h6>
      </h2>

      <h5>fill in your email and lets get started</h5>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={handleLogin}>submit</button>
      </form>
    </div>
  );
}

export default Login;
