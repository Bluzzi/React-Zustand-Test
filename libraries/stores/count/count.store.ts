import create from "zustand";
import { CountStore } from "./count.type";

export const useCountStore = create<CountStore>(set => ({
  value: 0,

  increment: (count = 1) => set(state => ({ value: state.value + count })),
  decrement: (count = 1) => set(state => ({ value: state.value - count })),
  reset: () => set({ value: 0 })
}));