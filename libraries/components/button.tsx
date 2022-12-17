import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps): ReactElement {
  return (
    <button
      className="bg-black rounded py-1 px-5 border border-separator text-white hover:shadow hover:shadow-primary"
      {...props}
    >
      {children}
    </button>
  );
}