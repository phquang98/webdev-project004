import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export { Layout };
