import { useContext } from "react";
import sound from "../../assets/image/sound_sampler.svg";
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

    const dif = getDifficulte(propsAplication?.activitiesOne?.difficult!)


    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px"
        }}>
            <div className="grid">
                <div className="card col-12 md:col-6">
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
                <div className="col-12 md:col-6">
                    <Row id="center">
                        <Column>
                            <ButtonStart><Row id="space-around"><div></div><Column id="center">Iniciar atividade</Column> <img style={{ width: 48 }} src={sound} alt="" /></Row></ButtonStart>
                            <Padding padding="16px" />
                            <div className="card">
                                <Row style={{ gap: "4px" }}>
                                    <TextActivitiesParagraph>
                                        Pontos da Atividade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        25 {`\n`}
                                    </TextActivities>
                                </Row>
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
                            </div>
                        </Column>
                    </Row>
                </div>
            </div>
        </Container>
    )

}




export default HomeActivities