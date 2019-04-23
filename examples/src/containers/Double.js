import React from "react";
import Counter from "../components/Counter";
import { useDoubleCount } from "../hooks";
import { INC, DEC } from "../ducks/counter";

export function Double() {
  const [count, dispatch] = useDoubleCount();
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC });
  return <Counter count={count} inc={inc} dec={dec} />;
}

export default Double;
