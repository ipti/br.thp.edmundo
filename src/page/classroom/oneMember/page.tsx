import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { Chart } from 'primereact/chart'
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import * as Yup from "yup"
import CardQuant from "../../../Components/Chart/CardQuant"
import ContentPage from "../../../Components/ContentPage"
import DropdownComponent from "../../../Components/Dropdown"
import MaskInput from "../../../Components/InputMask"
import Stamp from "../../../Components/Stamp"
import { StampComponentStyle } from "../../../Components/Stamp/style"
import TextInput from "../../../Components/TextInput"
import { formatarData } from "../../../Controller/controllerGlobal"
import styles from "../../../Styles"
import color from "../../../Styles/colors"
import { Padding, Row } from "../../../Styles/styles"
import avatar from "../../../assets/image/avatar.svg"
import UpdateUserProvider, { UpdateUserContext } from "./context/context"
import { UpdateUserContextType } from "./context/types"
import ModalDistributeStamps from "./modalDistributeStamps"

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
    const [visible, setVisible] = useState(false)

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const [chartDataMedia, setChartDataMedia] = useState({});
    const props = useContext(UpdateUserContext) as UpdateUserContextType


    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: props?.moduleAtivities?.moduloActivities?.map((item: any) => item.name),
            datasets: [
                {
                    label: 'Notas',
                    data: props?.moduleAtivities?.moduloActivities?.map((item: any) => item.total),
                    fill: false,
                    backgroundColor: [color.colorPrimary, color.colorThird, color.colorSecondary],
                    borderColor: color.colorPrimary,
                    tension: 0.4
                }
            ]
        };

        const dataMedia = {
            labels: props?.classroomModuleMedia?.moduloActivities.map((item: any) => item.module_name),
            datasets: [
                {
                    label: 'Notas',
                    data: props?.classroomModuleMedia?.moduloActivities.map((item: any) => item.media_avaliacao),
                    fill: false,
                    backgroundColor: color.colorThird,
                    borderColor: color.colorThird,
                    tension: 0.4
                }
            ]
        };


        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
        setChartDataMedia(dataMedia)
        setChartData(data);
        setChartOptions(options);
    }, [props.moduleAtivities, props.classroomModuleMedia]);



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

                            <Padding padding="32px" />
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
            <Padding padding="8px" />

            <Button label="Adicionar selos" icon={"pi pi-crown"} iconPos="right" onClick={() => {
                setVisible(!visible)
            }} />
            <Padding padding="8px" />
            <div className="grid">

                {props.user.stamps_user.map((item) => {
                    return (

                        <StampComponentStyle>
                            <Stamp url={item?.stamps.img_url} description={item?.stamps?.description} type={item.stamps.type} />
                            <Row id="center">
                                <p style={{ color: color.colorPrimary }}>{item.stamps.name}</p>
                            </Row>
                        </StampComponentStyle>
                    )
                })}
            </div>

            <Padding padding="8px" />

            <h3>Dashboard</h3>
            <Padding padding="8px" />
            {props.classroomUserChart ? <div className="grid">
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomUserChart?.activities_pending} title="Atividades pendentes" color="primary" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomUserChart?.completed_user_activities} title="Atividades finalizadas" color="third" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomUserChart.code_activities} title="Atividades de código" color="secondary" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomUserChart.quiz_activities} title="Múltipla escolha" color="third" />
                </div>
            </div> : <ProgressSpinner />}
            <Padding padding="16px" />
            <div className="grid">
                <div className=" col-12 md:col-6">

                    <Padding className="card" padding="32px">
                        {props.moduleId && <h2>Notas do módulo {props.moduleId.name}</h2>}
                        <Padding padding="8px" />
                        <div>
                            <label>
                                Módulos
                            </label>
                            <Padding />
                            {props.moduleId &&
                                <DropdownComponent options={props.classroomModule} value={props.moduleId} onChange={(e) => { props.setModuleId(e.value); }} />}
                        </div>
                        <Padding padding="16px" />
                        <Chart type="bar" data={chartData} options={chartOptions} />
                    </Padding>
                </div>
                <div className=" col-12 md:col-6">
                    <Padding className="card" padding="32px">
                        <h2>Média de notas por módulo</h2>
                        <Padding padding="16px" />
                        <Chart type="line" data={chartDataMedia} options={chartOptions} />
                    </Padding>
                </div>
            </div>
            <ModalDistributeStamps visible={visible} onHide={() => { setVisible(!visible) }} />

        </ContentPage>
    )
}

export default MemberOne