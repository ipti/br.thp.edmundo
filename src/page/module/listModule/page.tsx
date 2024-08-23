import { Button } from "primereact/button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardModule from "../../../Components/Card/CardModule";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import { Row } from "../../../Styles/styles";
import { ListModulesContextType } from "../type";
import ListModulesProvider, { ListModulesContext } from "./context/context";

const ModuleList = () => {
  return (
    <ListModulesProvider>
      <ModuleListPage />
    </ListModulesProvider>
  );
};

const ModuleListPage = () => {
  const history = useNavigate();

  const modulesListContext = useContext(
    ListModulesContext
  ) as ListModulesContextType;
  return (
    <ContentPage title="Modulos adicionados" description="Listar modules ">
      <Row id="end">
        <Button
          label="Criar module"
          onClick={() => {
            history("/modulos/criar");
          }}
        />
      </Row>
      <div className="grid">
        {modulesListContext.modulesList?.map((item) => {
          return (
            <div className="col-12 md:col-6 lg:col-4" key={item.id}>
              <CardModule id={item.id} title={item.name} />
            </div>
          );
        })}
      </div>
      {modulesListContext.modulesList?.length === 0 && (
        <Empty title="Módulos" />
      )}
    </ContentPage>
  );
};

export default ModuleList;
