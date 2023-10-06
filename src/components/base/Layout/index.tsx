import React, { ComponentPropsWithoutRef } from "react";

import PageWrapper from "./PageWrapper";

type Props = ComponentPropsWithoutRef<"div">;

const containerStyles: React.CSSProperties = {
  overflowX: "hidden",
  overflowY: "scroll",
  height: "100vh",
};

const Layout: React.FC<Props> = ({ children }) => (
  <div id="container" style={containerStyles}>
    <PageWrapper>{children}</PageWrapper>
  </div>
);

export default Layout;
