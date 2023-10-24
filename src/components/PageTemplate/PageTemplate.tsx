import React, { PropsWithChildren } from "react";
import Header from "./partials/Header.tsx/Header";
import Footer from "./partials/Footer.tsx/Footer";

const PageTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default PageTemplate;
