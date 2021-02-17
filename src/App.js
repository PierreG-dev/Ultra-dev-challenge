import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import List from "./pages/List";
import Films from "./pages/Films";
import New from "./pages/New";
import Series from "./pages/Series";

function App() {
  const [connected, setConnected] = useState(false);

  return (
    <Router>
      <div className="App">
        {connected ? (
          <Switch>
            <Route path={"/"}>
              <Home />
            </Route>

            <Route path={"/Films"}>
              <Films />
            </Route>

            <Route path={"/List"}>
              <List />
            </Route>

            <Route path={"/New"}>
              <New />
            </Route>

            <Route path={"/Series"}>
              <Series />
            </Route>

            <Route>
              <p>Error 404</p>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path={"/"}>
              <Login />
            </Route>

            <Route>
              <p>Error 404</p>
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
