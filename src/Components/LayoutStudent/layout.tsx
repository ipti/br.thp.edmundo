import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../Button";
import { Column, Row } from "../../Styles/styles";
import TopBar from "./TopBar";

const LayoutStudent = ({ children }: { children: React.ReactNode }) => {
  const [viewdMenu, setViewdMenu] = useState(true);
  const history = useNavigate();
  const location = useLocation();
  const canGoBack = location.pathname !== "/";

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setViewdMenu(false);
    }
  }, []);

  return (
    <Column style={{ height: "100%" }}>
      <Row style={{ height: "100%" }}>
        <Column style={{ width: "100%" }}>
          <TopBar setViewdMenu={setViewdMenu} viewdMenu={viewdMenu} />
          {canGoBack && (
            <div style={{ padding: "12px 16px 0 16px" }}>
              <ButtonComponent
                label="Voltar"
                icon="pi pi-angle-left"
                className="p-button-text"
                loading={false}
                onClick={() => history(-1)}
              />
            </div>
          )}
          <div style={{ overflowY: "auto", height: "100%" }}>
            {children}
          </div>
        </Column>
      </Row>
    </Column>
  );
};

export default LayoutStudent;
