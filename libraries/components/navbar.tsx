import Link from "next/link";
import { clsx } from "clsx";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export function Navbar(): ReactElement {
  const router = useRouter();

  const pages = [
    { title: "Home", link: "/" },
    { title: "Count", link: "/count" }
  ];

  return (
    <div className="flex gap-5">
      {pages.map(page => (
        <Link
          key={page.title}
          href={page.link}
          className={clsx("text-white hover:underline", { "underline": router.pathname === page.link })}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}