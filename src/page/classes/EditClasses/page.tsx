import { Form, Formik } from "formik";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import Loading from "../../../Components/Loading";
import color from "../../../Styles/colors";
import { Column, Padding, Row } from "../../../Styles/styles";
import Inputs from "../components/inputs";
import { EditClasses, EditClassesContextType } from "../type";
import EditClassesProvider, { EditClassesContext } from "./context/context";

const ClassesEdit = () => {

  return <EditClassesProvider><ClassesEditPage /></EditClassesProvider>;
};

const ClassesEditPage = () => {

  const {idClasses} = useParams()

  const props = useContext(EditClassesContext) as EditClassesContextType

  const validateForm = (values: EditClasses) => {
    const errors: Partial<Record<keyof EditClasses, string>> = {}

    if (!values.name?.trim()) {
      errors.name = "Informe o nome da aula."
    }

    if (!values.duration || values.duration <= 0) {
      errors.duration = "Informe uma duração maior que 0."
    }

    return errors
  }

  return (
    <ContentPage title="Editar Aula" description="Atualize os dados da aula e mantenha o conteúdo organizado.">
      <Padding />
     {props.classesOne ? <Formik
        initialValues={props.initialValue}
        validate={validateForm}
        onSubmit={(values) => { props.EditClasses(values, parseInt(idClasses!)) }}
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
                    Revise primeiro os campos de informação e depois ajuste o conteúdo da aula para manter o padrão.
                  </p>
                </div>
                <Padding padding="12px" />
                <Row id="end">
                  <ButtonComponent label="Salvar alterações" icon="pi pi-save" type="submit" />
                </Row>
              </Column>
              <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} setFieldValue={setFieldValue} />
            </Form>
          );
        }}
      </Formik> : <Loading />}
    </ContentPage>
  );
};

export default ClassesEdit;
