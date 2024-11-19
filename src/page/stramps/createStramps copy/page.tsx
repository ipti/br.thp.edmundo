import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import StampsProvider, { StampsContext } from "./context/context"
import { ProgressSpinner } from "primereact/progressspinner"

const StampsUpdate = () => {
    return (
        <StampsProvider>
            <StampsUpdatePage />
        </StampsProvider>
    )
}

const StampsUpdatePage = () => {

    const propsStamps = useContext(StampsContext)

    if(propsStamps?.isLoading) return <ProgressSpinner />

    return (
        <ContentPage title="Editar Selo" description="Edite selos para distribuir aos alunos.">
            {propsStamps?.StampsOne && <Formik initialValues={{ name: propsStamps?.StampsOne?.name ??  "", description: propsStamps?.StampsOne?.description ?? "",}} onSubmit={(values) => {
                propsStamps?.UpdateStamps(values)
            }}>
                {({ values, errors, handleChange, touched }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <Button label="Salvar" icon={"pi pi-save"} />
                            </Row>
                            <Padding />
                            <Inputs errors={errors} handleChange={handleChange} touched={touched} values={values} />
                     

                        </Form>
                    )
                }}
            </Formik>}
        </ContentPage>
    )
}

export default StampsUpdate