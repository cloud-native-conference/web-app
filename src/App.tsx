import * as React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { Provider, themes } from "@fluentui/react-northstar";
import { Home } from "./Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppHeader } from "./AppHeader/AppHeader";
import { NewConference } from "./Conference/NewConference";

const serverUri = "http://localhost:4000/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: serverUri,
  }),
});

export const App: React.FunctionComponent = () => (
  <Provider theme={themes.teams}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route path="/new-conference">
            <NewConference />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
