import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import ContentPage from "../../../Components/ContentPage";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import CreateGroupProvider, { CreateGroupContext } from "./context/context";
import { useContext } from "react";
import * as Yup from "yup"



const GroupCreate = () => {
    return(
        <CreateGroupProvider>
            <GroupCreatePage />
        </CreateGroupProvider>
    )
}

const GroupCreatePage = () => {

    const props = useContext(CreateGroupContext)

    
        const schema = Yup.object().shape({
            name: Yup.string().required("Nome é obrigatório")
        });
    
  return (
    <ContentPage
      title="Criar Grupo"
      description="Crie um grupo para avaliar as atividades com IA"
    >
      <Formik initialValues={{ name: "" }} validationSchema={schema} onSubmit={(values) => {props?.CreateGroup(values)}}>
        {({ errors, values, touched, handleChange }) => {
          return (
            <Form>
              <Column>
                <Row id="end">
                  <Button label="Criar" type="submit" icon="pi pi-plus" />
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

export default GroupCreate;
