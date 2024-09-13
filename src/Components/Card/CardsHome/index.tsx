import { Container } from "./style"
import sound from "../../../assets/image/sound_sampler.svg"
import look from "../../../assets/image/lock.svg";
import look_open from "../../../assets/image/lock_open.svg"
import { Column, Padding, Row } from "../../../Styles/styles"
const CardHome = () => {
    return (
        <Container>
            <Padding padding="8px" />
            <Row id="center">
                <Column>
                    <img src={sound} alt="" />
                    <Padding padding="8px" />
                    <h1 style={{ color: "white", textAlign: "center" }}>Módule</h1>
                    <Padding padding="8px" />
                    <div style={{ background: " #6E97D2", padding: "8px", borderRadius: "25px" }}>
                        {true ? <Row>
                            <img src={look} alt="" /><Padding /> <h4 style={{ color: "white" }}>Bloqueado</h4>
                        </Row> : <Row> <img src={look_open} alt="" /> <Padding /><h4 style={{ color: "white" }}>Desbloqueado</h4></Row>}
                    </div>
                </Column>
            </Row>
            <Padding padding="8px" />
        </Container>
    )
}

export default CardHome