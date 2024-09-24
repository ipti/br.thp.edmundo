import { Form } from "react-router-dom"
import { Column, Padding, Row } from "../../../../Styles/styles"
import { Button } from "primereact/button"
import TextInput from "../../../../Components/TextInput"
import TextAreaComponent from "../../../../Components/TextArea"

const Inputs = ({ errors, handleChange, touched, values }: { errors: any, values: any, touched: any, handleChange: any }) => {
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
                    placeholder="Escreva uma descrição para módulo"
                    onChange={handleChange}
                    name="description"
                />
                {errors.description && touched.description ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.description}
                    </div>
                ) : null}
            </div>
        </Form>
    )
}

export default Inputs