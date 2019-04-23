import React from "react";
import Counter from "../components/Counter";
import { useSquaredCount } from "../hooks";
import { INC, DEC } from "../ducks/counter";

export function Squared() {
  const [count, dispatch] = useSquaredCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
}

export default Squared;
