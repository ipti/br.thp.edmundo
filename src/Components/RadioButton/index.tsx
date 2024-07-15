import { RadioButton } from "primereact/radiobutton";
import { PropsRadioButton } from "../../Types/types";

export default function RadioButtonComponent({
  value,
  onChange,
  name,
  checked,
  label
}: PropsRadioButton) {
  return (
    <div className="flex align-items-center">
      <RadioButton
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="ml-2">
        {label}
      </label>
    </div>
  );
}
