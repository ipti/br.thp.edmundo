import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useContext, useState } from "react";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import { Padding, Row } from "../../../Styles/styles";
import GroupOneProvider, { GroupOneContext } from "./context/context";
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


  const ActionsUserBody = (rowData: any) => {
    return (
      <Row id="center">
        <ButtonComponent
          icon="pi pi-pencil"
          rounded
          className="mr-2"
          onClick={() => {
            setVisible(rowData);
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
        <ButtonComponent
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
      <h3>Métricas de avaliação</h3>
      <Padding padding="8px" />
      <div>
        <DataTable
          value={props?.GroupOne?.metric_group_avaliation}
          header={renderHeader}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="description" header="Descrição"></Column>
          <Column header="Porcetagem da nota" align={"center"} body={(row) => <>{row.metric_percentange}%</>}></Column>
          <Column
            field="actions"
            align={"center"}
            body={ActionsUserBody}
            header="Ações"
          ></Column>
        </DataTable>
      </div>
      <ModalInputs visible={visible} setOpen={() => setVisible(false)} group={props?.GroupOne} />
    </ContentPage>
  );
};

export default GroupOne;
