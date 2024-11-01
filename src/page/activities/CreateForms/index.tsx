import { Button } from "primereact/button";
import { useContext, useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import { Padding, Row } from "../../../Styles/styles";
import { CreateOrEditFormTypes } from "../../../Types/types";
import { CreateOrEditFormContext } from "./context/context";
import Form from "./Form";

const CreateOrEditForm = () => {
  return (
    
      <CreateOrEditForms />
  );
};

const CreateOrEditForms = () => {
  const [tabMenu, setTabMenu] = useState(0);
  // const activitiesEdit = useContext(EditActivitiesContext) as EditActivitiesType

  const { form, CreateForm } = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes;

  const items = [
    {
      label: "Perguntas",
      icon: "pi pi-question-circle",
      command: () => {
        setTabMenu(0);
      },
    }
  ];

  return (
    <>
      {form ? (
        <Row id="end" style={{ gap: "4px" }}>
          {/* <Button
            label="Preview"
            icon="pi pi-eye"
            // onClick={() => history(`/view/${form.id}`)}
          />{" "} */}
         { <Button
            label={"Criar"}
            icon="pi pi-plus"
            onClick={() => CreateForm()}
          />}
        </Row>
      ) : null}
      <Padding padding="16px" />
      <div className="card">
        <TabMenu model={items} />
      </div>
      {tabMenu === 0 ? (
        <Form />
      ) :  null}
    </>
  );
};

export default CreateOrEditForm;
