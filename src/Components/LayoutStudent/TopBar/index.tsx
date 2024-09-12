import { useNavigate } from "react-router-dom";
import TagLogin from "../../../assets/image/logo-edmundo.svg";
import { Column, Padding, Row } from "../../../Styles/styles";
import LogoutTopBar from "./Logout";
import { Back, Container } from "./style";


const TopBar = ({
  setViewdMenu,
  viewdMenu,
}: {
  viewdMenu: boolean;
  setViewdMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const history = useNavigate();

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
          <Column id="center" className="iconResponsive">
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
          </Back>
          <Padding padding="2px" />
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
