import { Button } from "primereact/button";
import ContentPage from "../../../Components/ContentPage";
import { Column, Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import ListClassroomProvider, { ListClassroomContext } from "./context/context";
import CardClassroom from "../../../Components/Card/CardClassroom";
import { useContext, useState } from "react";
import { ListClassroomContextType } from "./context/types";
import Empty from "../../../Components/Empty";
import { AplicationContext } from "../../../context/context";
import { PropsAplicationContext } from "../../../context/type";
import { ROLE } from "../../../Controller/controllerGlobal";
import SearchModal from "./searchmodal";
import ImportClassroomModal from "./importClassroomModal";

const ClassroomList = () => {
  return (
    <ListClassroomProvider>
      <ClassroomListPage />
    </ListClassroomProvider>
  );
};

const ClassroomListPage = () => {
  const propsAplication = useContext(
    AplicationContext
  ) as PropsAplicationContext;
  const props = useContext(ListClassroomContext) as ListClassroomContextType;
  const [search, setSearch] = useState(false);

  const history = useNavigate();
  return (
    <ContentPage title="Turmas" description="Visualize as suas turmas">
      <Column>
        <Row id="end">
          <Button
            label={
              propsAplication.user?.role === ROLE.STUDENT
                ? "Buscar turmas"
                : "Importar turma"
            }
            icon="pi pi-plus"
            onClick={() => {
              propsAplication.user?.role === ROLE.STUDENT
                ? setSearch(true)
                : history("/turmas/criar");
            }}
          />

          <Button
            label={
              propsAplication.user?.role === ROLE.STUDENT
                ? "Buscar turmas"
                : "Criar turma"
            }
            icon="pi pi-plus"
            onClick={() => {
              propsAplication.user?.role === ROLE.STUDENT
                ? setSearch(true)
                : history("/turmas/criar");
            }}
          />
        </Row>
      </Column>
      <Padding padding="16px" />
      <div className="grid">
        {props.classroomList?.map((item) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={item.id}>
              <CardClassroom
                id={item.id}
                title={item.name}
                registrationCount={item._count.user}
                handleDelete={() => props.DeleteClassroom(item.id)}
              />
            </div>
          );
        })}
      </div>

      {props.classroomList?.length === 0 && <Empty title="turmas" />}
      <ImportClassroomModal visible={true} onHide={() => {}} />
      <SearchModal visible={search} onHide={() => setSearch(!search)} />
    </ContentPage>
  );
};

export default ClassroomList;
