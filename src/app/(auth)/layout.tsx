"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navLinks: { name: string; href: string }[] = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <header>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {navLinks.map((navItem, index) => {
          const isActive = navItem.href === pathName;
          return (
            <Link
              key={index}
              href={navItem.href}
              className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"}
            >
              {navItem.name}
            </Link>
          );
        })}
      </header>
      <section>{children}</section>
      <footer>Auth Layout Footer</footer>
    </>
  );
};

export default Layout;
