import { useNavigate } from "react-router-dom";
import { GetIdReapplication, idReapplication, menuItem } from "../../../service/localstorage";
import { Column, Padding, Row } from "../../../Styles/styles";
import DropdownComponent from "../../Dropdown";
import LogoutTopBar from "./Logout";
import { Back, Container } from "./style";
import { useFetchRequestReapplicationList } from "../../../page/reapplication/listReapplication/service/query";

const TopBar = ({
  setViewdMenu,
  viewdMenu,
}: {
  viewdMenu: boolean;
  setViewdMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const props = useContext(AplicationContext) as PropsAplicationContext;

  const { data: reapplicationRequest} = useFetchRequestReapplicationList();

  const verifyValueProject = (id: number | null) => {
    return reapplicationRequest?.find(
      (props: any) => props.id === id
    );
  };

  const history = useNavigate();

  return (
    <Container>
      <Column style={{ width: "auto" }} id="center">
        <Row>
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
          <Column className="w-12rem md:w-16rem">
            {reapplicationRequest ? (
              <DropdownComponent
                placerholder="Projetos"
                optionsLabel="name"
                optionsValue="id"
                value={verifyValueProject(parseInt(GetIdReapplication()!))}
                options={reapplicationRequest}
                onChange={(e) => {
                  idReapplication(e.target.value.id);
                  history("/");
                  menuItem("6");
                  window.location.reload();
                }}
              />
            ) : null}{" "}
          </Column>
          <Padding />
          <Column id="center">
            <LogoutTopBar />
          </Column>
        </Row>
      </Column>
    </Container>
  );
};

export default TopBar;
