import { useContext, useState } from "react";
import ContentPage from "../../../Components/ContentPage";
import GroupOneProvider, { GroupOneContext } from "./context/context";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Padding, Row } from "../../../Styles/styles";
import { useNavigate } from "react-router-dom";
import ModalInputs from "./modalCreateMetrics";

const GroupOne = () => {
  return (
    <GroupOneProvider>
      <GroupOnePage />
    </GroupOneProvider>
  );
};

const GroupOnePage = () => {
  const [visible, setVisible] = useState<any>();

  const props = useContext(GroupOneContext);

  const history = useNavigate();

  const ActionsUserBody = (rowData: any) => {
    return (
      <Row id="center">
        <Button
          icon="pi pi-pencil"
          rounded
          className="mr-2"
          onClick={() => {
            history("/selos/" + rowData.id);
          }}
        />
        {/* <Button
                        severity="danger"
                        rounded
                        icon={"pi pi-trash"}
                        onClick={() => {
    
                        }}
                    /> */}
      </Row>
    );
  };

  const renderHeader = () => {
    return (
      <div
        className="flex justify-content-between"
        // style={{ background: color.colorCard }}
      >
        <Button
          label="Criar métricas"
          icon="pi pi-plus"
          onClick={() => {
            setVisible(props?.GroupOne);
          }}
        />
      </div>
    );
  };

  return (
    <ContentPage title={props?.GroupOne?.name!} description="">
      <h3>Métricas</h3>
      <Padding padding="8px" />
      <div>
        <DataTable
          value={props?.GroupOne?.metric_group}
          header={renderHeader}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="description" header="Descrição"></Column>
          <Column field="metric_percentange" header="Porcetagem"></Column>
          <Column
            field="actions"
            align={"center"}
            body={ActionsUserBody}
            header="Ações"
          ></Column>
        </DataTable>
      </div>
      <ModalInputs visible={visible} setOpen={() => setVisible(false)} />
    </ContentPage>
  );
};

export default GroupOne;
