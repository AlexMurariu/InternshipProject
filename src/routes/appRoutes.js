import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../pages/home/home";
import React from "react";
import FeedPage from "../pages/home/feedPage";
import ProfileIndex from "../pages/home/profilePage.js";
import RegisterPage from "../pages/home/registerPage";

export const routing = (
  <Router>
    <Route path="/login" component={App} />
    <Route exact path="/" component={FeedPage} />
    <Route exact path="/profilePage" component={ProfileIndex} />
    <Route path='/register' component={RegisterPage}/>
  </Router>
);
