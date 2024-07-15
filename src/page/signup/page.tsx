import { Form, Formik } from "formik";
import { Column, Padding, Row } from "../../Styles/styles";
import { ContainerOut } from "../login/styles";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/TextPassword";
import { Button } from "primereact/button";
import logo from "../../assets/image/logo-edmundo.svg";
import { FormaSignUp } from "./styles";
import forma from "../../assets/image/forma-signup.svg";
import person from "../../assets/image/person-signup.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
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
                  initialValues={{ name: "", email: "", password: "" }}
                  onSubmit={(values) => {
                    //   props.Login(values);
                  }}
                  // validationSchema={LoginSchema}
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
                              name="email"
                              type="email"
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
                              name="password"
                              placeholder="Confirmar senha *"
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
