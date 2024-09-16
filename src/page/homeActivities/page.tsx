import { Button } from "primereact/button";
import { Column, Container, Row } from "../../Styles/styles";




const HomeActivities = () => {
    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "64px"
        }}>
            <div className="grid">

                <div className="card col-12 md:col-6">
                    Objetivo:
                    Nesta atividade, você vai dar os primeiros passos no mundo da programação. O objetivo é escrever, executar e ver seu primeiro programa funcionando. E a melhor maneira de começar é fazendo o computador dizer "Olá, Mundo!". Isso pode parecer simples, mas é uma grande conquista para quem está começando.
                    {`\n`}

                    O que você vai fazer:
                    Seu desafio é escrever um pequeno programa que mostre a mensagem "Olá, Mundo!" na tela. Essa mensagem é um clássico entre programadores e a primeira coisa que a maioria deles cria quando está aprendendo uma nova linguagem de programação.
                    {`\n`}

                    Se tudo deu certo, você verá "Olá, Mundo!" aparecer na tela. Parabéns! Você acabou de completar sua primeira atividade de programação.
                </div>
                <div className="col-12 md:col-6">
                    <Row id="end">
                        <Column>
                            <Button label="Iniciar atividade" />
                            <div className="card">
                                Pontos da Atividade: 25 {`\n`}
                                Nível de Complexidade: Fácil {`\n`}
                                Tempo Estimado da Atividade: 20 Minutos {`\n`}
                            </div>
                        </Column>
                    </Row>
                </div>
            </div>
        </Container>
    )

}




export default HomeActivities