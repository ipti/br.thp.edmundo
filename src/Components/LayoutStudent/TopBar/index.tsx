import TagLogin from "../../../assets/image/logo-edmundo.svg";
import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Container } from "./style";


const TopBar = ({
  setViewdMenu,
  viewdMenu,
}: {
  viewdMenu: boolean;
  setViewdMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {


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
        <Row style={{gap: "16px"}}>
          <h3>Home</h3>
          <h3>Acessar turma</h3>
          <h3>Historico</h3>
          <h3>Perfil</h3>
        </Row>
      </Column>
      <Column style={{ width: "auto" }} id="center">
        <Row>
          <Column id="center">
            <LogoutTopBar />
          </Column>
        </Row>
      </Column>
    </Container>
  );
};

export default TopBar;