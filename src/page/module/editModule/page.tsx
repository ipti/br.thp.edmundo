import { Form, Formik } from "formik"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import ButtonComponent from "../../../Components/Button"
import ContentPage from "../../../Components/ContentPage"
import Loading from "../../../Components/Loading"
import { Column, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import EditModuleProvider, { EditModuleContext } from "./context/context"


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
                                    <ButtonComponent label="Salvar" icon="pi pi-save" type="submit" />
                                </Row>
                            </Column>
                            <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
                        </Form>
                    )
                }}
            </Formik> : <Loading />}
        </ContentPage>
    )
}

export default ModulesEdit