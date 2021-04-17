import * as React from "react";
import { Home } from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Conferences } from "./Pages/Conferences/Conferences";
import { CreateConference } from "./Pages/Conferences/CreateConference";

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/new-conference">
        <CreateConference />
      </Route>
      <Route path="/conferences">
        <Conferences />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);
