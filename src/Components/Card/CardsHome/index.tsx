import { Container } from "./style"
import sound from "../../../assets/image/sound_sampler.svg"
import look from "../../../assets/image/lock.svg";
import look_open from "../../../assets/image/lock_open.svg"
import { Column, Padding, Row } from "../../../Styles/styles"
import color from "../../../Styles/colors";


interface CardHomeType {
    name: string,
    status: boolean, index: number
}

const CardHome = ({ name, status, index }: CardHomeType) => {

    const colors = [color.colorPrimary, color.colorSecondary, color.colorCardOrange]
    const colorsContainer = ["#6E97D2", " #EC8D7D", ' #FFBE4A']
    const opacity = 0.5;
    const colorBack = colorsContainer[index % colorsContainer.length];
    const colorWithOpacity = colorBack.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`)
    return (
        <Container style={{
            backgroundColor: colors[index % colors.length], // Aplica as cores em sequência
        }}>
            <Padding padding="8px" />
            <Row id="center">
                <Column>
                    <Row id="center">
                        <img style={{ width: 156 }} src={sound} alt="" />
                    </Row>
                    <Padding padding="8px" />
                    <h1 style={{ color: "white", textAlign: "center" }}>{name}</h1>
                    <Padding padding="8px" />
                    <Row id="center">

                        <div style={{ background: colorWithOpacity, padding: "4px 16px", borderRadius: "25px", maxWidth: 180 }}>
                            {!status ? <Row style={{gap: 4}}>
                                <img src={look} alt="" style={{ width: 32 }} /> <Column id="center"><h4 style={{ color: "white" }}>Bloqueado</h4></Column>
                            </Row> : <Row style={{gap: 4}}> <img src={look_open} alt="" style={{ width: 32 }} /> <Column id="center"><h4 style={{ color: "white" }}>Desbloqueado</h4></Column></Row>}
                        </div>
                    </Row>
                </Column>
            </Row>
            <Padding padding="8px" />
        </Container>
    )
}

export default CardHome