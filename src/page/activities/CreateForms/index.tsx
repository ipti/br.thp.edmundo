import { Button } from "primereact/button";
import { useContext, useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import { useNavigate } from "react-router-dom";
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

  const { form, CreateForm } = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes;
  const history = useNavigate();

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
          <Button
            label="Preview"
            icon="pi pi-eye"
            // onClick={() => history(`/view/${form.id}`)}
          />{" "}
          <Button
            label="Salvar"
            icon="pi pi-save"
            onClick={() => CreateForm()}
          />{" "}
        </Row>
      ) : null}
      <Padding />
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