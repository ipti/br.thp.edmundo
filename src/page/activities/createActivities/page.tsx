import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import { CreateActivitiesType } from "../type"
import CreateActivitiesProvider, { CreateActivitiesContext } from "./context/context"

const ActivitiesCreate = () => {
    return (
        <CreateActivitiesProvider>
            <ActivitiesCreatePage />
        </CreateActivitiesProvider>
    )
}

const ActivitiesCreatePage = () => {
    const activitiesCreate = useContext(CreateActivitiesContext) as CreateActivitiesType


    return (
        <ContentPage title="Criar atividades" description="">
            <Padding />
            <Formik
                initialValues={activitiesCreate.initialValue}
                onSubmit={(values) => { activitiesCreate.CreateActivities(values) }}
            >
                {({ errors, values, touched, handleChange, setFieldValue }) => {
                    return (
                        <Form>
                        <Column>
                            <Row id="end">
                                <Button label="Criar" icon={"pi pi-plus"} type="submit" />
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

export default ActivitiesCreate

