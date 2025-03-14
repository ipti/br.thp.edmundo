import { Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import DropdownComponent from "../../../Components/Dropdown";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import CreateGroupProvider, { CreateGroupContext } from "./context/context";



const GroupCreate = () => {
  return (
    <CreateGroupProvider>
      <GroupCreatePage />
    </CreateGroupProvider>
  )
}

const GroupCreatePage = () => {

  const props = useContext(CreateGroupContext)


  const schema = Yup.object().shape({
    name: Yup.string().required("Campo é obrigatório"),
    idTypeGroup: Yup.object().required("Campo é obrigatório")
  });

  const initialValue: { name: string, idTypeGroup: any } = {
    name: "", idTypeGroup: "",
  }


  return (
    <ContentPage
      title="Criar Grupo"
      description="Crie um grupo para avaliar as atividades com IA"
    >
      <Formik initialValues={initialValue} validationSchema={schema} onSubmit={(values) => { props?.CreateGroup({ ...values, idTypeGroup: values.idTypeGroup.id }) }}>
        {({ errors, values, touched, handleChange, setFieldValue }) => {
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
                <div className="col-12 md:col-6">
                  <label>Tipo de grupo</label>
                  <Padding />
                  <DropdownComponent
                    value={values.idTypeGroup}
                    options={props?.typeGroupList}
                    optionsLabel="name"
                    placerholder="Escolha o tipo de grupo"
                    onChange={handleChange}
                    name="idTypeGroup"
                  />
                  {errors.idTypeGroup && touched.idTypeGroup ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.idTypeGroup.toString()}
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
