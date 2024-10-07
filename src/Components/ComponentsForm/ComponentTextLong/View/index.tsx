import { ControllerViewForm } from "../../../../Controller/controllerViewForm";
import { Padding } from "../../../../Styles/styles";
import { PropsTextFieldCardView } from "../../../../Types/types";
import TextAreaComponent from "../../../TextArea";


const RenderViewTextLong = ({
  item,
  form,
  setFormResp,
  disabled
}: PropsTextFieldCardView) => {
  const props = ControllerViewForm();
  return (
    <Padding padding="16px">
      <TextAreaComponent
        placeholder="Resposta longa"
        value={item?.value}
        disabled={disabled}
        onChange={(e) =>
          props.RespQuestion(e.target.value, item.id, form, setFormResp)
        }
      />
    </Padding>
  );
};

export default RenderViewTextLong;
