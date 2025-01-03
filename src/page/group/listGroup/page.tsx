import { Button } from "primereact/button";
import ContentPage from "../../../Components/ContentPage";
import { Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import ListGroupProvider, { ListGroupContext } from "./context/context";
import CardModule from "../../../Components/Card/CardModule";
import { useContext } from "react";

const GroupList = () => {
  return (
    <ListGroupProvider>
      <GroupListPage />
    </ListGroupProvider>
  );
};

const GroupListPage = () => {
  const props = useContext(ListGroupContext);
  const history = useNavigate();
  return (
    <ContentPage
      title="Grupos de avaliação"
      description="Gerencie os grupos para correções de atividades com IA "
    >
      <Row id="end">
        <Button
          label="Criar grupo"
          icon="pi pi-plus"
          onClick={() => {
            history("/grupos/criar");
          }}
        />
      </Row>
      <Padding padding="8px" />
      <div className="grid">
        {props?.groupList?.map((item) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={item.id}>
              <CardModule
                id={item.id}
                title={item.name}
                handleDelete={() => {
                  props.DeleteGroup(item.id);
                }}
                redirect={`/grupos/` + item.id}
              />
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};

export default GroupList;
