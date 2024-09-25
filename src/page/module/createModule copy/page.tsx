import { Formik } from "formik"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import Inputs from "../components/inputs"
import CreateModuleProvider, { EditModuleContext } from "./context/context"


const ModulesEdit = () => {
    return (
        <CreateModuleProvider>
            <ModulesEDITPage />
        </CreateModuleProvider>
    )
}

const ModulesEDITPage = () => {

    const modulesContext = useContext(EditModuleContext)
    return (
        <ContentPage title="Criar Módulos" description="Crie os módulos de aula">
            <Formik initialValues={modulesContext?.initialValue!} onSubmit={(values) => { modulesContext?.EditModule(values)}}>
                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default ModulesEdit