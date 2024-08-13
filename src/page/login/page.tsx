import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/TextPassword";
import { Column, Padding, Row } from "../../Styles/styles";
import backgroundBottomRight from "../../assets/image/backgroundbottomright.png";
import backgroundTopLeft from "../../assets/image/backgroundtopleft.png";
import formaLeft from "../../assets/image/formaLeft.svg";
import formaRight from "../../assets/image/formaRight.svg";
import personLeft from "../../assets/image/personLeft.png";
import personRight from "../../assets/image/personRight.png";

import logo from "../../assets/image/logo-edmundo.svg";
import LoginProvider, { LoginContext } from "./context/context";
import { LoginContextText } from "./context/types";
import {
  BackgroundBottomRight,
  BackgroundTopLeft,
  ContainerOut,
  FormaLeft,
  FormaRight,
  PersonLeft,
  PersonRight,
} from "./styles";

const Login = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  )
}

const LoginPage = () => {
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Campo Obrigatório"),
    email: Yup.string().required("Campo Obrigatório"),
  });


  const props = useContext(LoginContext) as LoginContextText;
  return (
    <div>
      <BackgroundTopLeft>
        <img src={backgroundTopLeft} alt="" />
      </BackgroundTopLeft>
      <BackgroundBottomRight>
        <img src={backgroundBottomRight} alt="" />
      </BackgroundBottomRight>
      <FormaLeft>
        <img src={formaLeft} alt="" />
      </FormaLeft>
      <FormaRight>
        <img src={formaRight} alt="" />
      </FormaRight>
      <PersonLeft>
        <img src={personLeft} alt="" />
      </PersonLeft>
      <PersonRight>
        <img src={personRight} alt="" />
      </PersonRight>
      <ContainerOut>
        <h1 className="titleLogin">Login</h1>
        {/* <Row style={{ justifyContent: "center" }}>
          <div className="noAcesso textCenter">
            <Row id="center" className="buttonNoAcesso">
              Não tem acesso?
              <Link className="link" to="/cadastro">
                Clique aqui
              </Link>
            </Row>
          </div>
        </Row> */}
        <div className="p-6" />
        <div style={{ zIndex: "500" }}>

          <Column >
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

        </div>
        <Padding />
        <Column>
          <Row id="center">
            <Link className="resetPassword" to={"/recuperar"}>
              <p >Recuperar senha</p>
            </Link>
          </Row>
        </Column>
        <Padding padding="16px" />
        <Column style={{ marginTop: "auto", marginBottom: "64px" }}>
          <Row id="center">
            <img src={logo} alt="" />
          </Row>
        </Column>
      </ContainerOut>
    </div>
  );
};

export default Login;
