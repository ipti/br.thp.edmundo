import { Form, Formik } from "formik"
import ContentPage from "../../../Components/ContentPage"
import { Padding, Row } from "../../../Styles/styles"
import TextInput from "../../../Components/TextInput"
import { Button } from "primereact/button"
import StampsProvider, { StampsContext } from "./context/context"
import { useContext } from "react"

const StampsCreate = () => {
    return (
        <StampsProvider>
            <StampsCreatePage />
        </StampsProvider>
    )
}

const StampsCreatePage = () => {

    const propsStamps = useContext(StampsContext)

    return (
        <ContentPage title="Criar Selos" description="Crie selos para distribuir aos alunos.">
            <Formik initialValues={{ name: "", }} onSubmit={(values) => {
                propsStamps?.CreateStamps(values)
            }}>
                {({ values, errors, handleChange, touched }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <Button label="Criar" icon={"pi pi-plus"} />
                            </Row>
                            <Padding />
                            <div className="grid">

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
                                <div className="col-12 md:col-6">
                                    <label>Imagem selo </label>
                                    <Padding />
                                    <TextInput
                                        // value={props.file}

                                        type="file"
                                        placeholder="Imagem selo"
                                        onChange={(e: any) => propsStamps?.setFile(e.target.files)}
                                        name="name"
                                    />
                                    <label>Recomendado utilizar fundos brancos</label>
                                </div>
                            </div>

                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default StampsCreate