import { Form, Formik } from "formik"
import ContentPage from "../../Components/ContentPage"
import MaskInput from "../../Components/InputMask"
import { Column, Padding, Row } from "../../Styles/styles"
import TextInput from "../../Components/TextInput"
import DropdownComponent from "../../Components/Dropdown"
import { color_race, typesex } from "../../Controller/controllerGlobal"
import CalendarComponent from "../../Components/Calendar"
import { Button } from "primereact/button"

const Profile = () => {
    return (
        <ContentPage title="Perfil" description="Visualize ou edite os dados do seu perfil.">
            <Formik initialValues={{ cpf: "", name: "", email: "", sex: undefined, color_race: undefined, birthday: "", deficiency: undefined, responsable: "", deficiency_description: "", }} onSubmit={() => { }}>

                {({ errors, values, handleChange, touched }) => {
                    return (
                        <Form>
                            <Column>
                                <Row id="end">
                                    <Button label="Salvar" type="submit" />
                                </Row>
                            </Column>
                            <div className="grid">
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
                                    <label>Email</label>
                                    <Padding />
                                    <TextInput
                                        value={values.email}
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        name="email"
                                    />
                                    {errors.email && touched.email ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>CPF</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.cpf}
                                        mask="999.999.999-99"
                                        placeholder="CPF"
                                        onChange={handleChange}
                                        name="cpf"
                                    />
                                    {errors.cpf && touched.cpf ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.cpf}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Sexo *</label>
                                    <Padding />
                                    <DropdownComponent
                                        value={values.sex}
                                        optionsLabel="type"
                                        options={typesex}
                                        optionsValue="id"
                                        placerholder="Selecione seu sexo"
                                        name="sex"
                                        onChange={handleChange}
                                    />
                                    {errors.sex && touched.sex ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.sex}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Data de Nascimento *</label>
                                    <Padding />
                                    <CalendarComponent
                                        value={values.birthday}
                                        placeholder="Data de Nascimento"
                                        name="birthday"
                                        onChange={handleChange}
                                    />
                                    {errors.birthday && touched.birthday ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.birthday}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Cor de raça *</label>
                                    <Padding />
                                    <DropdownComponent
                                        value={values.color_race}
                                        options={color_race}
                                        placerholder="Selecione sua cor de raça"
                                        name="color_race"
                                        optionsValue="id"
                                        onChange={handleChange}
                                    />{" "}
                                    {errors.color_race && touched.color_race ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.color_race}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Deficiente *</label>
                                    <Padding />
                                    <DropdownComponent
                                        value={values.deficiency}
                                        placerholder="Possui deficiência?"
                                        name="deficiency"
                                        onChange={handleChange}
                                        optionsValue="id"
                                        options={[
                                            { id: true, name: "Sim" },
                                            { id: false, name: "Não" },
                                        ]}
                                    />
                                    {errors.deficiency && touched.deficiency ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.deficiency}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Telefone para contato *</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.responsable}
                                        mask="(99) 9 9999-9999"
                                        name="responsable"
                                        onChange={handleChange}
                                        placeholder="Telefone para contato"
                                    />
                                    {errors.responsable &&
                                        touched.responsable ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.responsable}
                                        </div>
                                    ) : null}
                                </div>
                                {values.deficiency && (
                                    <div className="col-12 md:col-6">
                                        <label>Qual deficiência?</label>
                                        <Padding />
                                        <TextInput
                                            value={values.deficiency_description}
                                            name="deficiency_description"
                                            onChange={handleChange}
                                            placeholder="Qual deficiência ?"
                                        />
                                    </div>
                                )}
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </ContentPage>
    )
}

export default Profile