import { Form, Formik } from "formik"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import Inputs from "../components/inputs"
import EditModuleProvider, { EditModuleContext } from "./context/context"
import { Column, Row } from "../../../Styles/styles"
import { Button } from "primereact/button"
import { useParams } from "react-router-dom"


const ModulesEdit = () => {
    return (
        <EditModuleProvider>
            <ModulesEditPage />
        </EditModuleProvider>
    )
}

const ModulesEditPage = () => {

    const {id} = useParams()

    const modulesContext = useContext(EditModuleContext)
    return (
        <ContentPage title="Editar Módulo" description="Edite o módulo de aula">
            {modulesContext?.moduleOne ? <Formik initialValues={modulesContext?.initialValue!} onSubmit={(values) => { modulesContext?.EditModule(values, +id!) }}>
                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Form>
                            <Column>
                                <Row id="end">
                                    <Button label="Salvar" icon="pi pi-save" type="submit" />
                                </Row>
                            </Column>
                            <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
                        </Form>
                    )
                }}
            </Formik> : <ProgressSpinner />}
        </ContentPage>
    )
}

export default ModulesEdit