import { ControllerCreateForm } from "../../../../Controller/controllerCreateForm";
import { Padding } from "../../../../Styles/styles";
import { PropsComponentForm, PropsComponets } from "../../../../Types/types";
import ButtonComponent from "../../../Button";
import BoxSelectCard from "./BoxSelectCard";

const props = ControllerCreateForm()

const Checkbox = ({ form, index, item, setform }: PropsComponets) =>
(
    <div>
        <Padding padding="16px">

            <BoxSelectCard
                index={index!}
                form={form}
                setform={setform}
                options={item?.options}
            />
        </Padding>
        <Padding padding="16px">
            <ButtonComponent
                onClick={() => {
                    props.AddBoxSelect(index!, setform, form);
                }}
                label="Adicionar"
            />
        </Padding>
    </div>
)


const RenderFormCheckbox: PropsComponentForm = {
    type: 'SELECTION_BOX',
    name: "Caixa de Seleção",
    component: Checkbox
};


export default RenderFormCheckbox