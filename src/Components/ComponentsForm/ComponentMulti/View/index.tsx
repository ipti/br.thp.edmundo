
import { RadioButton } from "primereact/radiobutton";
import { ControllerViewForm } from "../../../../Controller/controllerViewForm";
import { PropsRadioButtonCardView } from "../../../../Types/types";
import { Column } from "../../../../Styles/styles";


export default function RenderRadioButtonCard({options, item, form, setFormResp, disabled}: PropsRadioButtonCardView) {
    
    const props = ControllerViewForm()

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {options?.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-start">
                            <RadioButton disabled={disabled} inputId={category.key} name="category" value={category} onChange={(e) => props.RespQuestion(e.target.value.value, item.id, form, setFormResp)} checked={item?.value === category.value} />
                            <Column id="center">
                            <label htmlFor={category.key} className="ml-2">{category.label}</label>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        