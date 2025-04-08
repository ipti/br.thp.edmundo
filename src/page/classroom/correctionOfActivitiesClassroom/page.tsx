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
        const total = form.answer_form[0].answer_question.length

        var nota = 0
        for (const question of form.answer_form[0].answer_question) {
            const totalQuestion = question.question.response_question.length;

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

        const differenceInMs = updatedAt.getTime() - createdAt.getTime();

        const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));


        return differenceInMinutes <= time
    }

    var prazo = isTime(propsClassroomCorrectionOfActivities?.activities?.activities.time_activities!, propsClassroomCorrectionOfActivities?.activities?.createdAt, propsClassroomCorrectionOfActivities?.activities?.updatedAt)
    return (
        <ContentPage title={propsClassroomCorrectionOfActivities?.activities?.activities.name!} description="Visualize a atividade enviado pelo aluno">
            <div
                dangerouslySetInnerHTML={{
                    __html: propsClassroomCorrectionOfActivities?.activities?.activities.description ?? "",
                }}
            />
            {/* <p style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{propsClassroomCorrectionOfActivities?.activities?.activities.description}</p> */}
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
                    <div style={{ padding: 16, borderRadius: 8, height: 54, background: propsClassroomCorrectionOfActivities?.activities?.status === "COMPLETED" ? color.green : propsClassroomCorrectionOfActivities?.activities?.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white" }}>{status[propsClassroomCorrectionOfActivities?.activities?.status as keyof typeof status]}</h4>
                    </div>
                </Row>
                {
                    propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.length! > 0 ? (
                        <div className="col-12 md:col-6">
                            <h4 className="drop-file-preview__title">
                                Arquivos Anexados
                            </h4>
                            <div style={{ border: "2px solid #E3E3E3" }}>

                                {
                                    propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.map((item, index: number) => (
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
            {propsClassroomCorrectionOfActivities?.activities?.user_activities_rating
                &&
                <Rating style={{ marginBottom: 32 }} cancel={false} value={propsClassroomCorrectionOfActivities?.activities?.user_activities_rating.rating} />
            }
            <div style={{ padding: 8, background: prazo ? color.green : color.colorThird, width: 256, borderRadius: 8 }}>
                <h3 style={{ textAlign: "center", color: "white" }}>
                    {prazo ? "No prazo" : "Fora do prazo"}
                </h3>
            </div>



            {propsClassroomCorrectionOfActivities?.activities?.activities?.form?.answer_form?.length! > 0
                &&
                <Formik initialValues={{ total: handleNotaForm(propsClassroomCorrectionOfActivities?.activities?.activities.form!) }} onSubmit={(values) => {

                    if (propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.id) {
                        propsClassroomCorrectionOfActivities.updateAvaliation({ ...values }, propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.id!)
                    } else {
                        propsClassroomCorrectionOfActivities?.createAvaliation({ ...values }, propsClassroomCorrectionOfActivities.activities?.id!)
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
            {propsClassroomCorrectionOfActivities?.activities?.activities.type_activities === "CODE" && <>
                {(propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.complete_the_activity_correctly ||
                    propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.collaboration ||
                    propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.completion_within_the_indicated_deadline ||
                    propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.content_organization ||
                    propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.understanding_the_content ||
                    propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.creativity_in_the_response
                ) ? <>
                    {
                        propsClassroomCorrectionOfActivities?.activities && <Formik initialValues={{
                            complete_the_activity_correctly: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.complete_the_activity_correctly ?? undefined,
                            content_organization: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.content_organization ?? undefined,
                            completion_within_the_indicated_deadline: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.completion_within_the_indicated_deadline || propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.completion_within_the_indicated_deadline ? prazo ? 10 : 5 : undefined,
                            creativity_in_the_response: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.creativity_in_the_response ?? undefined,
                            collaboration: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.collaboration ?? undefined,
                            understanding_the_content: propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.understanding_the_content ?? undefined
                        }}
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
                                                <h3>
                                                    AVALIE O ALUNO
                                                </h3>
                                            </Column>
                                            <ButtonComponent label="Salvar" icon="pi pi-save" type="submit" />
                                        </Row>

                                        <Padding padding="16px" />
                                        <div className="grid">
                                            {propsClassroomCorrectionOfActivities?.activities?.activities?.classroom_activities[0]?.classroom_avaliation?.complete_the_activity_correctly && <div className="col-12 md:col-6">
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
                                            {propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.content_organization && <div className="col-12 md:col-6">
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
                                            {propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.completion_within_the_indicated_deadline && <div className="col-12 md:col-6">
                                                <label>Conclusão no prazo indicado</label>
                                                <Padding />
                                                <div >
                                                    <InputNumberComponent
                                                        disabled
                                                        showButtons
                                                        onChange={(e) => {
                                                            if (e.value! > 10) {
                                                                setFieldValue("content_organization", 10);
                                                            } else {
                                                                setFieldValue("content_organization", e.value);
                                                            }
                                                        }} max={10}
                                                        value={values.completion_within_the_indicated_deadline}
                                                        placeholder="Conclusão no prazo indicado" />
                                                </div>
                                                <Padding />
                                                <label style={labelBottom}>Quando os alunos realizam a atividade dentro do prazo estipulado pelo professor.</label>
                                            </div>}
                                            {propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.creativity_in_the_response && <div className="col-12 md:col-6">
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
                                            {propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.collaboration && <div className="col-12 md:col-6">
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
                                            {propsClassroomCorrectionOfActivities?.activities?.activities.classroom_activities[0].classroom_avaliation?.understanding_the_content && <div className="col-12 md:col-6">
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

            {propsClassroomCorrectionOfActivities?.activities?.answer_user_activities_group_avaliation && propsClassroomCorrectionOfActivities.activities.activities.type_activities === "IA" && <>
                <Formik initialValues={{ total: propsClassroomCorrectionOfActivities.activities.user_avaliation.total }} onSubmit={(values) => {
                    propsClassroomCorrectionOfActivities.updateAvaliation({ total: values.total }, propsClassroomCorrectionOfActivities?.activities?.user_avaliation?.id!)

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
                    {propsClassroomCorrectionOfActivities.activities?.answer_user_activities_group_avaliation?.map((item) => {
                        return (
                            <div className="col-12 md:col-6">
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
                {propsClassroomCorrectionOfActivities.activities?.answer_user_activities_ia![0]?.analyzerFeedback && <div className="card">
                    <h3>Feedback</h3>
                    <Padding />
                    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                        {propsClassroomCorrectionOfActivities.activities?.answer_user_activities_ia![0]?.analyzerFeedback}
                    </pre>
                </div>}
            </>}

            {propsClassroomCorrectionOfActivities?.activities?.activities.type_activities === "QUIZ" && <>
                <FormViewComponent form={propsClassroomCorrectionOfActivities?.activities?.activities.form} />
            </>}


        </ContentPage >
    )
}

export default ClassroomCorrectionOfActivities