import { Form, Formik } from "formik"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext } from "react"
import styled from "styled-components"
import * as Yup from "yup"
import ContentPage from "../../../Components/ContentPage"
import MaskInput from "../../../Components/InputMask"
import TextInput from "../../../Components/TextInput"
import { formatarData } from "../../../Controller/controllerGlobal"
import styles from "../../../Styles"
import { Padding } from "../../../Styles/styles"
import avatar from "../../../assets/image/avatar.svg"
import UpdateUserProvider, { UpdateUserContext } from "./context/context"
import { UpdateUserContextType } from "./context/types"
import CardQuant from "../../../Components/Chart/CardQuant"

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

const MemberOne = () => {
    return (
        <UpdateUserProvider>
            <MemberOnePage />
        </UpdateUserProvider>
    )
}

const MemberOnePage = () => {

    const props = useContext(UpdateUserContext) as UpdateUserContextType



    const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Nome de usuário é obrigatório"),
        responsable_telephone: Yup.string().required("Telefone é obrigatório"),
        birthday: Yup.string()
            .nullable()
            .required("Data de nascimento é obrigatória"),
    });

    if (!props.user) return <ProgressSpinner />

    const date = new Date(props.user?.registration[0]?.birthday);
    return (
        <ContentPage title={props.user?.name!} description="Visualização de alunos.">
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
                            <Avatar>
                                <img alt="" src={props.file ? (URL.createObjectURL(props.file![0]) ?? undefined) : props.user?.registration![0]?.avatar_url ? props.user?.registration![0]?.avatar_url : avatar} />
                            </Avatar>
                            <Padding padding="8px" />

                            <Padding padding="16px" />

                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome *</label>
                                    <Padding />
                                    <TextInput
                                        disabled
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
                                    <label>Nome usuário *</label>
                                    <Padding />
                                    <TextInput
                                        disabled
                                        value={values.email}
                                        placeholder="Nome usuário"
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
                                    <label>Data de Nascimento *</label>
                                    <Padding />
                                    <MaskInput
                                        disabled
                                        value={values.birthday?.toString()}
                                        mask="99/99/9999"
                                        placeholder="Data de Nascimento"
                                        name="birthday"
                                        onChange={(e) => {
                                            setFieldValue("birthday", e.target.value);
                                            console.log(values.birthday.length > 8)
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
                                <div className="col-12 md:col-6">
                                    <label>Telefone para contato *</label>
                                    <Padding />
                                    <MaskInput
                                        disabled
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
                            </div>
                            <Padding padding="8px" />
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
            <h3>Dashboard</h3>
            <Padding padding="8px" />
            {props.classroomUserChart ? <div className="grid">
                <div className="col-4 md:col:12">
                    <CardQuant quant={props.classroomUserChart?.activities_pending} title="Atividades pendentes" color="primary" />
                </div>
                <div className="col-4 md:col:12">
                    <CardQuant quant={props.classroomUserChart?.completed_user_activities} title="Atividades finalizadas" color="third" />
                </div>
                <div className="col-4 md:col:12">
                    <CardQuant quant={props.classroomUserChart.code_activities} title="Atividades de código" color="secondary" />
                </div>
                <div className="col-4 md:col:12">
                    <CardQuant quant={props.classroomUserChart.quiz_activities} title="Atividades de Múltipla escolha" color="third" />
                </div>
            </div> : <ProgressSpinner />}
        </ContentPage>
    )
}

export default MemberOne