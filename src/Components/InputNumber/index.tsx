import { PropsInputNumber } from "../../Types/types";


import { InputNumber } from 'primereact/inputnumber';

const InputNumberComponent = ({
    value,
    onChange,
    placeholder,
    disabled,
    onBlur,
    name,
    suffix,
    max,
    showButtons
}: PropsInputNumber) => {
    return (
        <div>
            <InputNumber
                style={{ width: "100%" }}
                onBlur={onBlur}
                
                disabled={disabled}
                max={max}
                minFractionDigits={2}
                maxFractionDigits={5}
                showButtons={showButtons}
                value={value}
                name={name}
                suffix={suffix}
                onValueChange={onChange}
                placeholder={placeholder}

            />
        </div>
    );
};

export default InputNumberComponent;
