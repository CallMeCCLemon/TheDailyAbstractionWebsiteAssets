import LandingPageSplash from "./LandingPageSplash";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Blog from "./blog/Blog";
import Contact from "./Contact";
import React from "react";
import App from "./App";

enum AppRoute {
  HOME = "/",
  BLOG = "/blog",
  CONTACT = "/contact"
}

const AppRouter: React.FC = () => {
  return <Router>
    <App>
      <Routes>
        <Route path={AppRoute.BLOG}>
          <Blog/>
        </Route>
        <Route path={AppRoute.CONTACT}>
          <Contact/>
        </Route>
        <Route path={AppRoute.HOME}>
          <LandingPageSplash/>
        </Route>
      </Routes>
    </App>
  </Router>
}

export {
  AppRouter,
  AppRoute
}