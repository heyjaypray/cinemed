// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React from "react";

// Modules
import { Router, browserHistory, applyRouterMiddleware } from "react-router";
import { useScroll } from "react-router-scroll";

// Routers
import routes from "../routes";

const Root = () => (
  <Router
    routes={ routes }
    history={ browserHistory }
    render={ applyRouterMiddleware(useScroll()) }
  />
);

export default Root;
