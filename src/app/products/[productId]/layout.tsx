import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>Product Header</header>
      <section>{children}</section>
      <footer>Product Footer</footer>
    </>
  );
};

export default Layout;
