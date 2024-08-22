import { Form, Formik } from "formik"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import { Button } from "primereact/button"
import TextInput from "../../../Components/TextInput"
import TextAreaComponent from "../../../Components/TextArea"
import CreateModuleProvider from "./context/context"


const ModulesCreate = () => {
    return (
        <CreateModuleProvider>
            <ModulesCreatePage />
        </CreateModuleProvider>
    )
}

const ModulesCreatePage = () => {
    return (
        <ContentPage title="Criar Módulos" description="Crie os módulos de aula">
            <Formik initialValues={{ name: "", description: "", }} onSubmit={(values) => { }}>
                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Form>
                            <Column>
                                <Row id="end">
                                    <Button label="Criar" type="submit" />
                                </Row>
                            </Column>
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

                            <div className="col-12 md:col-6">
                                <label>Descrição</label>
                                <Padding />
                                <TextAreaComponent
                                    value={values.description}
                                    placeholder="Escreva uma descrição para módulo"
                                    onChange={handleChange}
                                    name="description"
                                />
                                {errors.description && touched.description ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.description}
                                    </div>
                                ) : null}
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default ModulesCreate