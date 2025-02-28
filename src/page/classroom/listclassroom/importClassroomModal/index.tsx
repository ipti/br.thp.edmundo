import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { ImportClassroomState } from "./context/state";
import DropdownComponent from "../../../../Components/Dropdown";
import { Padding } from "../../../../Styles/styles";

const ImportClassroomModal = ({
  onHide,
  visible,
}: {
  visible: boolean;
  onHide: any;
}) => {
  const props = ImportClassroomState();
  return (
    <Dialog visible={visible} onHide={onHide} style={{ width: "60%" }}>
      <Padding />
      <Formik initialValues={props.initialState} onSubmit={() => {}}>
        {({ values, handleChange }) => {
          console.log(values);
          return (
            <Form>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Tecnologia social</label>
                  <Padding />
                  <DropdownComponent
                    options={props.migrationTs}
                    value={values.ts}
                    name="ts"
                    optionsLabel="name"
                    onChange={handleChange}
                  />
                </div>
                {values.ts?.project && (
                  <div className="col-12 md:col-6">
                    <label>Projetos</label>
                    <Padding />
                    <DropdownComponent
                      options={values.ts?.project}
                      value={values.project}
                      name="project"
                      optionsLabel="name"
                      onChange={handleChange}
                    />
                  </div>
                )}
                
              </div>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ImportClassroomModal;
