import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import sound from "../../assets/image/sound_sampler.svg";
import DropFileInput from "../../Components/DragAndDropFile";
import Icon from "../../Components/Icon";
import { getDifficulte } from "../../Controller/controllerGlobal";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import HomeActivitiesProvider, { HomeActivitiesContext } from "./context/context";
import { ButtonStart, TextActivities, TextActivitiesParagraph } from "./styles";


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
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px"
        }}>
            <div className="grid">
                <div className="col-12 md:col-5 md:px-8">
                    <Row id="start">
                        <Column>

                            {propsAplication?.activitiesOne?.user_activities.length === 0 ? <ButtonStart onClick={() => {
                                propsAplication?.JoinTheActivitiesUser({ idActivities: propsAplication.activitiesOne?.id!, idClassroom: parseInt(idClassroom!) })
                            }}><Row id="space-around"><div></div><Column id="center">Iniciar atividade</Column> <img style={{ width: 48 }} src={sound} alt="" /></Row></ButtonStart>
                                : propsAplication?.activitiesOne?.user_activities[0].status === "COMPLETED" ? <ButtonStart type="SUCCESS"><Row id="space-around"><div></div><Column id="center">Atividade enviada</Column> <Icon icon="pi pi-check" size="32px" /></Row></ButtonStart> : <>
                                    <h1>1. Anexe sua atividade clicando no botão a seguir:</h1>
                                    <Padding padding="8px" />
                                    <DropFileInput onFileChange={propsAplication?.onChangeFile} />
                                    <Padding padding="8px" />
                                    <Button label="Enviar Atividade" onClick={() => propsAplication?.FinishActivitiesUser(propsAplication?.activitiesOne?.user_activities[0].id!)} />
                                </>
                            }
                            <Padding padding="16px" />


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
                                    <TextActivitiesParagraph>
                                        Nível de Complexidade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        {dif} {`\n`}
                                    </TextActivities>
                                </Row>
                                <Padding />

                                <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraph>
                                        Tempo Estimado da Atividade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        {propsAplication?.activitiesOne?.time_activities} Minutos {`\n`}
                                    </TextActivities>
                                </Row>
                                {propsAplication.activitiesOne?.user_activities[0]?.user_avaliation?.total && 
                                <>
                                 <Padding />
                                 <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraph>
                                        Nota:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        {propsAplication.activitiesOne?.user_activities[0]?.user_avaliation?.total} {`\n`}
                                    </TextActivities>
                                </Row>
                                </>
                                }
                            </div>

                        </Column>
                    </Row>
                </div>


                <div className="card col-12 md:col-7">
                    <Padding padding="32px">
                        <TextActivities>{propsAplication?.activitiesOne?.name}</TextActivities>
                        <Padding padding="16px" />
                        <TextActivities>
                            <div
                                dangerouslySetInnerHTML={{ __html: propsAplication?.activitiesOne?.description! }}
                            />
                        </TextActivities>
                        <Padding padding="16px" />
                    </Padding>
                </div>

            </div>
        </Container>
    )

}




export default HomeActivities