import React from "react";
import { Footer, Navbar } from "./components";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen`}>{children}</div>
      <Footer />
    </>
  );
};
