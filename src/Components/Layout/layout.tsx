import React, { useEffect, useState } from "react";
import { Column, Row } from "../../Styles/styles";
import Menu from "../Menu";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [viewdMenu, setViewdMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setViewdMenu(false);
    }
  }, []);

  return (
    <Column style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Menu viewdMenu={viewdMenu} />
        <Column style={{ width: "100%" }}>
          <TopBar setViewdMenu={setViewdMenu} viewdMenu={viewdMenu} />
          <div style={{ overflowY: "auto", height: "100%" }}>{children}</div>
        </Column>
      </Row>
    </Column>
  );
};

export default Layout;
