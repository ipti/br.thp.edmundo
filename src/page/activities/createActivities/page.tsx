import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext, useState } from "react"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import { CreateActivitiesType } from "../type"
import CreateActivitiesProvider, { CreateActivitiesContext } from "./context/context"
import CreateOrEditForm from "../CreateForms"
import { TabMenu } from "primereact/tabmenu"

const ActivitiesCreate = () => {
    return (
        <CreateActivitiesProvider>
            <ActivitiesCreatePage />
        </CreateActivitiesProvider>
    )
}

const ActivitiesCreatePage = () => {
    const activitiesCreate = useContext(CreateActivitiesContext) as CreateActivitiesType
    const [activeIndex, setActiveIndex] = useState(0);
    const [typeActivites, setTypeActivites] = useState<string | undefined>()

    const items = [
        { label: 'Atividade', icon: 'pi pi-home' },
        // { label: 'Formulário', icon: ' pi pi-list' },
    ];

    const itemsQuiz = [
        { label: 'Atividade', icon: 'pi pi-home' },
        { label: 'Formulário', icon: ' pi pi-list' },
    ];


    return (
        <ContentPage title="Criar atividades" description="">
            <Padding />
            <TabMenu model={typeActivites === "QUIZ" ? itemsQuiz :items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            {activeIndex === 0 && <Formik
                initialValues={activitiesCreate.initialValue}
                onSubmit={(values) => { activitiesCreate.CreateActivities(values) }}
            >
                {({ errors, values, touched, handleChange, setFieldValue }) => {
                    setTypeActivites(values.type_activities.id)
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
    {activeIndex === 1 && <CreateOrEditForm />}

        </ContentPage>
    )
}

export default ActivitiesCreate

