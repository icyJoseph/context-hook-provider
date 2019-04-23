import React from "react";
import Counter from "../components/Counter";
import { useCount } from "../hooks";
import { INC, DEC } from "../ducks/counter";

export function Count() {
  const [count, dispatch] = useCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
}

export default Count;
