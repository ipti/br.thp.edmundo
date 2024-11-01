import { useNavigate, } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Container, Text } from "./style";
import Icon from "../../Icon";

interface Propsitem {
    icon: string,
    isIcon?: boolean,
    path: string,
    text: string,
    active: boolean,
    funcActiv: any
}


const Item = ({ icon, path, text, active, funcActiv, isIcon }: Propsitem) => {
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
                        {
                            isIcon ? <Row><Padding padding="2px" /><Icon icon={icon} size={"32"} fontWeight="bold" color={active ? "#2E62AC" : "#707A8D"} /></Row>
                                : <img src={icon} alt="" style={{ height: 24, width: 24, borderRadius: 8 }} />

                        }
                    </Column>
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