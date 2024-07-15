import { useNavigate, } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Container, Text } from "./style";

interface Propsitem {
    icon: string,
    path: string,
    text: string,
    active: boolean,
    funcActiv: any
}


const Item = ({ icon, path, text, active, funcActiv }: Propsitem) => {
    const history = useNavigate();

    const Event = () => {
        history(`${path}`);
        funcActiv()
    }

    return (
        <Container onClick={Event} active={active}>
            <Row style={{ height: "35px" }}>
                <Padding />
                <Text active={active}>
                    <Column id="center">
                            <img src={icon} alt="" style={{ height: 24 }} />                    </Column>
                    <Padding />
                    <Column id="center">
                        {text}
                    </Column>
                </Text>
            </Row>
        </Container>
    )
}

export default Item