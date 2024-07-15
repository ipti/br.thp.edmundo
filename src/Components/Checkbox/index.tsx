
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface PropsCheckboxComponent {
    value?: any;
    onChange?(event: CheckboxChangeEvent): void,
    checked?: boolean,
    disabled?: boolean
}

export default function CheckboxComponent({ value, onChange, checked, disabled  }: PropsCheckboxComponent) {

    return (
        <Checkbox name="category" disabled={disabled} value={value} onChange={onChange} checked={checked!} />
    )
}
