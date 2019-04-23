export const useCountCode = `export function useCount() {
  const { state, dispatch } = useContext(State);
  return [state, dispatch];
}
`;

export const useDoubleCountCode = `export function useDoubleCount() {
  const { state, dispatch } = useContext(State);
  return [state * 2, dispatch];
}
`;

export const useSquaredCountCode = `export function useSquaredCount() {
  const { state, dispatch } = useContext(State);
  return [state * state, dispatch];
}
`;

export const ProviderCode = `import React, { useEffect, useState, createContext } from "react";

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

export default Provider;
`;

export const ProviderUsage = `import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'redux-context-provider';
// import reducer and other components

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Main />
      <Demo />
    </Provider>
  );
}
`;
