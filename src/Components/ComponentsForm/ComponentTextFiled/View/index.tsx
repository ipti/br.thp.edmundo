import { ControllerViewForm } from "../../../../Controller/controllerViewForm"
import { Padding } from "../../../../Styles/styles"
import { PropsTextFieldCardView } from "../../../../Types/types"
import TextInput from "../../../TextInput"

const RenderViewTextField = ({item, form, setFormResp, disabled}: PropsTextFieldCardView) => {

    const props = ControllerViewForm()
    return (
        <Padding padding="16px">
            <TextInput placeholder="Resposta curta" disabled={disabled} value={item?.value} onChange={(e) => props.RespQuestion(e.target.value, item.id, form, setFormResp)} />
        </Padding>
    )
}

export default RenderViewTextField