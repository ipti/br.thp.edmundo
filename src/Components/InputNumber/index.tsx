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
    showButtons,
    maxFractionDigits, 
    minFractionDigits,
    min
}: PropsInputNumber) => {
    return (
        <div>
            <InputNumber
                style={{ width: "100%" }}
                onBlur={onBlur}
                min={min}
                disabled={disabled}
                max={max}
                minFractionDigits={minFractionDigits}
                maxFractionDigits={maxFractionDigits}
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
