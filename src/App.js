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
            <Route exact path={"/"}>
              <Home />
            </Route>

            <Route exact path={"/Films"}>
              <Films />
            </Route>

            <Route exact path={"/List"}>
              <List />
            </Route>

            <Route exact path={"/New"}>
              <New />
            </Route>

            <Route exact path={"/Series"}>
              <Series />
            </Route>

            <Route>
              <p>Error 404</p>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path={"/"}>
              <Login setConnected={setConnected} />
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
