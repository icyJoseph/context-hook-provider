import Count from "../containers/Count";
import Double from "../containers/Double";
import Squared from "../containers/Squared";

import { useCountCode, useDoubleCountCode, useSquaredCountCode } from "../code";

export const examples = [
  {
    id: "count",
    title: "Connected directly",
    description: "This counter is using useCount.",
    code: useCountCode,
    Component: Count
  },
  {
    id: "double",
    title: "Connected, but doubles",
    description: "This counter is using useDoubleCount",
    code: useDoubleCountCode,
    Component: Double
  },
  {
    id: "squared",
    title: "Connected, but squares",
    description: "This counter is using useSquaredCount.",
    code: useSquaredCountCode,
    Component: Squared
  }
];

export default examples;
