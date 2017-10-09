import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Art from "./pages/Art";
import Music from "./pages/Music";
import Photography from "./pages/Photography";
import Video from "./pages/Video";
import Writing from "./pages/Writing";
import Profile from "./pages/Profile";
import Post from "./pages/WritingCreate";
import NoMatch from "./pages/NoMatch";


const routesApp = () =>
  <Router>
    <div>
      <Switch>
        <Nav />
        {/* <Route exact path="/" component={Index} /> */}
        <Route exact path="/art" component={Art} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/writing" component={Writing} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default routesApp;
