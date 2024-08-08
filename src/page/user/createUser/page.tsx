import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import * as Yup from "yup";
import ContentPage from "../../../Components/ContentPage";
import PasswordInput from "../../../Components/TextPassword";
import { Padding } from "../../../Styles/styles";
import InputsUser from "../inputs";
import SignUpProvider, { SignUpContext } from "./context/context";
import { SignUpContextTypes } from "./context/types";

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
    role: {
      id: string,
      name: string
    }
  }


const UserCreatePage = () => {

    const props = useContext(SignUpContext) as SignUpContextTypes

    const CreateUserSchema = Yup.object().shape({

        name: Yup.string().required("Campo Obrigatório").min(8, "Nome deve ter pelo menos 8 caracteres"),
        password: Yup.string().required("Campo Obrigatório").min(8, "Senha deve ter pelo menos 8 caracteres"),
        role: Yup.object().required("Campo Obrigatório"),
        email: Yup.string().required("Campo Obrigatório"),
        confirmpassword: Yup.string()
            .label("Confirmar senha")
            .required("Campo Obrigatório")
            .oneOf([Yup.ref("password")], "Senhas difirentes"),
    });

    return (
        <ContentPage title="Criar usuários" description="Criar usuário no Edmundo.">
            <Padding />
            <Formik
                 initialValues={{ name: "", email: "", password: "", confirmpassword: "", role: { name: "Estudante", id: "STUDENT" }, }}
                 onSubmit={(values: FormValues) => {
                   delete values.confirmpassword;
                   props.CreateUser({ ...values, role: values.role?.id });
                 }}
                validationSchema={CreateUserSchema}
            >
                {({ values, handleChange, errors, touched }) => {
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
                                    <label>Senha</label>
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
                                    <label>Confirmar senha</label>
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