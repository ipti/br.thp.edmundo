import { Form, Formik } from "formik";
import { useContext } from "react";
import Swal from "sweetalert2";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import TextInput from "../../../Components/TextInput";
import { GetIdReapplication } from "../../../service/localstorage";
import { Column, Padding, Row } from "../../../Styles/styles";
import CreateClassroomProvider, {
  CreateClassroomContext,
} from "./context/context";
import { CreateClassroomContextType } from "./context/types";

const ClassroomCreate = () => {
  return (
    <CreateClassroomProvider>
      <ClassroomCreatePage />
    </CreateClassroomProvider>
  );
};

const ClassroomCreatePage = () => {
  const props = useContext(
    CreateClassroomContext
  ) as CreateClassroomContextType;
  return (
    <ContentPage title="Criar Turma" description="Crie a sua turmas">
      <Formik
        initialValues={props.initialValue}
        onSubmit={(values) => {
            if (parseInt(GetIdReapplication()!)){

                props.CreateClassroom({
                    ...values,
                    reapplication: parseInt(GetIdReapplication()!),
                });
            } else {
                Swal.fire("Selecione uma reaplicação!!")
            }
        
        }}
      >
        {({ errors, values, touched, handleChange }) => {
          return (
            <Form>
              <Column>
                <Row id="end">
                  <ButtonComponent label="Criar" type="submit" icon="pi pi-plus" />
                </Row>
              </Column>

              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Nome</label>
                  <Padding />
                  <TextInput
                    value={values.name}
                    placeholder="Nome"
                    onChange={handleChange}
                    name="name"
                  />
                  {errors.name && touched.name ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.name}
                    </div>
                  ) : null}
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ContentPage>
  );
};

export default ClassroomCreate;
