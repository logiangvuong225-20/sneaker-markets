import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import NavigationNavBar from "./partials/NavigationNavBar";
import ShoesList from "./pages/ShoesList";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={ShoesList}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
