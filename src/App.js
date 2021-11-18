import "./App.scss";

import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Toaster />

      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />

          <Route exact path="/login">
            <Login />
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { email } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        email ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;
