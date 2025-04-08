import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import * as Yup from "yup";
import ButtonComponent from "../../../../Components/Button";
import DropdownComponent from "../../../../Components/Dropdown";
import Loading from "../../../../Components/Loading";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { ImportClassroomState } from "./context/state";

const ImportClassroomModal = ({
  onHide,
  visible,
}: {
  visible: boolean;
  onHide: any;
}) => {
  const props = ImportClassroomState();

  const schema = Yup.object().shape({
    ts: Yup.object().required("Campo é obrigatório"),
    project: Yup.object().required("Campo é obrigatório"),
    classroom: Yup.object().required("Campo é obrigatório"),
  });

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
        validationSchema={schema}
        onSubmit={(values) => {
          props.handleMigrateClassroom(values.classroom.id);
          onHide();
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => {
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
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue('project', undefined);
                      setFieldValue('classroom', undefined)
                    }}
                  />
                  {errors.ts && touched.ts ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.ts.toString()}
                    </div>
                  ) : null}
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
                    {errors.project && touched.project ? (
                      <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.project.toString()}
                      </div>
                    ) : null}
                  </div>
                )}
                {props.projectId &&
                  props.classroomList &&
                  !props.isLoadingClassroom && (
                    <div className="col-12 md:col-6">
                      <label>Turmas</label>
                      <Padding />
                      <DropdownComponent
                        options={props.classroomList.filter(
                          (item) => item.name !== ""
                        )}
                        placerholder="Escolha uma turma"
                        value={values.classroom}
                        name="classroom"
                        onChange={handleChange}
                      />
                      {errors.classroom && touched.classroom ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                          {errors.classroom.toString()}
                        </div>
                      ) : null}
                    </div>
                  )}
                {props.isLoadingClassroom && (
                  <Row id="start">
                    <Loading />
                  </Row>
                )}
              </div>
              <Padding padding="8px" />
              <Column>
                <Row id="end">
                  <ButtonComponent label="Importar" icon={"pi pi-download"} type="submit" />
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
