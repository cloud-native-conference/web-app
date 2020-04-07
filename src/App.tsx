import * as React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import ConferenceList from "./ConferenceList/ConferenceList";
const serverUri = "http://localhost:4000/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: serverUri,
  }),
});

export const App: React.FunctionComponent = () => (
  <ApolloProvider client={client}>
    <h1>Cloud Native Conference Web App</h1>
    <ConferenceList />
  </ApolloProvider>
);
