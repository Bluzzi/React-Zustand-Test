import { useCountStore } from "$libraries/stores/count";
import { ReactElement } from "react";

export default function About(): ReactElement {
  const count = useCountStore(state => state.value);

  return <p className="text-white">Count value: {count}</p>;
}