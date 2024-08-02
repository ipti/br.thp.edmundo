import { Form, Formik } from "formik";
import ContentPage from "../../../Components/ContentPage";
import TextInput from "../../../Components/TextInput";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";
import CreateReapplicationProvider, { CreateReapplicationContext } from "./context/context";
import { useContext } from "react";
import { CreateReapplicationContextType } from "./context/types";


const ReapplicationCreate = () => {
    return (
        <CreateReapplicationProvider>
            <ReapplicationCreatePage />
        </CreateReapplicationProvider>
    )
}

const ReapplicationCreatePage = () => {

    const props = useContext(CreateReapplicationContext) as CreateReapplicationContextType

    return (
        <ContentPage title="Criar Local de Reaplicação" description="Crie a sua reaplicação para poder gerenciar suas aulas e alunos">
            <Formik initialValues={props.initialValue} onSubmit={(body) => { props.CreateReapplication(body)}}>

                {({ errors, values, touched, handleChange }) => {
                    return (
                        <Form>

                            <Column>
                                <Row id="end">
                                    <Button label="Criar" type="submit" />
                                </Row>
                            </Column>

                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome do Local de Reaplicação</label>
                                    <Padding />
                                    <TextInput
                                        value={values.name}
                                        placeholder="Digite o nome do Local de Reaplicação"
                                        onChange={handleChange}
                                        name="name"
                                    />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default ReapplicationCreate;