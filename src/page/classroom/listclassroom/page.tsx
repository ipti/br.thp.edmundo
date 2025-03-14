import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../Components/Button";
import CardClassroom from "../../../Components/Card/CardClassroom";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import { AplicationContext } from "../../../context/context";
import { PropsAplicationContext } from "../../../context/type";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import ListClassroomProvider, { ListClassroomContext } from "./context/context";
import { ListClassroomContextType } from "./context/types";
import ImportClassroomModal from "./importClassroomModal";
import SearchModal from "./searchmodal";

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
  const [visible, setVisible] = useState(false);

  const history = useNavigate();
  return (
    <ContentPage title="Turmas" description="Visualize as suas turmas">
      <Column>
        <Row id="end" style={{gap: '8px'}}>
          <ButtonComponent
            label={"Importar turma"}
            icon="pi pi-download"
            onClick={() => {
              propsAplication.user?.role === ROLE.STUDENT
                ? setSearch(true)
                : setVisible(!visible);
            }}
          />

          <ButtonComponent
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
      <ImportClassroomModal
        visible={visible}
        onHide={() => {
          setVisible(!visible);
        }}
      />
      <SearchModal visible={search} onHide={() => setSearch(!search)} />
    </ContentPage>
  );
};

export default ClassroomList;
