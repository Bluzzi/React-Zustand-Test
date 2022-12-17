import Link from "next/link";
import { ReactElement } from "react";

export function Navbar(): ReactElement {
  const style = "text-white hover:underline";

  return (
    <div className="flex gap-3">
      <Link href="/" className={style}>Home</Link>
      <Link href="/about" className={style}>About</Link>
    </div>
  );
}