import { Container } from "./style"
import sound from "../../../assets/image/sound_sampler.svg"
import look from "../../../assets/image/lock.svg";
import look_open from "../../../assets/image/lock_open.svg"
import { Column, Padding, Row } from "../../../Styles/styles"


interface CardHomeType {
    name: string,
    status: boolean
}

const CardHome = ({ name, status }: CardHomeType) => {
    return (
        <Container>
            <Padding padding="8px" />
            <Row id="center">
                <Column>
                <Row id="center">
                    <img style={{width: 156}} src={sound} alt="" />
                </Row>
                    <Padding padding="8px" />
                    <h1 style={{ color: "white", textAlign: "center" }}>{name}</h1>
                    <Padding padding="8px" />
                    <Row id="center">

                        <div style={{ background: " #6E97D2", padding: "8px", borderRadius: "25px", maxWidth: 160 }}>
                            {!status ? <Row>
                                <img src={look} alt="" /><Padding /> <h4 style={{ color: "white" }}>Bloqueado</h4>
                            </Row> : <Row> <img src={look_open} alt="" /> <Padding /><h4 style={{ color: "white" }}>Desbloqueado</h4></Row>}
                        </div>
                    </Row>
                </Column>
            </Row>
            <Padding padding="8px" />
        </Container>
    )
}

export default CardHome