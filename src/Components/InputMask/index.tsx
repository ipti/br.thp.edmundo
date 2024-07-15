import { PropsInputMask } from "../../Types/types";

import { InputMask } from 'primereact/inputmask';


const MaskInput = ({
    value,
    onChange,
    placeholder,
    disabled,
    onBlur,
    name,
    mask
}: PropsInputMask) => {
    return (
        <div>
            <InputMask
                style={{ width: "100%" }}
                onBlur={onBlur}
                disabled={disabled}
                value={value}
                onChange={onChange}
                mask={mask}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MaskInput;
