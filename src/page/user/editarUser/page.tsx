import { Form, Formik } from "formik";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import { Padding, Row } from "../../../Styles/styles";
import InputsUser from "../inputs";
import EditUserProvider, { EditUserContext } from "./context/context";
import { useContext, useState } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Dropdown } from "primereact/dropdown";
import { Chip } from "primereact/chip";
import {
  color_race,
  formatarData,
  ROLE,
  RoleList,
  VerifySex,
} from "../../../Controller/controllerGlobal";
import Register from "../createUser/register/registerInput";
import { validaCPF } from "../../../Controller/controllerValidCPF";
import PasswordInput from "../../../Components/TextPassword";
import styles from "../../../Styles";
import color from "../../../Styles/colors";
import { AplicationContext } from "../../../context/context";
import { PropsAplicationContext } from "../../../context/type";

const UserEdit = () => {
  return (
    <EditUserProvider>
      <UserEditPage />
    </EditUserProvider>
  );
};

const UserEditPage = () => {
  const editUserContext = useContext(EditUserContext);
  const appContext = useContext(AplicationContext) as PropsAplicationContext;
  const [isMaior, setIsMaior] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedReapplication, setSelectedReapplication] = useState<any | null>(null);
  var registration = editUserContext?.users?.registration[0] ?? undefined;
  const date = new Date(registration?.birthday ?? "");
  const userReapplications = editUserContext?.users?.user_reapplication ?? [];
  const linkedReapplicationIds = new Set(
    userReapplications.map((item) => item.reapplication_fk)
  );
  const availableReapplications =
    editUserContext?.reapplications?.filter(
      (item: any) => !linkedReapplicationIds.has(item.id)
    ) ?? [];

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
      {appContext.user?.role === ROLE.ADMIN && editUserContext?.users && (
        <>
          <Padding padding="24px" />
          <h3 style={{ color: color.colorPrimary }}>Resetar Senha do Usuário</h3>
          <Padding padding="8px" />
          <div className="grid">
            <div className="col-12 md:col-4">
              <label>Nova Senha *</label>
              <Padding />
              <PasswordInput
                value={newPassword}
                onChange={(e: any) => setNewPassword(e.target.value)}
                placeholder="Nova senha"
                name="newPassword"
              />
            </div>
            <div className="col-12 md:col-4">
              <label>Confirmar Senha *</label>
              <Padding />
              <PasswordInput
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar senha"
                name="confirmPassword"
              />
            </div>
            <div className="col-12 md:col-4" style={{ display: "flex", alignItems: "flex-end" }}>
              <ButtonComponent
                label="Resetar Senha"
                icon="pi pi-lock"
                className="t-button-primary"
                onClick={() => {
                  if (!newPassword || newPassword.length < 6) {
                    Swal.fire({
                      icon: "warning",
                      title: "A senha deve ter no mínimo 6 caracteres",
                      confirmButtonColor: styles.colors.colorPrimary,
                    });
                    return;
                  }
                  if (newPassword !== confirmPassword) {
                    Swal.fire({
                      icon: "warning",
                      title: "As senhas não coincidem",
                      confirmButtonColor: styles.colors.colorPrimary,
                    });
                    return;
                  }
                  Swal.fire({
                    title: "Tem certeza?",
                    text: "A senha do usuário será alterada",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: styles.colors.colorPrimary,
                    cancelButtonText: "Cancelar",
                    confirmButtonText: "Confirmar",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      editUserContext.ResetPassword(editUserContext.users!.id, newPassword);
                      setNewPassword("");
                      setConfirmPassword("");
                    }
                  });
                }}
              />
            </div>
          </div>
        </>
      )}
      {appContext.user?.role === ROLE.ADMIN &&
        editUserContext?.users &&
        editUserContext.users.role !== ROLE.STUDENT && (
          <>
            <Padding padding="24px" />
            <h3 style={{ color: color.colorPrimary }}>Vincular Reaplicação</h3>
            <Padding padding="8px" />
            {userReapplications.length > 0 && (
              <>
                <label>Reaplicações já vinculadas</label>
                <Padding padding="8px" />
                <Row className="grid" style={{ gap: "8px" }}>
                  {userReapplications.map((item) => (
                    <Chip
                      key={item.id}
                      removable
                      onRemove={() => {
                        Swal.fire({
                          title: "Tem certeza?",
                          text: "A reaplicação será removida deste usuário",
                          icon: "question",
                          showCancelButton: true,
                          confirmButtonColor: styles.colors.colorPrimary,
                          cancelButtonText: "Cancelar",
                          confirmButtonText: "Confirmar",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            editUserContext.RemoveUserReapplication(
                              editUserContext.users!.id,
                              item.reapplication_fk
                            );
                          }
                        });
                      }}
                      style={{ background: color.colorBlueClean, color: "black" }}
                      label={item.reapplication?.name}
                    />
                  ))}
                </Row>
                <Padding padding="16px" />
              </>
            )}
            <div className="grid">
              <div className="col-12 md:col-6">
                <label>Reaplicação *</label>
                <Padding />
                <Dropdown
                  value={selectedReapplication}
                  onChange={(e) => setSelectedReapplication(e.value)}
                  options={availableReapplications}
                  optionLabel="name"
                  placeholder="Selecione uma reaplicação"
                  className="w-full"
                />
              </div>
              <div
                className="col-12 md:col-6"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <ButtonComponent
                  label="Vincular"
                  icon="pi pi-link"
                  className="t-button-primary"
                  onClick={() => {
                    const reapplicationId = Number(selectedReapplication?.id);
                    if (!Number.isFinite(reapplicationId) || reapplicationId <= 0) {
                      Swal.fire({
                        icon: "warning",
                        title: "Selecione uma reaplicação",
                        confirmButtonColor: styles.colors.colorPrimary,
                      });
                      return;
                    }
                    if (linkedReapplicationIds.has(reapplicationId)) {
                      Swal.fire({
                        icon: "warning",
                        title: "Esta reaplicação já está vinculada ao usuário",
                        confirmButtonColor: styles.colors.colorPrimary,
                      });
                      return;
                    }
                    editUserContext.AddUserReapplication(
                      editUserContext.users!.id,
                      reapplicationId
                    );
                    setSelectedReapplication(null);
                  }}
                />
              </div>
            </div>
          </>
        )}
    </ContentPage>
  );
};

export default UserEdit;
