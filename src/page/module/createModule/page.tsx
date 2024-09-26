import { Form, Formik } from "formik"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import Inputs from "../components/inputs"
import { CreateModuleContextType } from "../type"
import CreateModuleProvider, { CreateModuleContext } from "./context/context"
import { Column, Row } from "../../../Styles/styles"
import { Button } from "primereact/button"


const ModulesCreate = () => {
    return (
        <CreateModuleProvider>
            <ModulesCreatePage />
        </CreateModuleProvider>
    )
}

const ModulesCreatePage = () => {

    const modulesContext = useContext(CreateModuleContext) as CreateModuleContextType
    return (
        <ContentPage title="Criar Módulos" description="Crie os módulos de aula">
            <Formik initialValues={{ name: "", description: "", }} onSubmit={(values) => { modulesContext.CreateModule(values) }}>
                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Form>

                            <Column>
                                <Row id="end">
                                    <Button label="Criar" icon="pi pi-plus" type="submit" />
                                </Row>
                            </Column>
                            <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default ModulesCreate