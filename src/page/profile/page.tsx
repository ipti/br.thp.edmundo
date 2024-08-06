import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { useContext, useState } from "react"
import ContentPage from "../../Components/ContentPage"
import DropdownComponent from "../../Components/Dropdown"
import MaskInput from "../../Components/InputMask"
import RadioButtonComponent from "../../Components/RadioButton"
import TextInput from "../../Components/TextInput"
import { color_race, formatarData, isMaiorDeIdade, kinship, typesex, VerifyColor, VerifyKinship, VerifySex } from "../../Controller/controllerGlobal"
import { Column, Padding, Row } from "../../Styles/styles"
import UpdateUserProvider, { UpdateUserContext } from "./context/context"
import { UpdateUserContextType } from "./context/types"
import { validaCPF } from "../../Controller/controllerValidCPF"
import avatar from "../../assets/image/avatar.svg"
import * as Yup from "yup";
import styles from "../../Styles"
import styled from "styled-components"

const Avatar = styled.div`
  border: 1px solid ${styles.colors.colorBorderCard};
  height: 128px;
  width: 128px;
  border-radius: 50%;
  
  img {
    border-radius: 50%; /* This will make the image circular */
    height: 100%;
    width: 100%;
  }
`;

const Profile = () => {
    return (
        <UpdateUserProvider>
            <ProfilePage />
        </UpdateUserProvider>
    )
}

