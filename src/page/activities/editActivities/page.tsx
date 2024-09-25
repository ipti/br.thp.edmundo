import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import { EditActivitiesType } from "../type"
import EditActivitiesProvider, { EditActivitiesContext } from "./context/context"
import { useParams } from "react-router-dom"
import { ProgressSpinner } from "primereact/progressspinner"

const ActivitiesEdit = () => {
    return (
        <EditActivitiesProvider>
            <ActivitiesEditPage />
        </EditActivitiesProvider>
    )
}

const ActivitiesEditPage = () => {
    const activitiesEdit = useContext(EditActivitiesContext) as EditActivitiesType

    const { id } = useParams()

    if (!activitiesEdit.activitiesOne) return <ProgressSpinner />


    return (
        <ContentPage title="Criar atividades" description="">
            <Padding />
            <Formik
                initialValues={activitiesEdit.initialValue}
                onSubmit={(values) => { activitiesEdit.EditActivities(values, +id!) }}
            >
                {({ errors, values, touched, handleChange, setFieldValue }) => {
                    return (
                        <Form>
                            <Column>
                                <Row id="end">
                                    <Button label="Salvar" icon={"pi pi-save"} type="submit" />
                                </Row>
                            </Column>
                            <Inputs errors={errors} handleChange={handleChange} setFieldValue={setFieldValue} touched={touched} values={values} />
                        </Form>
                    );
                }}
            </Formik>
        </ContentPage>
    )
}

export default ActivitiesEdit

