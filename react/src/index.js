import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { ParallaxProvider } from 'react-scroll-parallax';


import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-pro-react.css?v=1.2.0";

var hist = createBrowserHistory();

ReactDOM.render(
  <ParallaxProvider>
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>
  </ParallaxProvider>,
  document.getElementById("root")
);
