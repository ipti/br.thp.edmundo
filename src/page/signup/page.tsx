import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import forma from "../../assets/image/forma-signup.svg";
import logo from "../../assets/image/logo-edmundo.svg";
import person from "../../assets/image/person-sign.png";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/TextPassword";
import { Column, Padding, Row } from "../../Styles/styles";
import { ContainerOut } from "../login/styles";
import SignUpProvider, { SignUpContext } from "./context/context";
import { FormaSignUp } from "./styles";
import { SignUpContextTypes } from "./context/types";
import DropdownComponent from "../../Components/Dropdown";


const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpPage />
    </SignUpProvider>
  )
}

const SignUpPage = () => {

  const props = useContext(SignUpContext) as SignUpContextTypes

  const CreateUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Nome deve ter pelo menos 8 caracteres"),
    email: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Nome do usuário deve ter pelo menos 8 caracteres"),
    role: Yup.object()
      .required("Campo Obrigatório"),
    password: Yup.string()
      .required("Campo Obrigatório")
      .min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmpassword: Yup.string()
      .label("Confirmar senha")
      .required("Campo Obrigatório")
      .oneOf([Yup.ref("password")], "Senhas difirentes"),
  });

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

  return (
    <div>
      <FormaSignUp>
        <img src={forma} alt="" />
      </FormaSignUp>
      <FormaSignUp>
        <img src={person} alt="" />
      </FormaSignUp>
      <ContainerOut>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            position: "relative",
          }}
        >
          <div className="col-0 lg:col-6"></div>
          <div className="col-12 lg:col-6">
            <h1 className="titleLogin">Cadastro</h1>
            <div className="p-4" />
            <Column>
              <Row id="center">
                <Formik
                  initialValues={{ name: "", email: "", password: "", confirmpassword: "", role: { name: "Estudante", id: "STUDENT" }, }}
                  onSubmit={(values: FormValues) => {
                    delete values.confirmpassword;
                    props.CreateUser({ ...values, role: values.role?.id });
                  }}
                  validationSchema={CreateUserSchema}
                  validateOnChange={false}
                >
                  {({ values, errors, handleChange, touched }) => {

                    return (
                      <Form className="col-11 md:col-7">
                        <div>
                          <div>
                            <label>Nome *</label>
                            <Padding />
                            <TextInput
                              name="name"
                              required
                              value={values.name}
                              onChange={handleChange}
                              placeholder="Nome *"
                            />
                            <Padding />
                            {errors.name && touched.name ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.name}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="p-2" />
                        <div>
                          <div>
                            <label>Email *</label>
                            <Padding />
                            <TextInput
                              name="email"
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                            />
                            <Padding />
                            {errors.email && touched.email ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="p-2" />
                        <div>
                          <label>Tipo de usuário *</label>
                          <Padding />
                          <DropdownComponent
                            optionsLabel="name"
                            options={[
                              { name: "Estudante", id: "STUDENT" },
                              { name: "Professor", id: "TEACHER" }
                            ]}
                            optionsValue="id"
                            value={values.role}
                            placerholder="Selecione seu tipo de usuário"
                            name="role"
                            onChange={handleChange}
                          />
                          {errors.role && touched.role ? (
                            <div style={{ color: "red", marginTop: "8px" }}>
                              {errors.role.toString()}
                            </div>
                          ) : null}
                        </div>
                        <div className="p-2" />
                        <div>
                          <div>
                            <label>Senha *</label>
                            <Padding />
                            <PasswordInput
                              name="password"
                              placeholder="Senha *"
                              onChange={handleChange}
                              value={values.password}
                            />
                            <Padding />
                            {errors.password && touched.password ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </div>


                        <div className="p-2" />
                        <div>
                          <div>
                            <label>Confirmar senha *</label>
                            <Padding />
                            <PasswordInput
                              name="confirmpassword"
                              placeholder="Confirmar senha *"
                              onChange={handleChange}
                              value={values.confirmpassword}
                            />
                            <Padding />
                            {errors.confirmpassword && touched.confirmpassword ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.confirmpassword}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <Padding />
                        <div className="p-2" />
                        <div>
                          <div>
                            <Button
                              className={"t-button-primary"}
                              type="submit"
                              label="Criar Usuário"
                            />
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </Row>
            </Column>
            <Padding />
            <Column>
              <Row id="center">
                <p className="resetPassword">
                  {" "}
                  <Link className="linkSignUp" to="/login">Já tem uma conta?</Link>
                </p>
              </Row>
            </Column>
            <Padding padding="16px" />
            <Column style={{ marginTop: "64px", marginBottom: "64px" }}>
              <Row id="center">
                <img src={logo} alt="" />
              </Row>
            </Column>
          </div>
        </div>
      </ContainerOut>
    </div>
  );
};

export default SignUp;
