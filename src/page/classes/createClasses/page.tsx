import { Form, Formik } from "formik";
import ContentPage from "../../../Components/ContentPage";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";
import TextInput from "../../../Components/TextInput";
import TextAreaComponent from "../../../Components/TextArea";
import InputNumberComponent from "../../../Components/InputNumber";

const ClassesCreate = () => {
  return <ClassesCreatePage />;
};

const ClassesCreatePage = () => {
  return (
    <ContentPage title="Criar Aulas" description="Crie as aulas do seu módulo">
      <Padding />
      <Formik
        initialValues={{
          name: "",
          objective: "",
          necessary_material: "",
          duration: 0,
        }}
        onSubmit={(values) => {}}
      >
        {({ errors, values, touched, handleChange }) => {
          return (
            <Form>
              <Column>
                <Row id="end">
                  <Button label="Criar" type="submit" />
                </Row>
              </Column>
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

              <div className="col-12 md:col-6">
                <label>Objetivo</label>
                <Padding />
                <TextAreaComponent
                  value={values.objective}
                  placeholder="Escreva o objetivo da aula"
                  onChange={handleChange}
                  name="objective"
                />
                {errors.objective && touched.objective ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.objective}
                  </div>
                ) : null}
              </div>

              <div className="col-12 md:col-6">
                <label>Materias necessários </label>
                <Padding />
                <TextAreaComponent
                  value={values.necessary_material}
                  placeholder="Escreva os materiais necessários para a aula"
                  onChange={handleChange}
                  name=".necessary_material"
                />
                {errors.necessary_material && touched.necessary_material ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.necessary_material}
                  </div>
                ) : null}
              </div>
              <div className="col-12 md:col-6">
                <label>Duração da aula (horas) </label>
                <Padding />
                <InputNumberComponent
                  value={values.duration}
                  placeholder="Escreva os materiais necessários para a aula"
                  onChange={handleChange}
                  name="duration"
                />
                {errors.duration && touched.duration ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.duration}
                  </div>
                ) : null}
              </div>
            </Form>
          );
        }}
      </Formik>
    </ContentPage>
  );
};

export default ClassesCreate;