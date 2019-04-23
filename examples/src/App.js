import React from "react";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider } from "../../src/";

import Main from "./sections/Main";
import Demo from "./sections/Demo";

import reducer from "../src/ducks/counter";

const logger = createLogger();

// configure store
const store = createStore(reducer, undefined, applyMiddleware(logger));

// Compose Demo and Main wrapped by our Provider
function App() {
  return (
    <Provider store={store}>
      <Main />
      <Demo />
    </Provider>
  );
}

export default App;
