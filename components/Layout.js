import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <header></header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
