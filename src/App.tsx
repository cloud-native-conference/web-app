import * as React from "react";
import { Home } from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { UserContext } from "./UserContext";

export const App: React.FunctionComponent = () => (
  <UserContext.Provider value={undefined}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/new-conference">
          <h1>new conf</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </UserContext.Provider>
);
