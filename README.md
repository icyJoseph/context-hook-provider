# redux-context-provider

A pattern proposal.

The aim is to stop using connect. Instead, we should `useContext` and create hooks to the redux store.

## Usage

As usual, we create a redux store and pass it to the Provider.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "redux-context-provider";

// using createStore from directly from redux
const store = createStore(reducer); // the regular redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Where Provider is:

```jsx
import React, { createContext, useState, useEffect } from "react";

// create a Context
export const State = createContext();

export function Provider({ store, children }) {
  const [state, updateState] = useState(store.getState());

  const listener = () => updateState(store.getState());

  useEffect(() => {
    const unsub = store.subscribe(listener);
    return () => unsub();
  }, []);

  return (
    <State.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </State.Provider>
  );
}
```

Then we can easily consume this down the tree. Say for example that `<App>`, has a child called `<Counter>`.

```jsx
import React, { useContext } from "react";
import { State } from "redux-context-provider";

export function Counter() {
  const {
    state: { count }
  } = useContext(State);
  return <div>{count}</div>;
}
```

Furthermore, you can make a hook on the `count`.

```jsx
import { useContext } from "react";

export function useCount() {
  const { state } = useContext(State);
  return state.count;
}
```

And re-do the Counter.

```jsx
import React from "react";
import useCount from "./";

export function Counter() {
  const count = useCount();
  return <div>{count}</div>;
}
```
