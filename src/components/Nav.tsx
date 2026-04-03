"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/links", label: "links" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-[680px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight no-underline"
          onClick={() => setOpen(false)}
        >
          sagar amruth
        </Link>

        {/* Desktop */}
        <ul className="hidden sm:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-sm no-underline transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-4 h-[1.5px] bg-primary transition-transform ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-primary transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-primary transition-transform ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <ul className="max-w-[680px] mx-auto px-6 py-3 flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-sm no-underline block py-1 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
