import { ControllerCreateForm } from "../../../../Controller/controllerCreateForm";
import { Padding } from "../../../../Styles/styles";
import { PropsComponentForm, PropsComponets } from "../../../../Types/types";
import ButtonComponent from "../../../Button";
import RadioButtonCard from "./RadioButtonCard";

const props = ControllerCreateForm()

const Mult = ({ form, index, item, setform }: PropsComponets) =>
(
    <div>
        <Padding padding="16px">

            <RadioButtonCard
                index={index!}
                form={form}
                setform={setform}
                options={item.options}
            />
        </Padding>
        <Padding padding="16px">
            <ButtonComponent
                icon="pi pi-plus"
                onClick={() => {
                    props.AddRadiosButtonandBoxSelect(index!, setform, form);
                }}
                label="Adicionar"
            />
        </Padding>
    </div>
)


const RenderForm: PropsComponentForm = {
    type: "MULTIPLE_CHOICE",
    name: "Multipla Escolha",
    component: Mult
};


export default RenderForm