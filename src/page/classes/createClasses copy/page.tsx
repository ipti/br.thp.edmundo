import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ContentPage from "../../../Components/ContentPage";
import { Column, Padding, Row } from "../../../Styles/styles";
import Inputs from "../components/inputs";
import { EditClassesContextType } from "../type";
import EditClassesProvider, { EditClassesContext } from "./context/context";

const ClassesEdit = () => {

  return <EditClassesProvider><ClassesEditPage /></EditClassesProvider>;
};

const ClassesEditPage = () => {

  const {idClasses} = useParams()

  const props = useContext(EditClassesContext) as EditClassesContextType
  return (
    <ContentPage title="Editar Aulas" description="Editar as aulas do seu módulo">
      <Padding />
     {props.classesOne ? <Formik
        initialValues={props.initialValue}
        onSubmit={(values) => { props.EditClasses(values, parseInt(idClasses!)) }}
      >
        {({ errors, values, touched, handleChange }) => {
          return (
            <Form>
              <Column>
                <Row id="end">
                  <Button label="Salvar" icon="pi pi-save" type="submit" />
                </Row>
              </Column>
              <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
            </Form>
          );
        }}
      </Formik> : <ProgressSpinner />}
    </ContentPage>
  );
};

export default ClassesEdit;
