import { Form, Formik } from "formik"
import ContentPage from "../../../Components/ContentPage"
import { Column, Padding, Row } from "../../../Styles/styles"
import { Button } from "primereact/button"
import TextInput from "../../../Components/TextInput"
import TextAreaComponent from "../../../Components/TextArea"
import InputNumberComponent from "../../../Components/InputNumber"
import CreateActivitiesProvider, { CreateActivitiesContext } from "./context/context"
import { useContext } from "react"
import { CreateActivitiesType } from "../type"
import DropdownComponent from "../../../Components/Dropdown"
import { difficult } from "../../../Controller/controllerGlobal"

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
                                    <Button label="Criar" type="submit" />
                                </Row>
                            </Column>
                            <div className="col-12 md:col-6">
                                <label>Nome</label>
                                <Padding />
                                <TextInput
                                    value={values.name}
                                    placeholder="Nome"
                                    onChange={handleChange}
                                    name="name"
                                />
                                {errors.name && touched.name ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.name}
                                    </div>
                                ) : null}
                            </div>

                            <div className="col-12 md:col-6">
                                <label>Descrição</label>
                                <Padding />
                                <TextAreaComponent
                                    value={values.description}
                                    placeholder="Escreva a descrição da atividades"
                                    onChange={handleChange}
                                    name="description"
                                />
                                {errors.description && touched.description ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.description}
                                    </div>
                                ) : null}
                            </div>

                            <div className="col-12 md:col-6">
                                <label>Nivel de dificuldade </label>
                                <Padding />
                                <DropdownComponent
                                    value={values.difficult}
                                    options={difficult}
                                    optionsValue="id"
                                    optionsLabel="name"
                                    placerholder="Escolha o nivel de dificuldade"
                                    onChange={e => setFieldValue("difficult", e.target.value)}
                                    name="difficult"
                                />
                                {errors.difficult && touched.difficult ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.difficult.id}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-12 md:col-6">
                                <label>Duração da atividades (minutos) </label>
                                <Padding />
                                <InputNumberComponent
                                    value={values.time_activities!}
                                    placeholder="Escreva a duração da atividade"
                                    onChange={handleChange}
                                    name="time_activities"
                                />
                                {errors.time_activities && touched.time_activities ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.time_activities}
                                    </div>
                                ) : null}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </ContentPage>
    )
}

export default ActivitiesCreate

