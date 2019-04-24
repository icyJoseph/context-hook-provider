export const useCountCode = `function useCount() {
  const { state, dispatch } = useContext(State);
  return [state, dispatch];
}

function Count() {
  const [count, dispatch] = useCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
}
`;

export const useDoubleCountCode = `function useDoubleCount() {
  const { state, dispatch } = useContext(State);
  return [state * 2, dispatch];
}

function DoubledCount() {
  const [count, dispatch] = useDoubleCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
}
`;

export const useSquaredCountCode = `function useSquaredCount() {
  const { state, dispatch } = useContext(State);
  return [state * state, dispatch];
}

function SquaredCount() {
  const [count, dispatch] = useSquaredCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
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
import { Provider } from 'context-hook-provider';
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
