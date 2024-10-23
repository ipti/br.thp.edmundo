import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import sound from "../../assets/image/sound_sampler.svg";
import DropFileInput from "../../Components/DragAndDropFile";
import FormComponent from "../../Components/Form";
import Icon from "../../Components/Icon";
import { getDifficulte } from "../../Controller/controllerGlobal";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import HomeActivitiesProvider, { HomeActivitiesContext } from "./context/context";
import { ButtonStart, TextActivities, TextActivitiesCard, TextActivitiesParagraphCard } from "./styles";
import { Form, Formik } from "formik";

import * as Yup from 'yup';

const optionSchema = Yup.object().shape({
  options_fk: Yup.number().required("Option is required")
});

const questionSchema = Yup.object().shape({
  question_fk: Yup.number().required("Question ID is required"),
  options: Yup.array()
    .of(optionSchema)
    .min(1, "Marque uma opção")
});

const createResponseSchema = Yup.object().shape({
  form_fk: Yup.number().required("Form ID is required"),
  question: Yup.array()
    .of(questionSchema)
    .required("At least one question is required")
});


const HomeActivities = () => {
    return (
        <HomeActivitiesProvider>
            <HomeActivitiesPage />
        </HomeActivitiesProvider>
    )
}


const HomeActivitiesPage = () => {

    const propsAplication = useContext(HomeActivitiesContext)

    const dif = getDifficulte(propsAplication?.activitiesOne?.difficult)

    const { idClassroom } = useParams()


    if (!propsAplication?.activitiesOne?.user_activities) return <ProgressSpinner />


    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px 128px"
        }}>
            <Row className="grid" id="space-between" style={{ width: "100%" }}>
                <div className="col-12 md:col-4 lg:col:6">
                    <Row id="center">
                        <Column style={{ width: "100%" }}>
                            {propsAplication?.activitiesOne?.user_activities.length === 0 ? <ButtonStart onClick={() => {
                                propsAplication?.JoinTheActivitiesUser({ idActivities: propsAplication.activitiesOne?.id!, idClassroom: parseInt(idClassroom!) })
                            }}>
                                <Row id="space-around"><div></div><Column id="center">Iniciar atividade</Column> <img style={{ width: 48 }} src={sound} alt="" /></Row></ButtonStart>
                                : propsAplication?.activitiesOne?.user_activities[0].status === "COMPLETED" ? <><ButtonStart type="SUCCESS"><Row id="space-around"><div></div><Column id="center">Atividade enviada</Column> <Icon icon="pi pi-check" size="32px" /></Row></ButtonStart><Padding padding="16px" /></> :
                                    propsAplication?.activitiesOne.type_activities === "CODE" ?
                                        <>
                                            <h1>1. Anexe sua atividade clicando no botão a seguir:</h1>
                                            <Padding padding="8px" />
                                            <DropFileInput onFileChange={propsAplication?.onChangeFile} />
                                            <Padding padding="8px" />
                                            <Button label="Enviar Atividade" onClick={() => propsAplication?.FinishActivitiesUser(propsAplication?.activitiesOne?.user_activities[0].id!)} />
                                            <Padding padding="16px" />
                                        </>

                                        : <>
                                        </>
                            }


                            <div className="card">
                                {/* <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraph>
                                        Pontos da Atividade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        25 {`\n`}
                                    </TextActivities>
                                </Row> */}
                                <Padding />
                                <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraphCard>
                                        Nível de Complexidade:
                                    </TextActivitiesParagraphCard>
                                    <TextActivitiesCard>
                                        {dif} {`\n`}
                                    </TextActivitiesCard>
                                </Row>
                                <Padding />

                                <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraphCard>
                                        Tempo Estimado da Atividade:
                                    </TextActivitiesParagraphCard>
                                    <TextActivitiesCard>
                                        {propsAplication?.activitiesOne?.time_activities} Minutos {`\n`}
                                    </TextActivitiesCard>
                                </Row>
                                <Padding />

                                <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraphCard>
                                        Tipo de atividade:
                                    </TextActivitiesParagraphCard>
                                    <TextActivitiesCard>
                                        {propsAplication?.activitiesOne?.type_activities === "QUIZ" ? "Formulário" : propsAplication?.activitiesOne?.type_activities === "CODE" ? "Implementação" : ""} {`\n`}
                                    </TextActivitiesCard>
                                </Row>
                                {propsAplication.activitiesOne?.user_activities[0]?.user_avaliation?.total &&
                                    <>
                                        <Padding />
                                        <Row style={{ gap: "4px" }}>
                                            <TextActivitiesParagraphCard>
                                                Nota:
                                            </TextActivitiesParagraphCard>
                                            <TextActivitiesCard>
                                                {propsAplication.activitiesOne?.user_activities[0]?.user_avaliation?.total} {`\n`}
                                            </TextActivitiesCard>
                                        </Row>
                                    </>
                                }
                            </div>

                        </Column>
                    </Row>
                </div>
                <div className="card col-12 md:col-7 lg:col:6">
                    <Row >
                        <Column style={{ width: "100%" }}>
                            <Padding padding="32px">
                                <TextActivities>{propsAplication?.activitiesOne?.name}</TextActivities>
                                <Padding padding="16px" />
                                <TextActivities>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: propsAplication?.activitiesOne?.description! }}
                                    />
                                </TextActivities>
                                <Padding padding="16px" />
                                {propsAplication?.activitiesOne?.form && <>
                                    <Divider />
                                    <Padding padding="8px" />
                                    <TextActivities>
                                        Formulário
                                    </TextActivities>
                                    <Padding padding="16px" />
                                    <TextActivities>
                                        <Formik validationSchema={createResponseSchema} initialValues={propsAplication.initialValueForm} onSubmit={(values) => {  propsAplication.ResponseActivities(values)}}>
                                            {({ values, errors, setFieldValue }) => {
                                                return (
                                                    <Form>
                                                        <FormComponent form={propsAplication?.activitiesOne?.form!} setFieldValue={setFieldValue} values={values} errors={errors} />
                                                        <Padding />
                                                        <Row id="end">
                                                            <Button label="Enviar" disabled={propsAplication?.activitiesOne?.user_activities[0].status === "COMPLETED"} />
                                                        </Row>
                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </TextActivities>
                                </>}
                            </Padding>
                        </Column>
                    </Row>
                </div>
            </Row>
        </Container>
    )

}




export default HomeActivities