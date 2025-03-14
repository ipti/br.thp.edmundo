import { Form, Formik } from "formik";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import { Padding, Row } from "../../../Styles/styles";
import InputsUser from "../inputs";
import EditUserProvider, { EditUserContext } from "./context/context";
import { useContext, useState } from "react";
import * as Yup from "yup";
import {
  color_race,
  formatarData,
  RoleList,
  VerifySex,
} from "../../../Controller/controllerGlobal";
import Register from "../createUser/register/registerInput";
import { validaCPF } from "../../../Controller/controllerValidCPF";

const UserEdit = () => {
  return (
    <EditUserProvider>
      <UserEditPage />
    </EditUserProvider>
  );
};

const UserEditPage = () => {
  const editUserContext = useContext(EditUserContext);
  const [isMaior, setIsMaior] = useState(true);
  var registration = editUserContext?.users?.registration[0] ?? undefined;
  const date = new Date(registration?.birthday ?? "");

    const schema = Yup.object().shape({
      name: Yup.string()
        .required("Campo Obrigatório")
        .min(8, "Nome deve ter pelo menos 8 caracteres"),
      role: Yup.object().required("Campo Obrigatório"),
      email: Yup.string().required("Campo Obrigatório"),
      color_race: Yup.object().required("Raça/cor é obrigatório"),
      deficiency: Yup.object().required("Deficiência é obrigatória"),
      cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
        if (value && value.trim() !== "") {
          return validaCPF(value);
        }
        return true;
      }),
      responsable_cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
        if (value && value.trim() !== "") {
          return validaCPF(value);
        }
        return true;
      }),
      responsable_telephone: Yup.string().required("Telefone é obrigatório"),
      birthday: Yup.string()
        .nullable()
        .required("Data de nascimento é obrigatória"),
      zone: Yup.string().nullable().required("Zona é obrigatório"),
      sex: Yup.object().nullable().required("Sexo é obrigatória"),
    });
  
    const schemaResponsable = Yup.object().shape({
      name: Yup.string()
        .required("Campo Obrigatório")
        .min(8, "Nome deve ter pelo menos 8 caracteres"),
      role: Yup.object().required("Campo Obrigatório"),
      email: Yup.string().required("Campo Obrigatório"),
      color_race: Yup.object().required("Raça/cor é obrigatório"),
      deficiency: Yup.object().required("Deficiência é obrigatória"),
      cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
        if (value && value.trim() !== "") {
          return validaCPF(value);
        }
        return true;
      }),
      responsable_cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
        if (value && value.trim() !== "") {
          return validaCPF(value);
        }
        return true;
      }),
      responsable_telephone: Yup.string().required("Telefone é obrigatório"),
      birthday: Yup.string()
        .nullable()
        .required("Data de nascimento é obrigatória"),
      zone: Yup.string().nullable().required("Zona é obrigatório"),
      sex: Yup.object().nullable().required("Sexo é obrigatória"),
      responsable_name: Yup.string().required(
        "Nome do responsável é obrigatório"
      ),
      kinship: Yup.object().required("Parentesco é obrigatório"),
    });

  return (
    <ContentPage title="Editar usuário" description="">
      {editUserContext?.users && (
        <Formik
          initialValues={{
            name: editUserContext?.users?.name ?? "",
            email: editUserContext.users.email ?? "",
            role: RoleList(true).find(
              (props) => props.id === editUserContext.users?.role
            ),
            birthday: !isNaN(date.getTime())
              ? formatarData(registration?.birthday!)
              : "",
            color_race: color_race.find(
              (props) => props.id === registration?.color_race
            ),
            cpf: registration?.cpf ?? "",
            deficiency: registration?.deficiency
              ? { id: true, name: "Sim" }
              : { id: false, name: "Não" },
            kinship: registration?.kinship ?? "",
            responsable_cpf: registration?.responsable_cpf ?? "",
            responsable_name: registration?.responsable_name ?? "",
            responsable_telephone: registration?.responsable_telephone,
            sex: VerifySex(registration?.sex ?? 1) ?? undefined,
            zone: registration?.zone ?? undefined,
          }}
          validationSchema={isMaior ? schema : schemaResponsable}

          onSubmit={(values) => {
            const [dia, mes, ano] = values.birthday.split("/");
            const data = new Date(`${mes}/${dia}/${ano}`);
            editUserContext.UpdateUser({
              data: {
                ...values,
                birthday: data,
                color_race: values.color_race?.id,
                sex: values.sex?.id,
                deficiency: values.deficiency.id,
                cpf: values.cpf?.replace(/[^a-zA-Z0-9]/g, ''),
                responsable_cpf: values.responsable_cpf?.replace(/[^a-zA-Z0-9]/g, ''),
                responsable_telephone: values.responsable_telephone?.replace(/[^a-zA-Z0-9]/g, '')
              },
              id: editUserContext.users?.id?.toString() ?? "",
            });
          }}
        >
          {({ values, touched, handleChange, errors, setFieldValue }) => {

            return (
              <Form>
                <Row id="end">
                  <ButtonComponent
                    label="Salvar"
                    type="submit"
                    icon={"pi pi-save"}
                  />
                </Row>
                <Padding padding="16px" />
                <InputsUser
                  errors={errors}
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                />
                <Register
                  errors={errors}
                  handleChange={handleChange}
                  isMaior={isMaior}
                  setIsMaior={setIsMaior}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  values={values}
                />
              </Form>
            );
          }}
        </Formik>
      )}
    </ContentPage>
  );
};

export default UserEdit;
