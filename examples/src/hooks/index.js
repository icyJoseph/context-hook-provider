import { useContext } from "react";
import { State } from "../../../src";

export function useCount() {
  const { state, dispatch } = useContext(State);
  return [state, dispatch];
}

export function useDoubleCount() {
  const { state, dispatch } = useContext(State);
  return [state * 2, dispatch];
}

export function useSquaredCount() {
  const { state, dispatch } = useContext(State);
  return [state * state, dispatch];
}
