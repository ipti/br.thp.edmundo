import { Form, Formik } from "formik";
import { useContext } from "react";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import color from "../../../Styles/colors";
import { Column, Padding, Row } from "../../../Styles/styles";
import Inputs from "../components/inputs";
import { CreateClasses, CreateClassesContextType } from "../type";
import CreateClassesProvider, { CreateClassesContext } from "./context/context";

const ClassesCreate = () => {

  return <CreateClassesProvider><ClassesCreatePage /></CreateClassesProvider>;
};

const ClassesCreatePage = () => {


  const createClassesContext = useContext(CreateClassesContext) as CreateClassesContextType

  const validateForm = (values: CreateClasses) => {
    const errors: Partial<Record<keyof CreateClasses, string>> = {}

    if (!values.name?.trim()) {
      errors.name = "Informe o nome da aula."
    }

    if (!values.duration || values.duration <= 0) {
      errors.duration = "Informe uma duração maior que 0."
    }

    return errors
  }

  return (
    <ContentPage title="Criar Aula" description="Cadastre a aula com informações claras e conteúdo bem estruturado.">
      <Formik
        initialValues={createClassesContext.initialValue}
        validate={validateForm}
        onSubmit={(values) => { createClassesContext.CreateClasses(values) }}
      >
        {({ errors, values, touched, handleChange, setFieldValue }) => {
          return (
            <Form>
              <Column>
                <div
                  style={{
                    border: `1px solid ${color.colorBorderCard}`,
                    borderRadius: 12,
                    padding: 12,
                    background: "#FFFFFF",
                  }}
                >
                  <p style={{ margin: 0, color: color.colorsBaseInkLight }}>
                    Fluxo recomendado: preencha <strong>Informações</strong> primeiro e depois finalize em{" "}
                    <strong>Conteúdo</strong>.
                  </p>
                </div>
                <Padding padding="12px" />
                <Row id="end">
                  <ButtonComponent label="Salvar aula" icon="pi pi-check" type="submit" />
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
