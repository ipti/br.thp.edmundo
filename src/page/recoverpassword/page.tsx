import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import forma from "../../assets/image/forma-recover.png";
import logo from "../../assets/image/logo-edmundo.svg";
import person from "../../assets/image/person-recover.png";
import recoverreponsive from "../../assets/image/recover-reponsive.png";
import TextInput from "../../Components/TextInput";
import { Column, Padding, Row } from "../../Styles/styles";
import { ContainerOut } from "../login/styles";
import { FormaRecover } from "./styles";

const RecoverPassword = () => {
  return (
    <div>
      <FormaRecover>
        <img src={forma} alt="" />
      </FormaRecover>
      <FormaRecover>
        <img src={person} alt="" />
      </FormaRecover>
      <ContainerOut>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            position: "relative",
            alignItems: "center",
          }}
        >
          <div className="col-12 lg:col-6">
            <Column>
              <Row id="center" className="recoverResponsive">
                <img alt="" src={recoverreponsive} />
              </Row>
            </Column>
            <h1 className="titleLogin">Recuperar Senha</h1>
            <div className="p-4" />
            <Column id="center">
              <Row id="center">
                <Formik
                  initialValues={{ email: "" }}
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
                            <label>Email *</label>
                            <Padding />
                            <TextInput
                              name="email"
                              type="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Digitar E-mail Cadastrado"
                            />
                            <Padding />
                            {errors.email && touched.email ? (
                              <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.email}
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
                              label="Solicitar Nova Senha"
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

export default RecoverPassword;
