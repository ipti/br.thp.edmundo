import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { TabMenu } from "primereact/tabmenu"
import { useContext, useState } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import CreateOrEditFormProvider from "../CreateForms/context/context"
import { CreateActivitiesType } from "../type"
import CreateActivitiesProvider, { CreateActivitiesContext } from "./context/context"

const ActivitiesCreate = () => {
    return (
        <CreateActivitiesProvider>
            <CreateOrEditFormProvider>
                <ActivitiesCreatePage />
            </CreateOrEditFormProvider>
        </CreateActivitiesProvider>
    )
}

const ActivitiesCreatePage = () => {
    const activitiesCreate = useContext(CreateActivitiesContext) as CreateActivitiesType
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'Atividade', icon: 'pi pi-home' },
        // { label: 'Formulário', icon: ' pi pi-list' },
    ];

   


    return (
        <ContentPage title="Criar atividades" description="">
            <Padding />
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <Padding padding="16px" />
            {activeIndex === 0 && <Formik
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
                            <Padding />
                            <Inputs errors={errors} handleChange={handleChange} setFieldValue={setFieldValue} touched={touched} values={values} isCreated />
                        </Form>
                    );
                }}
            </Formik>}

        </ContentPage>
    )
}

export default ActivitiesCreate

