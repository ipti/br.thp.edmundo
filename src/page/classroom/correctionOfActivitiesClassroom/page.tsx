import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { ImageConfig } from "../../../Components/DragAndDropFile/imageConfig"
import Icon from "../../../Components/Icon"
import InputNumberComponent from "../../../Components/InputNumber"
import { formatarDataHours } from "../../../Controller/controllerGlobal"
import color from "../../../Styles/colors"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomCorrectionOfActivitiesProvider, { ClassroomCorrectionOfActivitiesContext } from "./context/context"
import { NotasType } from "./context/types"

const ClassroomCorrectionOfActivities = () => {
    return (
        <ClassroomCorrectionOfActivitiesProvider>
            <ClassroomCorrectionOfActivitiesPage />
        </ClassroomCorrectionOfActivitiesProvider>
    )
}

const ClassroomCorrectionOfActivitiesPage = () => {

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }

    const propsClassroomCorrectionOfActivities = useContext(ClassroomCorrectionOfActivitiesContext)

    if (propsClassroomCorrectionOfActivities?.isLoading) return <ProgressSpinner />

    const handleMedia = (value: NotasType | any) => {
        let total = 0;
        let count = 0;

        const attributes = [
            value.collaboration,
            value.complete_the_activity_correctly,
            value.completion_within_the_indicated_deadline,
            value.content_organization,
            value.creativity_in_the_response,
            value.understanding_the_content
        ];

        attributes.forEach(attr => {
            if (attr !== undefined) {
                total += attr;
                count++;
            }
        });

        const media = count > 0 ? total / count : 5;
        return parseFloat(media.toFixed(2))
    }

    return (
        <ContentPage title={propsClassroomCorrectionOfActivities?.activities?.activities.name!} description="Visualize a atividade enviado pelo aluno">
            <Padding padding="16px" />
            <>
                <Row id="space-between" style={{ marginBottom: "8px" }}>
                    <Column>
                        <h3>
                            {propsClassroomCorrectionOfActivities?.activities?.user_classroom.users.name}
                        </h3>
                        <Padding />
                        <p>Última atualização: {formatarDataHours(propsClassroomCorrectionOfActivities?.activities?.updatedAt!)}</p>
                    </Column>
                    <div style={{ padding: 16, borderRadius: 8, height: 48, background: propsClassroomCorrectionOfActivities?.activities?.status === "COMPLETED" ? color.green : propsClassroomCorrectionOfActivities?.activities?.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white" }}>{status[propsClassroomCorrectionOfActivities?.activities?.status as keyof typeof status]}</h4>
                    </div>
                </Row>
                {
                    propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.length! > 0 ? (
                        <div className="drop-file-preview">
                            <h4 className="drop-file-preview__title">
                                Arquivos anexados
                            </h4>
                            {
                                propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.map((item, index: number) => (
                                    <div key={index} className="drop-file-preview__item">
                                        <img src={ImageConfig[item.archive_url.split('/')[1]] ||
                                            ImageConfig['default']} alt="" />
                                        <div className="drop-file-preview__item__info">
                                            <p>{item.original_name}</p>
                                            <p>{item.size}KB</p>
                                        </div>
                                        <span className="drop-file-preview__item__del"
                                            onClick={() => { window.open(item.archive_url) }}>
                                            <Icon icon='pi pi-download' />
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <>
                        <Padding padding="16px" />
                        <p className="drop-file-preview__title">
                            Sem arquivos enviados
                        </p>
                    </>
                }

            </>

            <Padding />

            <Padding padding="8px" />
            {propsClassroomCorrectionOfActivities?.activities && <Formik initialValues={{ complete_the_activity_correctly: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.complete_the_activity_correctly ?? undefined, content_organization: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.content_organization ?? undefined, completion_within_the_indicated_deadline: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.completion_within_the_indicated_deadline ?? undefined, creativity_in_the_response: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.creativity_in_the_response ?? undefined, collaboration: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.collaboration ?? undefined, understanding_the_content: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.understanding_the_content ?? undefined }}
                onSubmit={(values) => {

                    if (propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.id) {
                        propsClassroomCorrectionOfActivities.updateAvaliation({ ...values, total: handleMedia(values) }, propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.id!)
                    } else {
                        propsClassroomCorrectionOfActivities?.createAvaliation({ ...values, total: handleMedia(values) }, propsClassroomCorrectionOfActivities.activities?.id!)

                    }
                }}>
                {({ values, setFieldValue }) => {

                    return (
                        <Form>

                            <Row id="space-between">
                                <Column id="center">
                                    <h2>
                                        Avalie o aluno
                                    </h2>
                                </Column>
                                <Button label="Salvar" icon="pi pi-save" />
                            </Row>
                            <Padding padding="16px" />
                            <div style={{ padding: 8, background: color.colorPrimary, width: 128, borderRadius: 8 }}>
                                <h3 style={{ textAlign: "center", color: "white" }}>

                                    Nota: {handleMedia(values)}
                                </h3>
                            </div>

                            <Padding padding="16px" />
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent name="complete_the_activity_correctly"
                                        showButtons
                                        value={values.complete_the_activity_correctly}
                                        onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("complete_the_activity_correctly", 10);
                                            } else {
                                                setFieldValue("complete_the_activity_correctly", e.value);
                                            }
                                        }}
                                        max={10}
                                        placeholder="Cumpriu a atividade corretamente" />
                                    <Padding />
                                    <label>Quando os alunos realizam a atividade prevista de forma completa.</label>
                                </div>
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent showButtons name="content_organization" value={values.content_organization} onChange={(e) => {
                                        if (e.value! > 10) {
                                            setFieldValue("content_organization", 10);
                                        } else {
                                            setFieldValue("content_organization", e.value);
                                        }
                                    }} max={10} placeholder="Organização do conteúdo" />
                                    <Padding />
                                    <label>Quando os alunos organizam as informações de forma estruturada conforme as instruções compartilhadas.</label>
                                </div>
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent
                                        showButtons name="completion_within_the_indicated_deadline" value={values.completion_within_the_indicated_deadline} onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("completion_within_the_indicated_deadline", 10);
                                            } else {
                                                setFieldValue("completion_within_the_indicated_deadline", e.value);
                                            }
                                        }} max={10}
                                        placeholder="Conclusão no prazo indicado" />
                                    <Padding />
                                    <label>Quando os alunos realizam a atividade dentro do prazo estipulado pelo professor.</label>
                                </div>
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent
                                        showButtons name="creativity_in_the_response" value={values.creativity_in_the_response} onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("creativity_in_the_response", 10);
                                            } else {
                                                setFieldValue("creativity_in_the_response", e.value);
                                            }
                                        }} max={10}
                                        placeholder="Criatividade na resposta" />
                                    <Padding />
                                    <label>Quando o aluno entrega algo além do que foi pedido ou utiliza uma nova solução para realizar o desafio.</label>
                                </div>
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent
                                        showButtons name="collaboration" value={values.collaboration} onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("collaboration", 10);
                                            } else {
                                                setFieldValue("collaboration", e.value);
                                            }
                                        }} max={10}
                                        placeholder="Colaboração" />
                                    <Padding />
                                    <label>Quando o aluno ajuda um colega a realizar o desafio, sendo necessário sinalizar na atividade.</label>
                                </div>
                                <div className="col-12 md:col-6">
                                    <InputNumberComponent
                                        showButtons name="understanding_the_content" value={values.understanding_the_content} onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("understanding_the_content", 10);
                                            } else {
                                                setFieldValue("understanding_the_content", e.value);
                                            }
                                        }} max={10}
                                        placeholder="Compreensão sobre o conteúdo" />
                                    <Padding />
                                    <label>Percepção do professor se o aluno está conectando os conteúdos apresentados.</label>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>}
        </ContentPage>
    )
}

export default ClassroomCorrectionOfActivities