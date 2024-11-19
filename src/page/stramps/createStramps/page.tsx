import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import StampsProvider, { StampsContext } from "./context/context"

const StampsCreate = () => {
    return (
        <StampsProvider>
            <StampsCreatePage />
        </StampsProvider>
    )
}

const StampsCreatePage = () => {

    const propsStamps = useContext(StampsContext)

    return (
        <ContentPage title="Criar Selos" description="Crie selos para distribuir aos alunos.">
            <Formik initialValues={{ name: "", description: "",type: "",}} onSubmit={(values) => {
                console.log(values)
                propsStamps?.CreateStamps(values)
            }}>
                {({ values, errors, handleChange, touched }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <Button label="Criar" icon={"pi pi-plus"} />
                            </Row>
                            <Padding />
                            <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} isCreated />
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default StampsCreate