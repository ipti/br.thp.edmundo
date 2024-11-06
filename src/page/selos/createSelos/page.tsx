import { Form, Formik } from "formik"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import TextInput from "../../../Components/TextInput"
import { Button } from "primereact/button"

const CreateSeal = () => {
    return (
        <ContentPage title="Criar Selos" description="Crie selos para distribuir aos alunos.">
            <Formik initialValues={{ name: "", }} onSubmit={(values) => {
                console.log(values)
            }}>
                {({ values, errors, handleChange, touched }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <Button label="Criar" icon={"pi pi-plus"} />
                            </Row>
                            <div className="col-12 md:col-6">
                                <label>Nome *</label>
                                <Padding />
                                <TextInput
                                    placeholder="Nome"
                                    value={values.name}
                                    onChange={handleChange}
                                    name="name"
                                />
                                <Padding />
                                {errors.name && touched.name ? (
                                    <div style={{ color: "red" }}>
                                        {errors.name}
                                        <Padding />
                                    </div>
                                ) : null}
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default CreateSeal