import React, { useEffect, useState } from "react";
import State from "./State";

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
