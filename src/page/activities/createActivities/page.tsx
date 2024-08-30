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
                onSubmit={(values) => { }}
            >
                {({ errors, values, touched, handleChange }) => {
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
                                <label>Materias necessários </label>
                                <Padding />
                                <TextAreaComponent
                                    value={values.description}
                                    placeholder="Escreva os materiais necessários para a aula"
                                    onChange={handleChange}
                                    name=".description"
                                />
                                {errors.description && touched.description ? (
                                    <div style={{ color: "red", marginTop: "8px" }}>
                                        {errors.description}
                                    </div>
                                ) : null}
                            </div>
                            <div className="col-12 md:col-6">
                                <label>Duração da aula (horas) </label>
                                <Padding />
                                <InputNumberComponent
                                    value={values.time_activities!}
                                    placeholder="Escreva os materiais necessários para a aula"
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