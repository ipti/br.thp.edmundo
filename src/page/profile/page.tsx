import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { Chip } from "primereact/chip"
import { MultiSelect } from "primereact/multiselect"
import { useContext } from "react"
import styled from "styled-components"
import * as Yup from "yup"
import ContentPage from "../../Components/ContentPage"
import MaskInput from "../../Components/InputMask"
import TextInput from "../../Components/TextInput"
import { formatarData, useQuery } from "../../Controller/controllerGlobal"
import styles from "../../Styles"
import { Column, Padding, Row } from "../../Styles/styles"
import avatar from "../../assets/image/avatar.svg"
import UpdateUserProvider, { UpdateUserContext } from "./context/context"
import { UpdateUserContextType } from "./context/types"

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

    const props = useContext(UpdateUserContext) as UpdateUserContextType

    const query = useQuery()

    const id = query.get("id")




    const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Nome de usuário é obrigatório"),
        responsable_telephone: Yup.string().required("Telefone é obrigatório"),
        birthday: Yup.string()
            .nullable()
            .required("Data de nascimento é obrigatória"),
    });



    const date = new Date(props.user?.registration[0]?.birthday);
    return (
        <ContentPage title={"Perfil"} description={id ? "Visualize o seu amigo" : "Visualize ou edite os dados do seu perfil."}>
            {props.user && <Formik validationSchema={schema} initialValues={{
                name: props.user?.name ?? "",
                birthday: !isNaN(date.getTime())
                    ? formatarData(props.user?.registration[0]?.birthday!)
                    : "",
                email: props.user?.email ?? "",
                username: props.user?.username ?? "",
                responsable_telephone: props.user?.registration[0]?.responsable_telephone ?? "",
            }} onSubmit={(values) => {
                const [dia, mes, ano] = values.birthday.split('/');
                const data = new Date(`${mes}/${dia}/${ano}`);
                props.UpdateUser({ ...values, birthday: data })
            }}>

                {({ errors, values, handleChange, touched, setFieldValue }) => {


                    return (
                        <Form>
                            {!id && <Column>
                                <Row id="end">
                                    <Button label="Salvar" icon="pi pi-save" type="submit" />
                                </Row>
                            </Column>}
                            <Padding />
                            <Avatar>
                                <img alt="" src={props.file ? (URL.createObjectURL(props.file![0]) ?? undefined) : props.user?.registration![0]?.avatar_url ? props.user?.registration![0]?.avatar_url : avatar} />
                            </Avatar>
                            <Padding padding="8px" />
                            {!id && <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Avatar </label>
                                    <Padding />
                                    <TextInput
                                        // value={props.file}
                                        type="file"
                                        placeholder="Avatar"
                                        onChange={(e: any) => props.setFile(e.target.files)}
                                        name="name"
                                    />
                                </div>
                            </div>}
                            <Padding padding="16px" />

                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome *</label>
                                    <Padding />
                                    <TextInput

                                        value={values.name}
                                        disabled={!!id}
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
                                {!id && <div className="col-12 md:col-6">
                                    <label>Nome usuário *</label>
                                    <Padding />
                                    <TextInput
                                        value={values.email}
                                        placeholder="Nome usuário"
                                        onChange={handleChange}
                                        name="email"
                                        disabled={!!id}

                                    />
                                    {errors.email && touched.email ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>}
                                <div className="col-12 md:col-6">
                                    <label>Data de Nascimento *</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.birthday?.toString()}
                                        mask="99/99/9999"
                                        placeholder="Data de Nascimento"
                                        name="birthday"
                                        disabled={!!id}

                                        onChange={(e) => {
                                            setFieldValue("birthday", e.target.value);
                                            if (values.birthday.length > 9) {
                                            }
                                        }}
                                    />
                                    {errors.birthday && touched.birthday ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.birthday.toString()}
                                        </div>
                                    ) : null}
                                </div>
                                {!id && <div className="col-12 md:col-6">
                                    <label>Telefone para contato *</label>
                                    <Padding />
                                    <MaskInput
                                        value={values.responsable_telephone}
                                        mask="(99) 9 9999-9999"
                                        name="responsable_telephone"
                                        disabled={!!id}
                                        onChange={handleChange}
                                        placeholder="Telefone para contato"
                                    />
                                    {errors.responsable_telephone &&
                                        touched.responsable_telephone ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.responsable_telephone.toString()}
                                        </div>
                                    ) : null}
                                </div>}
                                <div className="col-12 md:col-6">
                                    <label>Tags </label>
                                    <Padding />
                                    <MultiSelect value={props.tagsUser} disabled={!!id}
                                        onChange={(e) => { props.settagsUser(e.value); }} options={props.tags} optionLabel="content"
                                        placeholder="Tags" maxSelectedLabels={3} className="w-full" />
                                    <Padding padding="16px" />
                                    <Row className="grid" style={{ gap: "8px" }}>
                                        {props.tagsUser?.map((item: any) => {
                                            return (
                                                <Chip label={item.content} />
                                            )
                                        })}
                                    </Row>
                                </div>
                            </div>

                            {/* {id && <>
                                <label>Tags</label>
                                <Padding padding="8px" />
                                <Row className="grid" style={{ gap: "8px" }}>
                                    {props.tagsUser?.map((item: any) => {
                                        return (
                                            <Chip label={item.content} />
                                        )
                                    })}
                                </Row></>} */}
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