import React from "react";
import { Route, IndexRoute } from "react-router";

// Layout
import { MainLayout } from "./layouts/";

// Custom Pages
import NotFound from "./components/not_found";
import InternalServerError from "./components/internalServerError";

// Components
import { GlobalHeader } from "./components/Header/";
import { GlobalFooter } from "./components/Footer/";

// Pages
import { HomePage } from "./pages/Home/";
import { AboutPage } from "./pages/About/";
import { PortfolioPage, PortfolioItemPage } from "./pages/Portfolio/";
import { PricingPage } from "./pages/Pricing/";
import { HelpPage, HelpTopicPage } from "./pages/Help/";
import { ContactPage } from "./pages/Contact/";
import { UserPasswordResetPage, UserLoginPage, UserRegisterPage } from "./pages/User/";

// Default Layout
const layout = {
  header: GlobalHeader,
  footer: GlobalFooter,
};

/**
 * All Template Routes
 * @type {Object} All Template routes
 */
const routes = (
  <Route path="/" component={ MainLayout } >
    <IndexRoute components={ { ...layout, main: HomePage } } />
    <Route path="/" components={ { ...layout, main: HomePage } } />
    <Route path="/home" components={ { ...layout, main: HomePage } } />
    <Route path="/about" components={ { ...layout, main: AboutPage } } />
    <Route path="/portfolio" components={ { ...layout, main: PortfolioPage } } />
    <Route path="/portfolio/item" components={ { ...layout, main: PortfolioItemPage } } />
    <Route path="/pricing" components={ { ...layout, main: PricingPage } } />

    <Route path="/help" components={ { ...layout, main: HelpPage } } />
    <Route path="/help/sample-topic" components={ { ...layout, main: HelpTopicPage } } />

    <Route path="/contact" components={ { ...layout, main: ContactPage } } />

    <Route path="/register" components={ { main: UserRegisterPage } } />
    <Route path="/login" components={ { main: UserLoginPage } } />
    <Route path="/password" components={ { main: UserPasswordResetPage } } />

    <Route path="/500" components={ { main: InternalServerError } } />
    <Route path="*" components={ { main: NotFound } } />
  </Route>
);

export default routes;
