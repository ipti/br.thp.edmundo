import { useNavigate } from "react-router-dom";
import TagLogin from "../../../assets/image/logo-edmundo.svg";
import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Container, TextHeader } from "./style";
import { useState } from "react";
import { getMenuItem, menuItem } from "../../../service/localstorage";


const TopBar = ({
  setViewdMenu,
  viewdMenu,
}: {
  viewdMenu: boolean;
  setViewdMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const history = useNavigate()

  const [active, setActive] = useState(parseInt(getMenuItem()!));



  return (
    <Container>
      <Column style={{ width: "auto" }} id="center">
        <Row>
          <Padding padding="16px">
            <Row id="center">
              <Column id="center">
                <img src={TagLogin} style={{ width: "128px" }} alt=""></img>
              </Column>
            </Row>
          </Padding>
          {/* <Column id="center" className="iconResponsive">
            <i
              className="pi pi-bars cursor-pointer"
              style={{ fontSize: "1.5rem" }}
              onClick={() => setViewdMenu(!viewdMenu)}
            />
          </Column>
          <Back
            onClick={() => {
              history(-1);
            }}
          >
            <i className="pi pi-angle-left" style={{ fontSize: "1.2rem" }}></i>
            <Padding padding="2px" />
            Voltar
          </Back> */}
          <Padding padding="2px" />
        </Row>
      </Column>
      <Column id="center">
        <Row style={{ gap: "32px" }}>
          <TextHeader isActive={active === 1 ? true : false} onClick={() => {
            history("/");
            setActive(1);
            menuItem("1");
          }}>Home</TextHeader>
          <TextHeader isActive={false}>Acessar turma</TextHeader>
          <TextHeader isActive={false}>Historico</TextHeader>
          <TextHeader isActive={active === 6 ? true : false} onClick={() => {
            history("/perfil"); setActive(6);
            menuItem("6");
          }}>Perfil</TextHeader>
        </Row>
      </Column>
      <Column style={{ width: "auto" }} id="center">
        <Row>
          <Column id="center">
            <LogoutTopBar />
          </Column>
        </Row>
      </Column>
    </Container >
  );
};

export default TopBar;
