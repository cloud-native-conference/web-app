import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Conferences } from "./Pages/Conferences/Conferences";
import { CreateConference } from "./Pages/Conferences/CreateConference";
import { Conference } from "./Pages/Conference/Conference";

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/new-conference">
        <CreateConference />
      </Route>
      <Route path="/conferences/:id">
        <Conference />
      </Route>
      <Route path="/">
        <Conferences />
      </Route>
    </Switch>
  </BrowserRouter>
);
