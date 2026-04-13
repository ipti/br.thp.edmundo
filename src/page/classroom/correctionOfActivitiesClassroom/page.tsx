import { Form, Formik } from "formik"
import { Rating } from "primereact/rating"
import { useContext } from "react"
import ButtonComponent from "../../../Components/Button"
import ContentPage from "../../../Components/ContentPage"
import { ImageConfig } from "../../../Components/DragAndDropFile/imageConfig"
import Empty from "../../../Components/Empty"
import FormViewComponent from "../../../Components/FormView"
import Icon from "../../../Components/Icon"
import InputNumberComponent from "../../../Components/InputNumber"
import Loading from "../../../Components/Loading"
import { formatarDataHours } from "../../../Controller/controllerGlobal"
import color from "../../../Styles/colors"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomCorrectionOfActivitiesProvider, { ClassroomCorrectionOfActivitiesContext } from "./context/context"
import { NotasType } from "./context/types"
import { FormView } from "./service/types"

const ClassroomCorrectionOfActivities = () => {
    return (
        <ClassroomCorrectionOfActivitiesProvider>
            <ClassroomCorrectionOfActivitiesPage />
        </ClassroomCorrectionOfActivitiesProvider>
    )
}

const labelBottom = {
    color: color.grayOne
}

const ClassroomCorrectionOfActivitiesPage = () => {

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }



    const propsClassroomCorrectionOfActivities = useContext(ClassroomCorrectionOfActivitiesContext)

    if (propsClassroomCorrectionOfActivities?.isLoading) return <Loading />
    if (!propsClassroomCorrectionOfActivities?.activities) return <Empty title="atividade" />

    const activityData = propsClassroomCorrectionOfActivities.activities
    const activityType = String(activityData.activities.type_activities || "").toUpperCase()
    const hasQuizAnswers = !!activityData?.activities?.form?.answer_form?.[0]?.answer_question?.length

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
            if (attr) {
                total += attr;
                count++;
            }
        });

        const media = count > 0 ? total / count : 0;
        return parseFloat(media.toFixed(2))
    }

    const handleNotaForm = (form: FormView) => {
        if (!form?.answer_form?.[0]?.answer_question?.length) return 0
        const total = form.answer_form[0].answer_question.length

        var nota = 0
        for (const question of form.answer_form[0].answer_question) {
            const totalQuestion = question.question.response_question.length;
            if (totalQuestion === 0) continue

            var notaQuestion = 0;

            for (const i of question.question.response_question) {
                if (question.answer_option.find(props => props.options_fk === i.option_fk)) {
                    notaQuestion++
                }
            }
            nota = nota + (notaQuestion / totalQuestion)
        }
        return (nota / total) * 10
    }

    const isTime = (time: number, start: any, end: any) => {
        const createdAt = new Date(start);
        const updatedAt = new Date(end);
        if (Number.isNaN(createdAt.getTime()) || Number.isNaN(updatedAt.getTime())) return false

        const differenceInMs = updatedAt.getTime() - createdAt.getTime();

        const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));


        return differenceInMinutes <= time
    }

    var prazo = isTime(activityData.activities.time_activities!, activityData.createdAt, activityData.updatedAt)
    return (
        <ContentPage title={activityData.activities.name!} description="Visualize a atividade enviado pelo aluno">
            <div style={{ border: `1px solid ${color.colorBorderCard}`, borderRadius: 12, padding: 12, background: "#FFFFFF" }}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: activityData.activities.description ?? "",
                    }}
                />
            </div>
            {/* <p style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{propsClassroomCorrectionOfActivities?.activities?.activities.description}</p> */}
            <Padding padding="16px" />
            <>
                <Row id="space-between" style={{ marginBottom: "8px", flexWrap: "wrap", gap: 12 }}>
                    <Column>
                        <h3>
                            {activityData.user_classroom.users.name}
                        </h3>
                        <Padding />
                        <p>Última atualização: {formatarDataHours(activityData.updatedAt!)}</p>
                    </Column>
                    <div style={{ padding: "10px 16px", borderRadius: 999, height: 42, background: activityData.status === "COMPLETED" ? color.green : activityData.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white", margin: 0 }}>{status[activityData.status as keyof typeof status]}</h4>
                    </div>
                </Row>
                {
                    activityData.user_activities_archives.length! > 0 ? (
                        <div className="col-12 md:col-6">
                            <h4 className="drop-file-preview__title">
                                Arquivos Anexados
                            </h4>
                            <div style={{ border: "2px solid #E3E3E3" }}>

                                {
                                    activityData.user_activities_archives.map((item, index: number) => (
                                        <Row id="space-between" key={index} className="drop-file-preview__item">
                                            <Row>
                                                <img src={ImageConfig[item.archive_url.split('/')[1]] ||
                                                    ImageConfig['default']} alt="" />
                                                <div className="drop-file-preview__item__info">
                                                    <p>{item.original_name}</p>
                                                    <p>{item.size}KB</p>
                                                </div>
                                            </Row>
                                            <Column id="center">
                                                <span
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => { window.open(item.archive_url) }}>
                                                    <Icon icon='pi pi-download' color={color.colorPrimary} />
                                                </span>
                                            </Column>
                                        </Row>
                                    ))
                                }
                            </div>
                        </div>
                    ) : <>
                        <Padding padding="16px" />
                        <p className="drop-file-preview__title">
                            Sem arquivos enviados
                        </p>
                    </>
                }
            </>
            <Padding padding="8px" />
            {activityData.user_activities_rating
                &&
                <Rating style={{ marginBottom: 16 }} cancel={false} value={activityData.user_activities_rating.rating} />
            }
            <div style={{ padding: "8px 12px", background: prazo ? color.green : color.colorThird, width: 256, borderRadius: 999 }}>
                <h3 style={{ textAlign: "center", color: "white" }}>
                    {prazo ? "No prazo" : "Fora do prazo"}
                </h3>
            </div>



            {hasQuizAnswers
                &&
                <Formik initialValues={{ total: handleNotaForm(activityData.activities.form!) }} onSubmit={(values) => {

                    if (activityData.user_avaliation?.id) {
                        propsClassroomCorrectionOfActivities.updateAvaliation({ ...values }, activityData.user_avaliation?.id!)
                    } else {
                        propsClassroomCorrectionOfActivities?.createAvaliation({ ...values }, activityData.id!)
                    }
                }}>
                    {({ values }) => {
                        return (
                            <Form>
                                <Padding padding="16px" />
                                <Row id="space-between">
                                    <Column id="center">
                                        <h3>
                                            AVALIE O ALUNO
                                        </h3>
                                    </Column>
                                    <ButtonComponent label="Salvar" icon="pi pi-save" type="submit"/>
                                </Row>
                                <div style={{ padding: 8, background: color.colorSecondary, width: 128, borderRadius: 8, marginTop: 16 }}>
                                    <h3 style={{ textAlign: "center", color: "white" }}>
                                        Nota: {values.total?.toFixed(2)}
                                    </h3>

                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            }
            {/* {propsClassroomCorrectionOfActivities?.activities?.activities?.form.answer_form && <FormComponent form={propsClassroomCorrectionOfActivities?.activities?.activities?.form.answer_form[0].answer_question} />} */}

            <Padding padding="16px" />
            {activityType === "CODE" && <>
                {(activityData.activities?.classroom_activities[0]?.classroom_avaliation?.complete_the_activity_correctly ||
                    activityData.activities?.classroom_activities[0]?.classroom_avaliation?.collaboration ||
                    activityData.activities?.classroom_activities[0]?.classroom_avaliation?.completion_within_the_indicated_deadline ||
                    activityData.activities?.classroom_activities[0]?.classroom_avaliation?.content_organization ||
                    activityData.activities?.classroom_activities[0]?.classroom_avaliation?.understanding_the_content ||
                    activityData.activities?.classroom_activities[0]?.classroom_avaliation?.creativity_in_the_response
                ) ? <>
                    {
                        activityData && <Formik initialValues={{
                            complete_the_activity_correctly: activityData?.user_avaliation?.complete_the_activity_correctly ?? undefined,
                            content_organization: activityData?.user_avaliation?.content_organization ?? undefined,
                            completion_within_the_indicated_deadline: activityData?.user_avaliation?.completion_within_the_indicated_deadline || activityData?.activities.classroom_activities[0].classroom_avaliation?.completion_within_the_indicated_deadline ? prazo ? 10 : 5 : undefined,
                            creativity_in_the_response: activityData?.user_avaliation?.creativity_in_the_response ?? undefined,
                            collaboration: activityData?.user_avaliation?.collaboration ?? undefined,
                            understanding_the_content: activityData?.user_avaliation?.understanding_the_content ?? undefined
                        }}
                            onSubmit={(values) => {

                                if (activityData?.user_avaliation?.id) {
                                    propsClassroomCorrectionOfActivities.updateAvaliation({ ...values, total: handleMedia(values) }, activityData?.user_avaliation?.id!)
                                } else {
                                    propsClassroomCorrectionOfActivities?.createAvaliation({ ...values, total: handleMedia(values) }, activityData.id!)
                                }
                            }}>
                            {({ values, setFieldValue }) => {

                                return (
                                    <Form>

                                        <Row id="space-between">
                                            <Column id="center">
                                                <h3>
                                                    AVALIE O ALUNO
                                                </h3>
                                            </Column>
                                            <ButtonComponent label="Salvar" icon="pi pi-save" type="submit" />
                                        </Row>

                                        <Padding padding="16px" />
                                        <div className="grid">
                                            {activityData?.activities?.classroom_activities[0]?.classroom_avaliation?.complete_the_activity_correctly && <div className="col-12 md:col-6">
                                                <label>Cumpriu a atividade corretamente</label>
                                                <Padding />
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
                                                <label style={labelBottom}>Quando os alunos realizam a atividade prevista de forma completa.</label>
                                            </div>}
                                            {activityData?.activities?.classroom_activities[0].classroom_avaliation?.content_organization && <div className="col-12 md:col-6">
                                                <label>Organização do conteúdo</label>
                                                <Padding />
                                                <InputNumberComponent showButtons name="content_organization" value={values.content_organization} onChange={(e) => {
                                                    if (e.value! > 10) {
                                                        setFieldValue("content_organization", 10);
                                                    } else {
                                                        setFieldValue("content_organization", e.value);
                                                    }
                                                }} max={10} placeholder="Organização do conteúdo" />
                                                <Padding />
                                                <label style={labelBottom}>Quando os alunos organizam as informações de forma estruturada conforme as instruções compartilhadas.</label>
                                            </div>}
                                            {activityData?.activities?.classroom_activities[0].classroom_avaliation?.completion_within_the_indicated_deadline && <div className="col-12 md:col-6">
                                                <label>Conclusão no prazo indicado</label>
                                                <Padding />
                                                <div >
                                                    <InputNumberComponent
                                                        disabled
                                                        showButtons
                                                        onChange={(e) => {
                                                            if (e.value! > 10) {
                                                                setFieldValue("completion_within_the_indicated_deadline", 10);
                                                            } else {
                                                                setFieldValue("completion_within_the_indicated_deadline", e.value);
                                                            }
                                                        }} max={10}
                                                        value={values.completion_within_the_indicated_deadline}
                                                        placeholder="Conclusão no prazo indicado" />
                                                </div>
                                                <Padding />
                                                <label style={labelBottom}>Quando os alunos realizam a atividade dentro do prazo estipulado pelo professor.</label>
                                            </div>}
                                            {activityData?.activities?.classroom_activities[0].classroom_avaliation?.creativity_in_the_response && <div className="col-12 md:col-6">
                                                <label>Criatividade na resposta</label>
                                                <Padding />
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
                                                <label style={labelBottom}>Quando o aluno entrega algo além do que foi pedido ou utiliza uma nova solução para realizar o desafio.</label>
                                            </div>}
                                            {activityData?.activities?.classroom_activities[0].classroom_avaliation?.collaboration && <div className="col-12 md:col-6">
                                                <label>Colaboração</label>
                                                <Padding />
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
                                                <label style={labelBottom}>Quando o aluno ajuda um colega a realizar o desafio, sendo necessário sinalizar na atividade.</label>
                                            </div>}
                                            {activityData?.activities?.classroom_activities[0].classroom_avaliation?.understanding_the_content && <div className="col-12 md:col-6">
                                                <label>Compreensão sobre o conteúdo</label>
                                                <Padding />
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
                                                <label style={labelBottom}>Percepção do professor se o aluno está conectando os conteúdos apresentados.</label>
                                            </div>}
                                        </div>
                                        <Padding padding="16px" />
                                        <div style={{ padding: 8, background: color.colorSecondary, width: 128, borderRadius: 8 }}>
                                            <h3 style={{ textAlign: "center", color: "white" }}>
                                                Nota: {handleMedia(values)?.toFixed(2)}
                                            </h3>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    }
                </> : <Empty title="formato de avaliações, adicione para avaliar o aluno" />}
            </>}

            {activityData?.answer_user_activities_group_avaliation && activityType === "IA" && <>
                <Formik initialValues={{ total: activityData.user_avaliation?.total ?? 0 }} onSubmit={(values) => {
                    if (activityData?.user_avaliation?.id) {
                        propsClassroomCorrectionOfActivities.updateAvaliation({ total: values.total }, activityData?.user_avaliation?.id!)
                    } else {
                        propsClassroomCorrectionOfActivities.createAvaliation({ total: values.total }, activityData.id)
                    }

                }}>
                    {({ values, errors, handleChange, setFieldValue }) => {
                        return (
                            <Form>
                                <Row id="space-between">
                                    <Column id="center">
                                        <h3>
                                            AVALIE O ALUNO
                                        </h3>
                                    </Column>
                                    <ButtonComponent label="Salvar" icon="pi pi-save" type="submit" />
                                </Row>

                                <div className="col-12 md:col-6">
                                    <label>Nota</label>
                                    <Padding />
                                    <InputNumberComponent
                                        showButtons name="total" value={values.total} onChange={(e) => {
                                            if (e.value! > 10) {
                                                setFieldValue("total", 10);
                                            } else {
                                                setFieldValue("total", e.value);
                                            }
                                        }} max={10}
                                        placeholder="Nota" />
                                    <Padding />
                                    {/* <label style={labelBottom}>Percepção do professor se o aluno está conectando os conteúdos apresentados.</label> */}
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

                <div className="grid">
                    {activityData?.answer_user_activities_group_avaliation?.map((item, index) => {
                        return (
                            <div className="col-12 md:col-6" key={index}>
                                <div className="card ">
                                    <h3>{item.group_avaliation.name}</h3>
                                    <Padding padding="8px" />
                                    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                                        {item.answer}
                                    </pre>
                                </div>
                            </div>
                        )
                    })}

                </div>
                {activityData?.answer_user_activities_ia![0]?.analyzerFeedback && <div className="card">
                    <h3>Feedback</h3>
                    <Padding />
                    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                        {activityData?.answer_user_activities_ia![0]?.analyzerFeedback}
                    </pre>
                </div>}
            </>}

            {activityType === "QUIZ" && <>
                {hasQuizAnswers ? (
                    <FormViewComponent form={activityData?.activities.form} />
                ) : (
                    <Empty title="respostas do formulário" />
                )}
            </>}


        </ContentPage >
    )
}

export default ClassroomCorrectionOfActivities
