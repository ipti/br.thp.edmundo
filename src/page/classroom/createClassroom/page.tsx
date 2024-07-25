import { Form, Formik } from "formik";
import ContentPage from "../../../Components/ContentPage";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";


const ClassroomCreate = () => {
    return (
        <ContentPage title="Criar Turma" description="Crie a sua turmas">
            <Formik initialValues={{ name: "", email: "" }} onSubmit={() => { }}>

                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Form>

                            <Column>
                                <Row id="end">
                                    <Button label="Criar" type="submit" />
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
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default ClassroomCreate;