const ProfilePage = () => {
    const [isMaior, setIsMaior] = useState(true)

    const props = useContext(UpdateUserContext) as UpdateUserContextType

    const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Email é obrigatório"),
        color_race: Yup.object().required("Raça/cor é obrigatório"),
        deficiency: Yup.object().required("Deficiência é obrigatória"),
        cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
            if (value && value.trim() !== "") {
                return validaCPF(value);
            }
            return true;
        }),
        responsable_cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
            if (value && value.trim() !== "") {
                return validaCPF(value);
            }
            return true;
        }),
        responsable_telephone: Yup.string().required("Telefone é obrigatório"),
        birthday: Yup.string()
            .nullable()
            .required("Data de nascimento é obrigatória"),
        zone: Yup.string().nullable().required("Zona é obrigatório"),
        sex: Yup.object().nullable().required("Sexo é obrigatória"),
    });

    const schemaResponsable = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Email é obrigatório"),
        color_race: Yup.object().required("Raça/cor é obrigatório"),
        deficiency: Yup.object().required("Deficiência é obrigatória"),
        cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
            if (value && value.trim() !== "") {
                return validaCPF(value);
            }
            return true;
        }),
        responsable_cpf: Yup.string().test("cpf-valid", "CPF inválido", (value) => {
            if (value && value.trim() !== "") {
                return validaCPF(value);
            }
            return true;
        }),
        responsable_telephone: Yup.string().required("Telefone é obrigatório"),
        birthday: Yup.string()
            .nullable()
            .required("Data de nascimento é obrigatória"),
        zone: Yup.string().nullable().required("Zona é obrigatório"),
        sex: Yup.object().nullable().required("Sexo é obrigatória"),
        responsable_name: Yup.string().required("Nome do responsável é obrigatório"),
        kinship: Yup.object().required("Parentesco é obrigatório"),
    });


    const date = new Date(props.user?.registration[0]?.birthday);
    return (
        <ContentPage title="Perfil" description="Visualize ou edite os dados do seu perfil.">



            {props.user && <Formik validationSchema={isMaior ? schema : schemaResponsable} initialValues={{
                name: props.user?.name ?? "",
                birthday: !isNaN(date.getTime())
                    ? formatarData(props.user?.registration[0]?.birthday!)
                    : "",
                color_race: VerifyColor(props.user?.registration[0]?.color_race) ?? undefined,
                deficiency: props.user?.registration[0]?.deficiency ? { name: "Sim", id: true }
                    : { name: "Não", id: false },
                email: props.user?.email ?? "",
                sex: VerifySex(props.user?.registration[0]?.sex) ?? undefined,
                zone: props.user?.registration[0]?.zone ?? undefined,
                cpf: props.user?.registration[0]?.cpf ?? "",
                responsable_telephone: props.user?.registration[0]?.responsable_telephone ?? "",
                kinship: props.user?.registration[0]?.kinship ? VerifyKinship(props.user?.registration[0]?.kinship) : { id: "OUTRO", name: 'Outro' },
                responsable_cpf: props.user?.registration[0]?.responsable_cpf ?? "",
                responsable_name: props.user?.registration[0]?.responsable_name ?? ""
            }} onSubmit={(values) => {
                const [dia, mes, ano] = values.birthday.split('/');
                const data = new Date(`${mes}/${dia}/${ano}`);

                props.UpdateUser({ ...values, sex: values.sex?.id, color_race: values.color_race?.id, deficiency: values.deficiency.id, zone: values.zone, birthday: data, kinship: values.kinship?.id! })
            }}>

                {({ errors, values, handleChange, touched, setFieldValue }) => {

                    return (
                        <Form>
                            <Column>
                                <Row id="end">
                                    <Button label="Salvar" type="submit" />
                                </Row>
                            </Column>
                            <Padding />
                            <Avatar>
                                <img alt="" src={avatar} />
                            </Avatar>
                            <Padding padding="16px" />

                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome *</label>
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
                                    <label>Email *</label>
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
                                            {errors.cpf.toString()}
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
                                            {errors.sex.toString()}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Data de Nascimento *</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.birthday?.toString()}
                                        mask="99/99/9999"
                                        placeholder="Data de Nascimento"
                                        name="birthday"
                                        onChange={(e) => {
                                            setFieldValue("birthday", e.target.value);
                                            console.log(values.birthday.length > 8)
                                            if (values.birthday.length > 9) {
                                                setIsMaior(isMaiorDeIdade(values.birthday))
                                            }
                                        }}
                                    />
                                    {errors.birthday && touched.birthday ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.birthday.toString()}
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
                                            {errors.color_race.toString()}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Deficiente *</label>
                                    <Padding />
                                    <DropdownComponent
                                        value={values.deficiency}
                                        placerholder="Possui deficiência?"
                                        optionsLabel="name"
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
                                            {errors.deficiency.toString()}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Telefone para contato *</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.responsable_telephone}
                                        mask="(99) 9 9999-9999"
                                        name="responsable_telephone"
                                        onChange={handleChange}
                                        placeholder="Telefone para contato"
                                    />
                                    {errors.responsable_telephone &&
                                        touched.responsable_telephone ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.responsable_telephone.toString()}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Zona de moradia *</label>
                                    <Padding />
                                    <Column id="end">
                                        <Row className="gap-2">
                                            <RadioButtonComponent
                                                value={1}
                                                checked={values.zone === 1}
                                                onChange={handleChange}
                                                name="zone"
                                                label="Rural"
                                            />
                                            <RadioButtonComponent
                                                value={2}
                                                checked={values.zone === 2}
                                                onChange={handleChange}
                                                name="zone"
                                                label="Urbana"
                                            />
                                        </Row>
                                    </Column>
                                    {errors.zone && touched.zone ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.zone.toString()}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <Padding padding="8px" />
                            {!isMaior && <>

                                <h3>Dados Responsavel</h3>
                                <Padding />
                                <div className="grid">
                                    <div className="col-12 md:col-6">
                                        <label>Nome</label>
                                        <Padding />
                                        <TextInput
                                            value={values.responsable_name}
                                            name="responsable_name"
                                            onChange={handleChange}
                                            placeholder="Nome do Resposável"
                                        />
                                        {errors.responsable_name && touched.responsable_name ? (
                                            <div style={{ color: "red", marginTop: "8px" }}>
                                                {errors.responsable_name.toString()}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label>CPF Responsavel</label>
                                        <Padding />
                                        <MaskInput
                                            value={values.responsable_cpf}
                                            mask="999.999.999-99"
                                            name="responsable_cpf"
                                            placeholder="CPF do Responsável"
                                            onChange={handleChange}
                                        />
                                        {errors.responsable_cpf && touched.responsable_cpf ? (
                                            <div style={{ color: "red", marginTop: "8px" }}>
                                                {errors.responsable_cpf.toString()}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="col-12 md:col-6">
                                        <label>Parentesco</label>
                                        <Padding />
                                        <DropdownComponent
                                            placerholder="Parantesco"
                                            onChange={handleChange}
                                            options={kinship}
                                            name="kinship"
                                            optionsValue="id"
                                            optionsLabel="name"
                                            value={values.kinship}
                                        />

                                        {errors.kinship && touched.kinship ? (
                                            <div style={{ color: "red", marginTop: "8px" }}>
                                                {errors.kinship.toString()}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>{" "}
                            </>}
                            {/* {values.deficiency && (
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
                                )} */}
                        </Form>
                    )
                }}
            </Formik>}
        </ContentPage>
    )
}

export default Profile