import { Form, Formik } from "formik"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext } from "react"
import ButtonComponent from "../../../Components/Button"
import ContentPage from "../../../Components/ContentPage"
import { type_stamp } from "../../../Controller/controllerGlobal"
import { Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import StampsProvider, { StampsContext } from "./context/context"

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
            {propsStamps?.StampsOne && <Formik initialValues={{ name: propsStamps?.StampsOne?.name ??  "", description: propsStamps?.StampsOne?.description ?? "", type: type_stamp.find(item => item.id === propsStamps?.StampsOne?.type) ?? "", }} onSubmit={(values) => {
                propsStamps?.UpdateStamps(values)
            }}>
                {({ values, errors, handleChange, touched }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <ButtonComponent label="Salvar" type="submit" icon={"pi pi-save"} />
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