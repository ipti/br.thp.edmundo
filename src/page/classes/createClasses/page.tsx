import { Form, Formik } from "formik";
import { useContext } from "react";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import { Column, Row } from "../../../Styles/styles";
import Inputs from "../components/inputs";
import { CreateClassesContextType } from "../type";
import CreateClassesProvider, { CreateClassesContext } from "./context/context";

const ClassesCreate = () => {

  return <CreateClassesProvider><ClassesCreatePage /></CreateClassesProvider>;
};

const ClassesCreatePage = () => {


  const createClassesContext = useContext(CreateClassesContext) as CreateClassesContextType
  return (
    <ContentPage title="Criar Aulas" description="Crie as aulas do seu módulo">
      <Formik
        initialValues={createClassesContext.initialValue}
        onSubmit={(values) => { createClassesContext.CreateClasses(values) }}
      >
        {({ errors, values, touched, handleChange, setFieldValue }) => {
          return (
            <Form>
              <Column>
                <Row id="end">
                  <ButtonComponent label="Criar" icon="pi pi-plus" type="submit" />
                </Row>
              </Column>
              {<Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} setFieldValue={setFieldValue} />}
            </Form>
          );
        }}
      </Formik>
    </ContentPage>
  );
};

export default ClassesCreate;
