import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import * as Yup from "yup";
import ContentPage from "../../../Components/ContentPage";
import PasswordInput from "../../../Components/TextPassword";
import { Padding } from "../../../Styles/styles";
import InputsUser from "../inputs";
import SignUpProvider, { SignUpContext } from "./context/context";
import { SignUpContextTypes } from "./context/types";
import Register from "./register/registerInput";
import { validaCPF } from "../../../Controller/controllerValidCPF";

const UserCreate = () => {
    return (
        <SignUpProvider>
            <UserCreatePage />
        </SignUpProvider>
    )
}

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmpassword?: string; // Torna confirmpassword opcional,
    role?: {
        id: string,
        name: string
    }
    birthday: Date | string,
    color_race: number | undefined,
    sex: number | undefined,
    zone: number | undefined,
    deficiency: boolean | undefined,
    cpf: string,
    responsable_telephone: string,
    responsable_name: string,
    responsable_cpf: string,
    kinship: string
}


const UserCreatePage = () => {

    const [isMaior, setIsMaior] = useState(true)

    const props = useContext(SignUpContext) as SignUpContextTypes



    const schema = Yup.object().shape({

        name: Yup.string().required("Campo Obrigatório").min(8, "Nome deve ter pelo menos 8 caracteres"),
        password: Yup.string().required("Campo Obrigatório").min(8, "Senha deve ter pelo menos 8 caracteres"),
        role: Yup.object().required("Campo Obrigatório"),
        email: Yup.string(),
        username: Yup.string().required("Campo Obrigatório"),
        confirmpassword: Yup.string()
            .label("Confirmar senha")
            .required("Campo Obrigatório")
            .oneOf([Yup.ref("password")], "Senhas difirentes"),
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

        name: Yup.string().required("Campo Obrigatório").min(8, "Nome deve ter pelo menos 8 caracteres"),
        password: Yup.string().required("Campo Obrigatório").min(8, "Senha deve ter pelo menos 8 caracteres"),
        role: Yup.object().required("Campo Obrigatório"),
        email: Yup.string(),
        username: Yup.string().required("Campo Obrigatório"),
        confirmpassword: Yup.string()
            .label("Confirmar senha")
            .required("Campo Obrigatório")
            .oneOf([Yup.ref("password")], "Senhas difirentes"),
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
        responsable_name: Yup.string().required("Nome do responsável é obrigatório"),
        kinship: Yup.object().required("Parentesco é obrigatório"),
    });

    return (
        <ContentPage title="Criar usuários" description="Criar usuário no Edmundo.">
            <Padding />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmpassword: "",
                    username: "",
                    birthday: "",
                    color_race: undefined,
                    cpf: "",
                    deficiency: false,
                    kinship: "",
                    responsable_cpf: "",
                    responsable_name: "",
                    responsable_telephone: "",
                    role: undefined,
                    sex: undefined,
                    zone: undefined
                }}
                onSubmit={(values: FormValues) => {
                    delete values.confirmpassword;
                    props.CreateUser({ ...values, role: values.role?.id!, });
                }}
                validationSchema={isMaior ? schema : schemaResponsable}
            >
                {({ values, handleChange, errors, touched, setFieldValue }) => {

                    return (
                        <Form>
                            <InputsUser
                                errors={errors}
                                handleChange={handleChange}
                                touched={touched}
                                values={values}
                            />
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Senha *</label>
                                    <Padding />
                                    <PasswordInput
                                        placeholder="Senha"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                    <Padding />
                                    {errors.password && touched.password ? (
                                        <div style={{ color: "red" }}>
                                            {errors.password}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Confirmar senha *</label>
                                    <Padding />
                                    <PasswordInput
                                        placeholder="Senha"
                                        name="confirmpassword"
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                    />
                                    <Padding />
                                    {errors.confirmpassword && touched.confirmpassword ? (
                                        <div style={{ color: "red" }}>
                                            {errors.confirmpassword}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                            </div>{" "}
                            <Register errors={errors} handleChange={handleChange} isMaior={isMaior} setIsMaior={setIsMaior} setFieldValue={setFieldValue} touched={touched} values={values} />
                            <Padding padding="16px" />
                            <Button label="Criar" />
                        </Form>
                    );
                }}
            </Formik>
        </ContentPage>
    );
}

export default UserCreate;