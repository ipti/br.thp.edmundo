import { Password } from "primereact/password";
import { PropsInputText } from "../../Types/types";


const PasswordInput = ({
    value,
    onChange,
    placeholder,
    disabled,
    onBlur,
    name,
}: PropsInputText) => {
    return (
        <div className="w-full">
            <Password
                className="w-full"
                pt={{
                    input: { style: {width: "100%"} }
                }}
            
                style={{ width: "100%" }}
                onBlur={onBlur}
                disabled={disabled}
                value={value}
                onChange={onChange}
                toggleMask
                name={name}
                feedback={false}
                placeholder={placeholder}
            />
        </div>
    );
};

export default PasswordInput;
