import { Padding } from "../../../../Styles/styles";
import { PropsComponentForm } from "../../../../Types/types";
import TextInput from "../../../TextInput";



const TextField = () =>
(
    <div>
        <Padding padding="16px">
            <TextInput placeholder="Resposta curta" />
        </Padding>
    </div>
)

const RenderFormTextField: PropsComponentForm = {
    type: 'textfield',
    name: "Resposta curta",
    component: TextField
};


export default RenderFormTextField