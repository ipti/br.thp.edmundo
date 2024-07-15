import { Link } from "react-router-dom";
import { Column, Padding, Row } from "../../Styles/styles";
import { BackgroundBottomRight, BackgroundTopLeft, ContainerLogin } from "./styles";
import { Button } from "primereact/button";
import * as Yup from "yup";
import TextInput from "../../Components/TextInput";
import { Form, Formik } from "formik";
import PasswordInput from "../../Components/TextPassword";
import logo from "../../assets/image/logo-edmundo.svg";
import LoginProvider, { LoginContext } from "./context/context";
import { useContext } from "react";
import { LoginContextText } from "./context/types";
import backgroundTopLeft from "../../assets/image/backgroundtopleft.png";
import backgroundBottomRight from "../../assets/image/backgroundbottomright.png";


const Login = () => {
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Campo Obrigatório"),
    username: Yup.string().required("Campo Obrigatório"),
  });

  const props = useContext(LoginContext) as LoginContextText;
  return (
    <LoginProvider>
      <ContainerLogin>
      <BackgroundTopLeft>
        <img src={backgroundTopLeft} alt="" />
      </BackgroundTopLeft>
      <BackgroundBottomRight>
        <img src={backgroundBottomRight} alt="" />
      </BackgroundBottomRight>
        <h1 className="titleLogin">Login</h1>
        <Row style={{ justifyContent: "center" }}>
          <div className="noAcesso textCenter">
            <Row id="center" className="buttonNoAcesso">
              Não tem acesso?
              <Link className="link" to="/register">
                Clique aqui
              </Link>
            </Row>
          </div>
        </Row>
        <div className="p-6" />
        <Column>
          <Row id="center">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                props.Login(values);
              }}
              validationSchema={LoginSchema}
              validateOnChange={false}
            >
              {({ values, errors, handleChange, touched }) => {
                return (
                  <Form className="col-11 md:col-3">
                    <div>
                      <div>
                        <label>Email</label>
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
                      <div>
                        <label>Senha</label>
                        <Padding />
                        <PasswordInput
                          name="password"
                          placeholder="Senha"
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
                    <Padding />
                    <div className="p-2" />
                    <div>
                      <div>
                        <Button
                          className={"t-button-primary"}
                          type="submit"
                          label="Entrar"
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
            <p className="resetPassword">Recuperar senha</p>
          </Row>
        </Column>
        <Padding padding="16px" />
        <Column style={{ marginTop: "auto", marginBottom: "64px" }}>
          <Row id="center">
            <img src={logo} alt="" />
          </Row>
        </Column>
      </ContainerLogin>
    </LoginProvider>
  );
};

export default Login;
