import { Column, Container, Padding, Row } from "../../Styles/styles";
import { ButtonStart, TextActivities, TextActivitiesParagraph } from "./styles";
import sound from "../../assets/image/sound_sampler.svg"




const HomeActivities = () => {
    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px"
        }}>
            <div className="grid">
                <div className="card col-12 md:col-6">
                    <Padding padding="32px">
                        <h1>Olá, Mundo!</h1>
                        <Padding />
                        <p>
                            #Java
                        </p>
                        <Padding padding="16px" />
                        <TextActivities>
                            Objetivo:
                        </TextActivities>
                        <Padding padding="16px" />
                        <TextActivitiesParagraph>

                            Nesta atividade, você vai dar os primeiros passos no mundo da programação. O objetivo é escrever, executar e ver seu primeiro programa funcionando. E a melhor maneira de começar é fazendo o computador dizer "Olá, Mundo!". Isso pode parecer simples, mas é uma grande conquista para quem está começando.
                        </TextActivitiesParagraph>
                        {`\n`}
                        <Padding padding="16px" />
                        <TextActivities>
                            O que você vai fazer:
                        </TextActivities>
                        <Padding padding="16px" />
                        <TextActivitiesParagraph>
                            Seu desafio é escrever um pequeno programa que mostre a mensagem "Olá, Mundo!" na tela. Essa mensagem é um clássico entre programadores e a primeira coisa que a maioria deles cria quando está aprendendo uma nova linguagem de programação.
                            {`\n`}
                        </TextActivitiesParagraph>
                        <Padding padding="16px" />
                        <TextActivitiesParagraph>

                            Se tudo deu certo, você verá "Olá, Mundo!" aparecer na tela. Parabéns! Você acabou de completar sua primeira atividade de programação.
                        </TextActivitiesParagraph>
                    </Padding>
                </div>
                <div className="col-12 md:col-6">
                    <Row id="center">
                        <Column>
                            <ButtonStart><Row id="space-between"><Column id="center">Iniciar atividade</Column> <img style={{ width: 48 }} src={sound} alt="" /></Row></ButtonStart>
                            <Padding padding="16px" />
                            <div className="card">
                                <Row style={{gap: "4px"}}>
                                    <TextActivitiesParagraph>
                                        Pontos da Atividade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                        25 {`\n`}
                                    </TextActivities>
                                </Row>
                                <Padding />
                                <Row style={{gap: "4px"}}>
                                    <TextActivitiesParagraph>
                                    Nível de Complexidade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                    Fácil {`\n`}
                                    </TextActivities>
                                </Row>
                                <Padding />

                                <Row style={{gap: "4px"}}>
                                    <TextActivitiesParagraph>
                                    Tempo Estimado da Atividade:
                                    </TextActivitiesParagraph>
                                    <TextActivities>
                                    20 Minutos {`\n`}
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