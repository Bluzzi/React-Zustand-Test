export type CountStore = {
  value: number;

  increment: (count?: number) => void;
  decrement: (count?: number) => void;
  reset: () => void;
}