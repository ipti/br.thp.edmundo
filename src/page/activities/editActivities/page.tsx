import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { TabMenu } from "primereact/tabmenu"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import FormComponent from "../../../Components/Form"
import Loading from "../../../Components/Loading"
import { Column, Padding, Row } from "../../../Styles/styles"
import Inputs from "../components/inputs"
import CreateOrEditForm from "../CreateForms"
import CreateOrEditFormProvider from "../CreateForms/context/context"
import { EditActivitiesType } from "../type"
import EditActivitiesProvider, { EditActivitiesContext } from "./context/context"

const ActivitiesEdit = () => {
    return (
        <EditActivitiesProvider>
            <CreateOrEditFormProvider>

                <ActivitiesEditPage />
            </CreateOrEditFormProvider>
        </EditActivitiesProvider>
    )
}

const ActivitiesEditPage = () => {
    const activitiesEdit = useContext(EditActivitiesContext) as EditActivitiesType
    const [activeIndex, setActiveIndex] = useState(0);
    const [createdQuestion, setCreatedQuestion] = useState(false);

    const { id } = useParams()

    const items = [
        { label: 'Atividade', icon: 'pi pi-home' },
        // { label: 'Formulário', icon: ' pi pi-list' },
    ];

    const itemsQuiz = [
        { label: 'Atividade', icon: 'pi pi-home' },
        { label: 'Formulário', icon: ' pi pi-list' },
    ];


    if (!activitiesEdit.activitiesOne) return <Loading />


    return (
        <ContentPage title="Editar atividade" description="Modifique a atividade">
            <Padding />
            <TabMenu model={activitiesEdit.activitiesOne.type_activities === "QUIZ" ? itemsQuiz : items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <Padding padding="16px" />
            {activeIndex === 0 && <Formik
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
                            <Inputs errors={errors} tagsAll={activitiesEdit.tags} setTags={activitiesEdit.setTagsActivities} tags={activitiesEdit.tagsActivities} handleChange={handleChange} setFieldValue={setFieldValue} touched={touched} values={values} />
                        </Form>
                    );
                }}
            </Formik>}

            {activeIndex === 1 &&
                <>
                    {activitiesEdit.activitiesOne.form.question.length === 0 || createdQuestion
                        ?
                        <>
                            {activitiesEdit.activitiesOne.form.question.length > 0 && <div>
                                <Button severity="danger" label="Cancelar" onClick={() => { setCreatedQuestion(false) }} />
                            </div>}
                            <CreateOrEditForm />
                        </>
                        :
                        <>
                            <h3>Lista de questões</h3>
                            <Padding padding="16px" />
                            <FormComponent form={activitiesEdit.activitiesOne.form} />
                            <Padding />
                            <Row id="end">
                                <Button label="Criar novas questões" onClick={() => { setCreatedQuestion(true) }} icon={"pi pi-plus"} />
                            </Row>
                        </>
                    }
                </>
            }
        </ContentPage>
    )
}

export default ActivitiesEdit

