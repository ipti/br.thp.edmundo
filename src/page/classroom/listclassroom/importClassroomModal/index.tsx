import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { ImportClassroomState } from "./context/state";
import DropdownComponent from "../../../../Components/Dropdown";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

const ImportClassroomModal = ({
  onHide,
  visible,
}: {
  visible: boolean;
  onHide: any;
}) => {
  const props = ImportClassroomState();
  return (
    <Dialog
      header={"Importar turma"}
      visible={visible}
      onHide={onHide}
      style={{ width: "60%" }}
    >
      <Padding />
      <Formik
        initialValues={props.initialState}
        onSubmit={(values) => {
          props.handleMigrateClassroom(values.classroom.id);
          onHide();
        }}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Tecnologia Social</label>
                  <Padding />
                  <DropdownComponent
                    options={props.migrationTs}
                    placerholder="Escolha uma Tecnologia Social"
                    value={values.ts}
                    name="ts"
                    optionsLabel="name"
                    onChange={handleChange}
                  />
                </div>

                {values.ts?.project && (
                  <div className="col-12 md:col-6">
                    <label>Plano de Trabalho</label>
                    <Padding />
                    <DropdownComponent
                      options={values.ts?.project}
                      placerholder="Escolha um Plano de Trabalho"
                      value={values.project}
                      name="project"
                      optionsLabel="name"
                      onChange={(e) => {
                        handleChange(e);
                        props.setProjectId(e.target.value.id);
                      }}
                    />
                  </div>
                )}
                {props.projectId &&
                  props.classroomList &&
                  !props.isLoadingClassroom && (
                    <div className="col-12 md:col-6">
                      <label>Turmas</label>
                      <Padding />
                      <DropdownComponent
                        options={props.classroomList.filter((item) => item.name !== "")}
                        placerholder="Escolha uma turma"
                        value={values.classroom}
                        name="classroom"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                {props.isLoadingClassroom && (
                  <Row id="start">
                    <ProgressSpinner />
                  </Row>
                )}
              </div>
              <Padding padding="8px" />
              <Column>
                <Row id="end">
                  <Button label="Importar" icon={"pi pi-download"} />
                </Row>
              </Column>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ImportClassroomModal;
