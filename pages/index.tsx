import { ReactElement } from "react";
import { Button } from "$libraries/components/button";
import { useCountStore } from "$libraries/stores/count";

export default function Home(): ReactElement {
  const count = useCountStore();

  return (
    <div className="space-y-3">
      <div className="space-x-3">
        <Button onClick={() => count.decrement(5)}>-5</Button>
        <Button onClick={() => count.decrement()}>-1</Button>
        <Button onClick={count.reset}>set 0</Button>
        <Button onClick={() => count.decrement()}>+1</Button>
        <Button onClick={() => count.increment(5)}>+5</Button>
      </div>

      <p className="text-white">Count value: {count.value}</p>
    </div>
  );
}