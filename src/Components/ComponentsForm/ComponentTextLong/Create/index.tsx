import { Padding } from "../../../../Styles/styles";
import { PropsComponentForm } from "../../../../Types/types";
import TextAreaComponent from "../../../TextArea";




const TextLong = () =>
(
    <div>
        <Padding padding="16px">
            <TextAreaComponent placeholder="Resposta longa" />
        </Padding>
    </div>
)

const RenderFormTextLong: PropsComponentForm = {
    type: 'textlong',
    name: "Resposta Longa",
    component: TextLong
};


export default RenderFormTextLong