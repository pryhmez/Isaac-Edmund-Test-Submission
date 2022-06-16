import { Component } from "react";

import Router from "./config/router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";
import Header from "./components/Header";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
  defaultDataIdFromObject
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const { store, persistor } = configureStore();

const cache = new InMemoryCache();
// const link = new HttpLink({ uri: "http://localhost:4000/qraphql" });

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  // link: link,
  uri: "http://localhost:4000",

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
    query: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
            <Header />
            <Router />
            </ApolloProvider>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
